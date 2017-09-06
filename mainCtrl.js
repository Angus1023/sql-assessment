module.exports = {

    getUsers: (req, res) => {
        console.log("I am working");
        req.app.get('db').get_users().then(resp => {
            res.status(200).send(resp)

        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
    },
    getVehicles: (req, res) => {
        req.app.get('db').get_vehicles().then(resp => {
            res.status(200).send(resp)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            }) 
    },
    getVehiclesByYear: (req, res) => {
        req.app.get('db').get_vehicles_by_year().then(resp => {
            res.status(200).send(resp)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
    },
    addUser: (req, res) => {
        const newUser =[
            req.body.name,
            req.body.email
        ]
        req.app.get('db').add_user(newUser).then(resp => {
            res.status(200).send(resp)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
    },
    addVehicle: (req, res) => {
        const newVehicle = [
            req.body.make,
            req.body.model,
            req.body.year,
            req.body.owner_id
        ]
        req.app.get('db').add_vehicle(newVehicle).then(resp => {
            res.status(200).send(resp)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
        
    },
    getVehicleCount: (req, res) => {
        const count = [
            req.params.userId
        ]
        req.app.get('db').vehicle_count(count).then(resp => {
            res.status(200).send(resp)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
    },
    getVehicleById: (req, res) => {
        const id = [
            req.params.userId
        ]
        req.app.get('db').vehicle_id(id).then(resp => {
            res.status(200).send(resp)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
    },
    findAllVehicles: (req, res) => {
        if (req.query.userEmail) {
            req.app.get('db').find_vehicle_email([req.query.userEmail]).then(response => {
                res.status(200).send(response)
            })
                .catch(function(error) {
                    console.log(error)
                    res.status(500).send(error)
                })
        } else if (req.query.userFirstStart) {
            const first = req.query.userFirstStart;
            req.app.get('db').find_vehicle_first_name([first + '%']).then(resp =>{
                res.status(200).send(resp)
            })
                .catch(function(error) {
                    console.log(error)
                    res.status(500).send(error)
                })
        }
    },
    changeOwner: (req, res) => {
        const change = [
            Number(req.params.vehicleId),
            Number(req.params.userId)
        ]
        req.app.get('db').change_owner(change).then(resp => {
            res.status(200).send(resp)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
    },
    removeOwner: (req, res) => {
        const owner = [
            req.params.userId,
            req.params.vehicleId
        ]
        req.app.get('db').remove_owner(owner).then(resp => {
            res.status(200).send(resp)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
    },
    removeVehicle: (req, res) => {
        req.app.get('db').remove_vehicle([req.params.vehicleId]).then(response => {
            res.status(200).send(response)
        })
            .catch(function(error) {
                console.log(error)
                res.status(500).send(error)
            })
    }
}


// var users = {
//     name: "test"
// }

// console.log(users.name);