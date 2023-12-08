export default class Factory{
    constructor(name,category, healthDamage,GESDamage,multiplier,passifGold){
        this.name = name
        this.category = category
        this.healthDamage = healthDamage
        this.GESDamage = GESDamage
        this.multiplier = multiplier
        this.passifGold = passifGold
    }
    gethealthDamage(){
        return this.healthDamage
    }
    getPassifGold(){
        return this.passifGold
    }
    getCategories(){
        return this.category
    }
    getMultiplier(){
        return this.multiplier
    }
    getName(){
        return this.name
    }
    getGESDamage(){
        return this.GESDamage
    }
}