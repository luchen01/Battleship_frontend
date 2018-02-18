import React from "react";

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isAlive: true,
          hasShip : false,
        }
    }

    render() {
      return(
        <div>
          <h1>Grid</h1>
        </div>
      )
    }

}

export default Grid;
