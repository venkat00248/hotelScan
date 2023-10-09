import React from 'react';

export const  SideBar = () => {
  const onDragStart = (event:any, nodeType:any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'inputnode')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'action')} draggable>
        Action Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'outputnode')} draggable>
        Output Node
      </div>
    </aside>
  );
};
