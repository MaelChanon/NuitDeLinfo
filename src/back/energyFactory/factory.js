module.export = class {
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
    getGESDamage(){
        return this.GESDamage
    }
}