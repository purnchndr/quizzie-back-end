const app = require('./app');
require('dotenv').config();
const port = process.env.PORT;
const dbConnection = require('./db');

app.listen(port, async () => {
  await dbConnection();

  console.log(`App is running on PORT ${port}`);
});
