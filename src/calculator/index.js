const sub = (x, y, callback) => {
  return callback(null, x - y);
};

export default {
  add(x, y) {
    const result = x + y;
    // return callback(null, result);
    return Promise.resolve(result);
  },

  subtract(x, y) {
    return new Promise((resolve, reject) => {
      return sub(x, y, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  },

  async multiply(x, y) {
    return await x * y;
    // return Promise.resolve(x * y);
  },

  async calculate(x, y) {
    const addResult = await this.add(x, y);
    const result = await this.sub(addResult, 2);
    return await result;
  }

  //
  // multiply(x, y, callback) {
  //   return callback(null, x * y);
  // },
  //
  // divide(x, y, callback) {
  //   if (y === 0) {
  //     return callback(new Error('Division by 0'));
  //   }
  //   return callback(null, x / y);
  // },
  //
  // compute(x,y, callback) {
  //   return this.add(x,y, (err, result) => {
  //     if(err) return callback(err);
  //
  //     return this.multiply(result, 2, (err, result) => {
  //       if(err) return callback(err);
  //
  //       return this.divide(result, 10, (err, result) => {
  //         if(err) return callback(err);
  //         return callback(null, result);
  //       });
  //     });
  //   });
  // }
}
