import { Component } from "react";
import "./style.scss";

const ITEM_SIZE = 20;
const ITEMS = [
  { type: "cube", width: 2 * ITEM_SIZE, height: 2 * ITEM_SIZE },
  { type: "left-l", width: 2 * ITEM_SIZE, height: 3 * ITEM_SIZE },
  { type: "right-l", width: 2 * ITEM_SIZE, height: 3 * ITEM_SIZE },
  { type: "vertical-bar", width: 1 * ITEM_SIZE, height: 4 * ITEM_SIZE },
  { type: "horizontal-bar", width: 4 * ITEM_SIZE, height: 1 * ITEM_SIZE },
  { type: "left-t", width: 2 * ITEM_SIZE, height: 3 * ITEM_SIZE },
  { type: "right-t", width: 2 * ITEM_SIZE, height: 3 * ITEM_SIZE },
  { type: "up-t", width: 3 * ITEM_SIZE, height: 2 * ITEM_SIZE },
  { type: "down-t", width: 3 * ITEM_SIZE, height: 2 * ITEM_SIZE },
];

function GameBlocksItem({ item, top }) {
  const calcTop = top - item.height - 2;
  console.log(calcTop);
  return (
    <div
      className={`gameblocks-item gameblocks-item-${item.type}`}
      style={{ top: calcTop }}
    >
      <div className="gameblocks-item-block gameblocks-item-block-a"></div>
      <div className="gameblocks-item-block gameblocks-item-block-b"></div>
      <div className="gameblocks-item-block gameblocks-item-block-c"></div>
      <div className="gameblocks-item-block gameblocks-item-block-d"></div>
    </div>
  );
}

export default class GameBlocks extends Component {
  // GB
  state = {
    currentItemTypeIndex: 0,
    currentItemTop: 0,
    // lastItemTypeIndex: 0,
  };

  _getRandomIndex(lastIndex) {
    const index = Math.floor(Math.random() * (ITEMS.length - 1));
    return index === lastIndex ? this._getRandomIndex(lastIndex) : index;
  }

  componentDidMount() {
    const newState = { ...this.state };
    newState.currentItemTypeIndex = this._getRandomIndex(
      this.state.lastItemTypeIndex
    );
    this.setState(() => newState);

    setInterval(() => {
      const newState = { ...this.state };
      //   const item = ITEMS[this.newState.currentItemTypeIndex];
      newState.currentItemTop += ITEM_SIZE;
      if (newState.currentItemTop > ITEM_SIZE * 20 - 2) {
        // newState.currentItemTypeIndex = this._getRandomIndex(
        //   this.state.lastItemTypeIndex
        // );
        // newState.currentItemTop = 0;
      }
      this.setState(() => newState);
    }, 1000);
  }

  render() {
    return (
      <div className="gameblocks">
        <div className="gameblocks-box">
          <GameBlocksItem
            id="gameblocks-current-item"
            item={ITEMS[this.state.currentItemTypeIndex]}
            // item="left-l"
            // top={0}
            top={this.state.currentItemTop}
          />
        </div>
      </div>
    );
  }
}
