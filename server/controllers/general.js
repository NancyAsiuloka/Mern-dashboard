import User from '../models/User.js';
import OverallStat from '../models/OverallStat.js';
import Transaction from '../models/Transaction.js';

export const getUser = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}
export const getDashboardStats = async (req, res) => {
    try{
        // hardcoded values
        const currentMonth = "October";
        const currentYear = 2023;
        const currenDate = "2023-10-26";
    } catch (error){
        res.status(404).json({message: error.message});
    }
}