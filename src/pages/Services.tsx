import { motion } from "motion/react";
import { User, Users, Brain, Heart, CloudRain, Home, Sun, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    { 
      icon: <User size={32} />, 
      title: "One-on-One Listening", 
      description: "Private sessions tailored to your unique needs and goals. Share your thoughts at your own pace with someone who truly cares." 
    },
    { 
      icon: <Users size={32} />, 
      title: "Couples Support", 
      description: "Strengthen your relationship with guided conversations. Improve communication, resolve conflicts, and rebuild connection." 
    },
    { 
      icon: <Brain size={32} />, 
      title: "Anxiety & Stress Support", 
      description: "Learn practical coping strategies and techniques to manage anxiety and reduce stress in your daily life." 
    },
    { 
      icon: <Heart size={32} />, 
      title: "Emotional Wellness", 
      description: "Find hope and healing through compassionate listening. Our team helps you understand and work through difficult emotions." 
    },
    { 
      icon: <CloudRain size={32} />, 
      title: "Grief & Loss", 
      description: "Navigate the complex emotions of loss with caring support. Process your grief in a safe, understanding space." 
    },
    { 
      icon: <Home size={32} />, 
      title: "Family Support", 
      description: "Address family dynamics, improve communication, and build healthier relationships within your family unit." 
    },
    { 
      icon: <Sun size={32} />, 
      title: "Self-Esteem & Confidence", 
      description: "Build a stronger sense of self. Develop healthy self-image and confidence through guided conversations." 
    },
    { 
      icon: <ShieldCheck size={32} />, 
      title: "Trauma Support", 
      description: "Compassionate, trauma-informed support using proven approaches to help you heal from past experiences." 
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
          className="font-headline font-extrabold text-4xl md:text-6xl text-primary mb-4"
        >
          Our <span className="italic">Services</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-2xl md:text-3xl font-bold text-primary mb-6"
        >
          Comprehensive mental health care
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.04 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed"
        >
          Whatever you're going through, we have the expertise to help. Explore our range of support services.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.02 }}
            className="bg-white border border-surface-container p-8 rounded-3xl hover:shadow-lg transition-all group"
          >
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* New Section: Specialized Programs */}
      <section className="py-24 border-t border-surface-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-8">Specialized programs for every stage of life</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Beyond individual therapy, we offer focused programs designed to address specific life challenges and transitions.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Teen Wellness", desc: "Supporting adolescents through the unique challenges of growing up." },
                { title: "Workplace Stress", desc: "Strategies for managing professional burnout and high-pressure careers." },
                { title: "Grief Support", desc: "Compassionate guidance through the difficult journey of loss." },
                { title: "Mindfulness", desc: "Practical tools for staying present and reducing daily anxiety." }
              ].map((prog, i) => (
                <div key={i} className="p-6 bg-surface-container-low rounded-2xl">
                  <h4 className="font-bold text-primary mb-2">{prog.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{prog.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/nature/800/1000" 
              alt="Nature healing" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-[240px]">
              <p className="text-primary font-bold mb-2 italic">"The journey of a thousand miles begins with a single step."</p>
              <p className="text-xs text-on-surface-variant">— Lao Tzu</p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mt-24 bg-primary-container/20 rounded-[3rem] p-12 text-center">
        <h2 className="font-headline text-3xl font-bold text-primary mb-6">Not sure which service is right for you?</h2>
        <p className="text-on-surface-variant text-lg mb-8 max-w-2xl mx-auto">
          Book a free 15-minute consultation. Our team will help connect you with the right listener and service.
        </p>
        <Link 
          to="/book"
          className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-dim transition-all inline-flex items-center gap-2"
        >
          Get Started <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
