// import { User } from "../models/user.model.js";
// import bcryptjs from "bcryptjs";
// import { generateTokenAndSetCookie } from "../utils/generateToken.js";


// // After making db we are implementing all these authentication function
// export async function signup(req, res) {
//     try {
//         // Generate a new user
//         const { email, password, username } = req.body;
//         console.log(req.body); // Add this to inspect incoming request data

//         // Check if all fields are provided
//         if (!email || !password || !username) {
//             return res.status(400).json({ success: false, message: "All fields are required" })
//         }

//         // Validate email format
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             return res.status(400).json({ success: false, message: "Invalid email" })
//         }
//         if (!emailRegex.test(email)) {
//             console.log('Invalid email format:', email); // Debugging line
//             return res.status(400).json({ success: false, message: "Invalid email" });
//         }
        
//         // Check password length
//         if (password.length < 6) {
//             return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
//         }

//         // Check if email already exists
//         const existingUserByEmail = await User.findOne({ email: email })
//         if (existingUserByEmail) {
//             return res.status(400).json({ success: false, message: "Email already exists" })
//         }

//         // Check if username already exists
//         const existingUserByUsername = await User.findOne({ username: username });
//         if (existingUserByUsername) {
//             return res.status(400).json({ success: false, message: "Username already exists" });
//         }

//         // Encrypt the password
//         const salt = await bcryptjs.genSalt(10);
//         const hashedPassword = await bcryptjs.hash(password, salt)

//         // Select a random profile picture
//         const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"]
//         const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)]

//         // Create a new user object
//         const newUser = new User(
//             {
//                 email: email, // User's email
//                 password: hashedPassword, // Encrypted password
//                 username: username, // User's username
//                 image: image // User's profile picture
//             }
//         )

//         // // generating tokon for new user
//         // generateTokenAndSetCookie(newUser._id, res);


//         // // Save the new user to the database
//         // await newUser.save();
// generateTokenAndSetCookie(newUser._id, res);
// await newUser.save();
//         // Send response to the client
//         res.status(201).json({
//             success: true, user: {
//                 ...newUser._doc, //sending everything but replacing password.
//                 password: "",
//             },
//         })


//     } catch (error) {
//         console.log("Error in signup controller", error.message)
//         res.status(500).json({ success: false, message: "Internal Server Error" })
//     }
// }


// export async function login(req, res) {
//     try {
//         // Extract email and password from request body
//         const { email, password } = req.body;
        
        
//         // Check if email and password are provided
//         if (!email || !password) {
//             return res.status(400).json({ success: false, message: "All fields are required" })
//         }

//         // Find user by email
//         const normalizedEmail = email.toLowerCase();

//         const user = await User.findOne({ email: normalizedEmail });
        
//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({ success: false, message: "Invalid Credentials" });
//         }

//         // Check if the password is correct
//         const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        
//         // Check if password is correct
//         if (!isPasswordCorrect) {
//             return res.status(401).json({ success: false, message: "Invalid Credentials" });
//         }

//         // Generate token and set cookie
//         generateTokenAndSetCookie(user._id, res);

//         // Send response to the client
//         res.status(200).json({ success: true, user: 
//             { 
//                 ...user._doc, 
//                 password: "",
//             } });

//     } catch (error) {
//         // Handle error
//         console.log("Error in login controller", error.message);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// }

// export async function logout(req, res) {
//     try {
//         // Just clear the cookies for logging out
//         // res.clearCookie("jwt-screensage");
//         // res.status(200).json({ success: true, message: "Logged out Successfully" });
//         res.cookie("jwt","",{maxAge:0,
//             httpOnly:true,
//             sameSite:"strict",
//         });
//        res.status(200).json({message:"Logged out successfully"});

//     } catch (error) {
//         console.log("Error in logout controller", error.message);
//         res.status(500).json({ success: false, message: "Inetrnal server error." })
//     }
// }

// export async function authCheck(req, res) {
// 	try {
// 		console.log("req.user:", req.user);
// 		res.status(200).json({ success: true, user: req.user });
// 	} catch (error) {
// 		console.log("Error in authCheck controller", error.message);
// 		res.status(500).json({ success: false, message: "Internal server error" });
// 	}
// }
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import  generateTokenAndSetCookie  from "../utils/generateToken.js";

export async function signup(req, res) {
	try {
		const { email, password, username } = req.body;
		console.log("Signup request body:", req.body);

		// Check if all fields are provided
		if (!email || !password || !username) {
			return res.status(400).json({ success: false, message: "All fields are required" });
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			console.log("Invalid email format:", email);
			return res.status(400).json({ success: false, message: "Invalid email" });
		}

		// Check password length
		if (password.length < 6) {
			return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
		}

		// Check if email or username already exists
		const existingUser = await User.findOne({ $or: [{ email }, { username }] });
		if (existingUser) {
			const errorMessage = existingUser.email === email ? "Email already exists" : "Username already exists";
			return res.status(400).json({ success: false, message: errorMessage });
		}

		// Encrypt the password
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		// Select a random profile picture
		const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
		const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

		// Create a new user object
		const newUser = new User({
			email,
			password: hashedPassword,
			username,
			image,
		});

		// Save the new user to the database
		await newUser.save();

		// Generate token and set cookie
		const token=generateTokenAndSetCookie(newUser._id, res);
		
		// Send response to the client
		res.status(201).json({
			success: true,
			user: {
				...newUser._doc,
				password: "", // Do not send the password back
			},
			token:{ token },
		});
	} catch (error) {
		console.log("Error in signup controller:", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function login(req, res) {
	try {
		const { email, password } = req.body;

		// Check if email and password are provided
		if (!email || !password) {
			return res.status(400).json({ success: false, message: "All fields are required" });
		}

		// Find user by email
		const normalizedEmail = email.toLowerCase();
		const user = await User.findOne({ email: normalizedEmail });

		if (!user) {
			return res.status(404).json({ success: false, message: "Invalid Credentials" });
		}

		// Verify password
		const isPasswordCorrect = await bcryptjs.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res.status(401).json({ success: false, message: "Invalid Credentials" });
		}

		// Generate token and set cookie
		const token=generateTokenAndSetCookie(user._id, res);
		console.log("token is generated ",token);
		// res.json({ token });
		// Send response to the client
		res.status(200).json({
			success: true,
			user: {
				...user._doc,
				password: "",
			},
			token:{token},
		});
		// console.log(user)
	} catch (error) {
		console.log("Error in login controller:", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function logout(req, res) {
	try {
		// Clear the token cookie
		res.clearCookie("jwt-screensage");
		// res.cookie("jwt", "", {
		// 	maxAge: 0,
		// 	httpOnly: true,
		// 	sameSite: "strict",
		// });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller:", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function authCheck(req, res) {
	try {
		console.log(req.user);
		if (!req.user) {
			return res.status(401).json({ success: false, message: "Unauthorized" });
		}
		console.log("Authenticated user:", req.user);
		res.status(200).json({ success: true, user: req.user });
	} catch (error) {
		console.log("Error in authCheck controller:", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}
