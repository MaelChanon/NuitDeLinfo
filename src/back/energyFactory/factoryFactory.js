const Factory = require("./energyFactory/factory")
module.export = class {
    constructor() { 
        this.factoryInfo = {}
    }
    addFactoryType(name, category, healthDamage,GESDamage,multiplier,passifGold){
        this.factoryInfo[name] = {
            category,
            healthDamage,
            GESDamage,
            multiplier,
            passifGold,
        }
    }
    newFactory(name){
        const info  = this.factoryInfo[name]
        return info? new Factory(
            name,
            info.category,
            info.healthDamage,
            info.GESDamage,
            info.multiplier,
            info.passifGold
        ) : null
    }
}