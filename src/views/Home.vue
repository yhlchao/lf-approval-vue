<template>
  <div class="home">
    <h2 class="title">审批示例</h2>
    <div class="container">
      <Panel :startDrag="startDrag" />
      <div id="graph"></div>
    </div>
    <HoverCard :hoverData="hoverData" />
    <Workbench :show="showWorkbench" :data="workbenchData" />
  </div>
</template>

<script>
import LogicFlow from '@logicflow/core';
import { Control, Menu } from '@logicflow/extension';
import '@logicflow/core/dist/style/index.css';
import '@logicflow/extension/lib/style/index.css';

import Panel from '../components/Panel';
import HoverCard from '../components/HoverCard';
import Workbench from '../components/Workbench';
import CustomNode from '../utils/registerNode';
import CustomEdge from '../utils/registerEdge';
import { renderData } from '../utils/lib/renderData';

LogicFlow.use(Control);
LogicFlow.use(Menu);

export default {
  name: 'Home',
  components: {
    Panel,
    HoverCard,
    Workbench
  },
  data() {
    return {
      lf: null,
      hoverData: {
        show: false,
        top: 0,
        left: 0,
        data: {}
      },
      showWorkbench: false,
      workbenchData: {
        properties: {}
      }
    };
  },
  mounted() {
    this.initLogicFLow();
    this.addHoverListener();
  },
  methods: {
    initLogicFLow() {
      const baseColor = '#55616d';
      this.lf = new LogicFlow({
        container: document.querySelector('#graph'),
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
          diamond: {
            stroke: baseColor
          },
          polyline: {
            stroke: baseColor,
            outlineStrokeDashArray: '0,1'
          },
          edgeText: {
            background: {
              fill: '#fff'
            }
          }
        }
      });
      const customNode = new CustomNode(this.lf);
      const customEdge = new CustomEdge(this.lf);
      customNode.registerAll();
      customEdge.registerAll();
      this.lf.render(renderData);
    },
    startDrag(config) {
      this.lf.dnd.startDrag(config);
    },
    addHoverListener() {
      this.lf.on('node:mouseenter', ({ data, e }) => {
        const { properties } = data;
        if (!properties.hover) return;
        this.hoverData = {
          show: true,
          top: e.y + 30,
          left: e.x,
          data
        };
      });
      this.lf.on('node:mouseleave', () => {
        this.hoverData = {
          ...this.hoverData,
          show: false
        };
      });
      this.lf.on('node:mousedown', () => {
        this.hoverData = {
          ...this.hoverData,
          show: false
        };
      });
      this.lf.on('node:click', ({ data }) => {
        this.showWorkbench = true;
        this.workbenchData = data;
      });
      this.lf.on('blank:click', () => {
        this.showWorkbench = false;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .title {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    border-top: 1px rgb(221, 221, 221) solid;
    border-radius: $roundAngle;
    overflow: hidden;

    #graph {
      width: 100%;
    }
  }
}
</style>