'use client';

import { PlaceholderNode } from '@/components/react-flow/placeholder-node';
import { WorkflowNode } from '@/components/react-flow/workflow-node';
import type { NodeProps } from '@xyflow/react';
import { PlusIcon } from 'lucide-react';
import { memo } from 'react';

export const InitialNode = memo((props: NodeProps) => {
  return (
    <WorkflowNode>
      <PlaceholderNode {...props}>
        <div className="cursor-pointer flex items-center justify-center">
          <PlusIcon className="size-4" />
        </div>
      </PlaceholderNode>
    </WorkflowNode>
  );
});

InitialNode.displayName = 'InitialNode';
