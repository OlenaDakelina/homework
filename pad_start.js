function pad(string, char, padLength, padStart) {
        const totalPadLength = Math.max(padLength - string.length, 0);
        if (padStart) {
        return char.repeat(totalPadLength) + string;
    } else {
        return string + char.repeat(totalPadLength);
    }
}
console.log(pad('qwerty', '+', 10, true));  
console.log(pad('qwerty', '+', 10, false)); 
console.log(pad('qwerty', '+', 6, true));   
console.log(pad('qwerty', '+', 3, false));  