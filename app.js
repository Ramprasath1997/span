const express = require('express');
const app = express();
const config = require('./config');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
