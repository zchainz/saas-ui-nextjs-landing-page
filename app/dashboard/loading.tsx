export default function DashboardLoading() {
  return (
    <div className="flex h-screen w-full">
      <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
        <div className="p-6 space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-10 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 p-8">
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 animate-pulse" />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
