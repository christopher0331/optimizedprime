import React from  'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

class RadialBarChart2 extends React.Component {
    constructor() {
      super();
      this.state = {
        percent: 0, data: this.getData(0)
      };
    }
  
    componentDidMount() {
      let percent = 0;
      this.setStateInterval = window.setInterval(() => {
        percent = 75;
        this.setState({
          percent, data: this.getData(percent)
        });
      }, 2000);
    }
  
    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }
  
    getData(percent) {
      return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }
  
    render() {
      return (
        <div>
          <svg viewBox="0 0 400 400" width="100%" height="100%">
            <VictoryPie
              standalone={false}
              animate={{ duration: 3000 }}
              width={400} height={400}
              data={this.state.data}
              innerRadius={120}
              cornerRadius={25}
              labels={() => null}
              style={{
                data: { fill: ({ datum }) => {
                  const color = datum.y > 30 ? "green" : "red";
                  return datum.x === 1 ? color : "transparent";
                }
                }
              }}
            />
            <VictoryAnimation duration={1000} data={this.state}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={200} y={200}
                    text={`${Math.round(newProps.percent)}%`}
                    style={{ fontSize: 45, fill: 'white' }}             
                  />
                );
              }}
            </VictoryAnimation>
          </svg>
        </div>
      );
    }
  }

  export default RadialBarChart2;