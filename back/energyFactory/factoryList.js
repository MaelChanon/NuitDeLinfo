module.export = class {

    constructor(limit) {
        this.limit = limit
        this.factories = []
    }
    getLimit() {
        return this.limit
    }
    pushFactory(factory){
        if(this.factories.length == limit){
            return false
        }
        this.factories.push(factory)
        return true
    }
    popFactory() {
        this.factories.pop()
    }
    getLength(){
        return this.factories.length
    }
}