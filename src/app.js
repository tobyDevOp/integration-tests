import express from 'express';

const app = express();

app.get('/api/v2/products', (req, res) => {
    res.status(200).json({
        status: "success",
        data: [
            { id: 1, name: "IPhone" },
            { id: 2, name: "Car" },
        ]
    });
})

export default app;