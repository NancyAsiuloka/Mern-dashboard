import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat";


export const getProducts = async (req, res) => {
    try{

    } catch (error){
        res.status(404).json({message: error.message});
    }
}