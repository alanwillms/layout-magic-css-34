import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StoryItemProps {
  id?: string;
  title: string;
  url: string;
  author: string;
  time: string;
  comments: number;
  points: number;
  tags?: string[];
}

const StoryItem: React.FC<StoryItemProps> = ({
  id = '1', // Default ID for the sample stories
  title,
  url,
  author,
  time,
  comments,
  points,
  tags = [],
}) => {
  return (
    <div className="group flex items-start space-x-4 py-4 px-4 hover:bg-secondary/50 transition-colors rounded-lg">
      <div className="flex flex-col items-center pt-1">
        <ChevronUp className="vote-arrow" />
        <span className="text-sm text-muted-foreground mt-1">{points}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-base font-medium leading-tight mb-1 group-hover:text-primary/90 transition-colors">
          <Link to={`/post/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>by {author}</span>
          <span>•</span>
          <span>{time}</span>
          <span>•</span>
          <Link to={`/post/${id}`} className="hover:text-primary hover:underline transition-colors">
            {comments} comments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;