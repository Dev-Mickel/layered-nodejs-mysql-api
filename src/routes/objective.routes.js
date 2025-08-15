const express = require('express');
const router = express.Router();
const objectiveController = require('../controllers/objective.controller');

/**
 * @swagger
 * /objectives:
 *   get:
 *     summary: Retrieve a list of objectives
 *     responses:
 *       200:
 *         description: A list of objectives.
 */
router.get('/objectives', objectiveController.getAllObjectives);

/**
 * @swagger
 * /objectives:
 *   post:
 *     summary: Create a new objective
 *     responses:
 *       201:
 *         description: Objective created successfully.
 */
router.post('/objectives', objectiveController.createObjective);

/**
 * @swagger
 * /objectives/{id}:
 *   get:
 *     summary: Retrieve an objective by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The objective ID
 *     responses:
 *       200:
 *         description: An objective.
 */
router.get('/objectives/:id', objectiveController.getObjectiveById);

/**
 * @swagger
 * /objectives/{id}:
 *   put:
 *     summary: Update an objective by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The objective ID
 *     responses:
 *       200:
 *         description: Objective updated successfully.
 */
router.put('/objectives/:id', objectiveController.updateObjective);

/**
 * @swagger
 * /objectives/{id}:
 *   delete:
 *     summary: Delete an objective by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The objective ID
 *     responses:
 *       200:
 *         description: Objective deleted successfully.
 */
router.delete('/objectives/:id', objectiveController.deleteObjective);

module.exports = router;