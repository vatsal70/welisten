import { motion } from "motion/react";
import { Star, Video, MessageSquare, ShieldCheck, Award, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function OurListeners() {
  const listeners = [
    { 
      name: "Dr. Sarah Jenkins", 
      role: "Cognitive Behavioral Therapy", 
      specialty: "Anxiety & Depression", 
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-2OQWpWwnL_44rni2vwKIYVJZyfbV-SRBSfjF8gYRPLQ2C5NtJSGEsmX55xDbmramK8MpRRB2xGEeSkYxv4Vi3Sax7Z9rnKG_jSeX6rZ1fMoQfKcR8QoPNBMyWet4gAwxbEzH3Avwun7VZUeyKcfrrPSUiK4dLnO-pb9CxYK2rS5jrPJUlRsHCyewUhjFfj7ZyrHZJ0mrQ3JJDP6Ej3R_SXyPZhhYiSBU6QjmD1eDXzb5vu-VxlOIS7VJkckRkGy7NyHV5jxywcQ",
      rating: 4.9,
      reviews: 124
    },
    { 
      name: "Marcus Thorne, MSW", 
      role: "Anxiety & Mindfulness", 
      specialty: "Stress Management", 
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK_3HGwd6lR3rGNE-zbVFJnsfrL1uylZH_M9emdUBInVvX7WewJDG3ejLmQBNqC1_dBLhI071lJmifTZeYwHZq1b6IhKY6JqsUkCdLrZHYDi-uer81-c7-EwFEDONqdjYQHRhHQwzQsvl6WTT1oMV-R-aE3dKylt23aelZK0LoaekkGpE5F5wIVr-sJBmDd-hGvc5yZ8Rsq6fvevAe0d-25ILMVqd3KthjOa0Ju3u50asttt7YFE9njp2B5eSr8T48qwvEupL-hGs",
      rating: 4.8,
      reviews: 89
    },
    { 
      name: "Elena Rodriguez, PhD", 
      role: "Trauma Specialist", 
      specialty: "PTSD & Resilience", 
      image: "https://picsum.photos/seed/elena/400/400",
      rating: 5.0,
      reviews: 56
    },
    { 
      name: "David Kim, LPC", 
      role: "Relationship Counselor", 
      specialty: "Couples & Family", 
      image: "https://picsum.photos/seed/david/400/400",
      rating: 4.7,
      reviews: 112
    },
    { 
      name: "Aisha Patel, PsyD", 
      role: "Child & Adolescent", 
      specialty: "Youth Mental Health", 
      image: "https://picsum.photos/seed/aisha/400/400",
      rating: 4.9,
      reviews: 78
    },
    { 
      name: "Robert Vance, LCSW", 
      role: "Addiction Specialist", 
      specialty: "Recovery & Support", 
      image: "https://picsum.photos/seed/robert/400/400",
      rating: 4.6,
      reviews: 94
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-headline font-extrabold text-4xl md:text-6xl text-primary mb-6"
        >
          Our Listeners
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed"
        >
          Meet our dedicated team of mental health professionals. Every listener is vetted, 
          compassionate, and ready to support you.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listeners.map((listener, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: (index % 4) * 0.03 }}
            className="bg-white border border-surface-container rounded-3xl overflow-hidden hover:shadow-xl transition-all group"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src={listener.image} 
                alt={listener.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-bold">{listener.rating}</span>
                <span className="text-[10px] text-on-surface-variant">({listener.reviews})</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-headline text-lg font-bold mb-0.5 truncate">{listener.name}</h3>
              <p className="text-primary font-medium text-xs mb-3 truncate">{listener.role}</p>
              <p className="text-on-surface-variant text-[11px] mb-5 line-clamp-1">Specializes in: {listener.specialty}</p>
              <div className="flex gap-2">
                <Link 
                  to="/book" 
                  className="flex-grow bg-primary text-white text-center py-2.5 rounded-lg font-bold hover:bg-primary-dim transition-all text-xs"
                >
                  Book
                </Link>
                <button className="p-2.5 bg-surface-container-low rounded-lg text-primary hover:bg-surface-container transition-all">
                  <Video size={16} />
                </button>
                <button className="p-2.5 bg-surface-container-low rounded-lg text-primary hover:bg-surface-container transition-all">
                  <MessageSquare size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Our Listeners Section */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4 italic"
          >
            The WeListen Standard
          </motion.h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            We don't just connect you with anyone. We connect you with the best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Rigorous Vetting",
              desc: "Only 5% of applicants make it through our 4-stage interview and background verification process.",
              icon: <ShieldCheck size={32} />
            },
            {
              title: "Verified Credentials",
              desc: "Every listener holds advanced degrees (PhD, PsyD, MSW) and active state-level licensure.",
              icon: <Award size={32} />
            },
            {
              title: "Continuous Training",
              desc: "Our team participates in monthly clinical supervision and stays updated on the latest therapeutic techniques.",
              icon: <Video size={32} />
            }
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface-container-low border border-surface-container rounded-3xl"
            >
              <div className="text-primary mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-headline">{benefit.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Listener-Specific Testimonials */}
        <div className="bg-primary-container/20 rounded-[3rem] p-8 md:p-16 border border-primary/10">
          <div className="flex items-center gap-4 mb-12">
            <Quote size={40} className="text-primary opacity-20" />
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary">What our community says</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Dr. Sarah's approach to CBT helped me manage my panic attacks in just a few sessions. Her expertise is evident from the first minute.",
                author: "David K.",
                listener: "Dr. Sarah Jenkins"
              },
              {
                text: "Marcus has a way of making mindfulness feel practical, not just theoretical. I feel more grounded than I have in years.",
                author: "Elena S.",
                listener: "Marcus Thorne"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-surface-container"
              >
                <p className="text-on-surface-variant italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">— {testimonial.author}</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Session with {testimonial.listener}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Join Our Team */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-32 bg-surface-container-low rounded-[3rem] p-12 md:p-20 text-center border border-surface-container"
      >
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">Are you a mental health professional?</h2>
        <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join our growing community of compassionate listeners. We provide the platform, 
          the tools, and the support you need to focus on what matters most: helping others.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/apply" 
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-dim transition-all shadow-md inline-block"
          >
            Apply as a Listener
          </Link>
          <Link 
            to="/join-info" 
            className="bg-white border border-surface-container text-primary px-10 py-4 rounded-full font-bold hover:bg-surface-container transition-all inline-block"
          >
            Learn More About Joining
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
