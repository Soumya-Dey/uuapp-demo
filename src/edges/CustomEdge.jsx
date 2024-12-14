import {
  BaseEdge,
  getStraightPath,
  getBezierPath,
  MarkerType,
  useStore,
  EdgeLabelRenderer,
} from '@xyflow/react';

const zoomSelector = (s) => {
  //   console.log({ s });
  return s.transform[2] >= 0.75;
};

export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  markerEnd,
  style,
}) => {
  const showContent = useStore(zoomSelector);

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return showContent ? (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
    </>
  ) : null;
};

export const CustomEdgeWithIcon = ({
  id,
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  markerEnd,
  style,
}) => {
  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          className='nodrag nopan'
          style={{
            width: '24px',
            height: '24px',
            padding: '4px',
            border: '1.5px solid #202020',
            borderRadius: '50%',
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
            background: '#ffffff',
          }}
        >
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
              d='M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5'
            />
          </svg>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

const zoomSelectorLevel2 = (s) => {
  //   console.log({ s });
  return s.transform[2] >= 0.85;
};

export const CustomEdgeLevel2 = ({
  id,
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  markerEnd,
  style,
}) => {
  const showContent = useStore(zoomSelectorLevel2);

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return showContent ? (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
    </>
  ) : null;
};
