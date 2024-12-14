import {
  StepNode,
  SubStepNodeTop,
  SubStepNodeBottom,
  LogoNode,
  SubSubStepNode,
} from './CustomNode';

export const initialNodes = [
  {
    id: 'node-0',
    type: 'step-node',
    position: { x: 0, y: 0 },
    data: { label: 'node-0' },
  },
  {
    id: 'node-1',
    type: 'step-node',
    position: { x: 250, y: 0 },
    data: { label: 'node-1' },
  },
  {
    id: 'node-2',
    type: 'substep-node-top',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 250, y: -100 },
    data: { label: 'node-2' },
  },
  {
    id: 'node-3',
    type: 'step-node',
    data: { label: 'node-3' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'node-4',
    type: 'substep-node-top',
    // sourcePosition: 'top',
    // targetPosition: 'bottom',
    position: { x: 250, y: -200 },
    data: { label: 'node-4' },
  },
  {
    id: 'node-4.1',
    type: 'subsubstep-node',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 120, y: -150 },
    data: { label: 'node-4.1' },
  },
  {
    id: 'node-4.2',
    type: 'subsubstep-node',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 420, y: -150 },
    data: { label: 'node-4.2' },
  },
  {
    id: 'node-5',
    type: 'step-node',
    position: { x: 750, y: 0 },
    data: { label: 'node-5' },
  },
  {
    id: 'node-6',
    type: 'step-node',
    position: { x: 1000, y: 0 },
    data: { label: 'node-6' },
  },
  {
    id: 'node-7',
    type: 'step-node',
    position: { x: 1250, y: 0 },
    data: { label: 'node-7' },
  },
  {
    id: 'node-8',
    type: 'substep-node-bottom',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    position: { x: 1000, y: 100 },
    data: { label: 'node-8' },
  },
  {
    id: 'node-9',
    type: 'substep-node-bottom',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    position: { x: 1000, y: 200 },
    data: { label: 'node-9' },
  },
  {
    id: 'node-10',
    type: 'substep-node-top',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 1250, y: -100 },
    data: { label: 'node-10' },
  },
  {
    id: 'node-10.1',
    type: 'subsubstep-node',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 1150, y: -180 },
    data: { label: 'node-10.1' },
  },
  {
    id: 'node-11',
    type: 'logo-node',
    position: { x: 1470, y: 0 },
    data: { label: 'node-11' },
  },

  {
    id: 'node-2.0',
    type: 'step-node',
    position: { x: 0, y: 500 },
    data: { label: 'node-0' },
  },
  {
    id: 'node-2.1',
    type: 'step-node',
    position: { x: 250, y: 500 },
    data: { label: 'node-1' },
  },
  {
    id: 'node-2.2',
    type: 'substep-node-top',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 250, y: 400 },
    data: { label: 'node-2' },
  },
  {
    id: 'node-2.3',
    type: 'step-node',
    data: { label: 'node-3' },
    position: { x: 500, y: 500 },
  },
  {
    id: 'node-2.4',
    type: 'substep-node-top',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 250, y: 300 },
    data: { label: 'node-4' },
  },
  {
    id: 'node-2.4.1',
    type: 'subsubstep-node',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 120, y: 250 },
    data: { label: 'node-4.1' },
  },
  {
    id: 'node-2.4.2',
    type: 'subsubstep-node',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 420, y: 250 },
    data: { label: 'node-4.2' },
  },
  {
    id: 'node-2.5',
    type: 'step-node',
    position: { x: 750, y: 500 },
    data: { label: 'node-5' },
  },
  {
    id: 'node-2.6',
    type: 'step-node',
    position: { x: 1000, y: 500 },
    data: { label: 'node-6' },
  },
  {
    id: 'node-2.7',
    type: 'step-node',
    position: { x: 1250, y: 500 },
    data: { label: 'node-7' },
  },
  {
    id: 'node-2.8',
    type: 'substep-node-bottom',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    position: { x: 1000, y: 600 },
    data: { label: 'node-8' },
  },
  {
    id: 'node-2.9',
    type: 'substep-node-bottom',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    position: { x: 1000, y: 700 },
    data: { label: 'node-9' },
  },
  {
    id: 'node-2.10',
    type: 'substep-node-top',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 1250, y: 400 },
    data: { label: 'node-10' },
  },
  {
    id: 'node-2.10.1',
    type: 'subsubstep-node',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 1150, y: 320 },
    data: { label: 'node-10.1' },
  },
  {
    id: 'node-2.11',
    type: 'logo-node',
    position: { x: 1470, y: 500 },
    data: { label: 'node-11' },
  },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
export const nodeTypes = {
  'step-node': StepNode,
  'substep-node-top': SubStepNodeTop,
  'substep-node-bottom': SubStepNodeBottom,
  'subsubstep-node': SubSubStepNode,
  'logo-node': LogoNode,
};
