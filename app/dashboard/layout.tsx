import { Sidebar } from "@/components/dashboard/sidebar";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
        {children}
      </main>
      <Toaster position="top-right" />
    </div>
  );
}
