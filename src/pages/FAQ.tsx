import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    { 
      category: "General",
      items: [
        { question: "What is WeListen?", answer: "WeListen is a digital sanctuary for mental wellness that connects individuals with professional therapists and counselors through a secure, easy-to-use platform." },
        { question: "How do I get started?", answer: "Simply click 'Get Started' or 'Book a Session', complete our inquiry form, and we'll connect you with a professional who fits your needs." },
        { question: "Is WeListen a replacement for traditional therapy?", answer: "WeListen provides professional therapy and counseling services. For many, it is a convenient and effective alternative to in-person therapy. However, it is not suitable for emergency situations." },
      ]
    },
    { 
      category: "Therapy & Sessions",
      items: [
        { question: "How long are the sessions?", answer: "Most standard sessions last 45-50 minutes. Specialized sessions or initial intakes may vary in length." },
        { question: "Can I switch therapists?", answer: "Yes. We believe the therapeutic relationship is vital. If you don't feel a connection, you can switch therapists at any time with no extra cost." },
        { question: "What if I miss a session?", answer: "We have a 24-hour cancellation policy. If you cancel or reschedule at least 24 hours in advance, there is no charge. Otherwise, a fee may apply." },
      ]
    },
    { 
      category: "Privacy & Security",
      items: [
        { question: "Is my data safe?", answer: "Absolutely. We use banking-grade encryption and are fully HIPAA-compliant. Your sessions are never recorded, and your data is strictly confidential." },
        { question: "Can I remain anonymous?", answer: "Yes. You can use a nickname for all interactions on the platform. We only require your real information for billing and emergency contact purposes." },
      ]
    },
    { 
      category: "Billing & Insurance",
      items: [
        { question: "How much does it cost?", answer: "We offer various plans starting at $49 per session. Monthly subscriptions are also available for consistent support." },
        { question: "Does insurance cover WeListen?", answer: "We work with many major insurance providers. You can check your specific coverage during the onboarding process." },
      ]
    },
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-headline font-extrabold text-4xl md:text-6xl text-primary mb-6"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Everything you need to know about WeListen and your journey to wellness.
        </motion.p>
      </div>

      <div className="relative mb-16">
        <div className="absolute inset-y-0 left-6 flex items-center text-on-surface-variant">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search for questions..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-surface-container-low border-none rounded-2xl py-5 pl-16 pr-6 focus:ring-2 focus:ring-primary transition-all text-lg"
        />
      </div>

      <div className="space-y-12">
        {filteredFaqs.map((category, cIndex) => (
          <div key={cIndex}>
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-6 px-2">{category.category}</h2>
            <div className="space-y-4">
              {category.items.map((item, iIndex) => (
                <FAQItem key={iIndex} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        ))}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-20 bg-surface-container-low rounded-3xl">
            <p className="text-on-surface-variant text-lg">No results found for "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      <div className="mt-24 bg-surface-container-low rounded-[3rem] p-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-headline text-3xl font-bold text-primary mb-6"
        >
          Still have questions?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-on-surface-variant text-lg mb-8 max-w-2xl mx-auto"
        >
          Can't find the answer you're looking for? Please chat to our friendly team.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.04 }}
          className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-dim transition-all"
        >
          Get in Touch
        </motion.button>
      </div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm overflow-hidden border border-surface-container">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center cursor-pointer text-left font-bold text-lg"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-4 text-on-surface-variant leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
