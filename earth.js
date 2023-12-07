
module.export = class {
    constructor(config){
        this.currentGES = 0
        this.currentHealth = 0
        this.gold = 0
        this.config = config
        this.factories = {}
    }
    addFactoryList(name,factoryList){
        this.factories[name] = factoryList
    }
    getFactories(){
        return this.factories
    }
    getCurrentGES(){
        return this.currentGES
    }
    getCurrentHealth(){
        returnthis.currentHealth
    }
    addGES(value){
        this.currentGES += value
    }
    addHealth(value){
        this.currentHealth += value
    }

}