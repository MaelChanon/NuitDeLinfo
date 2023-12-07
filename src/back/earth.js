
module.export = class {
    constructor(config){
        this.currentGES = 0
        this.currentHealth = 0
        this.gold = 0
        this.config = config
        this.categories = {} 
        this.factories = {}
        this.multiplier = 1
    }
    addFactoryList(category, name,factoryList){
        if(this.categories[category]){
            this.categories[category] = []
            this.categories[category].push({
                
            })
        }
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