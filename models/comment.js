const { Model, DataTypes } = require('sequelize');
const { model } = require('../config/connection');
const sequelize = require('../config/connection');


class Comment extends model {}

Comment.init(
    {
        id
    }
)