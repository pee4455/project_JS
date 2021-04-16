// use strinct 

'use strinct';

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriverLicense = true;
// } 

// if(hasDriverLicense) { console.log('I can drive')}

// function

// function logger(){
//     console.log('My name is Jonas');
// }

// Calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitprocess(apple, orange){
//     console.log(apple,orange);
//     const juice = `Juice with ${apple} apple and ${orange}
//     orange`;
//     return juice;
// }

//     const applej = fruitprocess(5, 0);
//     console.log(applej);

    // console.log(fruitprocess(5,0));



    // function declaration 
    // you can call function declaration  before define function
    
    // function calcAge1(birthyear) {
    //     return  birthyear - 543;
    // }
    // const age1 = calcAge1(2539);
    // console.log(age1);

    // function expression 
    // you can't call function expression   before define function
    
    // const calcAge2 = function(birthyear) {
    //     return birthyear - 543;
    // }
    // const age2 = calcAge2(2540);
    // console.log(age2);

    // Arrow Function
    // const calcAge3 = birthyear => birthyear - 543;
    // const age3 = calcAge3(2537);
    // console.log(age3);

    // const yearuntilretirment = (birthyear, firstname) => {
    //     const age = 2021 - birthyear;
    //     console.log(age);
    //     const retirment = 65 - age;
        // return retirment;   // return 1
    //     return `${firstname} retries in ${retirment} years` // return 2
    // }

    // console.log(yearuntilretirment(1968,'John'));
    // console.log(yearuntilretirment(1970, 'Bamba'));

    // function call other function

    // function cutfriutpieces(fruit){
    //     return fruit * 4;
    // }
    
    // function fruitprocess(apple, orange){
    //     const applepieces = cutfriutpieces(apple);
    //     const orangepieces = cutfriutpieces(orange);
        
    //     const juice = `Juice with ${applepieces} apple and ${orangepieces} orange.`;
    //     return juice;

    // }

    // console.log(fruitprocess(2,3));

    // Review Function

        // const calcAge = function(BirthYear) {
        //     return 2037 - BirthYear;
        // }
        
        // const yearUntilRetirement = function 
        // (yearbirth,firstname) {
        //         const age = calcAge(yearbirth);
        //         const retirement = 65 - age;
                
        //         if(retirement > 0){
        //         console.log(`${firstname} retires in ${retirement} years 💪`);
        //             return retirement;
                
        //         } else {
        //         console.log(`${firstname} has already retired 🎊`);
        //             return -1;
        //         }
        //     }

        //     console.log(yearUntilRetirement(1991, 'Jonas'));

        //     console.log(yearUntilRetirement(1970, 'Mike'));
        
        // Array

        // const friend1 = 'Micheal';
        // const friend2 = 'Steven';
        // const friend3 = 'Alzate';

        // const friends = ['michel','steven','alzate'];
        // console.log(friends);

        // const y = new Array(1991,1984,2008,2020);
        // console.log(y);

        // console.log(friends[0]);
        // console.log(friends[2]);

        // console.log(friends.length);
        // console.log(friends[friends.length-3]);

        // friends[2] = 'Jay';
        // console.log(friends);

        // const fn = 'Jonas';
        // const jonas = [fn,'schmidth',200-100,'teacer',friends];
        // console.log(jonas);
        // console.log(jonas.length);

        // Exercise
        // const calcAge = function (birthYear){
        //     return 2037 - birthYear;
        // }

        // const years = [1990, 1967, 2002, 2010, 2018];

        // const age1 = calcAge(years[0]);
        // const age2 = calcAge(years[1]);
        // const age3 = calcAge(years[years.length - 1]);
        // console.log(age1, age2, age3);

        // const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];

        // console.log(ages);
        
    //     // Array method
    //     const friends = ['michel','steven','alzate'];
    //     // Add element
    //     const newLength = friends.push('Jay');
    //     console.log(friends);
    //     console.log(newLength);
   
    //     // Add element First
    //     friends.unshift('John');
    //     console.log(friends);

    //     //Remove element
    //     friends.pop(); // last
    //     console.log(friends);
    //     const popped = friends.pop();
    //     console.log(popped);
    //     console.log(friends);

    //  const shifts =  friends.shift(); //first
        
    //  console.log(shifts);
    //  console.log(friends);

    //  console.log(friends.indexOf('steven'));
    //  console.log(friends.indexOf('owen'));


    //  console.log(friends.includes('steven'));
    //  console.log(friends.includes('owen'));

    // OBJECT
    // const jonas = {
    //     firstname: 'Jonas',
    //     lastname: 'schmidth',
    //     age: 2037 - 1991,
    //     job: 'Teacher',
    //     friends: ['Micheal','Peter','STeven']
    // };

    // console.log(jonas);
    // console.log(jonas.firstname);
    // console.log(jonas['age']);

    // const nameKey = 'name';
    // console.log(jonas['first' + nameKey]);
    // console.log(jonas['last' + nameKey]);

    // const InterestedIn = prompt('What do you want to know about Jonas? Chooses between firstName, lastname, age, job, and friends');
    // console.log(jonas[InterestedIn]);

    // if (jonas[InterestedIn]) {
    //     console.log(jonas[InterestedIn]);
    // } else {
    //     console.log('Wrong requested ! Chooses between firstname,lastname,age,job, and friends')
    // }

    // jonas.location = 'Portugate';
    // jonas['twitter'] = '@jonassschmenmamn';
    // console.log(jonas.location + jonas.twitter);

    // console.log(`${jonas.firstname} has ${jonas.friends.length} and his best friend is called : ${jonas.friends[0]}`)

    // Object Method
    const jonas = {
        firstname: 'Jonas',
        lastname: 'schmidth',
        birthyear: 1991,
        job: 'Teacher',
        friends: ['Micheal','Peter','STeven'],
        hasDriverLicense: true,

        // calcAge: function(birthyear){
        //     return 2021 - birthyear;
        // }
        
        calcAge: function () {
            console.log(this); // this is array of jonas
            return 2021 - this.birthyear;
        }

    };

            console.log(jonas.calcAge());

        // console.log(jonas.calcAge(1996));

        // console.log(jonas['calcAge'](1996));




