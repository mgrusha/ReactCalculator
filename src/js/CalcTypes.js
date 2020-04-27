class CalcType {
  constructor(name, rule, radix) {
    this.name = name;
    this.rule = rule;
    this.contenteditable = false;
  }

  add(numberX, numberY) {
    return ["E", "R", "R", "O", "R", " ", "", "", ""];
  }

  checkNumber(number) {
    return true;
  }
}

class DecCalc extends CalcType {
  constructor() {
    super("Kalkulator dziesiętny", "Kliknij w liczbę, by ją zmienić", 10);
    this.contenteditable = true;
  }
  checkNumber(number) {
    return Boolean(number.match(/[0-9]/));
  }

  add(numberX, numberY) {
    let tempArrayX = [...numberX];
    let tempArrayY = [...numberY];
    tempArrayX.reverse();
    tempArrayY.reverse();
    let number1 = parseInt(tempArrayX.join(""));
    let number2 = parseInt(tempArrayY.join(""));

    let result = [];

    let sumString = (number1 + number2).toString();

    for (let position = 0; position < sumString.length; position++) {
      result.push(sumString.charAt(position));
    }
    const newArrayZeros = new Array(9 - result.length).fill(0);
    result = [...newArrayZeros, ...result];
    result.reverse();
    return result;
  }
}

class HexCalc extends CalcType {
  constructor() {
    super(
      "Kalkulator liczb szesntastkowych",
      "Kliknij w liczbę, by ją zmienić",
      16
    );
    this.contenteditable = true;
  }

  checkNumber(number) {
    return Boolean(number.match(/[0-9a-fA-F]/));
  }

  add(numberX, numberY) {
    let tempArrayX = [...numberX];
    let tempArrayY = [...numberY];
    tempArrayX.reverse();
    tempArrayY.reverse();
    let number1 = parseInt(tempArrayX.join(""), 16);
    let number2 = parseInt(tempArrayY.join(""), 16);

    let result = [];

    let sumString = (number1 + number2).toString(16);

    for (let position = 0; position < sumString.length; position++) {
      result.push(sumString.charAt(position));
    }
    const newArrayZeros = new Array(9 - result.length).fill(0);
    result = [...newArrayZeros, ...result];
    result.reverse();
    return result;
  }
}

class BinCalc extends CalcType {
  constructor() {
    super(
      "Kalkulator binarny (8 bitów)",
      "Kliknij w bit, by zmienić liczbę",
      2
    );
  }

  add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = numberX.length - 1; i >= 0; i--) {
      let carryBit = numberX[i] + numberY[i] + result[i];
      if (carryBit === 2) {
        result[i] = 0;
        result[i + 1] = 1;
      } else if (carryBit === 3) {
        result[i] = 1;
        result[i + 1] = 1;
      } else {
        result[i] = carryBit;
      }
    }
    return result;
  }
}

export { CalcType, DecCalc, BinCalc, HexCalc };
