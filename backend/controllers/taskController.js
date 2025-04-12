const getTasks = (req, res) =>{
    res.status(200).json({message: 'Get all tasks'})
}

const setTasks = (req, res) =>{
    res.status(200).json({message: 'Get all tasks'})
}

const updateTask = (req, res) =>{
    res.status(200).json({message: `Task ${req.params.id} updated`})
}

const deleteTask = (req, res) =>{
    res.status(200).json({message: `Task ${req.params.id} deleted`})
}

module.exports = {getTasks , setTasks, updateTask, deleteTask}