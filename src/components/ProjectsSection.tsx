import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images
import projectPowerBI from '@/assets/project-powerbi.jpg';
import projectBigData from '@/assets/project-bigdata.jpg';
import projectReact from '@/assets/project-react.jpg';
import projectDotNet from '@/assets/project-dotnet.jpg';
import projectMobile from '@/assets/project-mobile.jpg';

// Nouveau projet (churn)
const churnProject = {
  title: "Analyse de la fidélité client et détection du churn",
  description: "Étude des comportements clients pour anticiper les départs et améliorer la fidélité.",
  image: projectPowerBI,
  tags: ['Python', 'Power BI', 'Machine Learning', 'Churn', 'Jira'],
  category: 'Business Intelligence',
  github: 'https://github.com/Aymanebouf/Projet-Analyse-de-la-fidelite-client-et-detection-du-churn'
};

const allProjects = [
  churnProject,
  {
    title: "Amélioration de l'engagement - App Mobile",
    description: "Analyse complète des métriques d'engagement utilisateur avec tableaux de bord Power BI pour l’optimisation business.",
    image: projectMobile,
    tags: ['Power BI', 'Analyse métier', 'KPI', 'Mobile Analytics'],
    category: 'Business Intelligence',
    github: 'https://github.com/Aymanebouf'
  },
  {
    title: "Data Pipeline Big Data",
    description: "Conception et implémentation d'un pipeline de données massives utilisant Spark et Hive, avec visualisation Power BI.",
    image: projectBigData,
    tags: ['Apache Spark', 'Hive', 'Power BI', 'Cloud', 'ETL'],
    category: 'Data Engineering',
    github: 'https://github.com/Aymanebouf'
  },
  {
    title: "Tableau de bord Performance",
    description: "Développement d'un dashboard interactif combinant Python pour le traitement des données et Power BI pour la visualisation.",
    image: projectPowerBI,
    tags: ['Python', 'Power BI', 'Dashboard', 'Performance'],
    category: 'Business Intelligence',
    github: 'https://github.com/Aymanebouf'
  },
  {
    title: "Site E-recrutement",
    description: "Application web complète de recrutement développée avec .NET MVC et SQL Server.",
    image: projectDotNet,
    tags: ['.NET MVC', 'SQL Server', 'C#', 'Web Development'],
    category: 'Développement Web',
    github: 'https://github.com/Aymanebouf'
  },
  {
    title: "Portail Logistique React",
    description: "Interface React moderne avec API sécurisée pour la gestion logistique et visualisation temps réel.",
    image: projectReact,
    tags: ['React.js', 'API REST', 'Logistique', 'Real-time'],
    category: 'Développement Web',
    github: 'https://github.com/Aymanebouf'
  }
];

const categories = ['Tous les projets', 'Business Intelligence', 'Data Engineering', 'Développement Web'];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous les projets');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (selectedCategory === 'Tous les projets') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projets" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations techniques, alliant analyse de données, développement web et business intelligence.
            </p>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mt-6" />
          </div>

          {/* Filtrage */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Projects */}
          <div ref={ref} className="grid lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl card-gradient border border-border hover-lift shadow-medium group-hover:shadow-glow">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {/* Lien GitHub (si présent) */}
                    {project.github && (
                      <div className="flex justify-end mt-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, '_blank');
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Flèche */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary animate-bounce transition"
        aria-label="Aller aux compétences"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default ProjectsSection;
