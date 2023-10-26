import mongoose from 'mongoose';
import User from '../models/User.js';

export const getAdmins = async (req, res) => {
    try {

    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}