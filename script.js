// 1.
// Use an array method to remove the last string of the array secretMessage.

// 2.
// Great! You can check your work by logging the .length of the array.

// At this point, the length should be 1 less than the original length.
// 3.
// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.

// 4.
// Change the word easily to the word right by accessing the index and replacing it.

// 5.
// Use an array method to remove the first string of the array.

// 6.
// Use an array method to add the string Programming to the beginning of the array.

// 7.
// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.

// 8.
// On one line, use console.log() and .join() to print the secret message as a sentence.

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
// console.log(secretMessage.length);

secretMessage.push('to', 'Program');
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.slice(6, 5, 'know');

console.log(secretMessage.join(' '))

// final output should look like this = Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program