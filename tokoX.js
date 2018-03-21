function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!

  var arrResult = []
  for(var i = 0; i<listBarang.length; i++) {
    var obj = {}
    obj.product = listBarang[i][0]
    obj.shoppers = []
    obj.leftOver = listBarang[i][2]
    obj.totalProfit = 0

    for(var j = 0; j<shoppers.length; j++) {
      if(listBarang[i][0] === shoppers[j].product && obj.leftOver >= shoppers[j].amount) {
        obj.shoppers.push(shoppers[j].name)
        obj.leftOver=obj.leftOver-shoppers[j].amount
        obj.totalProfit=obj.totalProfit+listBarang[i][1]*shoppers[j].amount

      }

    }
    arrResult.push(obj)
  }



  return arrResult

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',



// for(var i = 0; i<listBarang.length; i++) {
//     //console.log(listBarang[i][0]);
//
//   for(var k = 0; k<shoppers.length; k++) {
//     //console.log(shoppers[k].product);
//     var jumlahSisaBarang=listBarang[i][2]
//     if(listBarang[i][0] === shoppers[k].product) {
//       console.log(shoppers[k].amount);
//       //jumlahSisaBarang-shoppers[k].amount
//     }
//
//   }
//   console.log(jumlahSisaBarang);
// }
