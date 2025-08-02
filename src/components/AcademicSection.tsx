import { GraduationCap, Calendar, BookOpen, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const academicJourney = [
  {
    institution: "Ecole Hassania des Travaux Publics (EHTP)",
    degree: "Diplôme : Ingénieur d'état en Système d'Information",
    period: "Sep 2021 - Juin 2025",
    type: "Formation d'Ingénieur",
    icon: GraduationCap
  },
  {
    institution: "Classes préparatoires aux grandes écoles (CPGE)",
    degree: "Option : MPSI/MP",
    period: "Sep 2019 - Juin 2021",
    type: "Classes Préparatoires",
    icon: BookOpen
  }
];

const AcademicSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('projets');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="parcours" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Parcours Académique
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Mon parcours de formation académique, de la préparation aux grandes écoles 
            jusqu'à ma formation d'ingénieur en systèmes d'information.
          </p>

          <div className="space-y-6">
            {academicJourney.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <Card className="border-border hover:shadow-lg transition-all duration-300 hover-lift">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-foreground">
                              {item.institution}
                            </CardTitle>
                            <Badge variant="secondary" className="mt-1">
                              {item.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground font-medium">
                        {item.degree}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Flèche flottante vers la section suivante */}
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

export default AcademicSection;
