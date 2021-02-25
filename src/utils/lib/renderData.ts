import { mockData } from './mockData';
import { ACTION, NODE } from './constant';

export const renderData = {
  nodes: [
    {
      type: 'apply',
      id: 1,
      x: 200,
      y: 120,
      text: '申请',
      properties: {
        configured: true,
        applicantIndex: 0,
        ...mockData.applicants[0],
        nodeType: NODE.APPLY
      }
    },
    {
      type: 'approval',
      id: 2,
      x: 360,
      y: 120,
      text: '审批',
      properties: {
        configured: true,
        managerIndex: 0,
        ...mockData.managers[0],
        nodeType: NODE.APPROVAL
      }
    },
    {
      type: 'judgement',
      id: 3,
      x: 540,
      y: 120,
      text: '报销金额\n是否大于1000元',
      properties: {
        configured: true,
        nodeType: NODE.JUDGEMENT
      }
    },
    {
      type: 'approval',
      id: 4,
      x: 700,
      y: 120,
      text: '审批',
      properties: {
        configured: true,
        managerIndex: 1,
        ...mockData.managers[1],
        nodeType: NODE.APPROVAL
      }
    },
    {
      type: 'approval',
      id: 5,
      x: 860,
      y: 120,
      text: '审批',
      properties: {
        configured: true,
        managerIndex: 2,
        ...mockData.managers[2],
        nodeType: NODE.APPROVAL
      }
    },
    {
      type: 'end',
      id: 6,
      x: 1020,
      y: 120,
      text: '结束',
      properties: {
        configured: true,
        nodeType: NODE.END
      }
    }
  ],
  edges: [
    {
      type: 'action',
      sourceNodeId: 1,
      targetNodeId: 2
    },
    {
      type: 'action',
      sourceNodeId: 2,
      targetNodeId: 3,
      text: '通过'
    },
    {
      type: 'action',
      sourceNodeId: 3,
      targetNodeId: 4,
      text: '是'
    },
    {
      type: 'action',
      sourceNodeId: 4,
      targetNodeId: 5,
      text: '通过'
    },
    {
      type: 'action',
      sourceNodeId: 5,
      targetNodeId: 6,
      text: '通过'
    },
    {
      type: 'action',
      text: '否',
      sourceNodeId: 3,
      targetNodeId: 5,
      startPoint: {
        x: 540,
        y: 80
      },
      endPoint: {
        x: 860,
        y: 80
      }
    },
    {
      type: 'action',
      text: '驳回',
      sourceNodeId: 2,
      targetNodeId: 1,
      startPoint: {
        x: 360,
        y: 160
      },
      endPoint: {
        x: 200,
        y: 150
      },
      properties: {
        actionType: ACTION.REJECT
      }
    },
    {
      type: 'action',
      text: '驳回',
      sourceNodeId: 4,
      targetNodeId: 1,
      pointsList: [
        {
          x: 700,
          y: 160
        },
        {
          x: 700,
          y: 220
        },
        {
          x: 200,
          y: 220
        },
        {
          x: 200,
          y: 150
        }
      ],
      properties: {
        actionType: ACTION.REJECT
      }
    },
    {
      type: 'action',
      text: '驳回',
      sourceNodeId: 5,
      targetNodeId: 1,
      pointsList: [
        {
          x: 860,
          y: 160
        },
        {
          x: 860,
          y: 250
        },
        {
          x: 200,
          y: 250
        },
        {
          x: 200,
          y: 150
        }
      ],
      properties: {
        actionType: ACTION.REJECT
      }
    }
  ]
};
