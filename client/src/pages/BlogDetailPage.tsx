import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import blogData from '../data/blogData.json';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const posts: BlogPost[] = blogData;
  const post = posts.find(p => p.slug === slug);

  // Scroll to top when component mounts or when slug changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Post Not Found</h1>
          <p className="text-gray-600 mb-8 font-poppins">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-poppins"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Convert markdown-style content to HTML for display
  const formatContent = (content: string) => {
    return content
      // Section dividers
      .replace(/^---$/gim, '<div class="border-t-2 border-gradient-to-r from-blue-100 to-orange-100 my-10 md:my-12"></div>')
      
      // Headers with better spacing and styling
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 mt-10 md:mt-12 font-poppins border-b-2 border-blue-200 pb-3 flex items-center"><span class="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">$1</span></h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl md:text-2xl font-semibold text-blue-700 mb-4 md:mb-6 mt-8 md:mt-10 font-poppins">$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4 class="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 mt-6 md:mt-8 font-poppins">$1</h4>')
      
      // HTML div elements (pass through)
      .replace(/<div class="([^"]*)">/g, '<div class="$1">')
      .replace(/<\/div>/g, '</div>')
      
      // Blockquotes  
      .replace(/^> (.*$)/gim, '<blockquote class="bg-gradient-to-r from-blue-50 to-orange-50 border-l-4 border-blue-400 p-4 md:p-6 my-6 md:my-8 rounded-r-lg shadow-sm italic text-blue-900 font-medium">$1</blockquote>')
      
      // Emphasis with better styling
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
      
      // Lists with proper markdown syntax
      .replace(/^- (.*$)/gim, '<li class="text-gray-700 mb-2 md:mb-3 font-poppins text-sm md:text-base leading-relaxed flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>$1</span></li>')
      
      // Special formatting for labels/titles
      .replace(/^(.*:)$/gim, '<p class="text-gray-900 font-semibold mb-3 md:mb-4 font-poppins text-base md:text-lg">$1</p>')
      
      // Emojis and special callouts
      .replace(/👉 (.*$)/gim, '<div class="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400 p-4 md:p-6 my-4 md:my-6 rounded-r-lg shadow-sm"><p class="text-orange-900 font-medium font-poppins flex items-start"><span class="mr-3 text-xl flex-shrink-0">👉</span><span class="text-sm md:text-base">$1</span></p></div>')
      
      // Bullet point lists wrapper
      .replace(/((<li.*?<\/li>\s*)+)/g, '<ul class="space-y-2 md:space-y-3 mb-6 md:mb-8 ml-2">$1</ul>')
      
      // Paragraphs with better spacing
      .replace(/\n\n/g, '</p><p class="text-gray-700 mb-4 md:mb-6 leading-relaxed font-poppins text-sm md:text-base">')
      .replace(/^([^<].*$)/gim, '<p class="text-gray-700 mb-4 md:mb-6 leading-relaxed font-poppins text-sm md:text-base">$1</p>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-white/80 hover:text-white mb-6 md:mb-8 transition-all duration-300 group hover:bg-white/10 px-3 py-2 rounded-lg"
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-poppins text-sm md:text-base">Back to Blog</span>
          </button>

          <div className="mb-4 md:mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold font-poppins border border-white/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight font-poppins">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 md:gap-6 text-white/90">
            <div className="flex items-center">
              <User size={14} className="mr-2" />
              <span className="font-poppins text-xs md:text-sm">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-2" />
              <span className="font-poppins text-xs md:text-sm">{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-2" />
              <span className="font-poppins text-xs md:text-sm">{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Hero Image - Only show for non-clinical research posts */}
          {post.slug !== 'career-roadmap-clinical-research-professional' && (
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-12">
            {/* Excerpt */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 md:p-6 mb-6 md:mb-8 rounded-r-xl shadow-sm">
              <p className="text-base md:text-lg text-blue-900 italic font-poppins leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto">
              <div
                className="blog-content space-y-4 md:space-y-6 text-justify leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: formatContent(post.content)
                }}
              />
            </div>

            {/* Tags Section */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
              <div className="flex items-center mb-3 md:mb-4">
                <Tag className="text-blue-600 mr-2" size={18} />
                <h4 className="text-base md:text-lg font-semibold text-gray-900 font-poppins">Related Topics</h4>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 border border-blue-200 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium font-poppins hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => navigate('/blog')}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold font-poppins shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
                >
                  ← Back to All Articles
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-gray-100 text-gray-700 border border-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-200 transition-all duration-300 font-medium font-poppins shadow-sm hover:shadow-md text-sm md:text-base"
                >
                  ↑ Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;