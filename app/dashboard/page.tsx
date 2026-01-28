import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UploadSection } from "@/components/dashboard/upload-section";
import { RecentEpisodes } from "@/components/dashboard/recent-episodes";

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user.firstName || "there"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Ready to repurpose your latest episode?
        </p>
      </div>

      <UploadSection userId={user.id} />

      <div className="mt-12">
        <RecentEpisodes userId={user.id} />
      </div>
    </div>
  );
}
