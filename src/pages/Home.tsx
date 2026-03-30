import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, 
  Video, 
  ShieldCheck, 
  Lock, 
  ChevronDown, 
  Users, 
  ArrowRight,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-headline font-extrabold text-4xl md:text-7xl text-primary tracking-tight mb-6 leading-[1.1]"
        >
          Your path to <br/><span className="text-secondary italic">clarity & peace.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          We've simplified the journey to mental wellness. Discover how WeListen connects you with the right support, right when you need it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.04 }}
          className="mt-10"
        >
          <Link 
            to="/book" 
            className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-primary-dim transition-all active:scale-95 inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Why WeListen Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            Why WeListen?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
            className="text-on-surface-variant text-lg max-w-2xl mx-auto"
          >
            We're more than just a platform. We're a dedicated partner in your mental health journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Vetted Experts", desc: "Every listener on our platform undergoes a rigorous background check and professional verification process.", icon: <Users size={32} /> },
            { title: "Flexible Scheduling", desc: "Book sessions that fit your life. Whether it's early morning or late at night, we're here for you.", icon: <Calendar size={32} /> },
            { title: "Secure & Private", desc: "Your data is protected by industry-leading encryption. Your privacy is our top priority.", icon: <Lock size={32} /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.02 }}
              className="p-8 bg-white border border-surface-container rounded-3xl hover:border-primary transition-colors"
            >
              <div className="text-primary mb-6 bg-primary-container/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6">Real stories from our community</h2>
              <p className="text-white/70 text-lg">Hear from those who have found their path to wellness with WeListen.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link to="/book" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-surface-container transition-all inline-flex items-center gap-2">
                Start Your Story <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Finding a therapist who truly understands my cultural background was life-changing. WeListen made the booking process so easy.", author: "Jasmine L.", role: "User since 2023" },
              { text: "The flexibility of evening sessions allowed me to prioritize my mental health without sacrificing my work commitments.", author: "Michael R.", role: "User since 2024" },
              { text: "I was hesitant about online therapy, but the video platform is so seamless it feels just like being in the same room.", author: "Sarah W.", role: "User since 2023" }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.02 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white"
              >
                <p className="text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Visual Explanation (Bento-style Cards) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Step 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:col-span-7 bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group"
        >
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">Step 01</span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Submit Inquiry</h3>
            <p className="text-on-surface-variant text-base md:text-lg max-w-md">Fill out our simple contact form with your needs. We'll review your inquiry and connect you with the right expert for your situation.</p>
          </div>
          <div className="mt-12 flex justify-end">
            <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-sm rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <Users className="text-on-secondary-container" size={24} />
                </div>
                <div>
                  <div className="h-2 w-32 bg-surface-container-highest rounded-full mb-2"></div>
                  <div className="h-2 w-20 bg-surface-container rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-surface-container-low rounded-lg"></div>
                <div className="h-4 w-full bg-surface-container-low rounded-lg"></div>
                <div className="h-4 w-2/3 bg-surface-container-low rounded-lg"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="md:col-span-5 bg-white border border-surface-container rounded-3xl p-8 md:p-10 flex flex-col"
        >
          <span className="inline-block px-4 py-1 bg-secondary text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 w-fit">Step 02</span>
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Choose Your Professional</h3>
          <p className="text-on-surface-variant text-base md:text-lg mb-8">Review personalized profiles, read therapist philosophies, and watch short intro videos to find your perfect fit.</p>
          <div className="mt-auto space-y-4">
            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
              <img 
                className="w-12 h-12 rounded-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpjTcCenBVZUf4F5W7n1iLqpS2hAjSZV5ZkDvtzI6meRy-seM6uqkindigtcCro84njDC1tNuPfBoYgWVVIjUL84dBgU2sZlKlQeiDsSqg-f1i_VAizJK5w6i8BgCUbHq_4cguptrMuQwXJlg084TxbVnV58JKOmWJWihT4RFuxbrvT5b2zVHHHE9OMqXp30plEkEMutkVDJa9O_wQR7VV0ndcb2v244f3WM-nwClUq7uOg6HWyTpm6Vul5v2ssObUUWJ6GO8BKrQ"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-sm">Dr. Sarah Jenkins</p>
                <p className="text-xs text-on-surface-variant">Cognitive Behavioral Therapy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-primary-container/20 rounded-xl border border-primary/10 hover:bg-primary-container/30 transition-colors cursor-pointer">
              <img 
                className="w-12 h-12 rounded-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK_3HGwd6lR3rGNE-zbVFJnsfrL1uylZH_M9emdUBInVvX7WewJDG3ejLmQBNqC1_dBLhI071lJmifTZeYwHZq1b6IhKY6JqsUkCdLrZHYDi-uer81-c7-EwFEDONqdjYQHRhHQwzQsvl6WTT1oMV-R-aE3dKylt23aelZK0LoaekkGpE5F5wIVr-sJBmDd-hGvc5yZ8Rsq6fvevAe0d-25ILMVqd3KthjOa0Ju3u50asttt7YFE9njp2B5eSr8T48qwvEupL-hGs"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-sm">Marcus Thorne, MSW</p>
                <p className="text-xs text-on-surface-variant">Anxiety & Mindfulness</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.04 }}
          className="md:col-span-5 bg-tertiary-container rounded-3xl p-8 md:p-10 flex flex-col justify-between"
        >
          <div>
            <span className="inline-block px-4 py-1 bg-tertiary text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">Step 03</span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Book a Session</h3>
            <p className="text-on-surface-variant text-base md:text-lg">Flexibility is key. Choose a time that works for your schedule, including evenings and weekends.</p>
          </div>
          <div className="mt-12 bg-white rounded-2xl p-4 shadow-sm">
            <div className="grid grid-cols-4 gap-2">
              <div className="h-10 bg-primary-container rounded-lg flex items-center justify-center text-[10px] font-bold text-on-primary-container">10:00</div>
              <div className="h-10 bg-surface-container rounded-lg flex items-center justify-center text-[10px] font-medium text-on-surface-variant">11:30</div>
              <div className="h-10 bg-surface-container rounded-lg flex items-center justify-center text-[10px] font-medium text-on-surface-variant">14:00</div>
              <div className="h-10 bg-primary-container rounded-lg flex items-center justify-center text-[10px] font-bold text-on-primary-container">16:30</div>
            </div>
          </div>
        </motion.div>

        {/* Step 4 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.06 }}
          className="md:col-span-7 bg-primary text-white rounded-3xl p-8 md:p-10 overflow-hidden relative group"
        >
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-white text-primary rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">Step 04</span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Connect Online</h3>
            <p className="text-white/80 text-base md:text-lg max-w-sm">Join your session from the comfort of your home via our secure, high-definition video platform. Private, safe, and seamless.</p>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <Video className="w-full h-full" size={240} />
          </div>
        </motion.div>
      </section>

      {/* Privacy & Security */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 mt-12 bg-surface-container-low rounded-3xl md:rounded-[3rem]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Your Privacy is <br/>Our Sacred Trust</h2>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8">
              At WeListen, we employ banking-grade encryption and strict HIPAA-compliant protocols. Your sessions are never recorded, and your data stays yours.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <ShieldCheck className="text-secondary" size={28} />
                </div>
                <div>
                  <p className="font-bold">End-to-End Encryption</p>
                  <p className="text-sm text-on-surface-variant">All communication is scrambled and visible only to you and your professional.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Lock className="text-secondary" size={28} />
                </div>
                <div>
                  <p className="font-bold">Anonymity Options</p>
                  <p className="text-sm text-on-surface-variant">Choose how much you want to share. You can use a nickname for all interactions.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto"
          >
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXrXstwIHCH15Nd4Kqb1INJK7uhbyD5Frj15UkmvLWuVFMGc4XcyY0AWdp00Ow-rng69dElT4rSLT3fm8y8U6HXO35XtLrZAZw_Q-UeQZxh5H77oaHZjWpJRVToiqynsz5VSEK5Xn1AhsdNtOsSuLTvAyAz7I2iZpPtLEsJG93r8tHEABsJj7ut-tYZ2G8YYr7p62pDeJihZ_bOSylRWZU9Y1X-lnSn5vKPaQ1RjJFqGObxvMUjPWvO51mUZL1XnqPTAslfCg6bYE"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-24">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem 
            question="How long are the sessions?" 
            answer="Most standard sessions last 45-50 minutes, though some specialized treatments or intake sessions may vary. You can discuss this directly with your therapist."
          />
          <FAQItem 
            question="Can I switch therapists?" 
            answer="Absolutely. We believe the therapeutic relationship is key. If you don't feel a connection, you can switch at any time with no extra cost or questions asked."
          />
          <FAQItem 
            question="Does insurance cover WeListen?" 
            answer="We work with many major providers. During the onboarding process, you can input your details to see your coverage and estimated out-of-pocket costs."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-primary-container rounded-3xl md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-on-primary-container mb-6">Ready to start your journey?</h2>
            <p className="text-on-primary-container/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">Take the first step toward a healthier mind today. Your sanctuary is waiting.</p>
            <Link 
              to="/book"
              className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold shadow-lg hover:bg-primary-dim transition-all active:scale-95 flex items-center gap-2 mx-auto w-fit"
            >
              Get Started Today
              <ArrowRight size={20} />
            </Link>
          </div>
          {/* Abstract Decorative Shapes */}
          <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </motion.div>
      </section>
    </>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm overflow-hidden">
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
