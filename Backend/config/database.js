//itt adjuk meg a csatlakozáshoz szükséges adatokat

const host = 'localhost';
const port = 27017;
const user = 'USERFORTESTDB';
const password = 'USERPASSWORD';
const database = 'testDB';

/*
új db és ez mehet robomongoba a shellbe
 
use testDB

db.createUser(
    {
        user: "USERFORTESTDB",
        pwd: "USERPASSWORD",
        roles:
        [
            { role: "readWrite", db: "testDB" }
        ]
        
    }
)
*/

module.exports = {
    uri: `mongodb://${user}:${password}@${host}:${port}/${database}`,
    options: {
        connectTimeoutMS: 2000,
        reconnectTries: Number.MAX_VALUE,
        reconnectIinterval: 500

    }
}