import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { exec } from "child_process";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute} from "./Middleware/protectRoute.js";
import searchRoutes from './routes/searchroute.js'
import watchRoutes from './routes/watchRoutes.js'

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "/backend/uploads");
console.log("Uploading directory is ",uploadDir)
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5174"], credentials: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
app.use(express.urlencoded({ extended: true }));
app.use("/backend/uploads", express.static(uploadDir));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/tv", tvRoutes);
app.use("/api/v1/search",protectRoute,searchRoutes); //need to keep protect route
app.use("/api/v1/watchlist",protectRoute,watchRoutes); ///same here

const videos = {};

app.post("/backend/uploads", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const lessonId = uuidv4();
  const videoPath = req.file.path;
  const outputPath = path.join(uploadDir, "courses", lessonId);
  const hlsPath = path.join(outputPath, "index.m3u8");
  console.log("HLS PATH IS: ",hlsPath)

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;

  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`FFmpeg error: ${error.message}`);
      return res.status(500).json({ message: "Error processing video" });
    }

    const videoUrl = `http://localhost:${PORT}/backend/uploads/courses/${lessonId}/index.m3u8`;

    videos[lessonId] = {
      videoUrl,
      lessonId,
      originalFileName: req.file.originalname,
    };

    res.json({
      message: "Video converted to HLS format",
      videoUrl,
      lessonId,
      videos,
    });
  });
});

app.get("/watch/:lessonId", (req, res) => {
  const lessonId = req.params.lessonId;
  const videoUrl = videos[lessonId]?.videoUrl;

  if (!videoUrl) {
    return res.status(404).json({ message: "Video not found" });
  }

  res.json({
    message: "Redirecting to video",
    videoUrl,
  });
});

if (ENV_VARS.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
  connectDB();
});
