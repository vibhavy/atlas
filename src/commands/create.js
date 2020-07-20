const {Command} = require('@oclif/command');

class CreateCommand extends Command {
    async run() {
        this.log('i am from create');
    }
}

module.exports = CreateCommand;