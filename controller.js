

async function getTheValue(req, res) {
    try {
        const key = req.query.key;
        const value = await req.app.locals.redisClient.get(key);
        res.json({ message: 'Value fetched successfully', value });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function setTheValue(req, res) {
    try {
        const { key, value } = req.body
        await req.app.locals.redisClient.set(key, value);
        res.json({ message: 'Value set successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateTheValue(req, res) {
    try {
        const { key, value } = req.body
        await req.app.locals.redisClient.set(key, value);
        res.json({ message: 'Value updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteTheValue(req, res) {
    try {
        const key = req.query.key
        await req.app.locals.redisClient.del(key);
        res.json({ message: 'Value deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    getTheValue,
    setTheValue,
    updateTheValue,
    deleteTheValue
}