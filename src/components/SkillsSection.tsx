import { useState } from 'react';
import {
  Code2,
  Database,
  BarChart3,
  Globe,
  Settings,
  GitBranch,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

import pythonIcon from '@/assets/icones/python.png';
import sqlServerIcon from '@/assets/icones/sqlserver.png';
import postgresqlIcon from '@/assets/icones/postgresql.png';
import oracleIcon from '@/assets/icones/oracle.png';
import javaIcon from '@/assets/icones/java.png';
import javascriptIcon from '@/assets/icones/javascript.png';
import powerbiIcon from '@/assets/icones/powerbi.png';
import grafanaIcon from '@/assets/icones/grafana.png';
import qlikIcon from '@/assets/icones/qlik view.png';
import sapIcon from '@/assets/icones/sap.png';
import reactIcon from '@/assets/icones/react.png';
import nodejsIcon from '@/assets/icones/nodejs.png';
import restapiIcon from '@/assets/icones/Rest api.png';
import gitIcon from '@/assets/icones/git.png';
import dockerIcon from '@/assets/icones/docker.png';
import vscodeIcon from '@/assets/icones/vscode.png';
import jupyterIcon from '@/assets/icones/jupyter.png';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<'tech' | 'soft'>('tech');
  const [selectedTechCategory, setSelectedTechCategory] = useState('all');

  const technicalSkills = [
  { name: 'Python', level: 90, color: 'bg-blue-500', category: 'languages', icon: <img src={pythonIcon} alt="Python" className="w-12 h-12 object-contain rounded-sm" /> },
  { name: 'SQL Server', level: 90, color: 'bg-red-600', category: 'databases', icon: <img src={sqlServerIcon} alt="SQL Server" className="w-10 h-10 object-contain rounded-sm" /> },
  { name: 'PostgreSQL', level: 85, color: 'bg-blue-700', category: 'databases', icon: <img src={postgresqlIcon} alt="PostgreSQL" className="w-10 h-10 object-contain rounded-sm" /> },
  { name: 'Oracle', level: 80, color: 'bg-red-700', category: 'databases', icon: <img src={oracleIcon} alt="Oracle" className="w-10 h-10 object-contain rounded-sm" /> },
  { name: 'Java', level: 75, color: 'bg-red-500', category: 'languages', icon: <img src={javaIcon} alt="Java" className="w-12 h-12 object-contain rounded-sm" /> },
  { name: 'JavaScript', level: 80, color: 'bg-yellow-500', category: 'languages', icon: <img src={javascriptIcon} alt="JavaScript" className="w-12 h-12 object-contain rounded-sm" /> },
  { name: 'Power BI', level: 95, color: 'bg-yellow-600', category: 'bi', icon: <img src={powerbiIcon} alt="Power BI" className="w-5 h-5 object-contain rounded-sm" /> },
  { name: 'Grafana', level: 80, color: 'bg-orange-600', category: 'bi', icon: <img src={grafanaIcon} alt="Grafana" className="w-5 h-5 object-contain rounded-sm" /> },
  { name: 'QlikView', level: 75, color: 'bg-green-600', category: 'bi', icon: <img src={qlikIcon} alt="QlikView" className="w-10 h-10 object-contain rounded-sm" /> },
  { name: 'SAP BO', level: 70, color: 'bg-blue-600', category: 'bi', icon: <img src={sapIcon} alt="SAP" className="w-7 h-7 object-contain rounded-sm" /> },
  { name: 'React.js', level: 85, color: 'bg-cyan-500', category: 'web', icon: <img src={reactIcon} alt="React" className="w-7 h-7 object-contain rounded-sm" /> },
  { name: 'Node.js', level: 75, color: 'bg-green-700', category: 'web', icon: <img src={nodejsIcon} alt="Node.js" className="w-12 h-12 object-contain rounded-sm" /> },
  { name: 'REST API', level: 80, color: 'bg-purple-500', category: 'web', icon: <img src={restapiIcon} alt="REST API" className="w-8 h-8 object-contain rounded-sm" /> },
  { name: 'Git', level: 85, color: 'bg-gray-600', category: 'tools', icon: <img src={gitIcon} alt="Git" className="w-5 h-5 object-contain rounded-sm" /> },
  { name: 'Docker', level: 75, color: 'bg-blue-800', category: 'tools', icon: <img src={dockerIcon} alt="Docker" className="w-7 h-7 object-contain rounded-sm" /> },
  { name: 'VS Code', level: 90, color: 'bg-blue-500', category: 'tools', icon: <img src={vscodeIcon} alt="VS Code" className="w-5 h-5 object-contain rounded-sm" /> },
  { name: 'Jupyter', level: 85, color: 'bg-orange-500', category: 'tools', icon: <img src={jupyterIcon} alt="Jupyter" className="w-12 h-12 object-contain rounded-sm" /> },
];



  const softSkills = [
    { name: 'Communication', icon: '💬' },
    { name: 'Esprit d’équipe', icon: '👥' },
    { name: 'Résolution de problèmes', icon: '🧠' },
    { name: 'Adaptabilité', icon: '🔁' },
    { name: 'Gestion du temps', icon: '⏰' },
    { name: 'Sens de l’initiative', icon: '💡' },
    { name: 'Curiosité', icon: '🔍' },
    { name: 'Autonomie', icon: '🧍‍♂️' },
    { name: 'Leadership', icon: '👑' },
    { name: 'Pensée critique', icon: '🏛️' },
  ];

  const techCategories = [
    { id: 'all', label: 'Toutes', icon: Settings },
    { id: 'languages', label: 'Langages', icon: Code2 },
    { id: 'databases', label: 'Bases de données', icon: Database },
    { id: 'bi', label: 'Business Intelligence', icon: BarChart3 },
    { id: 'web', label: 'Web/API', icon: Globe },
    { id: 'tools', label: 'Outils', icon: GitBranch },
  ];

  const filteredTechSkills =
    selectedTechCategory === 'all'
      ? technicalSkills
      : technicalSkills.filter((s) => s.category === selectedTechCategory);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="competences" className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une combinaison de compétences techniques solides et de qualités interpersonnelles essentielles pour réussir dans le monde professionnel.
          </p>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mt-6" />
        </div>

        <div className="flex justify-center mb-10 gap-4">
          <button
            onClick={() => setActiveTab('tech')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition ${
              activeTab === 'tech'
                ? 'bg-primary text-white border-primary shadow-lg'
                : 'bg-card text-muted-foreground border-border hover:border-primary'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Compétences Techniques</span>
          </button>

          <button
            onClick={() => setActiveTab('soft')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition ${
              activeTab === 'soft'
                ? 'bg-primary text-white border-primary shadow-lg'
                : 'bg-card text-muted-foreground border-border hover:border-primary'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Soft Skills</span>
          </button>
        </div>

        {activeTab === 'tech' && (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {techCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedTechCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedTechCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-muted/70'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTechSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-6 rounded-xl card-gradient border border-border shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'soft' && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg bg-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={scrollToContact}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary animate-bounce transition"
        aria-label="Aller à la section Contact"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default SkillsSection;
