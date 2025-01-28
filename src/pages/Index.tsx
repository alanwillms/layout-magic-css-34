import React from 'react';
import Header from '../components/Header';
import StoryItem from '../components/StoryItem';

const SAMPLE_STORIES = [
  {
    title: "Is NixOS truly reproducible?",
    url: "luj.fr",
    author: "JulienMalka",
    time: "22 hours ago",
    comments: 35,
    points: 78,
    tags: ["nix"]
  },
  {
    title: "Building personal software with Claude",
    url: "blog.nelhage.com",
    author: "nelhage",
    time: "14 hours ago",
    comments: 24,
    points: 31,
    tags: ["ai", "practices"]
  },
  {
    title: "Pebble smartwatches open-sourced",
    url: "opensource.googleblog.com",
    author: "antonmedv",
    time: "16 hours ago",
    comments: 14,
    points: 66,
    tags: ["mobile"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6">
        <div className="space-y-1">
          {SAMPLE_STORIES.map((story, index) => (
            <StoryItem
              key={index}
              {...story}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;