import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat";


export const getProducts = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}