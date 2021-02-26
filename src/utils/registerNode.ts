import LogicFlow, { DiamondNodeModel } from '@logicflow/core';

class CustomNode {
  lf: LogicFlow;

  constructor(lf: LogicFlow) {
    this.lf = lf;
  }

  // 注册所有的自定义节点
  registerAll() {
    this.registerApply();
    this.registerEnd();
    this.registerApproval();
    this.registerJudgement();
  }

  // 申请节点
  registerApply() {
    this.lf.register('apply', ({ CircleNode, CircleNodeModel, h }) => {
      class View extends CircleNode {
        getAttributes() {
          const attrs: any = super.getAttributes();
          const { properties } = attrs;
          if (properties.configured) attrs.stroke = '#434c56';
          return attrs;
        }
      }
      class Model extends CircleNodeModel {
        getConnectedTargetRules() {
          const rules = super.getConnectedTargetRules();
          const rule = {
            message: '申请节点只能作为初始节点',
            validate: () => false
          };
          rules.push(rule);
          return rules;
        }
      }
      return {
        view: View,
        model: Model
      };
    });
  }

  // 结束节点
  registerEnd() {
    this.lf.register('end', ({ CircleNode, CircleNodeModel }) => {
      class View extends CircleNode {
        getAttributes() {
          const attrs: any = super.getAttributes();
          const { properties } = attrs;
          if (properties.configured) attrs.stroke = '#434c56';
          return attrs;
        }
      }
      class Model extends CircleNodeModel {
        getConnectedSourceRules() {
          const rules = super.getConnectedSourceRules();
          const rule = {
            message: '结束节点不能连接至其他节点',
            validate: () => false
          };
          rules.push(rule);
          return rules;
        }
      }
      return {
        view: View,
        model: Model
      };
    });
  }

  // 审批节点
  registerApproval() {
    this.lf.register('approval', ({ RectNode, RectNodeModel, h }) => {
      class View extends RectNode {
        getAttributes() {
          const attrs: any = super.getAttributes();
          const { properties } = attrs;
          if (properties.configured) attrs.stroke = '#434c56';
          return attrs;
        }
        getShape() {
          const attrs = this.getAttributes();
          const style = {
            x: attrs.x - attrs.width / 2,
            y: attrs.y - attrs.height / 2,
            rx: attrs.radius,
            ry: attrs.radius
          };
          const newAttrs = Object.assign({}, attrs, style);
          return h('rect', { ...newAttrs });
        }
      }
      class Model extends RectNodeModel {}
      return {
        view: View,
        model: Model
      };
    });
  }

  // 判断节点
  registerJudgement() {
    this.lf.register('judgement', ({ DiamondNode, DiamondNodeModel }) => {
      class View extends DiamondNode {
        getAttributes() {
          const attrs: any = super.getAttributes();
          const { properties } = attrs;
          if (properties.configured) attrs.stroke = '#434c56';
          return attrs;
        }
      }
      class Model extends DiamondNodeModel {}
      return {
        view: View,
        model: Model
      };
    });
  }
}

export default CustomNode;
