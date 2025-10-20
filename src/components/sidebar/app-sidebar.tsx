'use client';

import * as React from 'react';
import { FolderOpenIcon, CreditCardIcon, HistoryIcon } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { NavMain } from '@/components/sidebar/nav-main';
import { NavUser } from '@/components/sidebar/nav-user';
import { authClient } from '@/lib/auth-client';

const menuItems = [
  {
    title: 'Workflows',
    items: [
      {
        title: 'Workflows',
        icon: FolderOpenIcon,
        url: '/workflows',
      },
      {
        title: 'Credentials',
        icon: CreditCardIcon,
        url: '/credentials',
      },
      {
        title: 'Executions',
        icon: HistoryIcon,
        url: '/executions',
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = authClient.useSession();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/workflows">
                <Image
                  src="/logo.svg"
                  alt="Ai Workflow Automation Logo"
                  className="size-6"
                  width={30}
                  height={30}
                />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-sm font-semibold">
                    Ai Workflow
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((group) => (
          <NavMain key={group.title} title={group.title} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        {session && (
          <NavUser
            user={{
              name: session?.user?.name || '',
              email: session?.user?.email || '',
              avatar: session?.user?.image || '',
            }}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
