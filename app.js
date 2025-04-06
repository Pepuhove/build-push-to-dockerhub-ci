const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="color: blue; font-size: 72px;">Hello World!</h1>');
});

app.get('/register', (req, res) => {
  res.send(`
    <h2 style="color: blue; font-size: 36px;">Register</h2>
    <form action="" method="POST">
      <label for="name">Full Name:</label>
      <input type="text" name="name" id="name" required minlength="3">
      <br><br>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" required>
      <br><br>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" required minlength="6">
      <br><br>
      <label for="age">Age (18-60):</label>
      <input type="number" name="age" id="age" required min="18" max="60">
      <br><br>
      <button type="submit">Register</button>
    </form>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
