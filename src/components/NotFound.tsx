import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from './Button';

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-[1]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <h1 className="font-serif text-[clamp(4rem,15vw,10rem)] font-bold text-gold/20 leading-none mb-4">
          404
        </h1>
        <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-cream mb-6">
          Lost in the Pixel?
        </h2>
        <p className="text-[1rem] text-cream-muted max-w-[450px] mx-auto mb-10 font-light">
          The page you are looking for doesn&apos;t exist or has been moved to another digital space.
        </p>

        <div className="flex justify-center">
          <Link to="/">
            <Button variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
