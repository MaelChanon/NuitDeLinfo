export default class {

    constructor(limit) {
        this.limit = limit
        this.factories = []
    }
    getLimit() {
        return this.limit
    }
    pushFactory(factory){
        console.log("fezfzeffze ", this.getLength( ))
        if(this.getLength() >= this.getLimit()){
            return false
        }
        this.factories.push(factory)
        return true
    }
    popFactory() {
        if(this.factories.pop()){
            return true
        }
        return false
    }
    getLength(){
        return this.factories.length
    }
}