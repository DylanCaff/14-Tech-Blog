module.exports = {
    format_data: date => {
        return `${new Date(date).getMonth() + 1}/${new Date()}/${new Date(date).getFullYear()}`;
    },
}