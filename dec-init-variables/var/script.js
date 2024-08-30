// START First Example


// function varExample1() {
//   // var a = 10;
//   console.log(`Function scope: ${a}`);
// }

// console.log(`Out of function scope: ${a}`);
// varExample1();

// START First Example

// START Second Example
/* 
function varExample2() {
  console.log(a); // undefined (hoisted variable declaration)
  var a = 10;
  console.log(a); // 10  
}

varExample2();
*/
// END Second Example

/* 
همان قسمی که گفتینم با تعریف کردن واریابل توسط وار اسکوپ آن در محدوده فنکشن و یا گلوبل باقی میماند، باید متوجه باشیم که اگر وریابل در گوبل اسکوپ تعریف شد قابل دسترس در تمامی فنکشن ها و یا بلاک ها میباشد.

هایستینگ یک میکانیزم برنامه نویسی در جاوااسکریپت میباشد که، انتقال دادن فنکشن و یا واریابل تعریف شده در یک اسکوپ به بالای آن اسکوپ میابشد
*/
