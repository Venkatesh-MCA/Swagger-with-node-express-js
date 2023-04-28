var express = require('express');
var router = express.Router();
const student = require('../models/students')

/**
 * @swagger
 * components:
 *   schemas:
 *     exampapers:
 *       type: object
 *       required:
 *         - id
 *         - exam_status
 *         - data
 *         - schema
 *         - examid 
 *         - exam_name 
 *         - exam_start_date_time 
 *         - exam_end_date_time 
 *         - exam_conducted_date 
 *         - random_que 
 *         - random_ans 
 *         - repeatable 
 *         - display_result 
 *         - duration 
 *         - paperCode 
 *         - program_name 
 *         - user_id 
 *         - exam_status 
 *         - score 
 *         - suc 
 *         - stu_branch 
 *         - student 
 *         - stu_section 
 *         - roll_no 
 *         - time_left 
 *         - examstart 
 *         - examend 
 *         - stu_mobile 
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a student
 *         data:
 *           type: string
 *           description: name of the student
 *         schema:
 *           type: string
 *           description: mobileno of the student
 *         examid:
 *           type: string
 *           descripton: EmaildId of the student*
 *         exam_name:
 *           type: string
 *           descripton: EmaildId of the student*
 *         exam_start_date_time:
 *           type: string
 *           descripton: EmaildId of the student*
 *         exam_end_date_time:
 *           type: string
 *           descripton: EmaildId of the student*
 *         exam_conducted_date:
 *           type: string
 *           descripton: EmaildId of the student*
 *         random_que:
 *           type: string
 *           descripton: EmaildId of the student*
 *         random_ans:
 *           type: string
 *           descripton: EmaildId of the student*
 *         repeatable:
 *           type: string
 *           descripton: EmaildId of the student*
 *         display_result:
 *           type: string
 *           descripton: EmaildId of the student*
 *         duration:
 *           type: string
 *           descripton: EmaildId of the student*
 *       example: 
 *          data:
 *          schema:
 *          examid: 
 *          exam_name:
 *          exam_start_date_time: 
 *          exam_end_date_time: 
 *          exam_conducted_date: 
 *          random_que: 
 *          random_ans: 
 *          repeatable: 
 *          display_result: 
 *          duration: 
 *          paperCode: 
 *          program_name:
 *          user_id: 
 *          exam_status: 
 *          score: 
 *          suc: 
 *          stu_branch: 
 *          student: 
 *          stu_section: 
 *          roll_no: 
 *          time_left: 
 *          examstart: 
 *          examend: 
 *          stu_mobile: 
 
 */

/**
 * @swagger
 *  tags:
 *    name: Student
 *    description: posts of students
 */

/**
 * @swagger
 * /exampapers:
 *   get:
 *     summary: Returns all exampapers
 *     tags: [Exampapers]
 *     responses:
 *       200:
 *         description: the list of all exampapers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/exampapers'
 */