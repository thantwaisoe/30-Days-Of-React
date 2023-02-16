const users = {
   Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30,
   },
   Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50,
   },
   Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50,
   },
   Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40,
   },
   John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50,
   },
   Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40,
   },
   Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40,
   },
};
// TODO Count logged in users,count users having greater than equal to 50 points from the following object.

const findLoginUsers = (data) => {
    let result = data.map((eachRow) => eachRow[1].isLoggedIn); // [ false, false, true, false, true, false, false ]
    let countLoginUser = 0;
    result.forEach((e) => {
       if (e === true) countLoginUser++;
    });    return countLoginUser
}
const CheckPoint = (data) => {
    let result = data.map((eachRow) => eachRow[1].points >= 50); // [ false, false, true, false, true, false, false ]
    let checkPointCount = 0;
    result.forEach((e) => {
       if (e === true) checkPointCount++;
    });    return checkPointCount
}

const findUsers = (dataObj) => {
   let userValue = Object.entries(dataObj);
   let countLogin = findLoginUsers(userValue)
   let checkPointCount = CheckPoint(userValue)

   console.log(`${countLogin} users are login and ${checkPointCount} users points are 50`)
  

};


findUsers(users)
/**************************************************************** */
//TODO Find people who are MERN stack developer from the users object
let findArray = ['MongoDB', 'Express', 'React', 'Node']
console.log(findArray.join(''))
const userValue = Object.entries(users)

let allDeveloperSkill = userValue.map(eachRow => eachRow[1].skills)
let result = allDeveloperSkill.filter((value,index) =>{
    console.log(value, index)
    for(let i = 0; i >= value.length; i++){

    }
})