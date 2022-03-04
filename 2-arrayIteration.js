// *-----------------------------------------------------
// *                      FOREACH
// *-----------------------------------------------------

// const students = ["Bedirhan", "Tuncay", "Mesut", "Enes", "Onur"];

// //? 1.Method
// const print = (name) => {
//   console.log(name);
// };

// students.forEach(print);

// //? 2.Anynmous Method
// console.log("*******************************");
// students.forEach((student) => console.log(student));

// //? Example
// const payments = [100, 300, -200, 500, -400, 225, 1000, -700];
// let sum = 0;
// payments.forEach((p) => (sum += p));
// console.log("SUM:", sum);

// //! foreach doesnt return
// // const sumofPayments = payments.forEach((p) => (sum += p))
// // console.log(sumofPayments);

// //* Example
// payments.forEach((p, i) => {
//   p > 0
//     ? console.log(i + 1, `You deposit ${p}`)
//     : console.log(i + 1, `You withdraw ${p}`);
// });

//*-----------------------------------------------------
//*                      MAP
//*-----------------------------------------------------

//* multiply each element of array by 2
//*-------------------------------------------------------
// const numbers = [2, 3, 5, 6, 8];
// const doubled = numbers.map((n) => n * 2);
// console.log(doubled, numbers);

//* if a grade is less than 50, increase it by 20% oherwise
//* increase it by 10% and store all value in the grades array.
//*-------------------------------------------------------
// let grades = [30, 50, 77, 38, 44, 80];

// grades = grades.map((grade) => (grade > 50 ? grade * 1.1 : grade * 1.2).toFixed(2));
// console.log(grades);

// grades = grades.map((grade) => {
//  return grade > 50 ? grade * 1.1 : grade * 1.2;
// });

// console.log(grades);

// const gradesInfo = grades.map((grade, index) => {
//     const newGrade = (grade > 50 ? grade * 1.1 : grade * 1.2).toFixed(2);
//     return `${index + 1}.student's grade : ${newGrade}`
// });
// console.log(gradesInfo);


//* Test the each item of the words array whether palindromic or not.
//* Return the result as an array which consists of true or
//* false values for each item
//*-------------------------------------------------------

// const words = ["mum", "kek", "gel", "ısı", "iyi"];
// // const rWords = words.map((x)=> (x.split("").reverse().join("") === x) ? true : false)
// // console.log(rWords);

// const checkPalindrome = words.map((word) => [...word].reverse().join('') === word);//önce spread ile array'a çevirip recerse uyguluyoruz. Daha sonrada Array fonksiyonu strinde çeviriyoruz.
// console.log(checkPalindrome);

// //? Alternative : sadece true olanları arraya ekle?

// const chekPalindrome = words.map((w)=>{
//     const reverse = w.split("").reverse().join("");
//     if (reverse == w) {
//         return w;
//     }
// });
// console.log( chekPalindrome); //Burada false olan değerler undefined döner. Bu sebeple çok kullanışlı olmaz. filter() kullanımı daha uygundur.

//*-----------------------------------------------------
//*                      FILTER
//*-----------------------------------------------------

// const checkPalindrome = words.filter((word) => [...word].reverse().join('') === word);
// console.log(checkPalindrome);

//*-----------------------------------------------------
//*                      PIPE LINE
//*-----------------------------------------------------
//Birden fazla method birlikte kullanılmasıdır. Aşağıdaki örnekte filter ile seçilmiş olan elemanlar map ile uppercase yapılacak. Sonra her bir elemanı ekrana bastırın.

// const words = ["mum", "kek", "gel", "ısı", "iyi"];

// const checkPalindrome = words.filter((word) => [...word].reverse().join('') === word).map((word)=>word.toUpperCase()).forEach((word)=> console.log(word));
// console.log(checkPalindrome);

// *-----------------------------------------------------
// *                      REDUCE
// *-----------------------------------------------------

//* calculate the sum of all elements of array
//* and print result into console
//*-------------------------------------------------------

// const salaries = [10000, 15000, 32000, 43000, 20000];

// const avgSalary = salaries.reduce((acc,salary)=> acc + salary,0)/salaries.length;
// console.log(avgSalary);

// //*Maaşı 20000 den fazla olanların toplamı;

// const greaterThan20000 = salaries.filter((s)=> s > 20000).reduce((x,y) => x+y,0);
// console.log(greaterThan20000);

// *-----------------------------------------------------
// *                      NESTED ARRAY ITERATION(JSON)
// *-----------------------------------------------------


let personels = [
    {
      id: 1,
      name: "Ali",
      surname: "Yılmaz",
      job: "developer",
      age: 30,
      salary: 5000,
    },
    {
      id: 2,
      name: "Ayşe",
      surname: "Yılmaz",
      job: "tester",
      age: 35,
      salary: 3000,
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Öztürk",
      job: "team lead",
      age: 40,
      salary: 7000,
    },
    {
      id: 4,
      name: "Fatma",
      surname: "Ayaz",
      job: "developer",
      age: 26,
      salary: 4500,
    },
  
    {
      id: 5,
      name: "Can",
      surname: "Deniz",
      job: "tester",
      age: 24,
      salary: 3500,
    },
  ];

  console.log(personels);

  //EXAMPLE1:display the jobs in the people array.

personels.forEach((p)=>console.log(p.job));

//EXAMPLE2: increment the ages by one and store them to a new array.
const ages = personels.map((p)=> p.age + 1);
console.log(ages);

//EXAMPLE3 create new object which consist of uppercased name + surmane and incremented the age by 5.
const newPersonels = personels.map((p)=> {
    return {
        name:p.name.toLocaleUpperCase() + " " + p.surname.toLocaleUpperCase(),
        age : p.age + 5,
    }
});

console.log(newPersonels);


