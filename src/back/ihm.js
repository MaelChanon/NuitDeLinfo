import earth from "./earth"

let healthBar = window.document.getElementById("progress-bar")
let GESBar = window.document.getElementById("progress-bar2")
let gold = window.document.getElementById("gold")

const updateInterface = (earth) =>{
    const GESPercentage = (earth.getCurrentGES() /earth.getMaxGES())*100
    const healthPercentage = (earth.getCurrentHealth()/earth.getMaxHealth())*100
    const goldValue = earth.getGold()
    healthBar.style.width = `${healthPercentage}%`
    GESBar.style.width = `${GESPercentage}%`
    gold.innerText = goldValue
}
const getHtmlTemplate = (config,callback) => {
    const categoriesDiv = document.createElement("div")
    categoriesDiv.setAttribute("id",'categories')
    for(let categoryKey in config.categories){
        const category = config.categories[categoryKey]
        const categoryDiv = document.createElement("div")
        categoryDiv.setAttribute("id",category.type)
        categoryDiv.setAttribute("class","category")
        for(let factoryKey in category.factories){
            const factoryDiv = document.createElement("div")
            factoryDiv.setAttribute("id",category.factories[factoryKey].type)
            factoryDiv.setAttribute("class","factory")
            factoryDiv.setAttribute("limit",category.factories[factoryKey].limit)
            const factory_title = document.createElement("div")
            factory_title.appendChild(document.createTextNode(category.factories[factoryKey].type))
            const factory_limit = document.createElement("div")
            factory_limit.appendChild(document.createTextNode(`0/${category.factories[factoryKey].limit}`))
            factory_title.setAttribute("class","factory_title")
            factory_limit.setAttribute("class","factory_limit")
            factoryDiv.appendChild(factory_title)
            factoryDiv.appendChild(factory_limit)
            factoryDiv.addEventListener('click',callback)
            categoryDiv.appendChild(factoryDiv)
        
        }
        categoriesDiv.appendChild(categoryDiv)
    }
    return categoriesDiv
}
export {updateInterface,getHtmlTemplate}