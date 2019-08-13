'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: { 
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    ownerEmail: DataTypes.STRING,
    content: DataTypes.STRING,
    eventDate:{
        type: DataTypes.DATEONLY,
        get: function() {
            return moment.utc(this.getDataValue('eventDate')).format('YYYY-MM-DD')
        }
    },
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};