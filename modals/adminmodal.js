require('./connection')
var registerschemamodel = require('../schema/registerschema')

function adminmodal() {
    this.fetchusers = (cond) => {
        return new Promise((resolve, reject) => {
            // to find record from collection
            registerschemamodel.find(cond)
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

module.exports = new adminmodal()