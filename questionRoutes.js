const express = require("express");
const router = express.Router();

// Example Route
router.get("/", (req, res) => {
    res.send("Question Routes Working");
});

module.exports = router;
