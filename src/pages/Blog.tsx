
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Private Market Valuations",
    summary: "An in-depth look at how private companies are valued and what factors influence these valuations.",
    author: "Sarah Johnson",
    date: "April 1, 2025",
    readTime: "8 min read",
    category: "Finance"
  },
  {
    id: 2,
    title: "Top 10 Rising Startups to Watch in 2025",
    summary: "We analyze the most promising startups that are disrupting industries and attracting major investments.",
    author: "Michael Chen",
    date: "March 28, 2025",
    readTime: "6 min read",
    category: "Startups"
  },
  {
    id: 3,
    title: "The Impact of AI on Company Valuations",
    summary: "How artificial intelligence capabilities are becoming a key factor in determining a company's market value.",
    author: "David Rodriguez",
    date: "March 22, 2025",
    readTime: "10 min read",
    category: "Technology"
  },
  {
    id: 4,
    title: "Trends in Venture Capital Funding for Q1 2025",
    summary: "A comprehensive analysis of venture capital investment trends and which sectors are attracting the most funding.",
    author: "Priya Sharma",
    date: "March 15, 2025",
    readTime: "7 min read",
    category: "Investment"
  },
  {
    id: 5,
    title: "How to Evaluate a Startup Before Investing",
    summary: "Key metrics and factors to consider when evaluating the potential of a startup investment opportunity.",
    author: "James Wilson",
    date: "March 8, 2025",
    readTime: "9 min read",
    category: "Investment"
  },
  {
    id: 6,
    title: "The Rise of Sustainable Investing in Private Markets",
    summary: "How ESG factors are increasingly influencing investment decisions and valuations in private markets.",
    author: "Emma Taylor",
    date: "March 1, 2025",
    readTime: "8 min read",
    category: "Sustainability"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6">Stargaze Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Insights, analysis, and trends in private market valuations and investments.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Card key={post.id} className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="space-y-1">
                    <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded text-gray-700">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <a href="#" className="text-stargaze-purple hover:underline text-sm font-medium">
                      Read more
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
