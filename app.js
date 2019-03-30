const yargs = require('yargs')

const tasks = require('./tasks')

// set task options
const taskOptions = {
    alias: 't',
    describe: 'task description'
  }

// create commands
const argv = yargs
  .command('list', 'list all tasks', {
    list: {
      alias: 'l'
    }
  })
  .command('create', 'create a new task', {
    task: taskOptions
  })
  .command('read', 'read a task', {
    task: taskOptions
  })
  .command('update', 'update a task', {
    update: {
      alias: 'u'
    }
  })
  .command('remove', 'remove a task', {
    task: taskOptions
  })
  .example(`$0 -t 'walk the dog' -d 'today'`)
  .argv

// get command from cli
const command = argv._[0]

switch (command) {

  // list all tasks
  case 'list':

    // get and log tasks
    const allTasks = tasks.getAllTasks()
    console.log(`You have ${ allTasks.length } task(s).`)
    allTasks.forEach(task => tasks.logTask(task))

    break

  // create task
  case 'create':

    // create task
    const task = tasks.createTask(argv.task)

    if (task) {

      // create message
      const message = 'Task created...'

      // log note and message
      console.log(message)
      tasks.logTask(task)

    } else {

      // log message
      console.log(`The task ${ argv.task } could not be created.`)

    }

    break

  case 'read':

    // find the task
    const foundTask = tasks.getTask(argv.task)

    // log task and message
    console.log(foundTask ? `Task read` : `Task not found`)
    tasks.logTask(foundTask)

    break

  case 'remove':

    // remove task
    const removedTask = tasks.removeTask(argv.task)

    // create and log message
    const message = removedTask ? `Task removed` : `Task not found`
    console.log(message)

    break

  default:

    // error message
    console.log('Command not recognized')
}
