function ConvertToRoman(num) {
  let unitsSplit = num.toString().split('');

  let mil = +unitsSplit[unitsSplit.length - 4] * 1000;
  let cent = +unitsSplit[unitsSplit.length - 3] * 100;
  let dec = +unitsSplit[unitsSplit.length - 2] * 10;
  let unit = +unitsSplit[unitsSplit.length - 1];

  let unitsArr = [mil, cent, dec, unit].filter((n) => n === 0 || Boolean(n));

  let romanArr = [];
  for (let i = 0; i < unitsArr.length; i++) {
    if (unitsArr[i] >= 1000) {
      romanArr.push('M'.repeat(mil / 1000));
    }
    if (unitsArr[i] >= 100) {
      if (unitsArr[i] === 900) {
        romanArr.push('CM');
      }
      if (unitsArr[i] < 900 && unitsArr[i] > 400) {
        romanArr.push('D');
        romanArr.push('C'.repeat((cent - 500) / 100));
      }
      if (unitsArr[i] === 400) {
        romanArr.push('CD');
      }
      if (unitsArr[i] < 400) {
        romanArr.push('C'.repeat(cent / 100));
      }
    }
    if (unitsArr[i] >= 10) {
      if (unitsArr[i] === 90) {
        romanArr.push('XC');
      }
      if (unitsArr[i] < 90 && unitsArr[i] > 40) {
        romanArr.push('L');
        romanArr.push('X'.repeat((dec - 50) / 10));
      }
      if (unitsArr[i] === 40) {
        romanArr.push('XL');
      }
      if (unitsArr[i] < 40) {
        romanArr.push('X'.repeat(dec / 10));
      }
    }
    if (unitsArr[i] > 0) {
      if (unitsArr[i] === 9) {
        romanArr.push('IX');
      }
      if (unitsArr[i] < 9 && unitsArr[i] > 4) {
        romanArr.push('V');
        romanArr.push('I'.repeat(unit - 5));
      }
      if (unitsArr[i] === 4) {
        romanArr.push('IV');
      }
      if (unitsArr[i] < 4) {
        romanArr.push('I'.repeat(unit));
      }
    }
  }

  return romanArr.join('');
}

export default ConvertToRoman;
