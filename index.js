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
      

    message.channel.send(bEmbed);
  }

  if(command === `${prefix}giverole`) {
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
      default:
        message.channel.send(":x: Invalid role");
    }

  }

})

bot.login(config.token);
