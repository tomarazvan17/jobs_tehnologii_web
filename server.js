const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const joburi = [
    {id: 1, titlu: "Job 1", descriere: "ABC"},
    {id: 3, titlu: "Job 3", descriere: "ABC-2"},
    {id: 4, titlu: "Job 5", descriere: "ABC-2LLLLLLLLLL"}
];

app.get('/job', (req, res) => {
   
    //Rezultat JSON
    res.json(joburi);
 });

 app.post('/job', (req, res) => {
     let idNou = joburi.length + 1;
     let titluNou = req.body.titlu;
     let descriereNou = req.body.descriere;
    
        const jobNou = {
            id: idNou,
            titlu: titluNou,
            descriere: descriereNou
        }
        joburi.push(jobNou);
        res.writeHead(301,
            {Location: '/job'}
        );
    
        res.end();
    
});






const port = 5000;
app.listen(port);