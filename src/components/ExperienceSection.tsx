import { CalendarDays, Briefcase, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: "Stage PFE - Data Visualisation & Monitoring avec Grafana",
    company: "Omniyat",
    period: "03/02/2025 - 03/06/2025",
    type: "Stage de fin d'études",
    description: [
      "Conception et développement de dashboards décisionnels interactifs avec Grafana et Power BI, connectés à une base SQL Server",
      "Participation aux cérémonies agiles (daily, sprint review), gestion du backlog technique en lien avec les utilisateurs métiers",
      "Implémentation d'un modèle d'IA pour la prédiction de la charge logistique, avec génération automatique de rapports personnalisés",
      "Intégration d'un portail web en React.js permettant la publication dynamique et l'actualisation automatique des tableaux de bord via API proxy sécurisée",
      "Documentation continue sous Confluence, gestion des tâches via Jira",
      "Responsable de la relation client : animation des réunions d'avancement, présentation des livrables, et recueil des retours pour adapter la solution aux besoins métier"
    ],
    technologies: ["Grafana", "Power BI", "SQL Server", "React.js", "IA", "Jira", "Confluence"]
  },
  {
    title: "Stage d'ingénieur - développement mobile",
    company: "Involys",
    period: "Juillet 2024 - août 2024",
    type: "Stage d'ingénieur",
    description: [
      "Implémentation de l'authentification biométrique (empreinte digitale) pour renforcer la sécurité d'accès à l'application",
      "Développement de l'option de paramétrage et d'enregistrement de l'empreinte dans les réglages de l'application mobile",
      "Cryptage et décryptage des données sensibles enregistrées en base locale, assurant la confidentialité des informations utilisateur",
      "Mise en place de tests de sécurité et validation fonctionnelle pour garantir la robustesse du système d'identification et de chiffrement"
    ],
    technologies: ["Mobile", "Authentification biométrique", "Cryptage", "Sécurité", "Tests"]
  },
  {
    title: "Stage d'observation",
    company: "Agence urbaine de Fès",
    period: "Août 2023",
    type: "Stage d'observation",
    description: [
      "Traitement et structuration de données géospatiales sous ArcMap pour la mise en conformité et la préparation à la diffusion web",
      "Publication et visualisation de couches SIG dans GeoServer, avec configuration des services WMS/WFS pour un accès standardisé aux données"
    ],
    technologies: ["ArcMap", "GeoServer", "SIG", "WMS/WFS", "Données géospatiales"]
  }
];

const ExperienceSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('parcours');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="experience" className="py-20 bg-card/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mon Expérience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parcours professionnel et stages qui ont façonné mes compétences en ingénierie SI et analyse de données
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group hover-lift border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="shrink-0">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Flèche vers la section suivante */}
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

export default ExperienceSection;
