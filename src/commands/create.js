const {Command} = require('@oclif/command');
const File = require('../controllers/file');

class CreateCommand extends Command {
    async run() {
        const config = await File.content();
        this.log(config);
    }
}

module.exports = CreateCommand;