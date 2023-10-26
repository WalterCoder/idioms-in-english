// Variables
let btn = document.querySelector('#new-idiom');
let meaning = document.querySelector('.meaning');
let idiom = document.querySelector('.idiom');

const quotes = [
  {
    meaning: `this means that the person you are just talking about actually appears at that moment.
    “Hi Tom, speak of the devil, I was just telling Sara about your new car".`,
    idiom: `Speak of the devil`
  },
  {
    meaning: `this means agreeing with someone.
    “They finally saw eye to eye on the business deal.”`,
    idiom: `See eye to eye`
  },
  {
    meaning: `an event that happens infrequently.
    “I only go to the cinema once in a blue moon.”`,
    idiom: `Once in a blue moon`
  },
  {
    meaning: `something that will never happen.
    “When pigs fly she’ll tidy up her room.”`,
    idiom: `When pigs fly`
  },
  {
    meaning: `something is very expensive.
    “Fuel these days costs an arm and a leg.”`,
    idiom: `To cost an arm and a leg`
  },
  {
    meaning: `to accidentally reveal a secret.
    “I let the cat out of the bag about their wedding plans.”`,
    idiom: `Let the cat out of the bag`
  },
  {
    meaning: `it means to share gossip or juicy or exclusive details about a situation or person. "Could you spill the tea about her"`,
    idiom: `Spill the tea`
  },
  {
    meaning: `is used to indicate that you are providing just the basic facts rather than giving a lengthy explanation for something. "I went to the party, I danced and to make a long story short, I kissed her."`,
    idiom: `Make a long story short`
  },
  {
    meaning: `you shouldn't judge someone or something based only on what you see on the outside or only on what you perceive without knowing the full situation.`,
    idiom: `Don’t judge a book by its cover`
  },
  {
    meaning:`To manage to make someone understand or believe something "I would like to get a cross how important is to learn english as a second language "`,
    idiom:`get a cross`
  },
  {
    meaning:`to expect (something) with pleasure."I'm looking forward to work with you!"`,
    idiom:`look forward`

  },
  {
  meaning:`to start something new or important" after I learned english , I embarked on learning programming"`,
  idiom:`embark on`
},
{
    meaning:`   to think in a creative and unconventional way, seeking original and innovative solutions"to stand out in the market, I need to think ouside the box and find a unique strategy"`,
    idiom:`Outside the box`
},
{
    meaning:`Requires everyone on the team to contribute and work together to achieve a common goal."We have a major project, so we need all hands on deck. It's time for everyone to pitch in!"`,
    idiom:`All hands on deck`
},
{
meaning: `To contribute or help with a task, project, or effort."We have a tight deadline for this project, and we need everyone to pitch in and work extra hours to meet it."`,
idiom:`Pitch in`
},
{
    meaning: `To start a task quickly and effectively, without wasting time."We expect the new employee to be ready to start and hit the ground running from day one."`,
    idiom:`Hit the ground running`
    }
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  meaning.innerText = quotes[random].meaning;
  idiom.innerText = quotes[random].idiom;
});
