require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const sha1 = require('sha1');
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

db.dbconnect(app);

/**
 * Command: /devices
 * Get the all devices list.
 *
 * @method GET
 *
 * @return {json} -
 *  {'r':number, 'm':string, 'data': array}
 */
app.get('/devices', (req, res) => {
  req.models.device.find().all((err, devices) => {
    if (err) {
      res.status(400).json({
        'r': 1,
        'm': 'Get all devices failed',
      });
    } else {
      res.status(200).json({
        'r': 0,
        'm': 'Get all devices success',
        'data': devices,
      });
    }
  });
});

/**
 * Command: /device/:id
 * Get the device data.
 *
 * @method GET
 *
 * @param {string} id - the device in database id
 *
 * @return {json} -
 *  {'r':number, 'm':string, 'data': array}
 */
app.get('/device/:id', (req, res) => {
  req.models.device.get(req.params.id, (err, device) => {
    if (err) {
      res.status(400).json({
        'r': 1,
        'm': 'Get device failed',
      });
    } else {
      res.status(200).json({
        'r': 0,
        'm': 'Get device success',
        'data': device,
      });
    }
  });
});

/**
 * Command: /device
 * Create the device data.
 *
 * @method POST
 *
 * @param {string} location - the device's location
 * @param {string} description - the description about device
 * @param {date} created - the create date
 *
 * @return {json} -
 *  {'r':number, 'm':string}
 */
app.post('/device', (req, res) => {
  req.models.device.create({
    location: req.body.location,
    description: req.body.description,
    created: Date.now(),
  },
  (err) => {
    if (err) {
      res.status(400).json({
        'r': 1,
        'm': 'Create device failed',
      });
    } else {
      res.status(200).json({
        'r': 0,
        'm': 'Create device success',
      });
    }
  });
});

/**
 * Command: /device/:id
 * Update the device data.
 *
 * @method PUT
 *
 * @param {string} id - the device in database id
 * @param {string} location - the device's location
 * @param {string} description - the description about device
 * @param {date} updated - the update date
 *
 * @return {json} -
 *  {'r':number, 'm':string}
 */
app.put('/device/:id', (req, res) => {
  req.models.device.get(req.params.id, function(err, device) {
    device.location = req.body.location;
    device.description = req.body.description;
    device.updated = Date.now();
    device.save((err) => {
      if (err) {
        res.status(400).json({
          'r': 1,
          'm': 'Update device failed',
        });
      } else {
        res.status(200).json({
          'r': 0,
          'm': 'Update device success',
        });
      }
    });
  });
});

/**
 * Command: /device/:id
 * Delete the device data.
 *
 * @method DELETE
 *
 * @param {string} id - the device in database id
 *
 * @return {json} -
 *  {'r':number, 'm':string}
 */
app.delete('/device/:id', (req, res) => {
  req.models.device.get(req.params.id, (err, device) => {
    device.deleted = Date.now();
    device.save((err) => {
      if (err) {
        res.status(400).json({
          'r': 1,
          'm': 'Delete device failed',
        });
      } else {
        res.status(200).json({
          'r': 0,
          'm': 'Delete device success',
        });
      }
    });
  });
});

/**
 * Command: /reading
 * Create the device reading data.
 *
 * @method POST
 *
 * @param {string} device_id - the device id
 * @param {array} reading - the device reading
 * @param {date} initial - the initial date
 *
 * @return {json} -
 *  {'r':number, 'm':string}
 */
app.post('/reading', (req, res) => {
  // Check the reading is 25 records ? hash and update to BC : store to db
  req.models.device_reading.create({
    device_id: req.body.location,
    reading: req.body.reading,
    initial: Date.now(),
  },
  (err) => {
    if (err) {
      res.status(400).json({
        'r': 1,
        'm': 'Create device reading failed',
      });
    } else {
      res.status(200).json({
        'r': 0,
        'm': 'Create device reading success',
      });
    }
  });
});

/**
 * Command: /reading/:id
 * Update the device data.
 *
 * @method PUT
 *
 * @param {string} device_id - the device id
 * @param {array} hash - the hashed device reading
 * @param {date} end - the end date
 *
 * @return {json} -
 *  {'r':number, 'm':string}
 */
app.put('/reading/:id', (req, res) => {
  req.models.device.get(req.params.device_id, function(err, device) {
    device.hash = sha1(device.reading);
    device.end = Date.now();
    device.save((err) => {
      if (err) {
        res.status(400).json({
          'r': 1,
          'm': 'Update device failed',
        });
      } else {
        res.status(200).json({
          'r': 0,
          'm': 'Update device success',
        });
      }
    });
  });
});

/**
 * Command: /readings
 * Get the all device readings list.
 *
 * @method GET
 *
 * @return {json} -
 *  {'r':number, 'm':string, 'data': array}
 */
app.get('/readings', (req, res) => {
  req.models.device_reading.find().all((err, readings) => {
    if (err) {
      res.status(400).json({
        'r': 1,
        'm': 'Get all devices readings failed',
      });
    } else {
      res.status(200).json({
        'r': 0,
        'm': 'Get all devices readings success',
        'data': readings,
      });
    }
  });
});

/**
 * Command: /reading/: id
 * Get the device reading data.
 *
 * @method GET
 *
 * @param {string} device_id - the device id
 *
 * @return {json} -
 *  {'r':number, 'm':string, 'data': array}
 */
app.get('/reading/:id', (req, res) => {
  req.models.device_reading.get(req.params.device_id, (err, reading) => {
    if (err) {
      res.status(400).json({
        'r': 1,
        'm': 'Get reading failed',
      });
    } else {
      res.status(200).json({
        'r': 0,
        'm': 'Get reading success',
        'data': reading,
      });
    }
  });
});

app.listen(port, function() {
  console.log(`server start on http://localhost:${port}`);
});
