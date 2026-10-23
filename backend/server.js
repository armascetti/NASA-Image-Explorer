
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// GET endpoint to retrieve Mars images from NASA
app.get("/api/mars", async (req, res) => {
    try {
        const response = await fetch(
            "https://images-api.nasa.gov/search?q=mars&media_type=image&page_size=5"
        );

        if (!response.ok) {
            throw new Error("NASA API request failed");
        }

        const data = await response.json();

        res.json(data.collection.items);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to retrieve Mars images"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
