import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Clock, CheckCircle2, XCircle } from "lucide-react";

interface RecentEpisodesProps {
  userId: string;
}

const mockEpisodes = [
  {
    id: "1",
    title: "The 4% Rule Explained - Episode 42",
    date: "2026-01-25",
    status: "completed",
    clipsCount: 12,
  },
  {
    id: "2",
    title: "Index Fund Investing for Beginners",
    date: "2026-01-22",
    status: "processing",
    clipsCount: 0,
  },
  {
    id: "3",
    title: "Coast FIRE vs Lean FIRE",
    date: "2026-01-18",
    status: "completed",
    clipsCount: 8,
  },
  {
    id: "4",
    title: "Tax-Loss Harvesting Strategies",
    date: "2026-01-15",
    status: "failed",
    clipsCount: 0,
  },
];

const statusConfig = {
  processing: {
    icon: Clock,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    label: "Processing",
  },
  completed: {
    icon: CheckCircle2,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    label: "Complete",
  },
  failed: {
    icon: XCircle,
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    label: "Failed",
  },
};

export function RecentEpisodes({ userId }: RecentEpisodesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Recent Episodes</CardTitle>
        <CardDescription>
          Track your uploaded episodes and their processing status
        </CardDescription>
      </CardHeader>
      <CardContent>
        {mockEpisodes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No episodes yet. Upload your first episode to get started!
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Episode Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Clips</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEpisodes.map((episode) => {
                const StatusIcon = statusConfig[episode.status as keyof typeof statusConfig].icon;
                const statusColor = statusConfig[episode.status as keyof typeof statusConfig].color;
                const statusLabel = statusConfig[episode.status as keyof typeof statusConfig].label;

                return (
                  <TableRow key={episode.id}>
                    <TableCell className="font-medium">{episode.title}</TableCell>
                    <TableCell>
                      {new Date(episode.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColor}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {statusLabel}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {episode.clipsCount > 0 ? (
                        <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
                          {episode.clipsCount} clips
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400">—</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={episode.status !== "completed"}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
