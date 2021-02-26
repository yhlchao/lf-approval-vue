import { createStore } from 'vuex';
import LogicFlow from '@logicflow/core';
import * as mutations from './mutations';
import { nodeData } from '../type';

export type State = {
  lf: LogicFlow | any;
  hoverNodeData: nodeData | any;
  workbenchNodeData: nodeData | any;
};

const store = createStore({
  state() {
    return {
      lf: null,
      hoverNodeData: null,
      workbenchNodeData: null
    };
  },
  mutations
});

export default store;
