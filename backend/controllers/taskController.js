const asyncHandler = require('express-async-handler');
const Task = require('../models/taskmodel')


const getTasks = asyncHandler(async(req, res) =>{
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

const setTasks = asyncHandler(async(req, res) =>{
    if(!req.body || req.body.text){
        res.status(400)
        throw new Error('Please enter a task');
    }

    res.status(200).json({message: 'Get all tasks'})
})

const updateTask = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Task ${req.params.id} updated`})
})

const deleteTask = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Task ${req.params.id} deleted`})
})

module.exports = {getTasks , setTasks, updateTask, deleteTask}