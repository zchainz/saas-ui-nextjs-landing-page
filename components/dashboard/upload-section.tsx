"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Link as LinkIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface UploadSectionProps {
  userId: string;
}

export function UploadSection({ userId }: UploadSectionProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMode, setUploadMode] = useState<"file" | "url">("file");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
      toast.success(`File selected: ${acceptedFiles[0].name}`);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/mpeg": [".mp3"],
      "audio/wav": [".wav"],
      "video/mp4": [".mp4"],
      "audio/x-m4a": [".m4a"],
    },
    maxFiles: 1,
    disabled: isUploading,
  });

  const handleUpload = async () => {
    if (uploadMode === "file" && !selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }

    if (uploadMode === "url" && !youtubeUrl) {
      toast.error("Please enter a YouTube URL");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("userId", userId);

      if (uploadMode === "file" && selectedFile) {
        formData.append("file", selectedFile);
        formData.append("type", "file");
      } else {
        formData.append("youtubeUrl", youtubeUrl);
        formData.append("type", "url");
      }

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      toast.success("Episode uploaded successfully! Processing started.");
      setSelectedFile(null);
      setYoutubeUrl("");

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload episode");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card id="upload" className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl">Upload New Episode</CardTitle>
        <CardDescription>
          Upload your podcast audio/video file or provide a YouTube URL to start repurposing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4 mb-4">
          <Button
            variant={uploadMode === "file" ? "default" : "outline"}
            onClick={() => setUploadMode("file")}
            className="flex-1"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload File
          </Button>
          <Button
            variant={uploadMode === "url" ? "default" : "outline"}
            onClick={() => setUploadMode("url")}
            className="flex-1"
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            YouTube URL
          </Button>
        </div>

        {uploadMode === "file" ? (
          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
              transition-colors duration-200
              ${isDragActive
                ? "border-primary-800 bg-primary-50 dark:bg-primary-900/20"
                : "border-gray-300 dark:border-gray-700 hover:border-primary-800"
              }
              ${isUploading ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            <input {...getInputProps()} />
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            {selectedFile ? (
              <div>
                <p className="text-lg font-medium text-primary-800">
                  {selectedFile.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Click or drag to replace
                </p>
              </div>
            ) : isDragActive ? (
              <p className="text-lg text-primary-800">Drop your file here</p>
            ) : (
              <div>
                <p className="text-lg mb-2">
                  Drag & drop your podcast file here
                </p>
                <p className="text-sm text-gray-500">
                  Supports MP3, WAV, MP4, M4A • Up to 3 hours
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="youtube-url">YouTube URL</Label>
            <Input
              id="youtube-url"
              type="url"
              placeholder="https://youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              disabled={isUploading}
            />
            <p className="text-sm text-gray-500">
              Paste the full YouTube URL of your podcast episode
            </p>
          </div>
        )}

        <Button
          onClick={handleUpload}
          disabled={
            isUploading ||
            (uploadMode === "file" && !selectedFile) ||
            (uploadMode === "url" && !youtubeUrl)
          }
          className="w-full bg-primary-800 hover:bg-primary-700"
          size="lg"
        >
          {isUploading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Uploading...
            </>
          ) : (
            "Repurpose Episode"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
