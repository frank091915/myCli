function myCommander(program) {
  program.command('create <projectname> [other...]')
    .alias('crt')
    .description('select a framework bolierplate')
    .action((project, args) => {
      console.log(project, args)
    })
}
module.exports = myCommander