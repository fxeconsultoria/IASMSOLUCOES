import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const BlogSection = () => {
  const [articles] = useState([
    {
      id: 1,
      title: "Como a IA pode reduzir custos operacionais em até 30%",
      excerpt: "Descubra as principais estratégias para implementar IA focada em redução de custos operacionais. Casos reais de empresas que conseguiram economizar milhões através de automação inteligente e otimização de processos.",
      date: "12 Jun 2025",
      category: "Estratégia",
      author: "IASM Solutions",
      readTime: "5 min",
      content: `
        A Inteligência Artificial tem se mostrado uma ferramenta poderosa para redução de custos operacionais em empresas de todos os tamanhos. Estudos recentes mostram que organizações que implementam IA de forma estratégica conseguem reduzir seus custos operacionais em até 30%.

        ## Principais áreas de impacto:

        ### 1. Automação de Processos
        A automação de tarefas repetitivas e manuais é uma das formas mais diretas de reduzir custos. Processos como:
        - Processamento de documentos
        - Atendimento ao cliente básico
        - Análise de dados rotineiros
        - Gestão de estoque

        ### 2. Manutenção Preditiva
        Utilizando sensores IoT e algoritmos de machine learning, é possível prever falhas em equipamentos antes que elas aconteçam, reduzindo:
        - Tempo de parada não planejado
        - Custos de manutenção corretiva
        - Desperdício de recursos

        ### 3. Otimização de Recursos
        IA pode otimizar o uso de recursos como energia, matéria-prima e mão de obra através de:
        - Análise preditiva de demanda
        - Otimização de rotas e logística
        - Gestão inteligente de energia

        ## Casos de Sucesso

        Uma empresa de manufatura implementou IA para otimização de sua linha de produção e conseguiu:
        - 25% de redução no desperdício de materiais
        - 20% de aumento na eficiência energética
        - 30% de redução em paradas não programadas

        ## Como Começar

        1. **Diagnóstico**: Identifique os processos com maior potencial de otimização
        2. **Priorização**: Foque em iniciativas com maior ROI
        3. **Implementação gradual**: Comece com projetos piloto
        4. **Monitoramento**: Acompanhe métricas e ajuste conforme necessário

        A IASM Solutions pode ajudar sua empresa a identificar essas oportunidades através do nosso Diagnóstico Express de IA.
      `
    },
    {
      id: 2,
      title: "5 erros comuns na implementação de IA empresarial",
      excerpt: "Evite os principais obstáculos que impedem o sucesso de projetos de IA. Aprenda com os erros mais frequentes e como contorná-los para garantir o sucesso da sua implementação.",
      date: "10 Jun 2025",
      category: "Implementação",
      author: "IASM Solutions",
      readTime: "7 min",
      content: `
        A implementação de IA nas empresas pode ser desafiadora. Baseado em nossa experiência, identificamos os 5 erros mais comuns que podem comprometer o sucesso dos projetos.

        ## 1. Falta de Estratégia Clara

        Muitas empresas começam projetos de IA sem uma estratégia bem definida. É essencial:
        - Definir objetivos claros e mensuráveis
        - Alinhar iniciativas de IA com objetivos de negócio
        - Estabelecer métricas de sucesso

        ## 2. Dados de Baixa Qualidade

        IA é tão boa quanto os dados que a alimentam. Problemas comuns:
        - Dados incompletos ou inconsistentes
        - Falta de governança de dados
        - Dados não representativos

        ## 3. Expectativas Irreais

        IA não é mágica. Erros de expectativa incluem:
        - Esperar resultados imediatos
        - Acreditar que IA resolve todos os problemas
        - Subestimar o tempo de implementação

        ## 4. Falta de Capacitação da Equipe

        Implementar IA sem preparar a equipe é um erro crítico:
        - Resistência à mudança
        - Falta de conhecimento técnico
        - Ausência de cultura data-driven

        ## 5. Não Considerar Aspectos Éticos e Regulatórios

        Questões importantes frequentemente ignoradas:
        - Privacidade e proteção de dados
        - Viés algorítmico
        - Transparência e explicabilidade

        ## Como Evitar Esses Erros

        A IASM Solutions desenvolveu uma metodologia que ajuda empresas a evitar essas armadilhas através de:
        - Diagnóstico completo antes da implementação
        - Roadmap estratégico personalizado
        - Acompanhamento e governança contínua
      `
    },
    {
      id: 3,
      title: "ROI em projetos de IA: como medir e maximizar resultados",
      excerpt: "Aprenda a definir métricas claras e acompanhar o retorno dos seus investimentos em IA. Metodologias práticas para calcular e otimizar o ROI dos seus projetos.",
      date: "8 Jun 2025",
      category: "ROI",
      author: "IASM Solutions",
      readTime: "6 min",
      content: `
        Medir o ROI de projetos de IA é fundamental para justificar investimentos e otimizar resultados. Aqui está um guia prático para calcular e maximizar o retorno.

        ## Definindo Métricas de ROI

        ### Métricas Quantitativas
        - Redução de custos operacionais
        - Aumento de receita
        - Economia de tempo
        - Redução de erros

        ### Métricas Qualitativas
        - Melhoria na satisfação do cliente
        - Aumento na qualidade do produto/serviço
        - Melhoria na tomada de decisão

        ## Fórmula Básica de ROI

        ROI = (Benefícios - Custos) / Custos × 100

        ### Componentes dos Custos:
        - Desenvolvimento e implementação
        - Infraestrutura e tecnologia
        - Treinamento da equipe
        - Manutenção e suporte

        ### Componentes dos Benefícios:
        - Economia de custos diretos
        - Aumento de receita
        - Benefícios indiretos (produtividade, qualidade)

        ## Exemplo Prático

        Uma empresa investiu R$ 500.000 em um sistema de IA para atendimento ao cliente:

        **Custos:**
        - Desenvolvimento: R$ 300.000
        - Infraestrutura: R$ 100.000
        - Treinamento: R$ 50.000
        - Manutenção anual: R$ 50.000

        **Benefícios anuais:**
        - Redução de 40% no tempo de atendimento
        - Economia de R$ 200.000 em custos de pessoal
        - Aumento de 15% na satisfação do cliente
        - Redução de 30% em reclamações

        **ROI no primeiro ano:** (R$ 200.000 - R$ 50.000) / R$ 500.000 × 100 = 30%

        ## Dicas para Maximizar ROI

        1. **Comece com projetos de alto impacto e baixa complexidade**
        2. **Defina métricas claras desde o início**
        3. **Monitore continuamente e ajuste conforme necessário**
        4. **Considere benefícios de longo prazo**
        5. **Invista em capacitação da equipe**

        ## Ferramentas de Acompanhamento

        - Dashboards de KPIs em tempo real
        - Relatórios automatizados
        - Análise comparativa (antes vs depois)
        - Feedback contínuo dos usuários

        A IASM Solutions ajuda empresas a definir e acompanhar essas métricas através de nosso serviço de PMO IA.
      `
    }
  ]);

  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={handleBackToList}
          className="mb-6"
        >
          ← Voltar para o Blog
        </Button>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Badge className="mb-4">{selectedArticle.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{selectedArticle.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{selectedArticle.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{selectedArticle.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{selectedArticle.readTime} de leitura</span>
              </div>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            {selectedArticle.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              
              if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
              }
              
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={index} className="font-semibold mb-4">{paragraph.replace(/\*\*/g, '')}</p>;
              }
              
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>
          
          <div className="mt-12 p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Quer implementar IA na sua empresa?</h3>
            <p className="text-muted-foreground mb-4">
              A IASM Solutions pode ajudar sua empresa a identificar oportunidades e implementar soluções de IA de forma estratégica.
            </p>
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Diagnóstico Gratuito
            </Button>
          </div>
        </article>
      </div>
    );
  }

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Notícias de IA para Negócios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas tendências e insights sobre IA empresarial
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 z-10">{article.category}</Badge>
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{article.author}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleReadMore(article)}
                  >
                    Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

