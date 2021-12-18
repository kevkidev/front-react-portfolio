import "./Style.scss";
import { Component } from "react";

const KEYPAD_CLEAR = "clear";
const KEYPAD_DIVIDE = "divide";
const KEYPAD_MULTIPLY = "multiply";
const KEYPAD_SEVEN = "seven";
const KEYPAD_EIGHT = "eight";
const KEYPAD_NINE = "nine";
const KEYPAD_SUBTRACT = "subtract";
const KEYPAD_FOUR = "four";
const KEYPAD_FIVE = "five";
const KEYPAD_SIX = "six";
const KEYPAD_ADD = "add";
const KEYPAD_ONE = "one";
const KEYPAD_TWO = "two";
const KEYPAD_THREE = "three";
const KEYPAD_EQUALS = "equals";
const KEYPAD_ZERO = "zero";
const KEYPAD_DECIMAL = "decimal";

const KEYPADS = {
  [KEYPAD_CLEAR]: "AC",
  [KEYPAD_DIVIDE]: "/",
  [KEYPAD_MULTIPLY]: "x",
  [KEYPAD_SEVEN]: "7",
  [KEYPAD_EIGHT]: "8",
  [KEYPAD_NINE]: "9",
  [KEYPAD_SUBTRACT]: "-",
  [KEYPAD_FOUR]: "4",
  [KEYPAD_FIVE]: "5",
  [KEYPAD_SIX]: "6",
  [KEYPAD_ADD]: "+",
  [KEYPAD_ONE]: "1",
  [KEYPAD_TWO]: "2",
  [KEYPAD_THREE]: "3",
  [KEYPAD_EQUALS]: "=",
  [KEYPAD_ZERO]: "0",
  [KEYPAD_DECIMAL]: ".",
};

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = this._getDefaultState();
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.getElementById("calc").focus();
  }
  /**
   * Example:
   * 1-55x66+665.26/55166.63-3/-52++5--5++20.3++55x-6
   * (1)-(55)x(66)+(665.26)/(55166.63)-(3)/(-(52))+(+(5))-(-(5))+(+(20.3))+(+(55))x(-(6))
   */
  _convertForCalculator() {
    const items = [...this.state.history];
    const reOperator = /[-+x\/]/;
    let formula = "";
    for (let i = 0; i < items.length; i++) {
      if (items[i].match(reOperator)) {
        if (items[i + 1].match(reOperator)) {
          formula = formula.concat(
            `${items[i]}(${items[i + 1]}(${items[i + 2]}))`
          );
          i += 2;
        } else {
          formula = formula.concat(`${items[i]}(${items[i + 1]})`);
          i += 1;
        }
      } else {
        formula = formula.concat(`(${items[i]})`);
      }
    }
    return formula.replaceAll("x", "*");
  }

  _getDefaultState() {
    return {
      history: [],
      result: "0",
      calculated: false,
    };
  }

  _handleOperation(id) {
    if (!Object.keys(KEYPADS).includes(id)) return;

    const updateScreen = () => {
      this.setState((state) => ({
        history: state.history.concat(KEYPADS[id]),
        result: KEYPADS[id],
        calculated: false,
      }));
    };

    const checkReusableResult = (op) => {
      if (this.state.calculated) {
        const lastResult = this.state.result.toString();
        this.setState((state) => ({
          history:
            lastResult[0] == "-"
              ? [lastResult[0], lastResult.substring(1), op]
              : [lastResult, op],
          result: op,
          calculated: false,
        }));
        return true;
      }
      return false;
    };

    /**
     * @param {*} op [ "\\*" | "\\/"]
     */
    const calculate = (operator, formula) => {
      const re = new RegExp(
        "\\([-+]?\\(?\\d+\\.?\\d*\\)?\\)" +
          operator +
          "\\([-+]?\\(?\\d+\\.?\\d*\\)?\\)"
      );

      const toCalculate = formula.match(re);
      let newFormula = "" + formula;
      if (toCalculate && toCalculate.length > 0) {
        toCalculate.forEach((e) => {
          const index = formula.indexOf(e);
          const start = newFormula.slice(0, index);
          const end = newFormula.slice(index + e.length);
          newFormula = calculate(operator, `${start}(${eval(e)})${end}`);
        });
      }
      return newFormula;
    };

    /**
     * Calculates the entire formula by observing order of operation precedence
     * @param {*} id
     * @param {*} op
     */
    const calculateAll = (id, op) => {
      const formula = this._convertForCalculator();
      const formule1 = calculate("\\/", formula);
      const formule2 = calculate("\\*", formule1);
      const final = eval(formule2);
      return final;
    };

    switch (id) {
      case KEYPAD_CLEAR: {
        this.setState(() => this._getDefaultState());
        break;
      }

      case KEYPAD_DIVIDE: {
      }

      case KEYPAD_MULTIPLY: {
        if (checkReusableResult(KEYPADS[id])) break;

        if (!isNaN(this.state.result) && this.state.history.length !== 0) {
          updateScreen();
        }
        break;
      }

      case KEYPAD_ADD: {
      }

      case KEYPAD_SUBTRACT: {
        if (checkReusableResult(KEYPADS[id])) break;

        const canAddOrSub =
          this.state.history.length === 0 ||
          /^.*[-+]?[0-9]+\.?[0-9]*[-+x\/]?$/.test(this.state.history.join(""));

        if (!canAddOrSub) {
          break;
        }
        updateScreen();
        break;
      }

      case KEYPAD_DECIMAL: {
        if (/^(.*[-+\/x])*?[0-9]+$/.test(this.state.history.join(""))) {
          const lastElement = [...this.state.history].pop();
          const state = Object.create(this.state);
          state.history.pop();
          state.history.push(lastElement + KEYPADS[id]);
          this.setState(() => state);
        }
        break;
      }

      case KEYPAD_EQUALS: {
        if (
          isNaN(this.state.result) ||
          this.state.history.length === 0 ||
          this.state.history.includes(KEYPADS[id])
        ) {
          break;
        } else {
          this.setState((state) => ({
            history: state.history,
            result: calculateAll(),
            calculated: true,
          }));
          break;
        }
      }

      default: {
        // handle number
        if (this.state.calculated) {
          break;
        }
        const lastElement = [...this.state.history].pop();
        const state = Object.create(this.state);
        state.result = KEYPADS[id];
        if (
          lastElement &&
          (!isNaN(lastElement) || lastElement === KEYPADS.decimal)
        ) {
          state.history.pop();
          state.history.push(lastElement + KEYPADS[id]);
          state.result = lastElement + KEYPADS[id];
          this.setState(() => state);
        } else {
          state.history.push(KEYPADS[id]);
          this.setState(() => state);
        }
        break;
      }
    }
  }

  handleKeyUp(event) {
    const found = Object.keys(KEYPADS).filter((e) => KEYPADS[e] == event.key);
    if (found.length > 0) {
      this._handleOperation(found[0]);
    } else if (event.key === "*") {
      this._handleOperation(KEYPAD_MULTIPLY);
    } else if (event.key === "Enter") {
      this._handleOperation(KEYPAD_EQUALS);
    } else if (event.keyCode === "Delete") {
      this._handleOperation(KEYPAD_CLEAR);
    }
  }

  handleClick(event) {
    this._handleOperation(event.target.id);
  }

  render() {
    return (
      <div id="calc" onKeyPress={this.handleKeyUp} tabIndex={0}>
        <div className="screen" style={{ gridArea: "display" }}>
          <div id="history" className="screen-line">
            {this.state.history.join("")}
          </div>
          <div id="display" className="screen-line">
            {this.state.result}
          </div>
        </div>

        {Object.keys(KEYPADS).map((key) => (
          <div
            key={key}
            id={key}
            style={{ gridArea: key }}
            onClick={this.handleClick}
          >
            {KEYPADS[key]}
          </div>
        ))}
      </div>
    );
  }
}
