const fs = require('fs')

const getTasks = () => {
  try {
    const tasksString = fs.readFileSync('tasks-data.json')
    return JSON.parse(tasksString)
  } catch (e) {
    return []
  }
}

const saveTasks = tasks => {
  fs.writeFileSync('tasks-data.json', JSON.stringify(tasks))
}

const getAllTasks = () => getTasks()

const createTask = task => {
  const tasks = getTasks()
  const newTask = { task }
  const duplicateTasks = tasks.filter(task => newTask.task === task)

  if (duplicateTasks.length === 0) {
    tasks.push(task)
    saveTasks(tasks)
    return task
  }
}

const logTask = task => {
  console.log('')
  console.log(`Task: ${ task }`)
}

module.exports = {
  getAllTasks,
  createTask,
  logTask
}
