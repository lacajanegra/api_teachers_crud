const Score = require('../models/Score')

exports.assignCourse = async (req, res) => {
    try {
        const { course, student} = req.body
        const score = new Score({ course, student, value1: 0, value2: 0, value3: 0 });
        await score.save();
        res.status(200).json({message: "Course assigned."});
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error when saving score data."});
    }
}

exports.updateScore = async (req, res) => {
    try {
        const { value1, value2, value3 } = req.body
        const { id } = req.params
        const score = await Score.findByIdAndUpdate(id, { value1, value2, value3 })
        res.status(200).json({message: "Score updated."});
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error updating score data."});
    }
}

exports.getScoreInfo = async (req, res) => {
    try {
        const { course, student } = req.params
        console.log(course, student)
        const score = await Score.find({course, student}).populate('course').populate('student')
        res.status(200).json({data: score});
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error get score data."});
    }
}