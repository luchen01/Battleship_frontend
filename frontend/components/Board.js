import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grids: [[1,2,3],[1,2,3],[1,2,3]],
            ships: [],
            user: "",
        };
    }

    // componentWillMount() {
    //     console.log("inside Board");
    //     console.log("URL", process.env.URL)
    //     axios({
    //         method: 'post',
    //         url: `${process.env.URL}/getMyBoard`,
    //         data: {
    //             'boardId': 20
    //         }
    //     })
    //     .then((res)=>{
    //         console.log("after axios", res);
    //     })
    //     .catch(e=>console.log(e));
    // }

    render() {
        return (
          <div>
            <h1>This is the board</h1>
            {this.state.grids.map((element, i)=>{
                <div className="row">
                  <h1>i</h1>{i}
                  {element.map(grid=>{
                      <div className = "grid"/>
                  })}
              </div>

            })}
          </div>
        );
    }
}

export default Board;
