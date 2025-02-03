// import axios from "axios";
// import toast from "react-hot-toast";
// import { create } from "zustand";

// export const useAuthStore = create((set) => ({
// 	user: null,
// 	user_id:null,
// 	isSigningUp: false,
// 	isCheckingAuth: true,
// 	isLoggingOut: false,
// 	isLoggingIn: false,
// 	signup: async (credentials) => {
// 		set({user:null,isSigningUp: true });
// 		try {
// 			const response = await axios.post("/api/v1/auth/signup", credentials);
// 			set({ user: response.data.user, isSigningUp: false });
// 			// const token=response.data.token;
// 			console.log(response);
// 			localStorage.setItem('jwt-screensage', token);
// 			console.log("Signup response:", response);
// 			toast.success("Account created successfully");
// 			user_id=response.data.user._id
// 		} catch (error) {
// 			toast.error("Signup failed");
// 			set({ isSigningUp: false, user: null });
// 		}
// 	},
// 	login: async (credentials) => {
// 		set({ isLoggingIn: true });
// 		try {
// 			const response = await axios.post("/api/v1/auth/login", credentials);
// 			console.log(response.data.user);
// 			set({ user: response.data.user, isLoggingIn: false });
// 			const token=response.data.token;
// 			console.log(response);
// 			localStorage.setItem('jwt-screensage', token);
// 			toast.success("Login successfully");
// 			user_id=response.data.user._id;
// 			console.log("This is my user id ",user_id)
// 		} catch (error) {
// 			set({ isLoggingIn: false, user: null });
// 			toast.error(error.response.data.message || "Login failed");
// 		}
// 	},
// 	logout: async () => {
// 		set({ isLoggingOut: true });
// 		try {
// 			await axios.post("/api/v1/auth/logout");
// 			set({ user: null, isLoggingOut: false });
// 			toast.success("Logged out successfully");
// 		} catch (error) {
// 			set({ isLoggingOut: false });
// 			toast.error(error.response.data.message || "Logout failed");
// 		}
// 	},
// 	authCheck: async () => {
// 		set({ isCheckingAuth: true });
// 		try {
// 			const response = await axios.get("/api/v1/auth/authCheck");

// 			set({ user: response.data.user, isCheckingAuth: false });
// 		} catch (error) {
// 			set({ isCheckingAuth: false, user: null });
// 			// toast.error(error.response.data.message || "An error occurred");
// 		}
// 	},
// }));


// new code 2
// changed little bit of code for retrieving user id.
import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    user_id: null, // Define user_id in the store
    isSigningUp: false,
    isCheckingAuth: true,
    isLoggingOut: false,
    isLoggingIn: false,
    signup: async (credentials) => {
        set({ user: null, isSigningUp: true });
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials);
            const { user } = response.data;
            set({ user, user_id: user._id, isSigningUp: false }); // Update user_id in store
            const token = response.data.token;
            localStorage.setItem("jwt-screensage", token);
            toast.success("Account created successfully");
        } catch (error) {
            toast.error("Signup failed");
            set({ isSigningUp: false, user: null });
        }
    },
    login: async (credentials) => {
        set({ isLoggingIn: true });
        try {
            const response = await axios.post("/api/v1/auth/login", credentials);
            const { user } = response.data;
            set({ user, user_id: user._id, isLoggingIn: false }); // Update user_id in store
            const token = response.data.token;
            localStorage.setItem("jwt-screensage", token);
            toast.success("Login successfully");
        } catch (error) {
            set({ isLoggingIn: false, user: null });
            toast.error(error.response.data.message || "Login failed");
        }
    },
    logout: async () => {
        set({ isLoggingOut: true });
        try {
            await axios.post("/api/v1/auth/logout");
            set({ user: null, user_id: null, isLoggingOut: false }); // Clear user_id on logout
            toast.success("Logged out successfully");
        } catch (error) {
            set({ isLoggingOut: false });
            toast.error(error.response.data.message || "Logout failed");
        }
    },
    authCheck: async () => {
        set({ isCheckingAuth: true });
        try {
            const response = await axios.get("/api/v1/auth/authCheck");
            const { user } = response.data;
            set({ user, user_id: user._id, isCheckingAuth: false }); // Update user_id in store
        } catch (error) {
            set({ isCheckingAuth: false, user: null, user_id: null });
        }
    },
}));
