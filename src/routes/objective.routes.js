const express = require('express');
const router = express.Router();
const objectiveController = require('../controllers/objective.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Objective:
 *       type: object
 *       required:
 *         - practice_id
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the objective
 *         practice_id:
 *           type: integer
 *           description: The id of the practice this objective belongs to
 *         description:
 *           type: string
 *           description: The description of the objective
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the objective was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the objective was last updated
 *       example:
 *         id: 1
 *         practice_id: 1
 *         description: "Implement daily stand-up meetings"
 *         createdAt: "2023-01-01T00:00:00.000Z"
 *         updatedAt: "2023-01-01T00:00:00.000Z"
 */

/**
 * @swagger
 * /objectives:
 *   get:
 *     summary: Retrieve a list of objectives
 *     tags: [Objectives]
 *     responses:
 *       200:
 *         description: A list of objectives
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Objective'
 */
router.get('/objectives', objectiveController.getAllObjectives);

/**
 * @swagger
 * /objectives/{id}:
 *   get:
 *     summary: Get an objective by id
 *     tags: [Objectives]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The objective id
 *     responses:
 *       200:
 *         description: The objective description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Objective'
 *       404:
 *         description: The objective was not found
 */
router.get('/objectives/:id', objectiveController.getObjectiveById);

/**
 * @swagger
 * /practices/{practiceId}/objectives:
 *   get:
 *     summary: Get objectives by practice id
 *     tags: [Objectives]
 *     parameters:
 *       - in: path
 *         name: practiceId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The practice id
 *     responses:
 *       200:
 *         description: A list of objectives for the practice
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Objective'
 */
router.get('/practices/:practiceId/objectives', objectiveController.getObjectivesByPracticeId);

/**
 * @swagger
 * /objectives:
 *   post:
 *     summary: Create a new objective
 *     tags: [Objectives]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - practice_id
 *               - description
 *             properties:
 *               practice_id:
 *                 type: integer
 *                 description: The id of the practice this objective belongs to
 *               description:
 *                 type: string
 *                 description: The description of the objective
 *     responses:
 *       201:
 *         description: The objective was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Objective'
 *       400:
 *         description: Bad request
 */
router.post('/objectives', objectiveController.createObjective);

/**
 * @swagger
 * /objectives/{id}:
 *   put:
 *     summary: Update an objective
 *     tags: [Objectives]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The objective id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               practice_id:
 *                 type: integer
 *                 description: The id of the practice this objective belongs to
 *               description:
 *                 type: string
 *                 description: The description of the objective
 *     responses:
 *       200:
 *         description: The objective was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Objective'
 *       404:
 *         description: The objective was not found
 */
router.put('/objectives/:id', objectiveController.updateObjective);

/**
 * @swagger
 * /objectives/{id}:
 *   delete:
 *     summary: Remove an objective
 *     tags: [Objectives]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The objective id
 *     responses:
 *       204:
 *         description: The objective was deleted
 *       404:
 *         description: The objective was not found
 */
router.delete('/objectives/:id', objectiveController.deleteObjective);

module.exports = router;