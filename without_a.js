const regex = /^[^Aa]{6,}$/;

const testStrings = [
    "abcdef", 
    "bcdefg", 
    "Abcdef",
    "abcdea", 
    "bcdef",  
    "123456", 
];

testStrings.forEach(str => {
    console.log(`${str}: ${regex.test(str)}`);
});