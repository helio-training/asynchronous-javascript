import Calculator from './calculator';

// const wrapper = async () => {
//
//   const result = await Calculator.calculate(1, 2);
//   console.log(result);
// };
//
// wrapper()
//   .then(result => {
//
//   }).catch(err => {
//   console.log(err);
// });

Calculator.add(1, 2)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });



// Calculator.subtract(2, 1)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Calculator.add(1, 2, (err, result) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// Calculator.compute(5, 5, (err, result) => {
//   if(err) throw err;
//   console.log(result);
// });
