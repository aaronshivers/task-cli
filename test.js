const expect = require('expect')

const tasks = require('./tasks')
const file = require('./tasks-data.json')

describe('task functions', () => {

  const task = `this is a test task`

  before(() => {
    tasks.removeTask(task)
  })

  after(() => {
    tasks.removeTask(task)
  })

  it('should create a new task', () => {
    const newTask = tasks.createTask(task)
    expect(newTask).toBeTruthy()
    expect(file).toContain(task)
  })
})