const yargs = require('yargs')

// set task options
const taskOptions = {
    alias: 't',
    describe: 'task description'
  }

// set date options
const dateOptions = {
    alias: 'd',
    describe: 'due date'
  }

// create commands
const argv = yargs
  .command('create', 'create a new task', {
    task: taskOptions,
    date: dateOptions
  })
  .command('read', 'read all tasks', {
    read: {
      alias: 'l'
    }
  })
  .command('update', 'update a task', {
    update: {
      alias: 'u'
    }
  })
  .command('delete', 'delete a task', {
    delete: {
      alias: 'd'
    }
  })
  .example(`$0 -t 'walk the dog' -d 'today'`)
  .argv
