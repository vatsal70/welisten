import { motion } from "motion/react";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-headline font-extrabold text-4xl text-primary mb-8"
      >
        Privacy Policy
      </motion.h1>
      <div className="prose prose-lg text-on-surface-variant">
        <p>Your privacy is our sacred trust. This policy explains how we handle your data.</p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Data Collection</h2>
        <p>We only collect data necessary to provide you with the best mental health support.</p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Security</h2>
        <p>We use banking-grade encryption and are fully HIPAA-compliant.</p>
      </div>
    </div>
  );
}
