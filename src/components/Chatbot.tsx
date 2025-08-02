import { useEffect, useRef, useState } from 'react';
import { X, Send, Bot, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true); // ✅ ouvert par défaut
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Bonjour ! Je suis l’assistant IA d’Aymane. Posez-moi vos questions sur son profil, ses projets ou ses compétences.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          temperature: 0.8,
          messages: [
            {
              role: 'system',
              content: `
Tu es l’assistant IA officiel d’Aymane Boufatma. Tu es professionnel, clair, fluide, et adaptatif.

🎯 Ta mission :
Tu réponds à toutes les questions concernant son profil, parcours, projets, compétences ou expériences.
Sois pertinent et toujours cohérent avec les faits fournis. Si l’utilisateur demande une réponse courte, tu la résumes en une ou deux phrases claires. Sinon, tu donnes une réponse complète mais toujours lisible.

📌 Contexte :
- Nom : Aymane Boufatma
- Né le 9 décembre 2000 à Fès, Maroc
- Âge : 24 ans
- Langues : Français (courant), Anglais (intermédiaire)
- Diplômé en juillet 2025 (Ingénieur SI, EHTP Casablanca)
- Recherche son premier CDI (Data Analyst ou Ingénieur SI)

🎓 Formation :
- EHTP Casablanca – Ingénieur en Systèmes d’Information (2021–2025)
- CPGE MPSI/MP à Fès (2019–2021)

💼 Stages :
- Stage PFE : Omniyat (Power BI, Grafana, API sécurisée, React)
- Stage Ingénieur : Involys (authentification biométrique, chiffrement)
- Stage SIG : Agence Urbaine de Fès (ArcMap, GeoServer)

⚙️ Compétences :
- Python, SQL, Java, JavaScript
- Power BI, Grafana, QlikView, SAP BO
- PostgreSQL, SQL Server, Oracle
- React, Node.js, API REST, Docker
- Git, Linux, VS Code, Jupyter

🧠 Projets :
- Dashboards logistiques connectés (Power BI + IA)
- Assistant RH intelligent (React + OpenAI)
- Pipeline Big Data (Spark, Hive, Power BI)
- Application e-recrutement (.NET + SQL Server)
              `
            },
            { role: 'user', content: inputValue }
          ],
        }),
      });

      clearTimeout(timeoutId);
      const data = await res.json();
      const botReply = data.choices?.[0]?.message?.content?.trim();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply || "Je n'ai pas compris, pouvez-vous reformuler votre question ?",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Une erreur est survenue. Veuillez réessayer plus tard.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 animate-scale-in">
          <Card className="w-full h-full flex flex-col shadow-2xl border-border relative">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <h3 className="text-sm font-medium">Assistant IA d’Aymane</h3>
                  <p className="text-xs opacity-80">En ligne</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                size="icon"
                className="text-primary-foreground hover:bg-primary/40"
                variant="ghost"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="flex-1 p-0 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar" style={{ maxHeight: '100%' }}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] text-sm break-words ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg p-2 px-3 max-w-[80%]">
                      <div className="flex space-x-1 items-center">
                        <Bot className="h-4 w-4 text-primary" />
                        <div className="flex space-x-1 ml-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-border bg-background">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Posez votre question ici..."
                    className="flex-1"
                  />
                  <Button
                    onClick={sendMessage}
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
