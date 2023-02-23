const div = document.querySelector('div');

// 011-2458-4517
const regex = /\d{3}-\d{4}-\d{4}/;

// const result = regex.test('011-2458-4517');
const result = regex.test('011-2458-45!7');

// apple이라는 단어 필터링
const regex2 = /apple/;
const text = "Hello banana and apple";
const result2 = text.match(regex2);
const result3 = text.replace(regex2, 'watermelon');

div.innerHTML = result2
