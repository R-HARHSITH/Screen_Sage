// import React, { useState } from 'react';

// const ProfilePage = () => {
// 	const [name, setName] = useState('');
// 	const [profilePhoto, setProfilePhoto] = useState(null);

// 	const handlePhotoChange = (event) => {
// 		if (event.target.files.length) {
// 			setProfilePhoto(URL.createObjectURL(event.target.files[0]));
// 		}
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		// Logic to save the updated name and profile photo
// 		console.log('Name:', name);
// 		console.log('Profile Photo:', profilePhoto);
// 	};

// 	return (
// 		<div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
// 			<h1 className='text-4xl mb-4'>Edit Profile</h1>
// 			<form onSubmit={handleSubmit} className='flex flex-col items-center'>
// 				<input
// 					type='text'
// 					value={name}
// 					onChange={(e) => setName(e.target.value)}
// 					placeholder='Enter your name'
// 					className='mb-4 p-2 rounded bg-gray-800 border border-gray-700'
// 				/>
// 				<input
// 					type='file'
// 					onChange={handlePhotoChange}
// 					className='mb-4 p-2'
// 				/>
// 				{profilePhoto && <img src={profilePhoto} alt='Profile Preview' className='mb-4 rounded-full h-24 w-24 object-cover' />}
// 				<button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
// 					Save Changes
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// export default ProfilePage;

// new code 2
import React, { useState } from 'react';
import { useAuthStore } from '../store/authUser';

const ProfilePage = () => {
	const { user, updateUserProfile } = useAuthStore();
	const [name, setName] = useState(user?.name || '');
	const [profilePhoto, setProfilePhoto] = useState(user?.profilePhoto || null);

	const handlePhotoChange = (event) => {
		if (event.target.files.length) {
			const newProfilePhoto = URL.createObjectURL(event.target.files[0]);
			setProfilePhoto(newProfilePhoto);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		updateUserProfile(name, profilePhoto);
		console.log('Profile Updated:', { name, profilePhoto });
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
			<h1 className='text-4xl mb-4'>Edit Profile</h1>
			<form onSubmit={handleSubmit} className='flex flex-col items-center'>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Enter your name'
					className='mb-4 p-2 rounded bg-gray-800 border border-gray-700'
				/>
				<input
					type='file'
					onChange={handlePhotoChange}
					className='mb-4 p-2'
				/>
				{profilePhoto && <img src={profilePhoto} alt='Profile Preview' className='mb-4 rounded-full h-24 w-24 object-cover' />}
				<button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default ProfilePage;
