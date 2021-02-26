<template>
  <div class="home">
    <h2 class="title">审批示例</h2>
    <div class="container">
      <Panel :startDrag="startDrag" />
      <div id="graph"></div>
    </div>
    <HoverCard
      :show="showHoverCard"
      :x="hoverCardPosition.x"
      :y="hoverCardPosition.y"
    />
    <Workbench :show="showWorkbench" />
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
import { renderData } from '@/utils/lib/renderData';
import { mapMutations, mapState } from 'vuex';

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
      showHoverCard: false,
      showWorkbench: false,
      hoverCardPosition: {
        x: 0,
        y: 0
      }
    };
  },
  computed: mapState(['lf']),
  mounted() {
    const container = document.querySelector('#graph');
    this.initLogicFlow(container);
    this.addHoverListener();
    this.lf.render(renderData);
  },
  methods: {
    ...mapMutations([
      'initLogicFlow',
      'updateHoverNodeData',
      'updateWorkbenchNodeData'
    ]),
    startDrag(config) {
      const { lf } = this.$store.state;
      lf.dnd.startDrag(config);
    },
    addHoverListener() {
      this.lf.on('node:mouseenter', ({ data, e }) => {
        const { properties } = data;
        if (!properties.configured) return;
        this.updateHoverNodeData(data);
        this.showHoverCard = true;
        this.hoverCardPosition = {
          x: e.x,
          y: e.y
        };
      });
      this.lf.on('node:mouseleave', () => {
        this.showHoverCard = false;
      });
      this.lf.on('node:mousedown', () => {
        this.showHoverCard = false;
      });
      this.lf.on('node:click', ({ data }) => {
        this.updateWorkbenchNodeData(data);
        this.showWorkbench = true;
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
      height: 100%;
    }
  }
}
</style>