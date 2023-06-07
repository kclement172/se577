<template>
    <div class="calculatorApp">
      <!-- Renders the currentValue data value (defaults to 0) -->
      <div class="calculatorDisplay">{{currentValue || 'z'}}</div>
      <!-- Each "click" callback will call its associated method from the methods attribute -->
      <div @click="clearCurrentValue" class="button">{{clearOrAllClear}}</div>
      <div @click="switchSign" class="button">+/-</div>
      <div @click="calculatePercent" class="button">%</div>
      <div @click="divide" class="button operator">/</div>
      <div @click="attach('7')" class="button">7</div>
      <div @click="attach('8')" class="button">8</div>
      <div @click="attach('9')" class="button">9</div>
      <div @click="multiply" class="button operator">*</div>
      <div @click="attach('4')" class="button">4</div>
      <div @click="attach('5')" class="button">5</div>
      <div @click="attach('6')" class="button">6</div>
      <div @click="subtract" class="button operator">-</div>
      <div @click="attach('1')" class="button">1</div>
      <div @click="attach('2')" class="button">2</div>
      <div @click="attach('3')" class="button">3</div>
      <div @click="add" class="button operator">+</div>
      <div @click="attach('0')" class="button zeroButton">0</div>
      <div @click="decimal" class="button">.</div>
      <div @click="equals" class="button operator">=</div>
    </div>
    <div>previousValue: {{ previousValue }}</div>
    <div>currentValue: {{ currentValue }}</div>
    <div>operatorFunction: {{ operatorFunction }}</div>
    <div>operatorClicked: {{ operatorClicked }}</div>
    <div>operatorClickedForFirstTimeInTransaction: {{ operatorClickedForFirstTimeInTransaction }}</div>
    <div>equalsClicked: {{ equalsClicked }}</div>
    <div>clearOrAllClear: {{clearOrAllClear  }}</div>
    <div>clearClicked: {{ clearClicked }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        previousValue: null,
        currentValue: '0',
        /* 'operatorFunction' will be some callback function depending on which operator button was clicked */
        operatorFunction: null,
        operatorClicked: false,
        operatorClickedForFirstTimeInTransaction: false,
        equalsClicked: false,
        clearOrAllClear: 'A/C',
        clearClicked: false,
        divideClickedForFirstTimeInTransaction: false,
        subtractClickedForFirstTimeInTransaction: false
      }
    },
    methods: {
      /* Clears the currentValue value back to an empty string */
      clearCurrentValue(){
        if (this.clearOrAllClear === 'A/C'){
            this.previousValue = null;
            this.currentValue = '0';
            this.operatorFunction = null;
            this.operatorClicked = false;
            this.operatorClickedForFirstTimeInTransaction = false;
            this.equalsClicked = false;
            this.clearOrAllClear = 'A/C';
            this.clearClicked = false;
            this.divideClickedForFirstTimeInTransaction = false;
            this.subtractClickedForFirstTimeInTransaction = false;
        }
        else if (this.clearOrAllClear === 'C'){
            this.currentValue = '0';
            this.clearOrAllClear = 'A/C';
        }
      },
      /* Appends or removes a minus symbol to the current value, unless it is zero, in which case do nothing */
      switchSign() {
        if (this.currentValue !== '0'){
            this.currentValue = this.currentValue.charAt(0) === '-' ? 
                this.currentValue.slice(1) : `-${this.currentValue}`;
        }
      },
      /* Take the current string value, parse it into a float datatype, divide it by 100, and cast it back into a string  */
      calculatePercent() {
        this.currentValue = `${parseFloat(this.currentValue) / 100}`;
      },
      /* Attach number of the button pressed to the end of the current Value */
      attach(number) {
        if (this.operatorClicked){
          this.currentValue = '0';
          this.operatorClicked = false;

          this.equalsClicked = false;
        }

        if (!this.clearClicked){
            this.clearOrAllClear = 'C';
        }

        /* If the current value is 0, replace it with the value of the button press (unless the button pressed was the decimal operator, then join them together) */
        if (this.currentValue === '0'){
            if (number === '.'){
                this.currentValue = `${this.currentValue}${number}`;
            }
            else {
                this.currentValue = number
            }
        }
        /* Otherwise, tack the value of the button press to the end of the current value */
        else {
            this.currentValue = `${this.currentValue}${number}`;
        }
      },
      /* Attach a decimal point to the currentValue, if one does not already exist */
      decimal() {
        if (this.currentValue.indexOf('.') === -1){
          this.attach('.');
        }
      },
      /* Copies the current value into the previous value, so that they can be operated on */
      /* Also sets the operator Clicked state to true, so that  */
      setPreviousValue() {
        if (!this.equalsClicked || !this.operatorClicked){
            this.previousValue = this.currentValue;
        }
        this.operatorClicked = true;
        this.equalsClicked = false;
      },
      calcualteCurrentTotal(){
        if (this.operatorClickedForFirstTimeInTransaction){
            this.equals();
        } else {
            this.operatorClickedForFirstTimeInTransaction = true;
        }

        this.equalsClicked = false;
      },
      /* When an operator button is pushed, its state is recorded in the operator value, so that the equals button knows how it should compute the current and previous values */
      /* Ex: Divide button is pushed. 'Operator' is set as a function that takes two parameters 'a' and 'b', and returns the quotient. 
            When the 'Equals" button is pressed, it will assign the Current Value to 'a' and the previous value to 'b'. 
            Finally, it will perform whatever function is stored for the operator on them (in this case division).' */
      divide() {
        if (this.divideClickedForFirstTimeInTransaction){
            this.divideClickedForFirstTimeInTransaction = false;
        }
        
        if (!this.divideClickedForFirstTimeInTransaction){
            this.operatorFunction = (a, b) => b / a;
            this.divideClickedForFirstTimeInTransaction = true;
        } else {
            this.operatorFunction = (a, b) => a / b;
        }

        this.setPreviousValue();
        this.calcualteCurrentTotal();
        this.subtractClickedForFirstTimeInTransaction = false;
      },
      multiply() {
        this.operatorFunction = (a, b) => a * b;
        this.setPreviousValue();
        this.calcualteCurrentTotal();

        this.divideClickedForFirstTimeInTransaction = false;
        this.subtractClickedForFirstTimeInTransaction = false;
      },
      subtract() {
        if (this.subtractClickedForFirstTimeInTransaction){
            this.subtractClickedForFirstTimeInTransaction = false;
        }
        
        if (!this.subtractClickedForFirstTimeInTransaction){
            this.operatorFunction = (a, b) => b - a;
            this.subtractClickedForFirstTimeInTransaction = true;
        } else {
            this.operatorFunction = (a, b) => a - b;
        }

        this.setPreviousValue();
        this.calcualteCurrentTotal();

        this.divideClickedForFirstTimeInTransaction = false;
      },
      add() {
        this.operatorFunction = (a, b) => a + b;
        this.setPreviousValue();
        this.calcualteCurrentTotal();

        this.divideClickedForFirstTimeInTransaction = false;
        this.subtractClickedForFirstTimeInTransaction = false;
      },
      /* Important to parse values into a float so that the operations can be performed on them, and then cast back into a string to be displayed */
      equals() {
        let currentValuePlaceholder = this.currentValue;

        this.currentValue = `${this.operatorFunction(
          parseFloat(this.currentValue),
          parseFloat(this.previousValue)
        )}`;

        if (!this.equalsClicked){
            this.previousValue = currentValuePlaceholder;
        }

        if (this.divideClickedForFirstTimeInTransaction){
            this.operatorFunction = (a, b) => a / b;
        }

        if (this.subtractClickedForFirstTimeInTransaction){
            this.operatorFunction = (a, b) => a - b;
        }

        this.equalsClicked = true;
        this.operatorClickedForFirstTimeInTransaction = false;
      }
    }
  }
  </script>

  <style scoped>
  .calculatorApp {
    margin: 0 auto;
    width: 500px;
    font-size: 50px;
    /* Any added element under the calculatorApp class will be placed into a 4 by infinity grid */
    /* display-grid tells the component it must be a css grid */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(75px, auto);
  }
  
  .calculatorDisplay {
    grid-column: 1 / 5;
    background-color: #93baa9;
    color: white;
    border: 2px solid black;
  }

  .zeroButton {
    grid-column: 1 / 3;
  }
  
  .button {
    background-color: #F2F2F2;
    border: 2px solid black;
  }
  
  /* Gives the operator buttons their own formatting */
  .operator {
    background-color: #ba939c;
    color: white;
  }
  </style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
