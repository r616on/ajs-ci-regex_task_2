export default function Phone(str) {
  let result = str.replace(/[\s()+-]/g, '');
  if (result.length === 11) {
    result = result.replace(/(^7)/, '+$1');
    result = result.replace(/(^89)/, '+79');
    return result;
  }
  if (result.length === 12) {
    result = result.replace(/(^8)/, '+$1');
    return result;
  }
  throw new Error('Введен не верный номер телефона');
}
