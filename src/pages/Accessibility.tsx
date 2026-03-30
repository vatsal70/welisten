import { motion } from "motion/react";

export default function Accessibility() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-headline font-extrabold text-4xl text-primary mb-8"
      >
        Accessibility Statement
      </motion.h1>
      <div className="prose prose-lg text-on-surface-variant">
        <p>We are committed to making WeListen accessible to everyone.</p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Our Commitment</h2>
        <p>We follow WCAG 2.1 guidelines to ensure our platform is usable for all.</p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Feedback</h2>
        <p>If you encounter any issues, please contact us.</p>
      </div>
    </div>
  );
}
