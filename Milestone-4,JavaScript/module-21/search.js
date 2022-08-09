const lyrics = 'Tumi bondu kala pakhi ami jen ki. bosonto kale tomai bolte pari ni';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');

const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);

// ------------------------------------------
// indexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tumi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('exist inside the string');
}
else{
    console.log('can not find it');
}

// startsWith
console.log(lyrics.startsWith('Tumi'));

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));
