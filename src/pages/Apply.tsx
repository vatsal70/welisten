import { motion } from "motion/react";
import { Send, Upload, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface-container-low p-16 rounded-[3rem] border border-surface-container"
        >
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-primary" />
          </div>
          <h1 className="font-headline text-4xl font-bold text-primary mb-6 italic">Application Received</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
            Thank you for your interest in joining WeListen. Our clinical team will review your 
            credentials and get back to you within 3-5 business days.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-dim transition-all shadow-md"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="max-w-3xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline font-extrabold text-4xl md:text-6xl text-primary mb-6"
        >
          Apply as a <span className="italic">Listener</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
          Complete the form below to start your application. Please ensure all 
          information is accurate and verifiable.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-[2rem] border border-surface-container shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Dr. Jane Smith"
                  className="w-full bg-surface-container-low border border-surface-container rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="jane.smith@example.com"
                  className="w-full bg-surface-container-low border border-surface-container rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">License Type</label>
                <select className="w-full bg-surface-container-low border border-surface-container rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                  <option>PhD / PsyD</option>
                  <option>LCSW</option>
                  <option>LMFT</option>
                  <option>LPC / LPCC</option>
                  <option>Other Licensed Professional</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">License Number</label>
                <input 
                  required
                  type="text" 
                  placeholder="State & License #"
                  className="w-full bg-surface-container-low border border-surface-container rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">Primary Specialties</label>
              <input 
                required
                type="text" 
                placeholder="e.g., Anxiety, Depression, Trauma, Couples Counseling"
                className="w-full bg-surface-container-low border border-surface-container rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">Clinical Experience (Years)</label>
              <input 
                required
                type="number" 
                min="0"
                placeholder="Years of post-licensure experience"
                className="w-full bg-surface-container-low border border-surface-container rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1 uppercase tracking-wider">CV / Resume Upload</label>
              <div className="border-2 border-dashed border-surface-container rounded-xl p-10 text-center hover:bg-surface-container-low transition-all cursor-pointer group">
                <Upload size={32} className="mx-auto text-primary/40 mb-4 group-hover:text-primary transition-all" />
                <p className="text-on-surface-variant text-sm">Drag and drop your CV here, or <span className="text-primary font-bold">browse files</span></p>
                <p className="text-[10px] text-on-surface-variant/60 mt-2">PDF, DOCX up to 10MB</p>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-xl font-bold hover:bg-primary-dim transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Submit Application <Send size={18} />
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-surface-container-low p-8 rounded-[2rem] border border-surface-container">
            <ShieldCheck size={32} className="text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4 font-headline italic">Secure & Confidential</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Your application data is encrypted and only accessible by our clinical 
              credentialing team. We never share your information with third parties.
            </p>
          </div>

          <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10">
            <h3 className="text-lg font-bold mb-4 font-headline text-primary">Next Steps</h3>
            <ul className="space-y-4">
              {[
                "Initial screening of credentials",
                "Background check verification",
                "Clinical interview invitation",
                "Platform training & onboarding"
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start text-on-surface-variant text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
