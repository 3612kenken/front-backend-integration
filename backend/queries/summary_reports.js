const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/db_cruds')
    .then(() => 
        console.log({
            message: 'Connected to MongoDB',
            status: 'success',
        })
).catch((err) => {
    console.error('MongoDB connection error:', err);
});
const BusinessModel = require('../schema/businessSchema');

async function getReports() {
     // Fetch all documents
     const report = await BusinessModel.find()
     .select('company_id name age gender company business_type city income investment');
    console.log("All Business:", report);
    // Check if any documents were found
    return report;
}
async function getGender() {
    try {
        const genderCounts = await BusinessModel.aggregate([
            {
                $group: {
                    _id: "$gender", // Group by the "gender" field
                    total: { $sum: 1 } // Count the number of documents for each gender
                }
            }
        ]);
        console.log("Gender Counts:", genderCounts);
        return genderCounts;
    } catch (error) {
        console.error("Error fetching gender counts:", error);
        throw error;
    }
}
async function getBusinessType() {
    try {
        const businessTypeCounts = await BusinessModel.aggregate([
            {
                $group: {
                    _id: "$business_type", // Group by the "business_type" field
                    total: { $sum: 1 } // Count the number of documents for each business type
                }
            }
        ]);
        console.log("Business Type Counts:", businessTypeCounts);
        return businessTypeCounts;
    } catch (error) {
        console.error("Error fetching business type counts:", error);
        throw error;
    }
}
async function getIncomeByCity() {
    try {
        const incomeByCity = await BusinessModel.aggregate([
            {
                $group: {
                    _id: "$city", // Group by the "city" field
                    totalIncome: { $sum: "$income" } // Sum the "income" field for each city
                }
            }
        ]);
        console.log("Income by City:", incomeByCity);
        return incomeByCity;
    } catch (error) {
        console.error("Error fetching income by city:", error);
        throw error;
    }
}

async function getInvestmentByName() {
    try {
        const investmentByName = await BusinessModel.aggregate([
            {
                $group: {
                    _id: "$name", // Group by the "name" field
                    totalInvestment: { $sum: "$investment" } // Sum the "investment" field for each name
                }
            },
            {
                $sort: { totalInvestment: -1 } // Sort by totalInvestment in descending order
            }
        ]);
        console.log("Investment by Name:", investmentByName);
        return investmentByName;
    } catch (error) {
        console.error("Error fetching investment by name:", error);
        throw error;
    }
}


module.exports = {
    getReports, getGender, getIncomeByCity, getBusinessType, getInvestmentByName,
};