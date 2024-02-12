// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    ]
};

const data = [
    {"Data": "Test1", "Value": "166443", "Year": "2014"},
    {"Data": "Test2", "Value": "126443", "Year": "2014"},
    {"Data": "Test3", "Value": "136443", "Year": "2014"},
    {"Data": "Test4", "Value": "176443", "Year": "2014"},
    {"Data": "Test5", "Value": "66443", "Year": "2014"},

  ];

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});