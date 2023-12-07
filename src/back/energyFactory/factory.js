module.export = class {
    constructor(healthDamage,GESDamage){
        this.healthDamage = healthDamage
        this.GESDamage = GESDamage
    }
    gethealthDamage(){
        return this.healthDamage
    }
    getGESDamage(){
        return this.GESDamage
    }
}