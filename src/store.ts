import { createStore } from 'vuex';
import LogicFlow from '@logicflow/core';
import CustomNode from './utils/registerNode';
import CustomEdge from './utils/registerEdge';

type State = {
  lf: LogicFlow | any;
};

const store = createStore({
  state() {
    return {
      lf: null
    };
  },
  mutations: {
    initLogicFlow(state: State, container) {
      const baseColor = '#9cafb9';
      const lf = new LogicFlow({
        container,
        grid: {
          size: 10,
          type: 'mesh'
        },
        background: {
          color: '#fff'
        },
        style: {
          rect: {
            radius: 8,
            stroke: baseColor
          },
          circle: {
            r: 30,
            stroke: baseColor
          },
          // diamond: {
          //   stroke: baseColor
          // },
          polyline: {
            stroke: baseColor,
            // outlineStrokeDashArray: '0,1'
          },
          edgeText: {
            background: {
              fill: '#fff'
            }
          }
        }
      });
      const customNode = new CustomNode(lf);
      const customEdge = new CustomEdge(lf);
      customNode.registerAll();
      customEdge.registerAll();
      state.lf = lf;
    }
  }
});

export default store;
