import { motion } from "motion/react";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    { 
      title: "Understanding Anxiety in the Modern World", 
      excerpt: "Anxiety is more common than ever. Discover the root causes and how to manage it effectively.", 
      author: "Dr. Sarah Jenkins", 
      date: "Oct 12, 2024", 
      readTime: "6 min read",
      image: "https://picsum.photos/seed/anxiety/600/400"
    },
    { 
      title: "The Power of Mindfulness in Daily Life", 
      excerpt: "Mindfulness isn't just for meditation. Learn how to bring presence to every moment.", 
      author: "Marcus Thorne, MSW", 
      date: "Oct 8, 2024", 
      readTime: "4 min read",
      image: "https://picsum.photos/seed/mindfulness/600/400"
    },
    { 
      title: "How to Support a Loved One with Depression", 
      excerpt: "Supporting someone with depression can be challenging. Here are practical ways to help.", 
      author: "Elena Rodriguez, PhD", 
      date: "Oct 5, 2024", 
      readTime: "8 min read",
      image: "https://picsum.photos/seed/support/600/400"
    },
    { 
      title: "Building Resilience: A Guide for Beginners", 
      excerpt: "Resilience is a skill that can be learned. Discover how to bounce back from life's challenges.", 
      author: "David Kim, LPC", 
      date: "Oct 2, 2024", 
      readTime: "5 min read",
      image: "https://picsum.photos/seed/resilience/600/400"
    },
    { 
      title: "The Connection Between Sleep and Mental Health", 
      excerpt: "Sleep is the foundation of wellness. Learn how to improve your sleep for better mental health.", 
      author: "Aisha Patel, PsyD", 
      date: "Sep 28, 2024", 
      readTime: "7 min read",
      image: "https://picsum.photos/seed/sleep/600/400"
    },
    { 
      title: "Navigating Workplace Stress and Burnout", 
      excerpt: "Workplace stress is real. Discover strategies to prevent burnout and maintain balance.", 
      author: "Robert Vance, LCSW", 
      date: "Sep 25, 2024", 
      readTime: "6 min read",
      image: "https://picsum.photos/seed/work/600/400"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-primary mb-6">Wellness Blog</h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Insights, stories, and practical advice from our team of mental health experts.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.02 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-6 shadow-sm">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
              <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
              <div className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</div>
            </div>
            <h2 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary"><User size={16} /></div>
                <span className="text-xs font-bold">{post.author}</span>
              </div>
              <ArrowRight size={20} className="text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="bg-white border border-surface-container text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-surface-container transition-all">
          Load More Articles
        </button>
      </div>
    </div>
  );
}
