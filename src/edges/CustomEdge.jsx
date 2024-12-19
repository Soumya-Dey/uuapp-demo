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
            width: '30px',
            height: '30px',
            padding: '2px',
            // border: '1.5px solid #202020',
            // borderRadius: '50%',
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
            background: '#ffffff',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6'
          >
            <path
              fillRule='evenodd'
              d='M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z'
              clipRule='evenodd'
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
