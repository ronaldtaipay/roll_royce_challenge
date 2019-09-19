'use strict';

module.exports = {
  dbconnect: function(app) {
    return dbconnect(app);
  },
};

const orm = require('orm');
const bodyParser = require('body-parser');

/**
 * MySQL database connect.
 * @param {object} app
 */
function dbconnect(app) {
  app.use(
      orm.express(`mysql://${ process.env.DB_USER }:${ process.env.DB_PASS }@${ process.env.DB_HOST }:${ process.env.DB_PORT }/${ process.env.DB_NAME }`, {
        define: function(db, models, next) {
          models.device = db.define('device', {
            location: String,
            description: String,
            deleted: Date,
            created: Date,
            updated: String,
          });

          models.device_reading = db.define('device_reading', {
            device_id: Number,
            reading: Number,
            hash: String,
            initial: Date,
            end: Date,
          });

          next();
        },
      })
  );

  app.use(
      bodyParser.json({
        limit: '100kb',
      })
  );
}
