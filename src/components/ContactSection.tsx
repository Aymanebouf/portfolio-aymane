import { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import clsx from 'clsx';

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          } else {
            entry.target.classList.remove('animate-fade-in-up');
            entry.target.classList.add('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aymanboufatma@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&to=aymanboufatma@gmail.com&su=Contact depuis votre portfolio&body=Bonjour Aymane,',
      color: 'text-red-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aymane-boufatma',
      href: 'https://www.linkedin.com/in/aymane-boufatma/',
      color: 'text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Aymanebouf',
      href: 'https://github.com/Aymanebouf',
      color: 'text-gray-700 dark:text-gray-300',
    },
  ];

  const handleGmailRedirect = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&to=aymanboufatma@gmail.com&su=Contact depuis votre portfolio&body=Bonjour Aymane,',
      '_blank'
    );
  };

  const scrollToHeroSection = () => {
    const hero = document.getElementById('hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-background relative opacity-0 will-change-transform"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Restons en Contact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet en tête ou souhaitez échanger sur les opportunités de collaboration ? N'hésitez pas à me contacter !
            </p>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <Card
                      key={index}
                      className={clsx('hover-lift shadow-soft border-border', 'transition-transform duration-500 delay-100')}
                    >
                      <CardContent className="p-6">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 group"
                        >
                          <div className={`p-3 rounded-full bg-muted ${item.color}`}>
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </p>
                            <p className="text-sm text-muted-foreground">{item.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Card className="w-full card-gradient border border-border shadow-large hover-lift transition-transform duration-700">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto flex items-center justify-center mb-4 animate-glow">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Prêt à collaborer ?</h3>
                    <p className="text-muted-foreground">
                      Discutons de votre projet et voyons comment je peux vous aider à transformer vos données en valeur business.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={handleGmailRedirect}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift shadow-medium"
                    >
                      Démarrer la conversation
                    </Button>
                    <p className="text-xs text-muted-foreground">Réponse garantie sous 24h</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToHeroSection}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary animate-bounce transition"
        aria-label="Retour en haut"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </section>
  );
};

export default ContactSection;
