'use client';

import { BaseTriggerNode } from '@/features/triggers/components/base-trigger-node';
import type { NodeProps } from '@xyflow/react';
import { MousePointerIcon } from 'lucide-react';
import { memo } from 'react';

export const ManualTriggerNode = memo((props: NodeProps) => {
  return (
    <>
      <BaseTriggerNode
        {...props}
        icon={MousePointerIcon}
        name="When clicking 'Execute workflow'"
      ></BaseTriggerNode>
    </>
  );
});

ManualTriggerNode.displayName = 'ManualTriggerNode';
