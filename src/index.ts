import _ from 'lodash';

export const GreetingResponses = [
    'Ohaiyo',
    'Yo! ✨',
    'Henlo!',
    'Sup!',
    'Heya!',
    'Hi hi~',
    'Aloha! 🌺',
    '*waves*',
    'Heyyo!',
    'Wassup!'
]

export const greeting = () => {
    return _.sample(GreetingResponses);
}