const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function getAvatarList () {

    //  console.log("in ava-mod - getAvatarList");
    avatarList = [];
    await avatarList.push({src: "https://api.multiavatar.com/bobbyknox.png", name:"bobbyknox"});
    await avatarList.push({src: "https://api.multiavatar.com/sally-ann.png", name:"sally-ann"});
    await avatarList.push({src: "https://api.multiavatar.com/dave.png",  name:"dave"});
    await avatarList.push({src: "https://api.multiavatar.com/jil.png", name:"jill"});
    await avatarList.push({src: "https://api.multiavatar.com/sarah.png",  name:"sarah"});
    await avatarList.push({src: "https://api.multiavatar.com/nina.png", name:"nina"});
    await avatarList.push({src: "https://api.multiavatar.com/freddy.png",  name:"freddy"});
    await avatarList.push({src: "https://api.multiavatar.com/rex.png", name:"rex"});
    await avatarList.push({src: "https://api.multiavatar.com/felix.png",  name:"felix"});
    await avatarList.push({src: "https://api.multiavatar.com/jimbo.png", name:"jimbo"});
    await avatarList.push({src: "https://api.multiavatar.com/robby.png",  name:"robby"});
    await avatarList.push({src: "https://api.multiavatar.com/robbyblue.png", name:"robbyblue"});
    return avatarList;
}

//get userid from where?
async function retrieveUserAvatar(id) {
    console.log("In getAvatar ava");
    const db = await dbPromise;

    const user = await db.get(SQL`
        select * from users
        where id = ${id}`);

    return user;
}

async function updateUserAvatar(id) {
    console.log("In getAvatar ava");
    const db = await dbPromise;

    await db.run(SQL`
    update users
    set avatar = ${user.avatar}
    where userId = ${user.userId}`);
    return user;
}

module.exports = {
    getAvatarList,
    retrieveUserAvatar,
    updateUserAvatar

};