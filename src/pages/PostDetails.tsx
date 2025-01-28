import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp } from 'lucide-react';

const PostDetails = () => {
  const { id } = useParams();
  
  // This would typically fetch data based on the ID
  // For now using mock data
  const post = {
    id: id,
    title: "Is NixOS truly reproducible?",
    url: "luj.fr",
    author: "JulienMalka",
    time: "22 hours ago",
    points: 78,
    text: "NixOS is a Linux distribution built on top of the Nix package manager. One of its main selling points is reproducibility: the ability to reliably reproduce a system configuration across different machines and over time. But how truly reproducible is it in practice?",
    comments: [
      {
        id: 1,
        author: "techEnthusiast",
        time: "21 hours ago",
        text: "I've been using NixOS for 2 years now and can confirm it's quite reliable for reproducibility.",
        points: 45
      },
      {
        id: 2,
        author: "systemsGuru",
        time: "20 hours ago",
        text: "The key is to properly pin your dependencies and use flakes.",
        points: 32
      }
    ]
  };

  return (
    <div className="container py-6 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            Posted by {post.author} • {post.time}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-base mb-4">{post.text}</p>
          <a href={post.url} className="text-primary hover:underline text-sm">
            {post.url}
          </a>
        </CardContent>
      </Card>

      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      <div className="space-y-4">
        {post.comments.map((comment) => (
          <Card key={comment.id} className="group">
            <CardContent className="flex gap-4 pt-6">
              <div className="flex flex-col items-center pt-1">
                <ChevronUp className="vote-arrow" />
                <span className="text-sm text-muted-foreground mt-1">
                  {comment.points}
                </span>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">
                  {comment.author} • {comment.time}
                </div>
                <p className="text-sm">{comment.text}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;