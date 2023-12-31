
export default class earth{
    constructor(health,maxGES,healthDamage){
        this.MAXGES = maxGES
        this.currentGES = 0
        this.tickGESDamage = 0

        this.currentHealth = health
        this.MAXHEALTH = health
        this.HealthDamage = healthDamage

        this.gold = 0
        this.multiplier = 1
        this.passifGold = 0
        this.categories = {} 
      
    }
    addFactoryList(category, name,factoryList){
        if(! this.categories[category]){
            this.categories[category] = []
            this.categories[category][name] = factoryList
        }
        else{
            this.categories[name] = factoryList
        }
        
    }
    addFactory(factory) {
        const categorie = this.categories?.[factory.getCategories()]?.[factory.getName()]
        if(!categorie) {
            return false
        }
        if(categorie.pushFactory(factory)){
            this.multiplier += factory.getMultiplier()
            this.tickGESDamage += factory.getGESDamage()
            this.HealthDamage += factory.gethealthDamage()
            this.passifGold += factory.getPassifGold( )
            return true
        }
        
        return false
    }
    getFactoryList(name){
        for(let category in this.categories) {
            if(this.categories[category].hasOwnProperty(name)){
                const factory = this.categories[category][name].popFactory()
                return factory
            }
        }
        return null
    }
    removeFactory(name) {
        for(let category in this.categories) {
            if(this.categories[category].hasOwnProperty(name)){
                const factory = this.categories[category][name].popFactory()
                if(factory){
                    this.multiplier -= factory.getMultiplier()
                    this.HealthDamage -= factory.gethealthDamage()
                    this.passifGold -= factory.getPassifGold( )
                    this.tickGESDamage -= factory.getGESDamage()
                    return true
                }
            }
        }
        return false
    }
    getFactories(){
        return this.factories
    }
    getCurrentGES(){
        return this.currentGES
    }
    getMaxGES(){
        return this.MAXGES
    }
    getCurrentHealth(){
        return this.currentHealth
    }
    getMaxHealth(){
        return this.MAXHEALTH
    }
    addGES(value){
        if(this.getMaxGES() - this.getCurrentGES() >= value) {
            this.currentGES += value
        }
        else {
            this.currentGES = this.getMaxGES()
        }
        
        return this.currentGES
    }
    getGold(){
        return this.gold
    }
    addHealth(value){
        if(this.getMaxHealth() - this.getCurrentHealth() >= value) {
            this.currentHealth += value
        }
        else {
            this.currentHealth = this.getMaxHealth()
        }
        return this.currentHealth
    }
    click(){
        this.gold += this.multiplier
        return this.multiplier
    }
    tick(){
       this.gold += this.passifGold
       this.currentHealth -= this.HealthDamage
       this.currentGES += this.tickGESDamage
       return this.currentHealth<0 || this.currentGES >= this.MAXGES
    }
}