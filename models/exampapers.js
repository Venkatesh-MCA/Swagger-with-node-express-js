const mongoose = require('mongoose')

const EXAMPAPERS = new mongoose.Schema({

    exam_status: {
        type: String
    },
    data: { type: Array },
    schema: { type: Array },
    examid: { type: String },
    exam_name: { type: String },
    exam_start_date_time: { type: String },
    exam_end_date_time: { type: String },
    exam_conducted_date: { type: String },
    random_que: { type: String },
    random_ans: { type: String },
    repeatable: { type: String },
    display_result: { type: String },
    duration: { type: String },
    paperCode: { type: String },
    program_name: { type: String },
    user_id: { type: String },
    exam_status: { type: String },
    score: { type: String },
    suc: { type: String },
    stu_branch: { type: String },
    student: { type: String },
    stu_section: { type: String },
    roll_no: { type: Number },
    time_left: { type: String },
    examstart: { type: String },
    examend: { type: String },
    stu_mobile: { type: String }
})

module.exports = mongoose.model('exampapers', EXAMPAPERS, 'EXAMPAPERS')
