function shoppingTime(memberId, money) {
  // you can only write your code here!

  var obj = { sepatuScacattu: 1500000,
    bajuZoro: 500000,
    bajuHdanN: 250000,
    SweaterUniklooh: 175000,
    casingHandphone: 50000
  }

  var sisa = money;
  var arrlistpurchased = []

  if(memberId === '' || memberId === undefined && money === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }else if(money < 50000) {
    return 'Mohon maaf uang tidak cukup'
  }else {
    var objectResult = {};
    objectResult.memberId = memberId
    objectResult.money = money

    for(var i in obj) {
      if(sisa >= obj[i]) {
        arrlistpurchased.push(i)
        sisa=sisa-obj[i]
      }
    }
    objectResult.listPurchased = arrlistpurchased
    objectResult.changeMoney = sisa

  }
  return objectResult

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
// console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
// console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
// console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
