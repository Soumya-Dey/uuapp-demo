import { useCallback, useState } from 'react';
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useStoreApi,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import './App.css';
import { indvPhaseNodes, initialNodes, nodeTypes } from './nodes';
import { edgeTypes, indvPhaseEdges, initialEdges } from './edges';

const Flow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const onNodeMouseEnter = (_, node) => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, hovered: n.id === node.id },
      }))
    );
  };
  const onNodeMouseLeave = () => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, hovered: false },
      }))
    );
  };

  const onNodeClick = (_, node) => {
    console.log({ node });

    if (node.id.startsWith('phase')) {
      if (node.id === 'phase-node-3') {
        setNodes(indvPhaseNodes);
        setEdges(indvPhaseEdges);
      } else {
        alert(`Clicked on ${node.data.label}`);
      }
    } else if (node.id.startsWith('nav')) {
      setNodes(initialNodes);
      setEdges(initialEdges);
    }

    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, selected: n.id === node.id },
      }))
    );
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodesDraggable={false}
      onNodeMouseEnter={onNodeMouseEnter}
      onNodeMouseLeave={onNodeMouseLeave}
      onNodeClick={onNodeClick}
      attributionPosition='top-right'
      fitView
      // style={rfStyle}
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          background: '#aaa',
          width: '10vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: '20vh',
          fontSize: '1.2rem',
          borderRight: '1px solid #202020',
        }}
      >
        Side
        <br />
        Navigation
        <br />
        Bar
      </div>
      <div style={{ width: '90vw' }}>
        <div
          style={{
            background: '#aaa',
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.2rem',
            borderBottom: '1px solid #202020',
          }}
        >
          Top Navigation Bar
        </div>
        <div
          style={{
            height: '89.9vh',
          }}
        >
          <Flow />
        </div>
      </div>
    </div>
  );
};

export default App;
