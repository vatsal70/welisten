import { motion } from "motion/react";
import { Users, Calendar, Video, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    { 
      number: "01", 
      title: "Submit Inquiry", 
      description: "Fill out our simple contact form with your needs. We'll review your inquiry and connect you with the right expert for your situation.",
      icon: <Users size={48} />,
      color: "bg-primary",
      textColor: "text-white"
    },
    { 
      number: "02", 
      title: "Book a Session", 
      description: "Select a time that works for you. Morning, evening, or weekend — we offer flexible scheduling to fit your life.",
      icon: <Calendar size={48} />,
      color: "bg-secondary",
      textColor: "text-white"
    },
    { 
      number: "03", 
      title: "Connect Online", 
      description: "Receive a Zoom or Google Meet link via email. Connect from anywhere and begin your path to healing with personalized support.",
      icon: <Video size={48} />,
      color: "bg-tertiary",
      textColor: "text-white"
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
          How It Works
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-2xl md:text-3xl font-bold text-primary mb-6"
        >
          Three simple steps to feeling better
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.04 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed"
        >
          Getting started with online support has never been easier. Here's how WeListen works.
        </motion.p>
      </div>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -8 : 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-[3rem] ${index % 2 === 0 ? 'bg-surface-container-low' : 'bg-white border border-surface-container'}`}
          >
            <div className={`w-24 h-24 rounded-full ${step.color} ${step.textColor} flex items-center justify-center flex-shrink-0 shadow-lg`}>
              {step.icon}
            </div>
            <div className="flex-grow">
              <span className="text-sm font-bold tracking-widest uppercase text-primary mb-2 block">Step {step.number}</span>
              <h2 className="font-headline text-3xl font-bold mb-4">{step.title}</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-surface-container-low p-12 rounded-[3rem]"
        >
          <h2 className="font-headline text-3xl font-bold text-primary mb-6">What to expect</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
            Our online sessions are designed to feel just as personal and effective as meeting face-to-face.
          </p>
          <div className="space-y-8">
            {[
              { 
                icon: <Video size={24} className="text-secondary" />, 
                title: "Secure Video Sessions", 
                desc: "HD video calls with end-to-end encryption for complete privacy." 
              },
              { 
                icon: <Lock size={24} className="text-secondary" />, 
                title: "Fully Private", 
                desc: "All data and sessions are protected to the highest standards." 
              },
              { 
                icon: <Calendar size={24} className="text-secondary" />, 
                title: "Flexible Scheduling", 
                desc: "Book, reschedule, or cancel sessions with ease. Your schedule, your rules." 
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm h-fit">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          className="bg-primary text-white p-12 rounded-[3rem] flex flex-col justify-center text-center md:text-left"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Ready to take the first step?</h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
            Your healing journey starts with a single conversation.
          </p>
          <Link 
            to="/book" 
            className="bg-white text-primary px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-surface-container transition-all active:scale-95 inline-flex items-center gap-3 w-fit mx-auto md:mx-0"
          >
            Book Your Free Consultation
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
