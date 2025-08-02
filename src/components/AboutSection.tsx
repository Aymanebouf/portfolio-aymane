import { Code, Database, TrendingUp, Users, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '/lovable-uploads/b14dcd5c-5786-44f0-beb4-2964f71ca97d.png';

const AboutSection = () => {
  const highlights = [
    {
      icon: Database,
      title: 'Analyse de données',
      description: 'Transformation de données complexes en insights actionnables',
      details: ['Python', 'PL/SQL', 'Spark & Hive', 'Modélisation OLAP'],
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Création de tableaux de bord et rapports stratégiques',
      details: ['Power BI', 'Grafana', 'SAP BO / QlikView', 'Automatisation de rapports'],
    },
    {
      icon: Code,
      title: 'Développement',
      description: 'Applications web et solutions techniques innovantes',
      details: ['React.js', 'Node.js & API REST', 'Java', 'Cryptographie & tests'],
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail en équipe agile et communication technique',
      details: ['Jira', 'Confluence', 'Méthodo Scrum', 'Présentation client & réunions'],
    },
  ];

  const scrollToNext = () => {
    const nextSection = document.getElementById('experience');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-20 animate-glow" />
                <img
                  src={profileImage}
                  alt="Aymane Boufatma"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-large hover-lift"
                />
              </div>
            </motion.div>

            {/* Texte + Cartes */}
            <motion.div
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Diplômé de <strong>l'École Hassania des Travaux Publics</strong> en <strong>ingénierie des systèmes d'information</strong>, je me spécialise dans
                  l'<strong>analyse et la visualisation de données</strong>. Mon expertise couvre le développement d'applications web, la création de <strong>tableaux de bord interactifs</strong> et l'optimisation des processus métier.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Avec une approche analytique rigoureuse et une passion pour l'innovation technologique, je transforme les défis data en opportunités business. Mon objectif est de créer des solutions qui génèrent un impact mesurable et durable.
                </p>
              </div>

              {/* Cartes animées */}
              <div className="grid md:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group [perspective:1000px]"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 + index * 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="relative w-full aspect-[5/3] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* Front */}
                      <div className="absolute inset-0 [backface-visibility:hidden] p-6 rounded-xl card-gradient border border-border shadow-soft">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Back */}
                      <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 rounded-xl card-gradient border border-border shadow-soft flex items-start overflow-y-auto">
                        <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                          {item.details.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Flèche */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary/20 hover:bg-primary/30 text-primary rounded-full p-2 animate-bounce transition"
        aria-label="Aller à la section suivante"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default AboutSection;
