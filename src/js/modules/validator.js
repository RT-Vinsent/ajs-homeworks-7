export default class Validator {
  /*
    Первая задача Никнеймы
  */
  validateUsername(name) {
    this.validName = false;

    if (!name) {
      return this.validName;
    }

    /*
      валидация на отсутсвие цифр, "_" и "-" в начале строки;
      валидация на содержание только латиницы, "_" и "-";
      валидация на отсутсвие цифр, "_" и "-" в конце строки.
    */
    const conditionOne = /^[^\d_-][\w-]*[^\d_-]$/.test(name);

    /*
      валидация на количество символов от 4 и выше
    */
    const conditionTwo = /\d{4,10}/.test(name);

    this.validName = conditionOne && !conditionTwo;

    return this.validName;
  }

  /*
    вторая задача Телефоны
  */
  validatePhoneNumber(tel) {
    this.result = '';
    if (!tel) {
      return this.result;
    }

    /* забираем цифры из телефона */
    const numberTel = tel.replace(/[^\d]/g, '');

    /*
      если номер из 11 цифр и первая цифра 8,
      то меняем её на 7 и добавляем спереди +,
      иначе просто добавляем спереди плюс.
    */
    if (numberTel.length === 11 && numberTel.indexOf(8) === 0) {
      this.result = `+7${numberTel.slice(1, 11)}`;
    } else {
      this.result = `+${numberTel}`;
    }

    return this.result;
  }
}
