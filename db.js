const sqlite3 = require('sqlite3');
const sqlite  = require('sqlite');

sqlite.open('./microphones.sqlite').then(async (db) => {
    await db.migrate({force: true});
});

module.exports = {
    openConnection: () => {
        return sqlite.open('./microphones.sqlite');
    }
};
