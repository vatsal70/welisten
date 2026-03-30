import { motion } from "motion/react";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-headline font-extrabold text-4xl text-primary mb-8"
      >
        Terms of Service
      </motion.h1>
      <div className="prose prose-lg text-on-surface-variant">
        <p>By using WeListen, you agree to these terms.</p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Usage</h2>
        <p>WeListen is a platform for mental health support. It is not for emergency situations.</p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Payments</h2>
        <p>Payments are processed securely through our platform.</p>
      </div>
    </div>
  );
}
