'use client';

import { NodeSelector } from '@/components/react-flow/node-selector';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { memo, useState } from 'react';

export const AddNodeBtn = memo(() => {
  const [selectorOpen, setSelectorOpen] = useState(false);
  return (
    <NodeSelector open={selectorOpen} onOpenChange={setSelectorOpen}>
      <Button size="icon" variant="outline" className="bg-background">
        <PlusIcon />
      </Button>
    </NodeSelector>
  );
});

AddNodeBtn.displayName = 'AddNodeBtn';
