// let mass_mark = 95
// let height_mark = 1.88

// let mass_john = 85
// let height_john = 1.76

// let bmi_mark = mass_mark / height_mark**2;
// let bmi_john = mass_john / height_john**2;
// let markhigherbmi = bmi_mark > bmi_john;

// console.log(bmi_mark);
// console.log(bmi_john);
// console.log(markhigherbmi);

// if (bmi_mark > bmi_john) {
//     alert(`Mark's BMI ${bmi_mark} is Higher Than John ${bmi_john}`)
// } else {
//     alert(`John's BMI ${bmi_john} is Higher Than Mark ${bmi_mark}`)
// }


// Code Challenge # 3 
// let dolphine_score = 97+112+101
// let koalas_score = 109+95+106

// dolphine_score = dolphine_score/2
// koalas_score = koalas_score/2

// alert("DOlPHINE :"+dolphine_score);
// alert("KOALAS :"+koalas_score);

// if(dolphine_score > koalas_score){
//     console.log("dolphine win")
// } else if(dolphine_score < koalas_score){
//     console.log("koalas win")
// } else {
//     console.log("Draw")
// }
// if(dolphine_score > koalas_score && dolphine_score >= 100){
//  console.log("dolphine win bonus")
// } else if(koalas_score > dolphine_score && koalas_score >= 100) {
// console.log("koalas win bonus")
// } else if(dolphine_score == koalas_score && dolphine_score && koalas_score >= 100){
//     console.log("Draw bonus")
// } 
// Code Challenge #4

// const bill = Number(prompt("Enter your price")) ;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// alert(`the bill was ${bill}`);
// alert("the tip was"+tip);
// alert(`the total was ${bill + tip}`); 


// Code Challenge #5

// const calcAverage = (a,b,c) => (a+b+c)/3 ;

// let scoreDolphineA = calcAverage(424,23,71);
// let scoreKoalasB = calcAverage(65,54,49);

// console.log('Dolphine score :'+scoreDolphineA);
// console.log('Koalas Score :'+scoreKoalasB);

// function checkwinner(scoreDolphine, scoreKoalas){
//     if(scoreDolphine >= 2*scoreKoalas){
//         alert(`Dolphine team win 🐬
//         Score Dolphine :   ${scoreDolphine} vs Score Koalas : ${scoreKoalas}`);

//     } else if(scoreKoalas >= 2*scoreDolphine){
//         alert(`Koalas team win 🐨 
//         Score Koalas : ${scoreKoalas} vs Score Dolphine : ${scoreDolphine}`);
//     } else {
//        alert(`no noe win 🤞`)
//     }
// }

//  checkwinner(scoreDolphineA,scoreKoalasB);

//  // Test 2
//  scoreDolphineA = calcAverage(24,23,71);
//  scoreKoalasB = calcAverage(100,100,100);
 
// console.log('Dolphine score :'+scoreDolphineA);
// console.log('Koalas Score :'+scoreKoalasB);
//  checkwinner(scoreDolphineA,scoreKoalasB);


// codeing challenge #6

// const caltip = money => money >= 50 && money <= 300 ? money * 0.15 : money * 0.20; 


// function calcTip(money){
//     return money >=50 && money <=300 ? money * 0.15 : money * 0.20;
//     if(money>=50 && money<=300){

//         console.log( money * 0.15);
//         return( money * 0.15);
       
//     } else {
//         console.log( money * 0.20);
//         return( money * 0.20);
     
//     }
      
// }



// let bills = [125, 555, 44];


// let tips = [calcTip(bills[0]), 
//             calcTip(bills[1]), 
//             calcTip(bills[2])];

// console.log(tips);

// let total = [bills[0] + tips[0], 
//              bills[1] + tips[1], 
//              bills[2] + tips[2]];

//         console.log(total);


// Code challege #6

const mark = 
{
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcbmi: function(){
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
};


const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcbmi: function(){
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }

};

mark.calcbmi();
john.calcbmi();

console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullname}'s BMI ${mark.bmi}
    is higher than ${john.fullname} BMI ${john.bmi}`)
} else if (john.bmi > mark.bmi)
 {
    console.log(`${john.fullname}'s BMI ${john.bmi}
    is higher than ${mark.fullname} BMI ${mark.bmi}
    `)
 }