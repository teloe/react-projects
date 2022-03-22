import express from 'express';
const router = express.Router();
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
} from '../controllers/userController.js'
import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser);
router.route('/profile')
    .get(protect, getUserProfile)
    .get(protect, updateUserProfile)
    .put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser);

export default router 
