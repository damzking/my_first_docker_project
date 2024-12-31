const express = require('express');
const Redis = require('ioredis');

const app = express();
const redis = new Redis({ host: 'redis', port: 6379 });

app.get('/', async (req, res) => {
  try {
    // Increment a counter in Redis
    await redis.incr('counter');
    const counter = await redis.get('counter');
    res.send(`Hello, my first Docker project! Counter value: ${counter}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong!');
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
