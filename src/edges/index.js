import { MarkerType } from '@xyflow/react';
import { CustomEdge, CustomEdgeLevel2, CustomEdgeWithIcon } from './CustomEdge';

export const initialEdges = [
  {
    id: 'edge-0-1',
    source: 'node-0',
    target: 'node-1',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-1-2',
    type: 'step-edge-icon',
    source: 'node-1',
    target: 'node-2',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-2-3',
    source: 'node-2',
    target: 'node-3',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-3-4',
    type: 'step-edge-icon',
    source: 'node-3',
    target: 'node-4',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-4-5',
    source: 'node-4',
    target: 'node-5',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-5-6',
    type: 'step-edge-icon',
    source: 'node-5',
    target: 'node-6',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6-7',
    type: 'step-edge-icon',
    source: 'node-6',
    target: 'node-7',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-7-8',
    source: 'node-7',
    target: 'node-8',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-8-9',
    type: 'step-edge-icon',
    source: 'node-8',
    target: 'node-9',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-9-10',
    type: 'step-edge-icon',
    source: 'node-9',
    target: 'node-10',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-10-11',
    type: 'step-edge-icon',
    source: 'node-10',
    target: 'node-11',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-11-12',
    type: 'step-edge-icon',
    source: 'node-11',
    target: 'node-12',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
];

export const indvPhaseEdges = [
  {
    id: 'edge-6.0-6.1',
    source: 'node-6.0',
    target: 'node-6.1',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.1-6.2',
    source: 'node-6.1',
    target: 'node-6.2',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.2-6.3',
    type: 'step-edge-icon',
    source: 'node-6.2',
    target: 'node-6.3',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.3-6.4',
    source: 'node-6.3',
    target: 'node-6.4',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.4-6.5',
    source: 'node-6.4',
    target: 'node-6.5',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.5-inv',
    type: 'step-edge-icon',
    source: 'node-6.5',
    target: 'node-inv',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },

  {
    id: 'edge-6.0.0-6.0',
    type: 'substep-edge',
    source: 'node-6.0.0',
    target: 'node-6.0',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },

  {
    id: 'edge-6.1.0-6.1',
    type: 'substep-edge',
    source: 'node-6.1.0',
    target: 'node-6.1',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.1.1-6.1.0',
    type: 'substep-edge',
    source: 'node-6.1.1',
    target: 'node-6.1.0',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.1.2-6.1.1',
    type: 'substep-edge',
    source: 'node-6.1.2',
    target: 'node-6.1.1',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.1.3-6.1.2',
    type: 'substep-edge',
    source: 'node-6.1.3',
    target: 'node-6.1.2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.1.4-6.1.3',
    type: 'substep-edge',
    source: 'node-6.1.4',
    target: 'node-6.1.3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },

  {
    id: 'edge-6.2.0-6.2',
    type: 'substep-edge',
    source: 'node-6.2.0',
    target: 'node-6.2',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.2.1-6.2.0',
    type: 'substep-edge',
    source: 'node-6.2.1',
    target: 'node-6.2.0',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.2.2-6.2',
    type: 'substep-edge',
    source: 'node-6.2.2',
    target: 'node-6.2',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.2.3-6.2.2',
    type: 'substep-edge',
    source: 'node-6.2.3',
    target: 'node-6.2.2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.2.4-6.2.3',
    type: 'substep-edge',
    source: 'node-6.2.4',
    target: 'node-6.2.3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.2.5-6.2.4',
    type: 'substep-edge',
    source: 'node-6.2.5',
    target: 'node-6.2.4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },

  {
    id: 'edge-6.3.0-6.3',
    type: 'substep-edge',
    source: 'node-6.3.0',
    target: 'node-6.3',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.3.1-6.3.0',
    type: 'substep-edge',
    source: 'node-6.3.1',
    target: 'node-6.3.0',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.3.2-6.3.1',
    type: 'substep-edge',
    source: 'node-6.3.2',
    target: 'node-6.3.1',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.3.3-6.3.2',
    type: 'substep-edge',
    source: 'node-6.3.3',
    target: 'node-6.3.2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.3.4-6.3.3',
    type: 'substep-edge',
    source: 'node-6.3.4',
    target: 'node-6.3.3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },

  {
    id: 'edge-6.4.0-6.4',
    type: 'substep-edge',
    source: 'node-6.4.0',
    target: 'node-6.4',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.4.0.0-6.4.0',
    type: 'subsubstep-edge',
    source: 'node-6.4.0.0',
    target: 'node-6.4.0',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.4.0.1-6.4.0.0',
    type: 'subsubstep-edge',
    source: 'node-6.4.0.1',
    target: 'node-6.4.0.0',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.4.0.2-6.4.0.1',
    type: 'subsubstep-edge',
    source: 'node-6.4.0.2',
    target: 'node-6.4.0.1',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.4.0.3-6.4.0.2',
    type: 'subsubstep-edge',
    source: 'node-6.4.0.3',
    target: 'node-6.4.0.2',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
  {
    id: 'edge-6.4.0.4-6.4.0.3',
    type: 'subsubstep-edge',
    source: 'node-6.4.0.4',
    target: 'node-6.4.0.3',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#333333',
    },
    style: {
      strokeWidth: 2,
      stroke: '#333333',
    },
  },
];

export const edgeTypes = {
  'step-edge-icon': CustomEdgeWithIcon,
  'substep-edge': CustomEdge,
  'subsubstep-edge': CustomEdgeLevel2,
};
