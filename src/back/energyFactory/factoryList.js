export default class {

    constructor(limit) {
        this.limit = limit
        this.factories = []
    }
    getLimit() {
        return this.limit
    }
    pushFactory(factory){
        if(this.getLength >= this.getLimit()){
            return false
        }
        this.factories.push(factory)
        return true
    }
    popFactory() {
        return this.factories.pop()
    }
    getLength(){
        return this.factories.length
    }
}