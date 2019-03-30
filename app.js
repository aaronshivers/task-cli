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
    read: {
      alias: 'r'
    }
  })
  .command('update', 'update a task', {
    update: {
      alias: 'u'
    }
  })
  .command('delete', 'delete a task', {
    delete: {
      task: taskOptions
    }
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

      // create message
      const message = `The task ${ argv.task } could not be created.`

      // log message
      console.log(message)
      
    }

    break

  default:

    // error message
    console.log('Command not recognized')
}
