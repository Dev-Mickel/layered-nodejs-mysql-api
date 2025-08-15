const express = require('express');
const router = express.Router();
const practiceController = require('../controllers/practice.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Practice:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the practice
 *         name:
 *           type: string
 *           description: The name of the practice
 *         description:
 *           type: string
 *           description: The description of the practice
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the practice was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the practice was last updated
 *       example:
 *         id: 1
 *         name: "Agile Development"
 *         description: "Best practices for agile software development"
 *         createdAt: "2023-01-01T00:00:00.000Z"
 *         updatedAt: "2023-01-01T00:00:00.000Z"
 */

/**
 * @swagger
 * /practices:
 *   get:
 *     summary: Retrieve a list of practices
 *     tags: [Practices]
 *     responses:
 *       200:
 *         description: A list of practices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Practice'
 */
router.get('/practices', practiceController.getAllPractices);

/**
 * @swagger
 * /practices/{id}:
 *   get:
 *     summary: Get a practice by id
 *     tags: [Practices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The practice id
 *     responses:
 *       200:
 *         description: The practice description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Practice'
 *       404:
 *         description: The practice was not found
 */
router.get('/practices/:id', practiceController.getPracticeById);

/**
 * @swagger
 * /practices:
 *   post:
 *     summary: Create a new practice
 *     tags: [Practices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the practice
 *               description:
 *                 type: string
 *                 description: The description of the practice
 *     responses:
 *       201:
 *         description: The practice was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Practice'
 *       400:
 *         description: Bad request
 */
router.post('/practices', practiceController.createPractice);

/**
 * @swagger
 * /practices/{id}:
 *   put:
 *     summary: Update a practice
 *     tags: [Practices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The practice id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the practice
 *               description:
 *                 type: string
 *                 description: The description of the practice
 *     responses:
 *       200:
 *         description: The practice was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Practice'
 *       404:
 *         description: The practice was not found
 */
router.put('/practices/:id', practiceController.updatePractice);

/**
 * @swagger
 * /practices/{id}:
 *   delete:
 *     summary: Remove a practice
 *     tags: [Practices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The practice id
 *     responses:
 *       204:
 *         description: The practice was deleted
 *       404:
 *         description: The practice was not found
 */
router.delete('/practices/:id', practiceController.deletePractice);

module.exports = router;