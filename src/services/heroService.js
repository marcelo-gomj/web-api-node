class HeroService {
    constructor({ heroRepository }){
        this.heroRepository = heroRepository; 
    }

    async find(itemID){
        return this.heroRepository.find(itemID);
    }

    async create(data){
        return this.heroRepository.create(data);
    }
}

module.export = HeroService;