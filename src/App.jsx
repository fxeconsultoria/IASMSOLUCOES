import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  MessageCircle,
  Calendar,
  BarChart3,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';
import logoImage from './assets/logo.png';
import heroBgImage from './assets/hero-bg.png';
import ContactForm from './components/ContactForm';
import BlogSection from './components/BlogSection';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5585981005978?text=Olá! Gostaria de saber mais sobre os serviços da IASM Solutions.', '_blank');
  };

  const handleScheduleClick = () => {
    // Scroll to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="IASM Solutions" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
          <Button onClick={handleScheduleClick} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            Agendar Diagnóstico
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBgImage} alt="AI Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              Consultoria Especializada em IA
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transformamos IA em{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Consultoria especializada para empresas que querem implementar Inteligência Artificial 
              de forma estratégica, prática e com foco em redução de custos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleScheduleClick} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4">
                <Brain className="w-5 h-5 mr-2" />
                Diagnóstico Gratuito
              </Button>
              <Button size="lg" variant="outline" onClick={handleServiceClick} className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <ArrowRight className="w-5 h-5 mr-2" />
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems/Solutions Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Você está enfrentando esses desafios?
              </h2>
              <div className="space-y-4">
                {[
                  "Não sabe quais projetos de IA priorizar",
                  "Não tem equipe preparada para IA",
                  "Está perdido diante de fornecedores e tecnologias",
                  "Ouviu falar de IA, mas não sabe como aplicar para resultados concretos"
                ].map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Nós temos a solução
              </h3>
              <div className="space-y-4">
                {[
                  "Diagnóstico estratégico: onde IA gera mais impacto",
                  "Estruturação de roadmap personalizado",
                  "Acompanhamento e governança para sair do PowerPoint para a prática",
                  "Foco total em redução de custos e resultados mensuráveis"
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas para transformar sua empresa através da Inteligência Artificial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Diagnóstico Express",
                description: "Avaliação rápida e estratégica das oportunidades de IA na sua empresa em 1-2 semanas.",
                price: "R$ 7.900",
                features: ["Análise de maturidade", "Mapeamento de oportunidades", "Relatório detalhado", "Apresentação executiva"]
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Roadmap Estratégico",
                description: "Plano detalhado e personalizado para implementação de IA alinhado aos seus objetivos.",
                price: "Sob consulta",
                features: ["Planejamento detalhado", "Cronograma de implementação", "Análise de ROI", "Governança robusta"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "PMO IA",
                description: "Acompanhamento contínuo e governança para garantir o sucesso dos projetos de IA.",
                price: "Mensal",
                features: ["Gestão de projetos", "Monitoramento de KPIs", "Relatórios regulares", "Suporte contínuo"]
              }
            ].map((service, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" onClick={handleScheduleClick}>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why IASM Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que IASM Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diferenciais que nos tornam a escolha certa para sua jornada em IA
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Clareza Estratégica",
                description: "Traduzimos a complexidade da IA em planos claros e acionáveis"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Foco em Resultados",
                description: "Priorizamos iniciativas que geram impacto mensurável e redução de custos"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Governança Robusta",
                description: "Implementamos estruturas para garantir sustentabilidade das iniciativas"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Execução Ágil",
                description: "Metodologia focada em resultados rápidos e implementação prática"
              }
            ].map((differential, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{differential.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{differential.title}</h3>
                <p className="text-muted-foreground">{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Contact/Schedule Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Agende seu Diagnóstico</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato para agendar 
                seu diagnóstico gratuito de IA.
              </p>
              
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estamos prontos para ajudar sua empresa a transformar IA em resultados reais.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(85) 98100-5978</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contato@iasmsolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Localização</h3>
                    <p className="text-muted-foreground">Fortaleza, Ceará - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h3 className="font-semibold mb-3">Horário de Atendimento</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logoImage} alt="IASM Solutions" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-primary-foreground/80 mb-4">
                Transformamos IA em resultados reais para empresas que buscam inovação e eficiência.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Diagnóstico Express</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Roadmap Estratégico</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">PMO IA</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Workshops</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
                <li><a href="#blog" className="hover:text-primary-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Cases de Sucesso</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>(85) 98100-5978</p>
                <p>contato@iasmsolutions.com</p>
                <p>Fortaleza, CE - Brasil</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 IASM Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="floating-whatsapp"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}

export default App;

