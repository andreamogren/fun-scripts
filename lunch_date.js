const dotenv = require('dotenv');
const moment = require('moment');
dotenv.config();


const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOINT_SID;
const TWILIO_AUTH_TOKEN  = process.env.TWILIO_AUTH_TOKEN;

const TWILIO_NUMBER = process.env.TWILIO_NUMBER;
const friends = process.env.FRIENDS_NUMBERS.split(' ');
const RECEIVER = friends[Math.floor(Math.random() * friends.length)];

const restaurants = [
    'Pizza Hut',
    'Holy Greens',
    'Panini',
    'Grekiska Kolgrillsbaren',
    'the café inside Akademibokhandeln',
    'Teaterbaren',
];

const dayToMeet = moment().add(2, 'days').format('dddd');

const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
const textMessage = `Hi! Would you like to eat lunch together at ${restaurant} on ${dayToMeet}? //Andrea`;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
client.messages.create({
    body: textMessage,
    to: RECEIVER,
    from: TWILIO_NUMBER
}, function(error, message) {
if(error)
    console.log('Failed to send SMS: ' + error.message);
else {
    const currentdate = new Date();
    console.log(`Message sent at: ${currentdate.getMonth() + 1}/${currentdate.getDate()}/${currentdate.getFullYear()}/ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`);
}});
