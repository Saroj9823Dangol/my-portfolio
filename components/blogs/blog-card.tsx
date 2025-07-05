"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/lib/blogs";
import {
  ArrowUpRight,
  Bookmark,
  Brain,
  Clock,
  Pause,
  Play,
  Share2,
  Sparkles,
  Target,
  Volume2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const moodIcons = {
  energetic: Zap,
  calm: Sparkles,
  intense: Target,
  creative: Brain,
  analytical: Target,
};

const moodColors = {
  energetic: "from-yellow-500 to-orange-500",
  calm: "from-blue-500 to-cyan-500",
  intense: "from-red-500 to-pink-500",
  creative: "from-purple-500 to-pink-500",
  analytical: "from-green-500 to-teal-500",
};

const difficultyColors = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.share?.({
      title: post.title,
      text: post.excerpt,
      url: `/blog/${post.id}`,
    });
  };

  return (
    <Card
      ref={cardRef}
      className={`group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border-0 transition-all duration-700 hover:shadow-2xl cursor-pointer ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? "translateY(-8px) rotateX(5deg)"
          : "translateY(0) rotateX(0)",
        boxShadow: isHovered
          ? `0 25px 50px -12px rgba(168, 85, 247, 0.25), 0 0 0 1px rgba(168, 85, 247, 0.1)`
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Dynamic Background Gradient */}
      <div
        className="absolute inset-0 opacity-20 transition-opacity duration-500"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
            : "transparent",
        }}
      />

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg">
        <div
          className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isHovered ? "animate-pulse" : ""
          }`}
          style={{ padding: "1px" }}
        >
          <div className="w-full h-full bg-gray-900 rounded-lg"></div>
        </div>
      </div>

      {/* Floating Particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      )}

      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden group">
          {/* <Image
            src={post.coverImage}
            alt={post.title}
            width={featured ? 800 : 400}
            height={featured ? 400 : 200}
            className={`w-full object-cover transition-all duration-700 ${
              featured ? "h-64 lg:h-80" : "h-48"
            } ${isHovered ? "scale-110 brightness-110" : "scale-100"}`}
          /> */}

          {/* Holographic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div
            className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Neural Network Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"
            viewBox="0 0 400 200"
          >
            <defs>
              <linearGradient
                id="neuralGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 400}
                y1={Math.random() * 200}
                x2={Math.random() * 400}
                y2={Math.random() * 200}
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                className={isHovered ? "animate-pulse" : ""}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </svg>

          {/* Floating Action Buttons */}
          <div
            className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 bg-black/50 backdrop-blur-sm hover:bg-purple-500/50 text-white border border-white/20"
              onClick={handlePlayToggle}
            >
              {isPlaying ? (
                <Pause className="h-3 w-3" />
              ) : (
                <Play className="h-3 w-3" />
              )}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 bg-black/50 backdrop-blur-sm hover:bg-purple-500/50 text-white border border-white/20"
              onClick={handleBookmark}
            >
              <Bookmark
                className={`h-3 w-3 ${isBookmarked ? "fill-current" : ""}`}
              />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 bg-black/50 backdrop-blur-sm hover:bg-purple-500/50 text-white border border-white/20"
              onClick={handleShare}
            >
              <Share2 className="h-3 w-3" />
            </Button>
          </div>

          {/* Reading Time Indicator */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span className="text-xs text-white font-medium">
                {post.readingTime} min read
              </span>
            </div>
          </div>

          {/* Stats Overlay */}
          {/* <div className="absolute bottom-4 right-4 flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20">
              <Eye className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-white">
                {post.views.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20">
              <Heart className="w-3 h-3 text-pink-400" />
              <span className="text-xs text-white">{post.likes}</span>
            </div>
          </div> */}

          {/* Audio Visualization */}
          {isPlaying && (
            <div className="absolute bottom-16 left-4 flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-cyan-400 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 20 + 10}px`,
                    animationDelay: `${i * 100}ms`,
                    animationDuration: "0.5s",
                  }}
                />
              ))}
              <Volume2 className="w-3 h-3 text-cyan-400 ml-2" />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4 relative z-10">
        <div className="space-y-3">
          {/* <Badge
            variant="outline"
            className="text-purple-400 border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
          >
            {post.category}
          </Badge> */}

          <Link
            href={`/blogs/${post.slug}`}
            className="block group-hover:text-purple-400 transition-colors"
          >
            <h3
              className={`font-bold line-clamp-2 text-white leading-tight ${
                featured ? "text-2xl lg:text-3xl" : "text-xl"
              }`}
            >
              {post.title}
              <ArrowUpRight
                className={`inline-block w-5 h-5 ml-2 transition-all duration-300 ${
                  isHovered
                    ? "opacity-100 translate-x-1 -translate-y-1"
                    : "opacity-0"
                }`}
              />
            </h3>
          </Link>

          <p className="text-gray-400 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Interactive Tag Cloud */}
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.slice(0, 3).map((tag: any, index: number) => (
              <Badge
                key={tag}
                variant="outline"
                className={`text-xs text-gray-400 border-gray-700 bg-gray-800/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  isHovered ? "animate-pulse" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      {/* <CardFooter className="p-6 pt-0 relative z-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 ring-2 ring-purple-500/30 transition-all duration-300 group-hover:ring-purple-400/50">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                {post.author.name}
              </span>
              <span className="text-xs text-purple-400">
                {post.author.role}
              </span>
              <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                <Calendar className="h-3 w-3" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-4 bg-gradient-to-t from-purple-500 to-cyan-500 rounded-full ${
                      isHovered ? "animate-pulse" : ""
                    }`}
                    style={{
                      animationDelay: `${i * 200}ms`,
                      height: `${Math.random() * 16 + 8}px`,
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">Neural Activity</span>
            </div>
            <div className="text-xs text-purple-400 font-mono">
              ID: {post.id.slice(0, 8)}
            </div>
          </div>
        </div>
      </CardFooter> */}

      {/* Glitch Effect Overlay */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse" />
        </div>
      )}
    </Card>
  );
}
