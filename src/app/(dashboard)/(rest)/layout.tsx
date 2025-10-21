import { EditorHeader } from '@/features/editor/components/editor-header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EditorHeader workflowId="" showBreadcrumbs={false} />
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
    </>
  );
}
