const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function getAvatarList () {
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
    await avatarList.push({src: "https://api.multiavatar.com/annieblack.png", name:"annieblack"});
    await avatarList.push({src: "https://api.multiavatar.com/penguin.png", name:"penguin"});
    await avatarList.push({src: "https://api.multiavatar.com/flossy.png",  name:"flossy"});
    await avatarList.push({src: "https://api.multiavatar.com/christmas.png", name:"christmas"});
    await avatarList.push({src: "https://api.multiavatar.com/newzealand.png",  name:"newzealand"});
    await avatarList.push({src: "https://api.multiavatar.com/sammy.png", name:"sammy"});
    await avatarList.push({src: "https://api.multiavatar.com/renny.png",  name:"renny"});
    await avatarList.push({src: "https://api.multiavatar.com/start.png", name:"start"});
    await avatarList.push({src: "https://api.multiavatar.com/end.png",  name:"end"});
    return avatarList;
}

module.exports = {
    getAvatarList,

};