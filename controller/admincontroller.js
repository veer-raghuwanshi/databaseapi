var adminmodal = require('../modals/adminmodal')

function admincontroller() {
    this.fetchallusers = () => {
        return new Promise((resolve, reject) => {
            adminmodal.fetchusers({})
                .then((result) => {
                    resolve(result)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

module.exports = new admincontroller()