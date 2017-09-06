const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');



const app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive({
  host: 'localhost',
  port: 5432,
  database: 'assessbox',
  user: 'postgres',
  password: 'Flipper69'
}).then( db => {
  app.set('db', db);

  const mainCtrl = require('./mainCtrl');
  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
        //   .catch(function(error) {
        //     console.log(error)
        //     // res.status(500).send(error)
        // });
  })
    //   .catch(function(error) {
    //     console.log(error)
    //     // res.status(500).send(error)
    // });

    app.get('/api/users', mainCtrl.getUsers);
app.get('/api/vehicles', mainCtrl.getVehicles);

app.post('/api/users', mainCtrl.addUser);
app.post('/api/vehicles', mainCtrl.addVehicle);

app.get('/api/user/:userId/vehiclecount', mainCtrl.getVehicleCount);
app.get('/api/user/:userId/vehicle', mainCtrl.getVehicleById);
app.get('/api/vehicle', mainCtrl.findAllVehicles);
app.get('/api/newervehiclesbyyear', mainCtrl.getVehiclesByYear);


app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.changeOwner);

app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.removeOwner);
app.delete('/api/vehicle/:vehicleId', mainCtrl.removeVehicle);
})
    .catch(function(error) {
      console.log("error here!!:", error);
    })

// ===== Build endpoints below ============
// app.get('/api/users', mainCtrl.getUsers);
// app.get('/api/vehicles', mainCtrl.getVehicles);

// app.post('/api/users', mainCtrl.addUser);
// app.post('/api/vehicles', mainCtrl.addVehicle);

// app.get('/api/user/:userId/vehiclecount', mainCtrl.getVehicleCount);
// app.get('/api/user/:userId/vehicle', mainCtrl.getVehicleById);
// app.get('/api/vehicles', mainCtrl.findAllVehicles);
// app.get('/api/newervehiclesbyyear', mainCtrl.getVehiclesByYear);


// app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.changeOwner);

// app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.removeOwner);
// app.delete('/api/vehicle/:vehicleId', mainCtrl.removeVehicle);




// const mainCtrl = require('./mainCtrl');
// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
