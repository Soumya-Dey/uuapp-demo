import { Handle, Position, useStore } from '@xyflow/react';
import { useEffect } from 'react';

export const StepNode = ({
  // positionAbsoluteX,
  // positionAbsoluteY,
  data,
  isConnectable,
  selected,
}) => {
  // const x = `${Math.round(positionAbsoluteX)}px`;
  // const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div
      className='react-flow__node-input'
      style={{
        border: '1px solid red',
        background: selected ? '#eeeeee' : 'transparent',
      }}
    >
      <Handle
        type='target'
        id='left'
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top'
        // style={{ left: 10 }}
        isConnectable={isConnectable}
      />
      <Handle
        type='target'
        position={Position.Bottom}
        id='bottom'
        isConnectable={isConnectable}
      />
      {data.label && (
        <div
          className='custom-node'
          style={{ fontWeight: '600', fontSize: '1.1rem' }}
        >
          {data.label}
        </div>
      )}

      {/* <div>
        {x} {y}
      </div> */}

      {/* <Handle type='source' position={Position.Bottom} /> */}

      <Handle
        type='source'
        position={Position.Right}
        id='right'
        isConnectable={isConnectable}
      />
    </div>
  );
};

const zoomSelector = (s) => {
  // console.log({ s });
  return s.transform[2] >= 0.75;
};

export const SubStepNodeTop = ({ data, isConnectable }) => {
  const showContent = useStore(zoomSelector);

  return showContent ? (
    // We add this class to use the same styles as React Flow's default nodes.
    <div
      style={{
        padding: '6px 24px',
        minWidth: '80px',
        textAlign: 'center',
        border: '1px solid #aaaaaa',
        borderRadius: '4px',
        background: data.selected ? '#eeeeee' : 'transparent',
      }}
    >
      {data.selected && (
        <div
          style={{
            position: 'absolute',
            padding: '8px 4px',
            width: '60px',
            border: '1px solid #aaaaaa',
            background: '#ffffff',
            boxShadow: '-2px 2px 8px 0 #dddddd',
            borderRadius: '4px',
            right: '-90px',
            top: '-30px',
          }}
        >
          <p style={{ color: 'red', padding: 0, margin: 0 }}>R: 5</p>
          <p style={{ color: 'orange', padding: 0, margin: 0 }}>A: 10</p>
          <p style={{ color: 'green', padding: 0, margin: 0 }}>G: 78</p>
          <p style={{ color: 'blue', padding: 0, margin: 0 }}>B: 34</p>
        </div>
      )}
      <Handle
        type='target'
        position={Position.Top}
        id='top'
        isConnectable={isConnectable}
      />
      <Handle
        type='source'
        id='bottom'
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
      {data.label && <div className='custom-node'>{data.label}</div>}
    </div>
  ) : null;
};

export const SubStepNodeBottom = ({ data, isConnectable }) => {
  const showContent = useStore(zoomSelector);

  return showContent ? (
    // We add this class to use the same styles as React Flow's default nodes.
    <div
      className='sub-step-node'
      style={{
        position: 'relative',
        padding: '6px 24px',
        minWidth: '80px',
        textAlign: 'center',
        border: '1px solid #aaaaaa',
        borderRadius: '4px',
        background: data.selected ? '#eeeeee' : 'transparent',
      }}
    >
      {data.selected && (
        <div
          style={{
            position: 'absolute',
            padding: '8px 4px',
            width: '60px',
            border: '1px solid #aaaaaa',
            background: '#ffffff',
            boxShadow: '-2px 2px 8px 0 #dddddd',
            borderRadius: '4px',
            right: '-90px',
            top: '-20px',
          }}
        >
          <p style={{ color: 'red', padding: 0, margin: 0 }}>R: 5</p>
          <p style={{ color: 'orange', padding: 0, margin: 0 }}>A: 10</p>
          <p style={{ color: 'green', padding: 0, margin: 0 }}>G: 78</p>
          <p style={{ color: 'blue', padding: 0, margin: 0 }}>B: 34</p>
        </div>
      )}
      <Handle
        type='source'
        id='top'
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        type='target'
        position={Position.Bottom}
        id='bottom'
        isConnectable={isConnectable}
      />
      {data.label && <div className='custom-node'>{data.label}</div>}
    </div>
  ) : null;
};

const zoomSelectorLevel2 = (s) => {
  // console.log({ s });
  return s.transform[2] >= 0.85;
};

export const SubSubStepNode = ({ data, isConnectable }) => {
  const showContent = useStore(zoomSelectorLevel2);

  return showContent ? (
    // We add this class to use the same styles as React Flow's default nodes.
    <div
      className='sub-step-node'
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80px',
        height: '80px',
        textAlign: 'center',
        border: '1px solid #aaaaaa',
        borderRadius: '40px',
        background: data.selected ? '#eeeeee' : 'transparent',
      }}
    >
      {data.selected && (
        <div
          style={{
            position: 'absolute',
            padding: '8px 4px',
            width: '60px',
            border: '1px solid #aaaaaa',
            background: '#ffffff',
            boxShadow: '-2px 2px 8px 0 #dddddd',
            borderRadius: '4px',
            right: '-90px',
            top: '-20px',
          }}
        >
          <p style={{ color: 'red', padding: 0, margin: 0 }}>R: 5</p>
          <p style={{ color: 'orange', padding: 0, margin: 0 }}>A: 10</p>
          <p style={{ color: 'green', padding: 0, margin: 0 }}>G: 78</p>
          <p style={{ color: 'blue', padding: 0, margin: 0 }}>B: 34</p>
        </div>
      )}
      <Handle
        type='source'
        id='top'
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        type='target'
        position={Position.Bottom}
        id='bottom'
        isConnectable={isConnectable}
      />
      {data.label && <div className='custom-node'>{data.label}</div>}
    </div>
  ) : null;
};

export const LogoNode = ({ data, isConnectable }) => {
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div
      style={{
        width: '34px',
        height: '34px',
        padding: '4px',
        border: '2px solid #202020',
        borderRadius: '50%',
      }}
    >
      <Handle
        type='target'
        id='left'
        position={Position.Left}
        isConnectable={isConnectable}
      />
      {/* {data.label && <div className='custom-node'>{data.label}</div>} */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
        />
      </svg>

      <Handle
        type='source'
        position={Position.Right}
        id='right'
        isConnectable={isConnectable}
      />
    </div>
  );
};
