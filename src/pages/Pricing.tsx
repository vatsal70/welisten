import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    { 
      name: "Basic", 
      price: "$49", 
      period: "/session", 
      description: "Perfect for those starting their journey.", 
      features: ["1x 50-min video session", "Secure messaging support", "Inquiry form", "Basic resource library"],
      color: "bg-white",
      buttonColor: "bg-primary",
      textColor: "text-on-surface"
    },
    { 
      name: "Standard", 
      price: "$149", 
      period: "/month", 
      description: "Our most popular plan for consistent support.", 
      features: ["4x 50-min video sessions", "Unlimited secure messaging", "Priority scheduling", "Full resource library", "Progress tracking"],
      color: "bg-primary",
      buttonColor: "bg-white",
      textColor: "text-white",
      popular: true
    },
    { 
      name: "Premium", 
      price: "$249", 
      period: "/month", 
      description: "Comprehensive care for deep healing.", 
      features: ["8x 50-min video sessions", "24/7 priority messaging", "Dedicated support team", "Personalized wellness plan", "Family support options"],
      color: "bg-white",
      buttonColor: "bg-primary",
      textColor: "text-on-surface"
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
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed"
        >
          Quality mental healthcare should be accessible. Choose the plan that fits your needs and budget.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.03 }}
            className={`${plan.color} ${plan.textColor} p-10 rounded-[3rem] border border-surface-container shadow-xl relative overflow-hidden ${plan.popular ? 'md:scale-110 z-10' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-6 right-[-35px] bg-secondary text-white px-12 py-1 rotate-45 text-[10px] font-bold tracking-widest uppercase">
                Most Popular
              </div>
            )}
            <h3 className="font-headline text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-sm opacity-70">{plan.period}</span>
            </div>
            <p className="text-sm mb-8 opacity-80">{plan.description}</p>
            <div className="space-y-4 mb-10">
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start gap-3">
                  <Check size={18} className={plan.popular ? 'text-secondary-container' : 'text-secondary'} />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Link 
              to="/book" 
              className={`block w-full py-4 rounded-2xl text-center font-bold transition-all active:scale-95 ${plan.buttonColor === 'bg-primary' ? 'bg-primary text-white hover:bg-primary-dim' : 'bg-white text-primary hover:bg-surface-container'}`}
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 bg-surface-container-low rounded-[3rem] p-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-3xl font-bold text-primary mb-6"
        >
          Insurance & Coverage
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant text-lg mb-8 max-w-2xl mx-auto"
        >
          We work with many major insurance providers. Enter your details to see your coverage and estimated out-of-pocket costs.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-surface-container text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-surface-container transition-all"
        >
          Check Insurance Coverage
        </motion.button>
      </div>

      {/* New Section: Corporate Wellness */}
      <section className="mt-32 py-24 border-t border-surface-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-8">Corporate Wellness Programs</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Invest in your team's mental health. We offer customized plans for businesses of all sizes, 
              providing your employees with the support they need to thrive both personally and professionally.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Bulk session packages",
                "Dedicated account manager",
                "Employee wellness workshops",
                "Aggregated usage reports"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-primary">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              to="/contact" 
              className="bg-secondary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary-dim transition-all inline-flex items-center gap-3"
            >
              Contact Sales
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://picsum.photos/seed/office/400/500" alt="Office" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/team/400/500" alt="Team" className="rounded-3xl shadow-lg mt-8" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
