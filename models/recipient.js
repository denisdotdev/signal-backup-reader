'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipient = sequelize.define('Recipient', {
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    phone: DataTypes.STRING,
    system_display_name: DataTypes.STRING
  }, { tableName: 'recipient', timestamps: false});

  return Recipient;
};