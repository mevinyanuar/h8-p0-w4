function changeMe(arr) {
  // you can only write your code here!


  var tahun = 2018
  for(var i = 0; i<arr.length; i++) {

    var obj = {}
    obj.Firstname = arr[i][0]
    obj.Lastname = arr[i][1]
    obj.gender = arr[i][2]

    if(arr[i][3] === undefined) {
      obj.age = 'Invalid birth year'
    }else {
      obj.age = tahun - arr[i][3]
    }
    console.log(obj)
  }


}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
//
//
// //ada key firstname

// var name = [
//             ['mevin', 'yanuar', 'male', '1982'],
//             ['robert', 'Downey', 'Male']
//             ]
//
// for(var i = 0; i<name.length; i++) {
// console.log(name[i]);
// }
