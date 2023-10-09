import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import './ActionNode.scss'
const InputNode = ({
  data,
  isConnectable
}: NodeProps) => {
  return (
    <div className="text-updater-node">
      <div className="actionNode">
      {data?.label}
      </div>
      <Handle
        type="source"
        id="1"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

InputNode.displayName = "InputNode";

export default memo(InputNode);
