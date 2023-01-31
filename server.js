const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes/routes');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
