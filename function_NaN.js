function isNaNCustom(value) {
        if (value === undefined || value !== value) {
        return true;
    }    
        if (typeof value === 'object' && value !== null) {
        value = value.valueOf();
        if (typeof value === 'object') {
            value = value.toString();
        }
    }    
        if (typeof value === 'string') {
        value = value.trim();
    }
    const num = Number(value);
    return num !== num;  
}
console.log(isNaNCustom(NaN)); 
console.log(isNaNCustom(undefined)); 
console.log(isNaNCustom({})); 

console.log(isNaNCustom(true)); 
console.log(isNaNCustom(null)); 
console.log(isNaNCustom(37)); 

console.log(isNaNCustom("37")); 
console.log(isNaNCustom("37.37")); 
console.log(isNaNCustom("37,5")); 
console.log(isNaNCustom("123ABC"));
console.log(isNaNCustom(""));
console.log(isNaNCustom(" ")); 

console.log(isNaNCustom(new Date())); 
console.log(isNaNCustom(new Date().toString())); 

console.log(isNaNCustom([])); 
console.log(isNaNCustom([1])); 
console.log(isNaNCustom([1, 2])); 