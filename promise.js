const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try{
    let x = await promiseTheaterIXX();
    let y = await promiseTheaterVGC();
    let gabungan = x.concat(y);
    
    let countValue = gabungan.filter( item =>{
      return item.hasil === emosi;
    }).length;

    return countValue;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  promiseOutput,
};
