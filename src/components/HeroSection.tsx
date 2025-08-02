import { useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Ingénieur SI',
    'Data Analyst Junior',
    'Expert Python & Power BI'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <section id="hero" className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, type: 'spring', stiffness: 80 }}
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Aymane Boufatma
            </span>
          </motion.h1>

          {/* Animated title */}
          <motion.div
            className="h-16 flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              {displayText}
              <span className="border-r-2 border-primary animate-pulse ml-1" />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Passionné par l'analyse, la visualisation et la transformation de données 
            en décisions stratégiques. Je développe des solutions innovantes pour 
            optimiser les performances business.
          </motion.p>

          {/* Contact links - cascade */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {[
              {
                href: 'https://mail.google.com/mail/?view=cm&to=aymanboufatma@gmail.com&su=Contact depuis votre portfolio&body=Bonjour Aymane,',
                label: 'aymanboufatma@gmail.com',
                icon: Mail
              },
              {
                href: 'https://www.linkedin.com/in/aymane-boufatma/',
                label: 'LinkedIn',
                icon: Linkedin
              },
              {
                href: 'https://github.com/Aymanebouf',
                label: 'GitHub',
                icon: Github
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group backdrop-blur-sm border border-primary/20"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CV Download - en dernier */}
          <motion.div
            className="flex justify-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href="/cv-aymane-boufatma.pdf"
              download="CV-Aymane-Boufatma.pdf"
              className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group backdrop-blur-sm border border-primary/20"
            >
              <Download className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Télécharger le CV</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
