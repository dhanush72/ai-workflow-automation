'use client';

import { BaseExecutionNode } from '@/features/executions/components/base-execution-node';
import {
  FormType,
  HttpRequestDialog,
} from '@/features/executions/components/http-request/dialog';
import { Node, NodeProps, useReactFlow } from '@xyflow/react';
import { GlobeIcon } from 'lucide-react';
import { memo, useState } from 'react';

type HttpRequestNodeData = {
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: string;
  [key: string]: unknown;
};

type HttpRequestNodeType = Node<HttpRequestNodeData>;

export const HttpRequestNode = memo((props: NodeProps<HttpRequestNodeType>) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const { setNodes } = useReactFlow();

  const nodeData = props.data;
  const description = nodeData.endpoint
    ? `${nodeData.method || 'GET'}: ${nodeData.endpoint}`
    : 'Not configured';

  const handleSettings = () => {
    setDialogOpen(true);
  };

  const handleSubmit = (values: FormType) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          return {
            ...node,
            data: {
              ...node.data,
              endpoint: values.endpoint,
              method: values.method,
              body: values.body,
            },
          };
        }
        return node;
      })
    );
  };

  return (
    <>
      <HttpRequestDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleSubmit}
        defaultEndpoint={nodeData.endpoint}
        defaultMethod={nodeData.method}
        defaultBody={nodeData.body}
      />
      <BaseExecutionNode
        {...props}
        id={props.id}
        icon={GlobeIcon}
        name="HTTP Request"
        status="initial"
        description={description}
        onDoubleClick={handleSettings}
        onSettings={handleSettings}
      />
    </>
  );
});

HttpRequestNode.displayName = 'HttpRequestNode';
