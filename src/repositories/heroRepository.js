const { readFile, writeFile } = require('fs/promises');

class HeroRepositories {
    constructor({ file }){
        this.file = file
    }

    async _currentFileContent(){
        return JSON.parse(await readFile(this.file))
    }

    async find(itemId){
        const all = await this._currentFileContent();
        if(!itemId) return all

        return all.find(({ id }) => itemId === id)
    }

    async create(){
        const currentFile = await this._currentFileContent();
        currentFile.push(data);

        await writeFile(this._currentFileContent, JSON.stringify(currentFile));
    }
}

module.export = HeroRepositories