const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki',
    },
    getPersonInfo: function () {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
  }

  const copyPerson = Object.assign({}, person)
  copyPerson.firstName = 'Thant'
  console.log(copyPerson.firstName)
//   person.firstName = 'Abhi'
//   console.log(person.firstName)
//   console.log(copyPerson.firstName)

//  const key = Object.keys(copyPerson)
//  console.log(key)
//  console.log(Object.values(person.address))
const entries = Object.entries(copyPerson)
console.log(entries)
console.log(copyPerson.hasOwnProperty('address'))
console.log(copyPerson.hasOwnProperty('score'))

let array = [1,2,3,4]
 array.forEach(num =>{
   num * 2
})
console.log(array)