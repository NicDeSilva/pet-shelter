const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, '../public/dist/public')));
app.use(bodyParser.json());
app.listen(port, () => console.log(`listening on port ${port}`));
require('./backend/routes.js')(app);