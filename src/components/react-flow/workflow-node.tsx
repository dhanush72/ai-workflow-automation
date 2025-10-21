'use client';

import { Button } from '@/components/ui/button';
import { NodeToolbar, Position } from '@xyflow/react';
import { SettingsIcon, TrashIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface WorkflowNodeProps {
  children: ReactNode;
  name?: string;
  description?: string;
  showToolbar?: boolean;
  onDelete?: () => void;
  onSettings?: () => void;
}

export const WorkflowNode = ({
  children,
  showToolbar = true,
  name,
  description,
  onDelete,
  onSettings,
}: WorkflowNodeProps) => {
  return (
    <>
      {showToolbar && (
        <NodeToolbar>
          <Button size="sm" variant="ghost" onClick={onSettings}>
            <SettingsIcon className="size-4" />
          </Button>
          <Button size="sm" variant="ghost" onClick={onDelete}>
            <TrashIcon className="size-4" />
          </Button>
        </NodeToolbar>
      )}
      {children}
      {name && (
        <NodeToolbar
          position={Position.Bottom}
          isVisible
          className="max-w-[200px] text-center"
        >
          <p className="font-medium">{name}</p>
          {description && (
            <p className="text-muted-foreground truncate text-sm">
              {description}
            </p>
          )}
        </NodeToolbar>
      )}
    </>
  );
};
