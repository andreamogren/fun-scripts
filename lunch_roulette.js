const dotenv = require('dotenv');
const emoji = require('node-emoji');
dotenv.config();

const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const friends = [
    'Enny',
    'Cissi',
    'Mischa',
    'Mimmi',
    'Anne'
];

const restaurants = [
    'Pizza Hut',
    'Holy Greens',
    'Panini',
    'Grekiska Kolgrillsbaren',
    'the café inside Akademibokhandeln',
    'Teaterbaren',
];

const dayToMeet = weekDays[Math.floor(Math.random() * weekDays.length)];
const friend = friends[Math.floor(Math.random() * friends.length)];
const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
const crystalBall = emoji.get('crystal_ball');

const msg = `You will eat with ${friend} at ${restaurant} on ${dayToMeet}. It is known.`;

console.log(`Node node in the computer, who shall I eat lunch with this week?`);
setTimeout(() => console.log(`Consulting the spirits... ${crystalBall}`), 2000);
setTimeout(() => console.log(`${msg}`), 4000);
