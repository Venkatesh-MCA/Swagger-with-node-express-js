var express = require('express');
var router = express.Router();
const student = require('../models/students')
//var ObjectId = require('mongodb').ObjectID;

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - StuentName
 *         - StuentMobile
 *         - StuentEmail
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a student
 *         StuentName:
 *           type: string
 *           description: name of the student
 *         StuentMobile:
 *           type: string
 *           description: mobileno of the student
 *         StuentEmail:
 *           type: string
 *           descripton: EmaildId of the student*
 *       example: 
 *         StuentName: my name
 *         StuentMobile: my title
 *         StuentEmail: my article
 */

/**
 * @swagger
 *  tags:
 *    name: Student
 *    description: posts of students
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Returns all posts
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: the list of the students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */

router.get("/", async (req, res) => {
  try {

    let students = await student.find().lean();
    res.send(students)
  } catch (err) {
    console.error(err)
    res.send('error/500')
  }
});

/**
 * @swagger
 * /Students/{StuentMobile}:
 *   get:
 *     summary: gets student by StuentMobile
 *     tags: [Student]
 *     parameters:
 *       - in : path
 *         name: StuentMobile
 *         description: StuentMobile of Students
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Students by its StuentMobile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: student can not be found
 */

router.get("/:StuentMobile", async (req, res) => {
  try {
    const record = await student.findOne({ "StuentMobile": req.params.StuentMobile });
    res.send(record);
  } catch (err) {
    console.error(err)
    res.send('error/500')
  }

});

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Add a new student
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 */

router.post("/", async (req, res) => {
  try {
    var insertres = await student.create(req.body)
    res.send(insertres)
  } catch (err) {
    console.error(err)
    res.send('error/500')
  }
});

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: updates student by id
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: post id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         decsription: The student was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: student was not found.
 *       500:
 *         description: Some errors happend.
 *
 */

router.put("/:id", async (req, res) => {
  try {

    let story = await student.findById({ _id: req.params.id }).lean()

    if (!story) {
      return res.render('error/404')
    }

    if (story._id != req.params.id) {
      res.send('id not match')
    } else {
      const obj = {
        $set: req.body
      };

      story = await student.findOneAndUpdate({ _id: req.params.id }, obj, {
        new: true,
        runValidators: true,
      })
      res.send(story)
    }
  } catch (err) {
    console.error(err)
    return res.send('error/500')
  }
});

/**
 * @swagger
 *  /students/{StuentMobile}:
 *    delete:
 *      summary: remove student from list
 *      tags: [Student]
 *      parameters:
 *        - in: path
 *          name: StuentMobile
 *          description: post StuentMobile
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The student was deleted
 *        404:
 *          description: The student was not found
 *
 */

router.delete("/:StuentMobile", async (req, res) => {
  try {
    let deletedrec = await student.deleteOne({ "StuentMobile": req.params.StuentMobile });
    res.send(deletedrec)
  } catch (err) {
    console.error(err)
    res.send('error/500')
  }
});
module.exports = router;
