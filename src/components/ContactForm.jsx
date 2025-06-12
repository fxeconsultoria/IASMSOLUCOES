import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Calendar, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
          <p className="text-muted-foreground">
            Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve para agendar seu diagnóstico gratuito.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulário de Agendamento</CardTitle>
        <CardDescription>
          Todas as informações são confidenciais e seguras
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Nome *</label>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo" 
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email *</label>
              <Input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com" 
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Empresa *</label>
              <Input 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nome da empresa" 
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Telefone</label>
              <Input 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(85) 99999-9999" 
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Mensagem</label>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Conte-nos sobre seus desafios e objetivos com IA..."
              rows={4}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Diagnóstico Gratuito
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

