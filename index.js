const express = require('express');
const redis = require('redis');
const router = require('./router.js');

const app = express();
const PORT = 5000;



// Create Redis client
const client = redis.createClient({
    url: 'redis://localhost:6379'
});

app.locals.redisClient = client

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)


// Connect to Redis
client.connect().then(() => {
    console.log('Connected to Redis');
    // Start the server after Redis connection is established
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Redis connection error:', err);
    process.exit(1);
});




// Error handler
client.on('error', (err) => {
    console.error('Redis client error:', err);
});


// Close Redis connection when the app stops
process.on('SIGINT', async () => {
    await client.quit();
    console.log('Redis client disconnected');
    process.exit();
});