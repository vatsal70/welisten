import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: "Email Us", detail: "support@welisten.com", subDetail: "24/7 support for all users" },
    { icon: <Phone size={24} />, title: "Call Us", detail: "+1 (800) 123-4567", subDetail: "Mon-Fri, 9am-6pm EST" },
    { icon: <MapPin size={24} />, title: "Our Office", detail: "123 Wellness Way", subDetail: "San Francisco, CA 94103" },
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
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.02 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          We're here to help. Whether you have a question about our services, billing, or just want to say hello.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.02 }}
              className="flex items-start gap-6 p-8 bg-surface-container-low rounded-3xl"
            >
              <div className="text-primary bg-white p-4 rounded-2xl shadow-sm">{info.icon}</div>
              <div>
                <h3 className="font-bold text-xl mb-1">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.detail}</p>
                <p className="text-on-surface-variant text-sm">{info.subDetail}</p>
              </div>
            </motion.div>
          ))}

          <div className="p-8 bg-primary-container/20 rounded-3xl border border-primary/10">
            <div className="flex items-center gap-3 text-primary mb-4">
              <ShieldCheck size={24} />
              <h3 className="font-bold text-xl">Privacy Guaranteed</h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Your communication with us is strictly confidential. We use banking-grade encryption to protect your data.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[3rem] border border-surface-container shadow-xl">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Message Sent!</h2>
              <p className="text-on-surface-variant text-lg">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-primary font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-2">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="How can we help?" 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-2">Message</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="Tell us more about your inquiry..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-dim transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="mt-20 rounded-[3rem] overflow-hidden border border-surface-container shadow-2xl h-[400px] relative group"
      >
        <img 
          src="https://picsum.photos/seed/map-placeholder/1920/1080?grayscale&blur=2" 
          alt="Map Placeholder" 
          className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/5 backdrop-blur-[2px]">
          <div className="bg-white p-6 rounded-full shadow-2xl mb-4 animate-bounce">
            <MapPin size={40} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Our Location</h3>
          <p className="text-on-surface-variant font-medium">123 Wellness Way, San Francisco, CA 94103</p>
          <div className="mt-6 px-6 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-lg">
            Interactive Map Coming Soon
          </div>
        </div>
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
      </motion.div>
    </div>
  );
}
