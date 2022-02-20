export default class Validator {
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
}
