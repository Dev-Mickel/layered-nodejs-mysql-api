const express = require('express');
const router = express.Router();
const practiceController = require('../controllers/practice.controller');

/**
 * @swagger
 * /practices:
 *   get:
 *     summary: Retrieve a list of practices
 *     responses:
 *       200:
 *         description: A list of practices.
 */
router.get('/practices', practiceController.getAllPractices);

/**
 * @swagger
 * /practices:
 *   post:
 *     summary: Create a new practice
 *     responses:
 *       201:
 *         description: Practice created successfully.
 */
router.post('/practices', practiceController.createPractice);

/**
 * @swagger
 * /practices/{id}:
 *   get:
 *     summary: Retrieve a practice by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The practice ID
 *     responses:
 *       200:
 *         description: A practice.
 */
router.get('/practices/:id', practiceController.getPracticeById);

/**
 * @swagger
 * /practices/{id}:
 *   put:
 *     summary: Update a practice by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The practice ID
 *     responses:
 *       200:
 *         description: Practice updated successfully.
 */
router.put('/practices/:id', practiceController.updatePractice);

/**
 * @swagger
 * /practices/{id}:
 *   delete:
 *     summary: Delete a practice by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The practice ID
 *     responses:
 *       200:
 *         description: Practice deleted successfully.
 */
router.delete('/practices/:id', practiceController.deletePractice);

module.exports = router;