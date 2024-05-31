const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection')

const Publication = sequelize.define('publication',{
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zone: {
        type: DataTypes.STRING,
        allowNull: false
    },
  
})

module.exports = Publication