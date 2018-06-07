/*
* 初始载入操作
* author: wteam-xq
* date: 2018-06-06
*/

module.exports = () => {
  return function* authMiddleware(next) {
    this.statusObj = {
      CONSTANT_SUCCEED: 'SUCCEED',
      CONSTANT_ERROR: 'ERROR',
    };
    
    yield next;
  };
};
