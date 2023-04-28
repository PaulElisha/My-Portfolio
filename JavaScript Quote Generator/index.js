let button = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const quotes = [
{
    quote: `"You want to have a future where you're expecting things to be better, 
    not one where you're expecting things to be worse."`,
    author: `Elon Musk`
}, { 
    quote: `“To practice five things under all circumstances constitutes perfect virtue; 
    these five are gravity, generosity of soul, sincerity, earnestness, and kindness.”`,
    author: `Confucius`
}, {
    quote: `“Real knowledge is to know the extent of one's ignorance.” `,
    author: `Confucius`
}, {
    quote: `“Get going. Move forward. Aim High. Plan a takeoff. 
    Don't just sit on the runway and hope someone will come along and push the airplane. 
    It simply won't happen. Change your attitude and gain some altitude. Believe me, you'll love it up here.”`,
    author: `Donald Trump`
}, {
    quote: ` "The most beautiful experience we can have is the mysterious. 
    It is the fundamental emotion that stands at the cradle of true art and true science.”`,
    author: `Albert Einstein`
}, {
    quote: `"If life were predictable it would cease to be life, and be without flavor."`,
    author: `Michael Jordan`
}, {
    quote: `“Education is the most powerful weapon which you can use to change the world.”`,
    author: `Nelson Mandela`
}, {
    quote: `“The key to good decision making is not knowledge. 
    It is understanding. We are swimming in the former. 
    We are desperately lacking in the latter.”`,
    author: `Malcolm Gladwell`
}, {
    quote: `“The key to good decision making is not knowledge. 
    It is understanding. We are swimming in the former. 
    We are desperately lacking in the latter.”`,
    author: `Malcolm Gladwell`
}, {
    quote: `“The key to good decision making is not knowledge. 
    It is understanding. We are swimming in the former. 
    We are desperately lacking in the latter.”`,
    author: `Malcolm Gladwell`
}, {
    quote: `“The key to good decision making is not knowledge. 
    It is understanding. We are swimming in the former. 
    We are desperately lacking in the latter.”`,
    author: `Malcolm Gladwell`
}, {
    quote: `“The key to good decision making is not knowledge. 
    It is understanding. We are swimming in the former. 
    We are desperately lacking in the latter.”`,
    author: `Malcolm Gladwell`
}, {
    quote: `"The best leaders are the ones who are able to inspire 
    others to be their best selves and achieve things they never thought possible."`,
    author: `Barak Obama`
}, {
    quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
    author: `Socrates`
}, {
    quote: `"Success is determined not by whether or not you face obstacles, 
    but by your reaction to them. And if you look at these obstacles as a containing fence, 
    they become your excuse for failure. If you look at them as a hurdle, each one strengthens you for the next."`,
    author: `Ben Carson`
}, {
    quote: `"Gravity explains the motions of the planets, 
    but it cannot explain who set the planets in motion. 
    God governs all things and knows all that is or can be done."`,
    author: `Isaac Newton` 
}, {
    quote: `"The universe is full of magical things patiently waiting for our wits to grow sharper."`,
    author: `Eden Phillipotts`
}, {
    quote: `"I do not know what I may appear to the world, 
    but to myself I seem to have been only like a boy playing on the sea-shore, 
    and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, 
    whilst the great ocean of truth lay all undiscovered before me."`,
    author: `Isaac Newton`
}, {
    quote: `"Many waters cannot quench love, neither can floods drown it." `,
    author: `King Solomon`
}, {
    quote: `“Love life. Engage in it. Give it all you’ve got. 
    Love it with a passion because life truly does give back, many times over, what you put into it.”`,
    author: `Maya Angelou`
}, {
    quote: `“I've learned that people will forget what you said, 
    people will forget what you did, but people will never forget how you made them feel.”`,
    author: `Maya Angelou`
}, {
    quote: `"The ultimate measure of a man is not where he stands in moments of comfort and convenience, 
    but where he stands at times of challenge and controversy."`,
    author: `Martin Luther King`
}, {
    quote: `“There comes a time when one must take a position that is neither safe, 
    nor politic, nor popular, but he must take it because conscience tells him it is right.”`,
    author: `Martin Luther King`
}, {
    quote: `“It is this simplicity that makes the uneducated more effective than the educated when addressing popular audiences—makes them, 
    as the poets tell us, ‘charm the crowd’s ears more finely.’ Educated men lay down broad general principles; 
    uneducated men argue from common knowledge and draw obvious conclusions.”`,
    author: `Aristotle`
}, {
    quote: `"The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction."`,
    author: `King Solomon`
},
];

button.addEventListener("click", () => {
    let qlen = quotes.length;
    for (i=0; i < quotes.length; i++) {
        let random = Math.floor(Math.random() * qlen);
        quote.innerText = quotes[random].quote;
        author.innerText = quotes[random].author;
        }
    })