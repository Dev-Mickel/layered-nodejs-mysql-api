const express = require('express');
const userRoutes = require('./routes/user.routes');
const { swaggerUi, specs } = require('./config/swagger.config');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Layered Node.js MySQL API is running!' });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;