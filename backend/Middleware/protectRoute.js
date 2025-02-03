// import jwt from "jsonwebtoken";
// import { User } from "../models/user.model.js";
// import { ENV_VARS } from "../config/envVars.js";

// export const protectRoute = async (req, res, next) => {
// 	try {
// 		const token = req.cookies.jwt;
// 		console.log(token)
// 		if (!token) {
// 			console.log("No token given")
// 			return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided" });
// 		}

// 		const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

// 		if (!decoded) {
// 			return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
// 		}

// 		const user = await User.findById(decoded.userId).select("-password");

// 		if (!user) {
// 			return res.status(404).json({ success: false, message: "User not found" });
// 		}

// 		req.user = user;

// 		next();
// 	} catch (error) {
// 		console.log("Error in protectRoute middleware: ", error.message);
// 		res.status(500).json({ success: false, message: "Internal Server Error" });
// 	}
// };


import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENV_VARS } from "../config/envVars.js";



export const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies['jwt-screensage']; // Ensure cookie-parser middleware is used
		console.log("Token received:", token);

		if (!token) {
			// console.log("No token given");
			return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided" });
		}

		let decoded;
		try {
			decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
		} catch (err) {
			console.error("JWT verification failed:", err);
			return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
		}

		if (!decoded.userId) {
			return res.status(401).json({ success: false, message: "Unauthorized - No User ID in Token" });
		}
		console.log(decoded.userId);
		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			console.log("no user found");
			return res.status(404).json({ success: false, message: "User not found" });
		}

		req.user = user;
		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};
