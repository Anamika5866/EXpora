import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Upload, Play, Pause, StopCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pods() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [mood, setMood] = useState("Motivational");
  const [privacy, setPrivacy] = useState("Public");

  const startRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
    // MediaRecorder implementation will go here
  };

  const pauseRecording = () => {
    setIsPaused(!isPaused);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setShowForm(true);
    // Stop recording logic here
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setRecordedVideo(url);
      setShowForm(true);
    }
  };

  const handlePublish = () => {
    // Publish logic here
    console.log({ title, description, tags, mood, privacy });
    navigate("/pods-feed");
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Create Your Pod</h1>
          <p className="text-muted-foreground">Share your story through video</p>
        </div>

        {!showForm ? (
          <Card className="p-8">
            <div className="flex flex-col items-center gap-6">
              {/* Video Preview Area */}
              <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                {recordedVideo ? (
                  <video src={recordedVideo} controls className="w-full h-full rounded-lg" />
                ) : isRecording ? (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-destructive animate-pulse mx-auto mb-4"></div>
                    <p className="text-lg font-semibold">Recording...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Video className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">Your video will appear here</p>
                  </div>
                )}
              </div>

              {/* Recording Controls */}
              {!recordedVideo && (
                <div className="flex gap-4">
                  {!isRecording ? (
                    <>
                      <Button onClick={startRecording} size="lg" className="gap-2">
                        <Video className="w-5 h-5" />
                        Start Recording
                      </Button>
                      <div className="relative">
                        <input
                          type="file"
                          accept="video/*"
                          onChange={handleFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Button variant="outline" size="lg" className="gap-2">
                          <Upload className="w-5 h-5" />
                          Upload Video
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <Button onClick={pauseRecording} variant="outline" size="lg" className="gap-2">
                        {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                        {isPaused ? "Resume" : "Pause"}
                      </Button>
                      <Button onClick={stopRecording} variant="destructive" size="lg" className="gap-2">
                        <StopCircle className="w-5 h-5" />
                        Stop & Continue
                      </Button>
                    </>
                  )}
                </div>
              )}

              {recordedVideo && (
                <Button onClick={() => setShowForm(true)} size="lg">
                  Continue to Details
                </Button>
              )}
            </div>
          </Card>
        ) : (
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Add Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  placeholder="Give your pod a compelling title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  placeholder="Share the context and message of your story"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tags / Lessons Learned</label>
                <Input
                  placeholder="e.g., #OvercomingFear, #StartupJourney"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Emotional Mood</label>
                <select
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                >
                  <option>Motivational</option>
                  <option>Hopeful</option>
                  <option>Reflective</option>
                  <option>Grateful</option>
                  <option>Sad</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Privacy</label>
                <select
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={privacy}
                  onChange={(e) => setPrivacy(e.target.value)}
                >
                  <option>Public</option>
                  <option>Private</option>
                  <option>Anonymous</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <Button onClick={() => setShowForm(false)} variant="outline" className="flex-1">
                  Back to Video
                </Button>
                <Button onClick={handlePublish} className="flex-1">
                  Publish Pod
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
