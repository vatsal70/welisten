import { motion } from "motion/react";
import { ShieldCheck, Award, Users, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function JoinInfo() {
  const benefits = [
    {
      title: "Focus on Care",
      desc: "We handle the marketing, billing, and technical infrastructure so you can focus entirely on your clients.",
      icon: <Heart size={32} />
    },
    {
      title: "Clinical Support",
      desc: "Access to monthly peer supervision groups and a community of world-class mental health professionals.",
      icon: <Users size={32} />
    },
    {
      title: "Flexible Practice",
      desc: "Set your own hours and manage your practice from anywhere with our integrated telehealth platform.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Competitive Compensation",
      desc: "Transparent pay structure with bonuses for high-quality care and consistent availability.",
      icon: <Award size={32} />
    }
  ];

  const steps = [
    "Submit your initial application and credentials",
    "Clinical review of your background and experience",
    "Two-stage interview process with our clinical leads",
    "Onboarding and platform training",
    "Start accepting clients and growing your practice"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="max-w-3xl mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline font-extrabold text-4xl md:text-6xl text-primary mb-6"
        >
          Join the WeListen <span className="italic">Sanctuary</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
          We are looking for licensed mental health professionals who are passionate about 
          accessible, high-quality care. Build your practice within a community that values 
          your expertise and supports your growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {benefits.map((benefit, i) => (
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

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">Our Vetting Process</h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-on-surface-variant pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-surface-container-low p-12 rounded-[3rem] border border-surface-container">
          <h3 className="font-headline text-2xl font-bold text-primary mb-6 italic">Minimum Requirements</h3>
          <ul className="space-y-4">
            {[
              "Active state-level licensure (PhD, PsyD, LCSW, LMFT, LPC, or equivalent)",
              "Minimum 3 years of post-licensure clinical experience",
              "Professional liability insurance",
              "Reliable high-speed internet for video sessions",
              "Commitment to evidence-based practice and empathy"
            ].map((req, i) => (
              <li key={i} className="flex gap-3 items-start text-on-surface-variant text-sm">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-primary text-white p-12 md:p-20 rounded-[3rem] text-center shadow-xl"
      >
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Ready to make a difference?</h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          Start your application today. It takes about 10 minutes to complete the initial form.
        </p>
        <Link 
          to="/apply" 
          className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-surface-container transition-all shadow-lg"
        >
          Apply Now <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  );
}
