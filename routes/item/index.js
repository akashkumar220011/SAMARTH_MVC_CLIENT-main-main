const express = require('express');
const ItemDetails = require('../../model/Item');
const router = express.Router();

// Create item
router.post('/add', async (req, res) => {
    try {
        console.log("the body", req.body);
        const item = await ItemDetails.create(req.body);

        return res.status(200).json({
            data: item,
            message: "Item created successfully!"
        });
    } catch (error) {
        console.log("the error", error);
        return res.status(500).json({
            data: null,
            message: "Error while creating item!"
        });
    }
});

// Get all items
router.get('/get', async (req, res) => {
    try {
        const items = await ItemDetails.find();
        return res.status(200).json({
            data: items,
            message: "Items fetched successfully!"
        });
    } catch (error) {
        console.log("the error", error);
        return res.status(500).json({
            data: null,
            message: "Error while fetching items!"
        });
    }
});

// Update item by ID
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await ItemDetails.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json({
            data: updatedItem,
            message: "Item updated successfully!"
        });
    } catch (error) {
        console.log("the error", error);
        return res.status(500).json({
            data: null,
            message: "Error while updating item!"
        });
    }
});

// Delete item by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await ItemDetails.findByIdAndRemove(id);

        return res.status(200).json({
            data: null,
            message: "Item deleted successfully!"
        });
    } catch (error) {
        console.log("the error", error);
        return res.status(500).json({
            data: null,
            message: "Error while deleting item!"
        });
    }
});

module.exports = router;
