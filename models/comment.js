const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;