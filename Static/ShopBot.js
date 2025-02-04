const TelegramBot = require('node-telegram-bot-api');

// Укажите ваш токен, полученный от BotFather
const token = '8008221921:AAHmmAqciZCgZvMWVEaLvj_2WrULCeSDzG8';

var bot = new TelegramBot(token,opt);

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    bot.sendMessage(chatId, 'Привет дорогой друг! Этот бот предназначен исключительно для развлекательных целей. Здесь ты сможешь приобрести всё что нужно для безопасной игры в интернет мошенника. Желаю удачи!)))',  {
        reply_markup: {
          inline_keyboard: [
            [
                { text: 'Открыть магазин', callback_data: `openShop` }
            ],
          ],
        },
    });
})
bot.on('callback_query', (callbackQuery) => {
    if (callbackQuery.data == `openShop`){

    }
});

