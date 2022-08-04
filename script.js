'use script'
// Напишите функцию, которая будет находить сумму квадратов элементов массива. 
// let arr1 = [1, 2, 3, 4];
// function sq ( arr ){
//     let sum = 0 ;
//     for ( let i of arr){
//         sum += i **2 ;

//     }
//     return document.write(sum)
// }
// sq(arr1) ;

// Сделайте функцию getDigitsSum, 
// которая параметром будет принимать целое число и возвращать сумму его цифр. 

// function getDigitsSum(n){
//   let arr = String(n).split('')
//   let sum = 0 ;
//   for (let i of arr){
//     sum += Number(i);
//   }
//   return document.write(sum) ;
// }
// getDigitsSum(11);

// Реализуйте функцию getDivisors, которая параметром будет принимать число и 
// возвращать массив его делителей, то есть чисел, на которое делится наше число. 
// К примеру, если мы передадим число 24 - мы должны получить следующий массив:
// [1, 2, 3, 4, 6, 8, 12, 24]

// function getDivisors ( n ) 
// {
//     let arr = [] ;
// for ( let i = 1 ; i <= n ; i ++)
// {
//     if ( n % i == 0 )
//     {
//         arr.push(i)
//     }
// }
//   return document.write(arr)
// } 
// getDivisors ( 836 ) 

// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать 
// ее символы в обратном порядке. Решите задачу без цикла, 
// используя комбинацию стандартных функций JavaScript. 

// function reverseStr(str)
// {
//     let res = str.split('').reverse().join('')
//     return document.write(res)
// }
// let str1 = "eksbo"
// reverseStr(str1)


// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять
//  из массива все элементы с таким значением. 
// function delElem ( n , arr )
// {
// for (let i = 0 ; i < arr.length ; i ++){
//   if ( arr[i] == n )
//   {
//     arr.splice( i , 1)
//   }
// }
//  return document.write( arr )
// }
// let arr1 = [ 2 , 4, 2, 5 , 2 , 8 ]
// delElem ( 2 , arr1 )

// Сделайте функцию, 
// заполняющую массив целыми числами от 1 до заданного. 

// function addArr ( n )
// {
//     let arr = [] ;
//     for (let i = 1 ; i <= n ; i ++ )
//     {
//      arr.push(i)
//     } 
//     return document.write (arr)

// }
// addArr ( 44 )

// Сделайте функцию, заполняющую массив целыми числами от начального до 
// конечного заданных чисел.
// function addArr ( n , k )
// {
//     let arr = [] ;
//     for (let i = n ; i <= k ; i ++ )
//     {
//      arr.push(i)
//     } 
//     return document.write (arr)

// }
// addArr ( 44 ,55 )

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, 
// что все элементы в этом массиве являются четными числами. 
// function forArr( arr )
// {
//     for (let i = 0 ; i < arr.length ; i ++ )
//     {
//         if (arr[i] % 2 != 0 ){
//             return console.log(false);
//         }
//     } 
//     return console.log(true); 
// }
// let arr1 = [ 2,4,6,8 ] ;
// let arr2 = [ 2,4,6,9 ] ;
// forArr(arr1) ;
// forArr(arr2) ;

// Сделайте функцию, которая параметром будет принимать число и проверять,
//  что все цифры это числа являются нечетными. 
// function comparison (n) {
//     let arr = String(n).split('')
//     for ( let i = 0 ; i < arr.length ; i ++){
//         if (arr[i] % 2 != 0){
//             return console.log(true);
//         }
//     }
//     return console.log(false);
// }
// comparison (44) ;

// Сделайте функцию, которая параметром будет принимать массив и проверять,
//  есть ли в этом массиве два одинаковых элемента подряд. 

// function same ( arr ){
//     let k ;
//     for ( let i = 1 ; i < arr.length ; i ++)
//     {
//         k = arr[i-1] ;
//         if ( k == arr[i]){
//             return console.log(true);
//         }
//         i ++ ;
//     }
// return console.log(false);
// }
// let arr1 = [1,2,3,4,5] ;
// let arr2 = [1,2,3,3,4,5] ;
// same (arr1) ;
// same (arr2) ;

//  Дана следующая функция:
// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// Перепишите ее код в сокращенной форме согласно изученной теории. 
// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} 
// 		return false;
	
//  }
//  console.log(func(11, 12))

// Дана следующая функция:
// function func(a, b) {
// 	if (a != b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// Перепишите ее код в сокращенной форме согласно изученной теории. 
// function func(a, b) {
// 	if (a != b) {
// 		return true;
// 	} 
// 		return false;

// }
// console.log(func (11 ,11));

// Дана следующая функция:
// function func(a, b) {
// 	if (a + b >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// Перепишите ее код в сокращенной форме согласно изученной теории. 
// function func(a, b) {
// 	return a + b >= 10

// }
// console.log(func(9,3));



// Дана следующая функция:
// function func(num) {
// 	if (num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// Перепишите ее код в сокращенной форме согласно изученной теории. 
// function func(num) {
//  return num >= 0 ;
// }
// console.log(func(1));


