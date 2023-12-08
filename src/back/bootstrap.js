import FactoryFactory from "./energyFactory/factoryFactory"
import config from "./config"
import Earth from "./earth"
const bootstrap = (config)=>{
    const factoryFactory = new FactoryFactory()
    const earth = new Earth(
        config.earth.maxHealth,
        config.earth.maxGES,
        config.earth.healthDamage,
        
    )
    let category
    let factory
    for(let categoryKey in config.categories){
        category = config.categories[categoryKey]
        for(let factoryKey in category.factories){
            factory = category.factories[factoryKey]
            factoryFactory
                .addFactoryType(
                    factory.type,
                    category.type,
                    factory.price,
                    factory.healthDamages,
                    factory.GESDamages,
                    factory.multiplier,
                    factory.passifGold
                )
            earth.addFactoryList(category.type,factory.type,new FactoryList(factory.limit))
            earth.addFactory(factoryFactory.newFactory('charbon'))
            earth.removeFactory('charbon')
        }
    }
    
}
export default config