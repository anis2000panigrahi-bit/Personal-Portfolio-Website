import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Heart, 
  Share2, 
  Clock, 
  Calendar, 
  MessageSquare, 
  Eye, 
  Tag, 
  X, 
  Check, 
  Send,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSharePost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSharePost }) => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeReadingModal, setActiveReadingModal] = useState<BlogPost | null>(null);
  
  // Comment state for currently opened post
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Extract all unique tags
  const allTags = ['All', ...Array.from(new Set(BLOG_POSTS_DATA.flatMap((p) => p.tags)))];

  // Filtering
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const handleLikePost = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
    if (activeReadingModal && activeReadingModal.id === postId) {
      setActiveReadingModal((prev) => prev ? { ...prev, likes: prev.likes + 1 } : null);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentAuthor.trim() || !commentText.trim() || !activeReadingModal) return;

    const newComment = {
      id: `c-${Date.now()}`,
      author: commentAuthor.trim(),
      date: 'Just now',
      text: commentText.trim()
    };

    const updatedPost = {
      ...activeReadingModal,
      comments: [...activeReadingModal.comments, newComment]
    };

    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
    setActiveReadingModal(updatedPost);
    setCommentAuthor('');
    setCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 3000);
  };

  return (
    <section id="blog" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Publications &amp; Learnings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Interactive AI &amp; Tech Blog
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Articles authored by Anis Kumar Panigrahi covering machine learning workflows, data visualization principles, cloud certifications, and generative AI discoveries.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              id="blog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts or topics..."
              className="w-full pl-9 pr-4 py-2 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-slate-400 mr-1 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            Filter:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No articles match "{searchQuery}". Try searching for "Python", "Cloud", or "Generative AI".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActiveReadingModal(post)}
                className="rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="px-2 py-0.5 rounded font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span>{post.publishedDate}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => handleLikePost(post.id, e)}
                      className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
                      title="Like this post"
                    >
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
                      <span>{post.likes}</span>
                    </button>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments.length}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSharePost(post);
                      }}
                      className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                      title="Share Article"
                      aria-label="Share article"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Modal: Full Article Reader & Comments */}
        {activeReadingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
            <div className="rounded-2xl max-w-3xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
              
              {/* Reader Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between">
                <div className="space-y-1.5 pr-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="px-2 py-0.5 rounded font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60">
                      {activeReadingModal.category}
                    </span>
                    <span>&bull;</span>
                    <span>{activeReadingModal.publishedDate}</span>
                    <span>&bull;</span>
                    <span>{activeReadingModal.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {activeReadingModal.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    Authored by <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Anis Kumar Panigrahi</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveReadingModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0"
                  aria-label="Close Reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reader Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm">
                
                {/* Article Content Paragraphs */}
                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {activeReadingModal.content.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags and Post Stats */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {activeReadingModal.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleLikePost(activeReadingModal.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-semibold border border-rose-200 dark:border-rose-900"
                    >
                      <Heart className="w-4 h-4 fill-rose-500" />
                      <span>{activeReadingModal.likes} Likes</span>
                    </button>
                    <button
                      onClick={() => onSharePost(activeReadingModal)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Post</span>
                    </button>
                  </div>
                </div>

                {/* Comments & Discussion */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    <span>Discussion &amp; Visitor Feedback ({activeReadingModal.comments.length})</span>
                  </h4>

                  {/* Comment List */}
                  <div className="space-y-3">
                    {activeReadingModal.comments.length === 0 ? (
                      <p className="text-xs text-slate-400 italic">
                        Be the first to share your thoughts on this article!
                      </p>
                    ) : (
                      activeReadingModal.comments.map((c) => (
                        <div
                          key={c.id}
                          className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1"
                        >
                          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              {c.author}
                            </span>
                            <span className="text-[11px]">{c.date}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300">{c.text}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Add Comment Form */}
                  <form onSubmit={handleAddComment} className="pt-2 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your name or handle..."
                        value={commentAuthor}
                        onChange={(e) => setCommentAuthor(e.target.value)}
                        required
                        className="px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Share your perspective, question, or feedback..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        required
                        className="flex-1 px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Post</span>
                      </button>
                    </div>
                    {commentSubmitted && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                        <Check className="w-3.5 h-3.5" />
                        Thank you! Your comment was posted successfully.
                      </p>
                    )}
                  </form>
                </div>

              </div>

              {/* Reader Footer */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-end">
                <button
                  onClick={() => setActiveReadingModal(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
