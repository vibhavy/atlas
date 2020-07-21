const {Command} = require('@oclif/command');

class CreateCommand extends Command {

    async getFile() {
        let dir = process.cwd();
        let filePath = `${dir}\\atlas.json`;
        this.log(`i am from getFile ${filePath}`);
    }

    async run() {
        await this.getFile();
    }
}

module.exports = CreateCommand;