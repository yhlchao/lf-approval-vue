import { State } from './store';
import LogicFlow from '@logicflow/core';
import CustomNode from '../utils/registerNode';
import CustomEdge from '../utils/registerEdge';
import { nodeData } from '../type';

const initLogicFlow = (state: State, container: HTMLElement) => {
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
        stroke: baseColor
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
};

const updateHoverNodeData = (state: State, data: nodeData) => {
  state.hoverNodeData = data;
};

const updateWorkbenchNodeData = (state: State, data: nodeData) => {
  state.workbenchNodeData = data;
};

export { initLogicFlow, updateHoverNodeData, updateWorkbenchNodeData };
