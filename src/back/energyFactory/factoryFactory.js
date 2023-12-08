import Factory from "./factory"
export default class FactoryFactory{
    constructor() { 
        this.factoryInfo = {}
    }
    addFactoryType(name, category, price, healthDamage,GESDamage,multiplier,passifGold){
        this.factoryInfo[name] = {
            category,
            healthDamage,
            GESDamage,
            price,
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