const express = require('express');
const courseModel = require('../models/courses.js');
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, description, duration } = req.body;
        if (!name) {
            res.status(400).json({ message: 'course name is required' });
            return;
        }
        const newCourse = new courseModel({ name, description, duration });
        const data = await newCourse.save();
        res.status(201).json({ 'data': data });
    } catch (error) {
        res.status(400).json({ 'error': error });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await courseModel.find();
        if (!data) {``
            res.status(400).json({ 'message': 'no course found' });
        }
        res.status(201).json({ 'data': data });
    } catch (error) {
        res.status(400).json({ 'error': error });
    }
})



module.exports = router;