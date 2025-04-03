const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
      res.send('Hello from our server!')
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