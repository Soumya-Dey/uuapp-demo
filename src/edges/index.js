import { MarkerType } from '@xyflow/react';
import { CustomEdge, CustomEdgeLevel2, CustomEdgeWithIcon } from './CustomEdge';

export const initialEdges = [
  {
    id: 'edge-0-1',
    type: 'step-edge-icon',
    source: 'node-0',
    target: 'node-1',
    sourceHandle: 'right',
    targetHandle: 'left',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2-1',
    type: 'substep-edge',
    source: 'node-2',
    target: 'node-1',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-4-2',
    type: 'substep-edge',
    source: 'node-4',
    target: 'node-2',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-4.1-4',
    type: 'subsubstep-edge',
    source: 'node-4.1',
    target: 'node-4',
    sourceHandle: 'top',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-4.2-4',
    type: 'subsubstep-edge',
    source: 'node-4.2',
    target: 'node-4',
    sourceHandle: 'top',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-1-3',
    // type: 'smoothstep',
    source: 'node-1',
    target: 'node-3',
    sourceHandle: 'right',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },
  {
    id: 'edge-3-5',
    type: 'step-edge-icon',
    source: 'node-3',
    target: 'node-5',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },
  {
    id: 'edge-5-6',
    // type: 'smoothstep',
    source: 'node-5',
    target: 'node-6',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
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
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },
  {
    id: 'edge-8-6',
    type: 'substep-edge',
    source: 'node-8',
    target: 'node-6',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-9-8',
    type: 'substep-edge',
    source: 'node-9',
    target: 'node-8',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-10-7',
    type: 'substep-edge',
    source: 'node-10',
    target: 'node-7',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-10.1-10',
    type: 'subsubstep-edge',
    source: 'node-10.1',
    target: 'node-10',
    sourceHandle: 'top',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-7-11',
    // type: 'smoothstep',
    source: 'node-7',
    target: 'node-11',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },

  {
    id: 'edge-2.0-2.1',
    type: 'step-edge-icon',
    source: 'node-2.0',
    target: 'node-2.1',
    sourceHandle: 'right',
    targetHandle: 'left',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.2-2.1',
    type: 'substep-edge',
    source: 'node-2.2',
    target: 'node-2.1',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.4-2.2',
    type: 'substep-edge',
    source: 'node-2.4',
    target: 'node-2.2',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.4.1-2.4',
    type: 'subsubstep-edge',
    source: 'node-2.4.1',
    target: 'node-2.4',
    sourceHandle: 'top',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.4.2-2.4',
    type: 'subsubstep-edge',
    source: 'node-2.4.2',
    target: 'node-2.4',
    sourceHandle: 'top',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.1-2.3',
    // type: 'smoothstep',
    source: 'node-2.1',
    target: 'node-2.3',
    sourceHandle: 'right',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },
  {
    id: 'edge-2.3-2.5',
    type: 'step-edge-icon',
    source: 'node-2.3',
    target: 'node-2.5',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },
  {
    id: 'edge-2.5-2.6',
    // type: 'smoothstep',
    source: 'node-2.5',
    target: 'node-2.6',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },
  {
    id: 'edge-2.6-2.7',
    type: 'step-edge-icon',
    source: 'node-2.6',
    target: 'node-2.7',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },
  {
    id: 'edge-2.8-2.6',
    type: 'substep-edge',
    source: 'node-2.8',
    target: 'node-2.6',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.9-2.8',
    type: 'substep-edge',
    source: 'node-2.9',
    target: 'node-2.8',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.10-2.7',
    type: 'substep-edge',
    source: 'node-2.10',
    target: 'node-2.7',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.10.1-2.10',
    type: 'subsubstep-edge',
    source: 'node-2.10.1',
    target: 'node-2.10',
    sourceHandle: 'top',
    targetHandle: 'top',
    // animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    id: 'edge-2.7-2.11',
    // type: 'smoothstep',
    source: 'node-2.7',
    target: 'node-2.11',
    sourceHandle: 'right',
    targetHandle: 'left',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    // targetHandle: 'a',
    // animated: true,
  },
];
export const edgeTypes = {
  'step-edge-icon': CustomEdgeWithIcon,
  'substep-edge': CustomEdge,
  'subsubstep-edge': CustomEdgeLevel2,
};
