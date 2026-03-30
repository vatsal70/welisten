import { motion } from "motion/react";
import { ShieldCheck, Heart, Users, Globe, BookOpen, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    { 
      icon: <Heart size={32} />, 
      title: "Empathy", 
      description: "We approach every client with genuine compassion and understanding." 
    },
    { 
      icon: <ShieldCheck size={32} />, 
      title: "Trust", 
      description: "Your privacy and safety are our highest priorities." 
    },
    { 
      icon: <Users size={32} />, 
      title: "Accessibility", 
      description: "Quality mental health care should be available to everyone." 
    },
    { 
      icon: <Globe size={32} />, 
      title: "Inclusivity", 
      description: "We welcome all backgrounds, identities, and experiences." 
    },
    { 
      icon: <BookOpen size={32} />, 
      title: "Evidence-Based", 
      description: "Our methods are grounded in proven psychological research." 
    },
    { 
      icon: <TrendingUp size={32} />, 
      title: "Growth", 
      description: "We believe every person has the potential to thrive." 
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
          Our <span className="italic">Story</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto space-y-6 leading-relaxed"
        >
          <p>
            WeListen was founded with a simple belief: everyone deserves access to quality mental health care, regardless of location, schedule, or circumstance.
          </p>
          <p>
            Our founders recognized that traditional support models left too many people behind. Long waitlists, limited availability, and geographic barriers prevented millions from getting the help they needed.
          </p>
          <p>
            Today, WeListen connects thousands of clients worldwide with over 200 dedicated listeners. Our platform makes it easy to find the right person, book sessions at convenient times, and begin your healing journey — all from the comfort and privacy of your own space.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <img 
            src="https://picsum.photos/seed/team/800/600" 
            alt="Our Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className="font-headline text-3xl font-bold text-primary mb-6">A <span className="italic">Sanctuary</span> for Mental Wellness</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Our platform is designed to be a digital sanctuary. We've removed the clinical coldness often associated with healthcare, 
            replacing it with a warm, editorial-style experience that respects your journey.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Whether you're dealing with anxiety, depression, or just need someone to talk to, WeListen is here to provide 
            the space and the experts you need to find clarity and peace.
          </p>
        </motion.div>
      </div>

      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Values</h2>
        <p className="text-on-surface-variant">What guides us every day</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {values.map((value, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.02 }}
            className="bg-surface-container-low p-8 rounded-3xl text-center flex flex-col items-center"
          >
            <div className="text-secondary mb-4">{value.icon}</div>
            <h3 className="font-bold text-xl mb-2">{value.title}</h3>
            <p className="text-on-surface-variant text-sm">{value.description}</p>
          </motion.div>
        ))}
      </div>

      {/* New Section: Our Approach */}
      <section className="bg-primary text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">A holistic approach to healing</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              We don't believe in one-size-fits-all solutions. Our platform is designed to support a wide range of therapeutic styles and needs.
            </p>
            <div className="space-y-6">
              {[
                { title: "Evidence-Based", desc: "We use proven methodologies to ensure the best outcomes for our users." },
                { title: "Expert Connection", desc: "We connect you with the right professional based on your unique needs and personality." },
                { title: "Continuous Support", desc: "Access resources and messaging support between your video sessions." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/meditation/600/800" 
                alt="Meditation" 
                className="rounded-3xl shadow-2xl rotate-3"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl text-primary max-w-[200px] -rotate-6">
                <p className="text-3xl font-bold mb-2">98%</p>
                <p className="text-xs font-medium">User satisfaction rate across our community.</p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
