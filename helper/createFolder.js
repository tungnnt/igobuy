module.exports = (directory) => {
    try {
        require('fs').statSync(__dirname + '/../' + directory)
    } catch (e) {
        require('fs').mkdirSync(__dirname + '/../' + directory)
    }
}

const test = (directory) => {
    try {
        require('fs').statSync(directory);
    } catch (e) {
        require('fs').mkdirSync(directory);
    }
}


test('data1')