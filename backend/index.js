const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const summaryReports = require('./queries/summary_reports');



app.get('/api/reports', async (req, res) => {
      try {
          const reports = await summaryReports.getReports(); // Await the async function
          res.send(reports);
      } catch (error) {
          console.error('Error fetching reports:', error);
          res.status(500).send({ error: 'Failed to fetch reports' });
      }
  });
  app.get('/api/gender', async (req, res) => {

      try {
            const genderCounts = await summaryReports.getGender(); // Await the async function
            res.send(genderCounts);
      }catch (error) {
            console.error('Error fetching reports:', error);
            res.status(500).send({ error: 'Failed to fetch reports' });
      }
  });
  app.get('/api/business_type', async (req, res) => {
      try {
            const businessTypeCounts = await summaryReports.getBusinessType(); // Await the async function
            res.send(businessTypeCounts);
      }catch (error) {
            console.error('Error fetching reports:', error);
            res.status(500).send({ error: 'Failed to fetch reports' });
      }
  });
  app.get('/api/income', async (req, res) => {
      try {
            const incomeByCity = await summaryReports.getIncomeByCity(); // Await the async function
            res.send(incomeByCity);
      }catch (error) {
            console.error('Error fetching reports:', error);
            res.status(500).send({ error: 'Failed to fetch reports' });
      }
  });
      app.get('/api/investment', async (req, res) => {
            try {
                  const investmentByName = await summaryReports.getInvestmentByName(); // Await the async function
                  res.send(investmentByName);
            }catch (error) {
                  console.error('Error fetching reports:', error);
                  res.status(500).send({ error: 'Failed to fetch reports' });
            }
      });

app.get('/api/test', (req, res) => {
    res.send([{id: 1, text:'Test Object', age:23}, {id: 2, text:'Kenz Omiping', age:26}])
});
const MyName="Kenz";

app.get('/api/users', (req, res) =>{

      if(req.body.MyName.Length == 3){
            res 
            .status(400)
            .send("Name Must be minimum 3 characters");
            return;
      }
});

const PORT = 3000;
app.listen(3000, () => {
      console.log(`server listening on port:${PORT}...`)
})