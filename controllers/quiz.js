const db = require("../models");
const Quiz = db.quizzes;

//nambah data section
exports.create = async (req, res) => {
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "Quiz created successfuly",
            data: data,
        })   
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

//nampilin data section
exports.getAll = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfuly",
            data: quizzes,
        })   
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

//ngubah data section
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes updated successfuly",
            data: quiz,
        })   
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured when retrieving data quiz",
            data: null,
        });
    }
};

//ngapus data section
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.destroy()
        res.json({
            message: "quiz deleted successfuly",
        })   
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured when retrieving data quiz",
            data: null,
        });
    }
};

//nampilin data by id section
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `quiz retrieved successfuly on id=${id}`,
            data: quiz,
        })   
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured when retrieving data quiz",
            data: null,
        });
    }
};

//nampilin data menurut kategori section
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryId: id
        }
    })
    res.json({
            message: `Quizzes retrieved successfully with categoryId=${id}`,
            data: quizzes,
        });
}

//nampilin data menurut level tertentu section
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelId: id
        }
    })
    res.json({
            message: `Quizzes retrieved successfully with level=${id}`,
            data: quizzes,
        });
};