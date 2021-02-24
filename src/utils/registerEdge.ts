import LogicFlow from '@logicflow/core';
import { ACTION } from './lib/constant';

class CustomEdge {
  lf: LogicFlow;

  constructor(lf: LogicFlow) {
    this.lf = lf;
  }

  registerAll() {
    this.registerAction();
  }

  registerAction() {
    this.lf.register('action', ({ PolylineEdge, PolylineEdgeModel, h }) => {
      class View extends PolylineEdge {
        getAttributes() {
          const attrs: any = super.getAttributes();
          const { properties } = attrs;
          if (typeof properties.actionType === 'undefined') return attrs;
          switch (properties.actionType) {
            case ACTION.REJECT:
              // 驳回线使用虚线，自定义一个虚线属性
              attrs.strokeDashArray = '7,5';
              break;
            default:
              break;
          }
          return attrs;
        }
        getShape() {
          const attrs = this.getAttributes();
          return h('polyline', {
            ...attrs,
            fill: 'none'
          });
        }
      }
      class Model extends PolylineEdgeModel {}
      return {
        view: View,
        model: Model
      };
    });
  }
}

export default CustomEdge;
