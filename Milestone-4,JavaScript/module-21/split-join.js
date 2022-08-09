const lyrics = 'Tumi bondu kala pakhi ami jen ki. bosonto kale tomai bolte pari ni';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
// console.log(parts);
// console.log(sentence);
// console.log(chars);

const partial = lyrics.slice(5, 8);
console.log(partial);
const partial2 = lyrics.substring(5,8);
console.log(partial2);

const lines = ['Tumi bondu kala pakhi ami jen ki',
'Bosonto kale tomai bolte pari ni',
'Rong jomeche sada kala'];
const newSong = lines.join('. ');
console.log(newSong);

