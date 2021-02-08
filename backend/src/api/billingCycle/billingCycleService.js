const billingCycle = require("./billingCycle")


billingCycle.methods(["GET", "POST", "PUT", "DELETE"])
billingCycle.updateOptions({ new: true, runValidators: true })


// this code is here to prevent the error on get method
// somehow the default get is causing trouble without this code

billingCycle.route('get', (req, res, next) => {

    billingCycle.find({}, (err, docs) => {

        if(!err) {

            res.json(docs)

        } else {

            res.status(500).json({errors: [error]})

        }

    })

})


module.exports = billingCycle;