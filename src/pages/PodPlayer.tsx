import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, ArrowLeft, Send } from "lucide-react";

const mockPodData = {
  1: {
    title: "My Journey from Failure to Success",
    author: "Sarah Johnson",
    videoUrl: "/lovable-uploads/541b64f0-e8f4-4229-ab73-0710edaeb70c.png",
    description: "In this pod, I share my personal journey of overcoming multiple business failures to finally achieving success. It wasn't easy, but every setback taught me valuable lessons about resilience, persistence, and self-belief.",
    tags: ["#OvercomingFear", "#StartupJourney"],
    mood: "Motivational",
    likes: 234,
    sentiment: "This talk reflects resilience and self-growth.",
    transcript: "Hello everyone. Today I want to share a very personal story about my journey as an entrepreneur. Five years ago, I started my first business with high hopes and big dreams..."
  }
};

export default function PodPlayer() {
  const { podId } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      text: "This is so inspiring! Thank you for sharing.",
      replies: []
    }
  ]);

  const pod = (podId && mockPodData[Number(podId) as keyof typeof mockPodData]) || mockPodData[1];

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: "You",
          text: comment,
          replies: []
        }
      ]);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          className="mb-4 gap-2"
          onClick={() => navigate("/pods-feed")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pods
        </Button>

        {/* Video Player */}
        <Card className="overflow-hidden mb-6">
          <div className="aspect-video bg-muted">
            <img
              src={pod.videoUrl}
              alt={pod.title}
              className="w-full h-full object-cover"
            />
          </div>
        </Card>

        {/* Pod Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3">{pod.title}</h1>
          <p className="text-muted-foreground mb-4">by {pod.author}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {pod.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            <Badge variant="outline">{pod.mood}</Badge>
          </div>

          <div className="flex gap-4 mb-6">
            <Button variant="outline" className="gap-2">
              <Heart className="w-4 h-4" />
              {pod.likes}
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>

          <Card className="p-4 mb-6 bg-muted/50">
            <p className="text-sm italic">{pod.sentiment}</p>
          </Card>

          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-muted-foreground mb-6">{pod.description}</p>

          <h2 className="text-xl font-semibold mb-2">Transcript</h2>
          <Card className="p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">{pod.transcript}</p>
          </Card>
        </div>

        {/* Comments Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Comments</h2>

          <Card className="p-4 mb-4">
            <Textarea
              placeholder="Share your thoughts..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
            />
            <Button
              onClick={handleCommentSubmit}
              className="mt-2 gap-2"
              disabled={!comment.trim()}
            >
              <Send className="w-4 h-4" />
              Post Comment
            </Button>
          </Card>

          <div className="space-y-4">
            {comments.map((c) => (
              <Card key={c.id} className="p-4">
                <p className="font-semibold mb-1">{c.author}</p>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
