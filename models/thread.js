'use strict';
module.exports = (sequelize, DataTypes) => {
  var Thread = sequelize.define('Thread', {
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    recipient_ids: {
        type: DataTypes.INTEGER
    }
  }, { tableName: 'thread', timestamps: false});

  return Thread;
};