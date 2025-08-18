const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const practiceRoutes = require('./routes/practice.routes');
const objectiveRoutes = require('./routes/objective.routes');
const { swaggerUi, swaggerSpec } = require('./config/swagger.config');

// Database initialization
const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', userRoutes);
app.use('/api', practiceRoutes);
app.use('/api', objectiveRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
