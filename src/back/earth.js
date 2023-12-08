
export default class earth{
    constructor(health,maxGES,healthDamage){
        this.MAXGES = maxGES
        this.currentGES = 0
        this.tickGESDamage = 0

        this.currentHealth = health
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
    getCurrentHealth(){
        return this.currentHealth
    }
    addGES(value){
        this.currentGES += value
        return this.currentGES
    }
    addHealth(value){
        this.currentHealth += value
        return this.currentHealth
    }
    getGold(){
        return this.gold
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