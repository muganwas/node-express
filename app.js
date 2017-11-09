const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.set('view engine', 'ejs');
//app.use(express.static('routes'))/**using static routing for a whole folder */
app.get('/', routes.home);
app.get('/about', routes.about);

app.listen(3000, () => console.log('app listening on port 3000!'))