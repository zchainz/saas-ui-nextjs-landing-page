import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const type = formData.get("type") as string;

    if (type === "file") {
      const file = formData.get("file") as File;

      if (!file) {
        return NextResponse.json(
          { error: "No file provided" },
          { status: 400 }
        );
      }

      console.log("File upload received:", {
        userId,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
      });

      return NextResponse.json({
        success: true,
        episodeId: `episode-${Date.now()}`,
        message: "File uploaded successfully. Processing started.",
      });

    } else if (type === "url") {
      const youtubeUrl = formData.get("youtubeUrl") as string;

      if (!youtubeUrl) {
        return NextResponse.json(
          { error: "No YouTube URL provided" },
          { status: 400 }
        );
      }

      if (!youtubeUrl.includes("youtube.com") && !youtubeUrl.includes("youtu.be")) {
        return NextResponse.json(
          { error: "Invalid YouTube URL" },
          { status: 400 }
        );
      }

      console.log("YouTube URL upload received:", {
        userId,
        youtubeUrl,
      });

      return NextResponse.json({
        success: true,
        episodeId: `episode-${Date.now()}`,
        message: "YouTube URL received. Processing started.",
      });
    }

    return NextResponse.json(
      { error: "Invalid upload type" },
      { status: 400 }
    );

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
