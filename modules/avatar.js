const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function getAvatarList () {
    avatarList = [];
    await avatarList.push({src: "https://api.multiavatar.com/bobbyknox.png", name:"bobbyknox", id:"1"});
    await avatarList.push({src: "https://api.multiavatar.com/sally-ann.png", name:"sally-ann", id:"2"});
    await avatarList.push({src: "https://api.multiavatar.com/dave.png",  name:"dave", id:"3"});
    await avatarList.push({src: "https://api.multiavatar.com/jil.png", name:"jil", id:"4"});
    await avatarList.push({src: "https://api.multiavatar.com/sarah.png",  name:"sarah", id:"5"});
    await avatarList.push({src: "https://api.multiavatar.com/nina.png", name:"nina", id:"6"});
    await avatarList.push({src: "https://api.multiavatar.com/freddy.png",  name:"freddy", id:"7"});
    await avatarList.push({src: "https://api.multiavatar.com/rex.png", name:"rex", id:"8"});
    await avatarList.push({src: "https://api.multiavatar.com/felix.png",  name:"felix", id:"9"});
    await avatarList.push({src: "https://api.multiavatar.com/jimbo.png", name:"jimbo", id:"10"});
    await avatarList.push({src: "https://api.multiavatar.com/robby.png",  name:"robby", id:"11"});
    await avatarList.push({src: "https://api.multiavatar.com/robbyblue.png", name:"robbyblue", id:"12"});
    await avatarList.push({src: "https://api.multiavatar.com/annieblack.png", name:"annieblack",id:"13"});
    await avatarList.push({src: "https://api.multiavatar.com/penguin.png", name:"penguin", id:"14"});
    await avatarList.push({src: "https://api.multiavatar.com/flossy.png",  name:"flossy", id:"15"});
    await avatarList.push({src: "https://api.multiavatar.com/christmas.png", name:"christmas", id:"16"});
    await avatarList.push({src: "https://api.multiavatar.com/newzealand.png",  name:"newzealand", id:"17"});
    await avatarList.push({src: "https://api.multiavatar.com/sammy.png", name:"sammy", id:"18"});
    await avatarList.push({src: "https://api.multiavatar.com/renny.png",  name:"renny", id:"19"});
    await avatarList.push({src: "https://api.multiavatar.com/start.png", name:"start", id:"20"});
    await avatarList.push({src: "https://api.multiavatar.com/end.png",  name:"end", id:"21"});
    return avatarList;
}

module.exports = {
    getAvatarList,

};