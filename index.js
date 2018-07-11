const Discord = require("discord.js");
const config = require("./config.json");

const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`)
  bot.user.setActivity("with 3d printers")
})

bot.on("message", async (message) => {
  let prefix = config.prefix
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(command === `${prefix}ping`) {
    message.channel.send(`Pong! \`${bot.ping}ms\``);
  }

  if(command === `${prefix}botinfo`) {
    let bicon = bot.user.displayAvatarURL;
    let bEmbed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Made By", "doggo#4096, https://basicbot.tk/services/")
      .addField("Made For", "3D PRINTING HUB")
      .addField("Github Repository", "https://github.com/Luke2252/printinghubbot")
      .setFooter("Copyright 2018 © Basicbot services & 3DPRINTINGHUB")

    message.channel.send(bEmbed);
  }

  if(command === `${prefix}addrole`) {
    let role = args.join(" ").toLowerCase();
    let AnetA8 = message.guild.roles.find("name", "Anet A8");
    let Green = message.guild.roles.find("name", "Green");
    let Blue = message.guild.roles.find("name", "Blue");
    let Cr10s = message.guild.roles.find("name", "Cr-10s");
    let Red = message.guild.roles.find("name", "Red");
    let Anycubici3 = message.guild.roles.find("name", "Anycubic i3");
    let Yellow = message.guild.roles.find("name", "Yellow");
    let RF100 = message.guild.roles.find("name", "RF100");
    let Black = message.guild.roles.find("name", "Black");
    let prusai3 = message.guild.roles.find("name", "prusa i3");
    let Purple = message.guild.roles.find("name", "Purple");
    let Quditech = message.guild.roles.find("name", "Qudi tech");
    let ender = message.guild.roles.find("name", "ender");
    let FLsunKossel = message.guild.roles.find("name", "FLsun Kossel");
    let BiquMagician = message.guild.roles.find("name", "Biqu Magician");
    let Atom3Dex = message.guild.roles.find("name", "Atom 3D ex");
    let Tevolittlemonster = message.guild.roles.find("name", "Tevo little monster");
    let makerultimate = message.guild.roles.find("name", "maker ultimate");
    let kossel = message.guild.roles.find("name", "kossel");
    let photon = message.guild.roles.find("name", "photon");
    let aneta6 = message.guild.roles.find("name", "anet a6");



    let roleEmbed = new Discord.RichEmbed()
    .setTitle("Available Roles")
    .setDescription("Roles: Anet A8, Green, Blue, Cr-10s, Red, Anycubic i3, Yellow, RF100, Black, prusa i3, Purple, Qudi tech, ender, FLsun Kossel, Biqu Magician, Atom 3D ex, Tevo little monster, maker ultimate, kossel, photon, anet a6")

    if(!role) return message.channel.send(roleEmbed);

    switch(role) {
      case "anet a8":
        if(message.member.roles.has(AnetA8.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(AnetA8);
        message.react("✅");
        break;
      case "green":
        if(message.member.roles.has(Green.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Green);
        message.react("✅");
        break;
      case "blue":
        if(message.member.roles.has(Blue.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Blue);
        message.react("✅");
        break;
      case "cr-10s":
        if(message.member.roles.has(Cr10s.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Cr10s);
        message.react("✅");
        break;
      case "red":
        if(message.member.roles.has(Red.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Red);
        message.react("✅");
        break;
      case "anycubic i3":
        if(message.member.roles.has(Anycubici3.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Anycubici3);
        message.react("✅");
        break;
     case "yellow":
        if(message.member.roles.has(Yellow.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Yellow);
        message.react("✅");
        break;
    case "rf100":
        if(message.member.roles.has(RF100.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(RF100);
        message.react("✅");
        break;
        //fffdsa
    case "black":
        if(message.member.roles.has(Black.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Black);
        message.react("✅");
        break;
    case "prusai3":
        if(message.member.roles.has(prusai3.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(prusai3);
        message.react("✅");
        break;
    case "purple":
        if(message.member.roles.has(Purple.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Purple);
        message.react("✅");
        break;
    case "qudi tech":
        if(message.member.roles.has(Quditech.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Quditech);
        message.react("✅");
        break;
    case "ender":
        if(message.member.roles.has(ender.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(ender);
        message.react("✅");
        break;
    case "flsun kossel":
        if(message.member.roles.has(FLsunKossel.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(FLsunKossel);
        message.react("✅");
        break;
    case "biqu magician":
        if(message.member.roles.has(BiquMagician.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(BiquMagician);
        message.react("✅");
        break;
    case "atom 3d ex":
        if(message.member.roles.has(Atom3Dex.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Atom3Dex);
        message.react("✅");
        break;
    case "tevo little monster":
        if(message.member.roles.has(Tevolittlemonster.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(Tevolittlemonster);
        message.react("✅");
        break;
    case "maker ultimate":
        if(message.member.roles.has(makerultimate.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(makerultimate);
        message.react("✅");
        break;
    case "kossel":
        if(message.member.roles.has(kossel.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(kossel);
        message.react("✅");
        break;
    case "photon":
        if(message.member.roles.has(photon.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(photon);
        message.react("✅");
        break;
    case "anet a6":
        if(message.member.roles.has(aneta6.id)) return message.channel.send(":x: You already have this role!");
        message.member.addRole(aneta6);
        message.react("✅");
        break;
      default:
        message.channel.send(":x: Invalid role");
    }

  }

  if(command === `${prefix}removerole`) {
    let role = args.join(" ").toLowerCase();
    let rolemsg = message.channel.send(":x: You don't have this role!");
    let AnetA8 = message.guild.roles.find("name", "Anet A8");
    let Green = message.guild.roles.find("name", "Green");
    let Blue = message.guild.roles.find("name", "Blue");
    let Cr10s = message.guild.roles.find("name", "Cr-10s");
    let Red = message.guild.roles.find("name", "Red");
    let Anycubici3 = message.guild.roles.find("name", "Anycubic i3");
    let Yellow = message.guild.roles.find("name", "Yellow");
    let RF100 = message.guild.roles.find("name", "RF100");
    let Black = message.guild.roles.find("name", "Black");
    let prusai3 = message.guild.roles.find("name", "prusa i3");
    let Purple = message.guild.roles.find("name", "Purple");
    let Quditech = message.guild.roles.find("name", "Qudi tech");
    let ender = message.guild.roles.find("name", "ender");
    let FLsunKossel = message.guild.roles.find("name", "FLsun Kossel");
    let BiquMagician = message.guild.roles.find("name", "Biqu Magician");
    let Atom3Dex = message.guild.roles.find("name", "Atom 3D ex");
    let Tevolittlemonster = message.guild.roles.find("name", "Tevo little monster");
    let makerultimate = message.guild.roles.find("name", "maker ultimate");
    let kossel = message.guild.roles.find("name", "kossel");
    let photon = message.guild.roles.find("name", "photon");
    let aneta6 = message.guild.roles.find("name", "anet a6");



    let roleEmbed = new Discord.RichEmbed()
    .setTitle("Available Roles")
    .setDescription("Roles: Anet A8, Green, Blue, Cr-10s, Red, Anycubic i3, Yellow, RF100, Black, prusa i3, Purple, Qudi tech, ender, FLsun Kossel, Biqu Magician, Atom 3D ex, Tevo little monster, maker ultimate, kossel, photon, anet a6")

    if(!role) return message.channel.send(roleEmbed);

    switch(role) {
      case "anet a8":
        if(!message.member.roles.has(AnetA8.id)) return rolemsg
        message.member.removeRole(AnetA8);
        message.react("✅");
        break;
      case "green":
        if(message.member.roles.has(Green.id)) return rolemsg
        message.member.addRole(Green);
        message.react("✅");
        break;
      case "blue":
        if(message.member.roles.has(Blue.id)) return rolemsg
        message.member.addRole(Blue);
        message.react("✅");
        break;
      case "cr-10s":
        if(message.member.roles.has(Cr10s.id)) return rolemsg
        message.member.addRole(Cr10s);
        message.react("✅");
        break;
      case "red":
        if(message.member.roles.has(Red.id)) return rolemsg
        message.member.addRole(Red);
        message.react("✅");
        break;
      case "anycubic i3":
        if(message.member.roles.has(Anycubici3.id)) return rolemsg
        message.member.addRole(Anycubici3);
        message.react("✅");
        break;
     case "yellow":
        if(message.member.roles.has(Yellow.id)) return rolemsg
        message.member.addRole(Yellow);
        message.react("✅");
        break;
    case "rf100":
        if(message.member.roles.has(RF100.id)) return rolemsg
        message.member.addRole(RF100);
        message.react("✅");
        break;
        //fffdsa
    case "black":
        if(message.member.roles.has(Black.id)) return rolemsg
        message.member.addRole(Black);
        message.react("✅");
        break;
    case "prusai3":
        if(message.member.roles.has(prusai3.id)) return rolemsg
        message.member.addRole(prusai3);
        message.react("✅");
        break;
    case "purple":
        if(message.member.roles.has(Purple.id)) return rolemsg
        message.member.addRole(Purple);
        message.react("✅");
        break;
    case "qudi tech":
        if(message.member.roles.has(Quditech.id)) return rolemsg
        message.member.addRole(Quditech);
        message.react("✅");
        break;
    case "ender":
        if(message.member.roles.has(ender.id)) return rolemsg
        message.member.addRole(ender);
        message.react("✅");
        break;
    case "flsun kossel":
        if(message.member.roles.has(FLsunKossel.id)) return rolemsg
        message.member.addRole(FLsunKossel);
        message.react("✅");
        break;
    case "biqu magician":
        if(message.member.roles.has(BiquMagician.id)) return rolemsg
        message.member.addRole(BiquMagician);
        message.react("✅");
        break;
    case "atom 3d ex":
        if(message.member.roles.has(Atom3Dex.id)) return rolemsg
        message.member.addRole(Atom3Dex);
        message.react("✅");
        break;
    case "tevo little monster":
        if(message.member.roles.has(Tevolittlemonster.id)) return rolemsg
        message.member.addRole(Tevolittlemonster);
        message.react("✅");
        break;
    case "maker ultimate":
        if(message.member.roles.has(makerultimate.id)) return rolemsg
        message.member.addRole(makerultimate);
        message.react("✅");
        break;
    case "kossel":
        if(message.member.roles.has(kossel.id)) return rolemsg
        message.member.addRole(kossel);
        message.react("✅");
        break;
    case "photon":
        if(message.member.roles.has(photon.id)) return rolemsg
        message.member.addRole(photon);
        message.react("✅");
        break;
    case "anet a6":
        if(message.member.roles.has(aneta6.id)) return rolemsg
        message.member.addRole(aneta6);
        message.react("✅");
        break;
      default:
        message.channel.send(":x: Invalid role");
    }

  }

})

bot.login(config.token);
