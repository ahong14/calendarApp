'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: { 
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    ownerEmail: DataTypes.STRING,
    content: DataTypes.STRING,
    eventDate:{
        type: DataTypes.DATEONLY
    },
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};