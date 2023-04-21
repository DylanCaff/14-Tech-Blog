const { User } = require('../models');

const userData = [
    {
        email: "sarapalmer@gmail.com",
        password: "1234567891"
    },
    {
        email: "laithelshami@gmail.com",
        password: "1234567892"
    },
    {
        email: "omarmeshal@gmail.com",
        password: "1234567893"
    },
    {
        email: "clacaf0810@gmail.com",
        password: "1234567894"
    },
    {
        email: "dylancaff0902@gmail.com",
        password: "1234567895"
    },
    {
        email: "fernandocafferatta@gmail.com",
        password: "1234567896"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;