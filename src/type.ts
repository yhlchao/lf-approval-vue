export type nodeType = 'apply' | 'approval' | 'judgement' | 'end';

export type nodeProperties = {
  nodeType: string; // 节点类型的中文
  configured?: Boolean; // 用来决定是否显示 hoverCard
  needConfig?: Boolean; // 表示是否需要配置，例如 end
  applicantIndex?: Number; // 申请人的 mock 数据索引
  managerIndex?: Number; // 审批人的 mock 数据索引
};

export type nodeData = {
  id: number | string;
  x: Number;
  y: Number;
  type: nodeType;
  text?: string;
  propertires: nodeProperties;
};
