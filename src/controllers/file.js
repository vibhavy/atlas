const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

class File {
    constructor() {
        this.dir = process.cwd();
        this.filePath = `${this.dir}\\atlas.json`;
    }

    async content() {
        return await readFileAsync(this.filePath, {encoding: 'utf-8'});
    }
}

module.exports = new File();