var res= prompt("Скільки тобі років?")
console.log('is "res" equal NaN? ' + isNaN(res));
if (res < 0) {
  console.log("Будь ласка, введіть додатнє число.")};
if (res==='1' || (res % 10 ===1 && res !== '11')){
console.log(res+"рік")
} else if (res % 10>=2 && res %10<= 4 && (res <10 ||res >20))
{
console.log(res+"роки")
}else {
console.log(res+"років")
} 
