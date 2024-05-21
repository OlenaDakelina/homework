var result = "number"+ 3 + 3;
console.log(result) //результатом буде "number33" тому що відбулась конкатенація стрінга з числами за допомогою оператора +
var result = null + 3;
console.log(result);/* результат- 0+3=3 оскільки javaScript конвертує null в 0 */
var result = 5 && "qwerty";
console.log(result);/* результат -qwerty, логічний ператор "i" (&&) повертає значення правого операнда і якщо обидва є істинними як у випадку з 5 і "qwerty" (вони є істинним), 
тому повертається"qwerty" */
var result = +'40' + +'2' + "hillel";
console.log(result); /* унарний плюс конвертує "40" в числ0 40 , так само "2" до числа 2, 
сума чисел 40 + 2 дорівнює 42 і відбувається конкатенація, тому буде 42hillel */
var result = '10' - 5 === 6;
console.log(result);/*відбувається строге порівняння результату виразу '10' - 5 (що є числом 5) і число 6. 
Оскільки вони не рівні, результат порівняння буде false */
var result = true + false;
console.log(result); /* true це 1, а false це 0, тому результатом буде 1. */

var result = '4px' - 3;
console.log(result); /* '4px' не може бути конвертовано в число, тому результатом буде NaN */ 

var result = '4' - 3;
console.log(result);/* "4" виглядає як string, javascript розуміє що це число, тому 4-3 =1 */

var result = '6' + 3 ** 0;
console.log(result); /* виконується операція підняття до ступеня (**), і 3 ** 0 дорівнює 1.
Далі - операція конкатенації (+) між стрінгом '6' і числом 1, оскільки так працює з + і тому буде 61 */

var result = 12 / '6';
console.log(result); /* рядок '6' автоматично конвертується в число 12/6 = 2, бо так працює з діленням */ 

var result = '10' + (5 === 6);
console.log(result); /*Оператор === робить строге порівняння чисел 5 і 6. Так як вони не рівні, результатом порівняння буде false.
'10' + false: Рядок '10' конкатенується з результатом порівняння (5 === 6). 
JavaScript автоматично конвертує false в string, отже, результатом буде '10false'.  */

var result = null == '';
console.log(result); //результат false тому, що null може дорівнювати тільки null а в даному порівнянні це не так

var result = 3 ** (9 / 3);
console.log(result); /* Оператор / виконує ділення числа 9 на число 3, результатом буде 3.
Оператор ** підносить число 3 до ступеня 3. Таким чином, 3 ** 3 дорівнює 27.*/ 

var result = !!'false' == !!'true';
console.log(result);/* !!'false': Оператор !! використовується для конвертації значень в булевий тип. 
Однак рядок 'false' не є пустим рядком, тому буде перетворено в true. 
Два !! відновлять булевий тип до значення string, тобто 'false' буде конвертовано в true.
!!'true': Також, рядок 'true' не є пустим рядком, тому буде перетворено в true. 
Два !! відновлять булевий тип до значення рядка, тобто 'true' буде конвертовано в true. 
true == true: Тепер порівнюються два булевих значення true. Результат порівняння буде true*/


var result = 0 || '0' && 1;
console.log(result); /* Пріоритет && вищий, ніж ||. 
'0' && 1: Оператор && повертає значення другого операнду, оскільки обидва операнди є істинними. 
 У цьому випадку '0' конвертується в true, і результатом цього виразу буде 1. 
 0 || 1: Оператор || повертає значення першого істинного операнду. 
 У цьому випадку, оскільки перший операнд (0) є хибним, результатом буде значення другого операнду (1).*/


var result = (+null == false) < 1;
console.log(result); /* Оператор + конвертує null в число, і результатом буде 0. 
(0 == false): Оператор == порівнює 0 і false. Тоді false автоматично конвертується в число (0) при порівнянні. 
Результат порівняння буде true, оскільки обидва значення мають однакові числові значення(0).
true < 1: Оператор < порівнює true (конвертовано в 1) і 1. 
Результатом буде false, оскільки 1 не більше, ніж true (яке в даному контексті розглядається як 1).*/ 

 var result = false && true || true;
 console.log(result); /*false && true: Оператор && повертає false, оскільки один з операндів є false. Далі вираз стає false || true.
 false || true: Оператор || повертає значення першого істинного операнду. 
 У цьому випадку, оскільки перший операнд (false) є хибним, результатом буде значення другого операнду (true). */


 var result = false && (false || true);
 console.log(result); /* false || true: Оператор || повертає значення першого істинного операнду.
  У цьому випадку, так як перший операнд false (хибний), результатом буде значення другого операнду true. 
  false && true: Оператор && повертає false, оскільки один з операндів є false. */

 var result = (+null == false) < 1 ** 5;
 console.log(result); /* Оператор + конвертує null в число, і результатом буде 0.
 (0 == false): Оператор == порівнює 0 і false.Тоді false конвертується в число(0) при порівнянні.  
 Результат порівняння буде true, оскільки обидва значення мають однакові числові значення(0). 
 1 ** 5: Оператор ** виконує підняття до ступеня, і 1 ** 5 дорівнює 1.
 true < 1: Оператор < порівнює true (конвертоване в 1) і 1. Результатом буде false, оскільки 1 не більше, 
 ніж true (яке в даному контексті розглядається як 1).*/