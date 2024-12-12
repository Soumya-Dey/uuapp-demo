import {
  BaseEdge,
  getStraightPath,
  getBezierPath,
  MarkerType,
  useStore,
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
