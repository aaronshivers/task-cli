const yargs = require('yargs')

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
    const allTasks = tasks.getAll()
    console.log(`You have ${ allTasks.length } task(s).`)
    allTasks.forEach(task => tasks.logTasks(task))

    break

  // create task
  case 'create':

    // create task
    const task = tasks.createTask(argv.task, argv.date)

    // create message
    const message = task ? 'Task created...' : `The task ${ argv.task } could not be created.`

    // log note and message
    tasks.logTasks(task)
    console.log(message)

    break

  default:

    // error message
    console.log('Command not recognized')
}
