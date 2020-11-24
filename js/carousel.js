/*function slide(cards) {
    document.querySelector('.carousel .first-card img').src = cards[0].img;
    document.querySelector('.carousel .first-card h5').innerText = cards[0].heading;
    document.querySelector('.carousel .first-card p').innerText = cards[0].paragraph;

    document.querySelector('.carousel .second-card img').src = cards[1].img;
    document.querySelector('.carousel .second-card h5').innerText = cards[1].heading;
    document.querySelector('.carousel .second-card p').innerText = cards[1].paragraph;

    document.querySelector('.carousel .third-card img').src = cards[2].img;
    document.querySelector('.carousel .third-card h5').innerText = cards[2].heading;
    document.querySelector('.carousel .third-card p').innerText = cards[2].paragraph;
}

function forward() {
    tempCard = cards[0];
    for(let i = 0; i < countCards-1; i++) {
        cards[i] = cards[i+1];
    }
    cards[countCards-1] = tempCard;
    slide(cards);
}

function backward() {
    tempCard = cards[countCards-1];
    for(let i = countCards-2; i >= 0; i--) {
        cards[i+1] = cards[i];
    }
    cards[0] = tempCard;
    slide(cards);
}*/

let currentFirst = 0;
let currentSecond = 1;
let currentThird = 2;

function slide(currentFirst, currentSecond, currentThird) {
    document.querySelector('.carousel .first-card img').src = cards[currentFirst].img;
    document.querySelector('.carousel .first-card h5').innerText = cards[currentFirst].heading;
    document.querySelector('.carousel .first-card p').innerText = cards[currentFirst].paragraph;

    document.querySelector('.carousel .second-card img').src = cards[currentSecond].img;
    document.querySelector('.carousel .second-card h5').innerText = cards[currentSecond].heading;
    document.querySelector('.carousel .second-card p').innerText = cards[currentSecond].paragraph;

    document.querySelector('.carousel .third-card img').src = cards[currentThird].img;
    document.querySelector('.carousel .third-card h5').innerText = cards[currentThird].heading;
    document.querySelector('.carousel .third-card p').innerText = cards[currentThird].paragraph;
}

function forward() {
    currentFirst = ++currentFirst > countCards - 1 ? 0 : currentFirst;
    currentSecond = currentFirst + 1 > countCards - 1 ? 0 : currentFirst + 1;
    currentThird = currentSecond + 1 > countCards - 1 ? 0 : currentSecond + 1;
    slide(currentFirst, currentSecond, currentThird);
}
function backward() {
    currentThird = --currentThird < 0 ? countCards - 1 : currentThird;
    currentSecond = currentThird - 1 < 0 ? countCards - 1 : currentThird - 1;
    currentFirst = currentSecond - 1 < 0 ? countCards - 1 : currentSecond - 1;
    slide(currentFirst, currentSecond, currentThird);
}


const images = [
    'img/instagram-followers-growth.svg',
    'img/instagram-content-creation.svg',
    'img/instagram-hashtag-research.svg',
    'img/instagram-content-scheduling.svg',
    'img/instagram-account-optimization.svg',
    'img/instagram-account-management.svg'
]

const headings = [
    'Instagram Followers Growth',
    'Instagram Content Creation',
    'Instagram Hashtag Research',
    'Instagram Content Scheduling',
    'Instagram Account Optimization',
    'Instagram Account Management'
]

const paragraphs = [
    "Thanks to powerful targeting techniques, we can help you gain hyper-targeted real organic followers that won't unsubscribe after the promo campaign ends.",
    "Content is the king. Instagram is built on beautiful images. We will create engaging content and edit photos for your Instagram profile to help you stand out from the crowd.",
    "Using the proper hashtags can improve your reach by up to 70%. We will research and use the best and most relevant hashtags for your profile to reach more people.",
    "Blogging can be exhausting sometimes, we know. We will create a content plan and schedule all your posts in advance. So you won't have to create and edit posts on-the-go.",
    "Do you want more people to find you on Instagram? Then we will optimize your account with the right keywords and settings so your profile will attract the right audience.",
    "If you find it boring to manage your Instagram profile, reply to comments and direct messages, we can take over this whole routine. You won't have to worry about anything."
]

const cards = [];
const countCards = 6;
class Card {
    constructor(img, heading, paragraph) {
        this.img = img;
        this.heading = heading;
        this.paragraph = paragraph;
    }
}

for(let i = 0; i < countCards; i++){
    cards.push(new Card(images[i], headings[i], paragraphs[i]));
}



slide(0,1,2);
document.querySelector('.carousel .arrow-right').addEventListener('click', forward);
document.querySelector('.carousel .arrow-left').addEventListener('click', backward);