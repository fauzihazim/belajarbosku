const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('hallo index');
});

app.get('/greet', (req, res) => {
  res.send('hello greet');
});

// Start server only if not in test mode
if (require.main === module) { 
  const PORT = 3000;
  
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app; // export for Jest