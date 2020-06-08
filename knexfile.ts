import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    pool: {
        min: 0,
        max: 10,
        afterCreate: (conn: any, cb: any) => {
            conn.run('PRAGMA busy_timeout = 6000', cb);
        }
    },
    acquireConnectionTimeout: 1000,
    useNullAsDefault: true
};