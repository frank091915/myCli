const inquirer = require('inquirer');
const config = require('./config')
const ora = require('ora');
const chalk = require('chalk');
const myDonwload = require('./download')


const spinner = ora(`Loading ${chalk.red('boilerplate')}`).start();
function successCb() {
  spinner.succeed('download succeed')
  console.log(`
      CPU: ${chalk.red('90%')}
      RAM: ${chalk.green('40%')}
      DISK: ${chalk.yellow('70%')}
      `);
}

function fallbackCb() {
  spinner.fail('download succeed')
}

async function myAction(projectName) {
  const question = [{
    name: config.frameWorkName,
    message: config.frameWorkMessage,
    type: 'list',
    choices: config.frameWorkChoices
  }]
  const answer = await inquirer.prompt(question)
  console.log(answer)
  const url = config.downloadPath[answer[config.frameWorkName]]
  myDonwload(url, projectName, { successCb, fallbackCb })

}
module.exports = myAction