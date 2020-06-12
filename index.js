const token = "NzIwNzg4MzM5MjAwMDk4NDE3.XuLEkA.-FiZJxhJt9vhiN9b0AX-G3uHoG8";
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", message => {
  if (message === "potato") return message.channel.send("tomato");
});

bot.login(token);
