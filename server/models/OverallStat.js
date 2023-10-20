import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
    {
        totalCustomers: Number,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number
    },
    {timestamps: true}
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;