const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function createAccount(user) {
    const db = await dbPromise;

    const result = await db.run(SQL`
    insert into Users (password, username, fName, lName, userDescription, email, address, phone, birthDate, avatar) values
    (${user.password}, ${user.username}, ${user.firstname}, ${user.lastname}, ${user.description}, ${user.email}, ${user.address}, ${user.phone}, ${user.birth}, ${user.avatar})
    
    `)
    // Get the auto-generated ID value, and assign it back to the user object.
    user.userId = result.lastID;
    return user.userId;
}

async function retrieveUserByName(username) {
    const db = await dbPromise;
    const user = await db.get(SQL`
    select * from Users
    where username = ${username}`);
    return user;
}

async function retrieveUserById(id) {
    const db = await dbPromise;

    const user = await db.get(SQL`
        select * from Users
        where userId = ${id}`);

    return user;
}

async function retrieveUserWithCredentials(username, password) {
    const db = await dbPromise;
    const user = await db.get(SQL`
        select * from Users
        where username = ${username} and password = ${password} `);
    return user;
}

async function retrieveUserWithAuthToken(authToken) {
    const db = await dbPromise;

    const user = await db.get(SQL`
        select * from Users
        where authToken = ${authToken}`);

    return user;
}
async function updateUser(user) {

    const db = await dbPromise;

    await db.run(SQL`
            update users
            set authToken = ${user.authToken}
            where userId = ${user.userId}`);
}

async function editUserAccount(user){
    const db = await dbPromise;

    const result = await db.run(SQL`
        UPDATE Users 
        SET 
            username = ${user.username},
            fName = ${user.fname},
            lName = ${user.lname},
            userDescription = ${user.description},
            email = ${user.email},
            address = ${user.address},
            phone = ${user.phone},
            birthDate = ${user.birthDate}
            WHERE userId = ${user.userId}
    `);

    return result.changes;
    
}

async function getAllUsers() {
    const db = await dbPromise;

    const users = await db.all(SQL`select * from Users`);
    return users;
};

async function updatePassword(user){
    const db = await dbPromise;

    const result = await db.run(SQL`
    update Users set password = ${user.password} where userId = ${user.userId};
    
    `)
    return result.changes;

}

async function deleteUser(id){
    const db = await dbPromise;

    await db.run(SQL`delete from Articles where writerId = ${id}`);

    const result = await db.run(SQL`
    delete from Users where userId = ${id}
    `)
    return result.changes;
}


module.exports = {
    createAccount,
    retrieveUserByName,
    retrieveUserWithCredentials,
    retrieveUserWithAuthToken,
    updateAuthToken,
    getAllUsers,
    retrieveUserById,
    deleteUser,
    updatePassword,
    editUserAccount
};