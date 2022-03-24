const HeroRepositories = require('../repositories/heroRepository');
const HeroServices = require('../services/heroService');

const { join } = require('path');
const filename = join(__dirname, './database', 'data.json');

const generateInstance = () => {
    const heroRepository = new HeroRepositories({
        file : filename
    })

    const heroService = new HeroServices({
        heroRepository
    })

    return heroService
}

module.export = { generateInstance } 