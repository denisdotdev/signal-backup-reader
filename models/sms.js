'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sms = sequelize.define('Sms', {
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    body: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.INTEGER
    }
  }, { tableName: 'sms', timestamps: false});

  return Sms;
};