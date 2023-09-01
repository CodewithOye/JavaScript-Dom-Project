
// div main content element

const divContainer = document.createElement('div');
divContainer.setAttribute('class','container');

// div header element

const divHeader = document.createElement('div');
divHeader.setAttribute('class','header');

// header element

const header = document.createElement('h2');
header.textContent='JavaScript Quotes Generator';

// div main content element

const divMainContent = document.createElement('div');
divMainContent.setAttribute('id','main');


//div text area div element

const divTextArea = document.createElement('div');
divTextArea.setAttribute('class','text');


// span element

const spanQuotes = document.createElement('span')
spanQuotes.setAttribute('class','quote');
spanQuotes.textContent ="'Perhaps a man's character is like a tree, and his reputation like its shadow; the shadow is what we think of it; the tree is the real thing.” “I am not concerned that you have fallen; I am concerned that you arise.” 'Nearly all men can stand adversity, but if you want to test a man's character, give him power.'";

const divPerson = document.createElement('div')
divPerson.setAttribute('class','person');
divPerson.textContent = '- Abraham Lincoln -';


const divButtonArea= document.createElement('div')
divButtonArea.setAttribute('class','button');

const newQuotesBtn = document.createElement('button')
newQuotesBtn.setAttribute('id','new-quote');
newQuotesBtn.innerText =' New Quotes ';

document.body.append(divContainer);
divHeader.append(header)
divContainer.append(divHeader,divMainContent)
divMainContent.append(divTextArea,spanQuotes,divPerson,divButtonArea);
divButtonArea.appendChild(newQuotesBtn)







let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// different  quotes

const quotes = [{
  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  person: `- Nelson Mandela -`
},{
  quote: 'The way to get started is to quit talking and begin doing.',
  person: `- Walt Disney -`

},{
  quote: "'Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. '",
  person: `- Steve Jobs -`

},{
  quote: '"If life were predictable it would cease to be life, and be without flavor." ',
  person: `- Eleanor Roosevelt -`
},{
  quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  person: `- Oprah Winfrey -`
},{
  quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  person: `- James Cameron - `

},{
  quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  person: `- Mother Teresa -`

},{
  quote: "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles. ",
  person: `- Wayne Dyer -`

},{
  quote: '"Learn the rules like a pro, so you can break them like an artist."',
  person: `- Pablo Picasso -`

},{
  quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
  person: `- Winston Churchill - `

},{
  quote: '" Strength does not come from physical capacity. It comes from an indomitable will."',
  person: ` - Mahatma Gandhi -`

},{
  quote: '“Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.”',
  person: `Jack Handey`

},{
  quote:  "'I love being married. It's so great to find that one special person you want to annoy for the rest of your life.'",
  person: `Rita Rudner`

},{
  quote: ' “When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway.”',
  person: `Erma Bombeck`

},{
  quote: "'I want my children to have all the things I couldn't afford. Then I want to move in with them.'",
  person: `Phyllis Diller`

},{
  quote: "'It's not just about being better. It's about being different. You need to give people a reason to choose your business. '",
  person: `- Tom Abbott -`

},{
  quote: '"Leadership and learning are indispensable to each other."',
  person: ` - John F. Kennedy -`

},{
  quote: '"The leader has to be practical and a realist yet must talk the language of the visionary and the idealist."',
  person: `- Eric Hoffer -`

},{
  quote: '"The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails."',
  person: `- John Maxwell -`

},{
  quote: "'The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime.'",
  person: `- Babe Ruth -`

},{
  quote: '"It is amazing what you can accomplish if you do not care who gets the credit."',
  person: ` - Harry Truman -`

},{
  quote: '"It is the long history of humankind (and animal kind, too) that those who learned to collaborate and improvise most effectively have prevailed."',
  person: `- Charles Darwin -`

},{
  quote: "'I didn't get there by wishing for it or hoping for it, but by working for it.'",
  person: ` - Estée Lauder -`

},];


btn.addEventListener('click', () =>{
  let randomNum = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomNum].quote;
  person.innerText = quotes[randomNum].person;
})

