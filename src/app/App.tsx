import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Code, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Database, 
  PenTool,
  CheckCircle,
  Users,
  Menu,
  X,
  Ticket,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl text-slate-800 tracking-tight">Event<span className="text-blue-600">Flow</span></span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Início</a>
            <a href="#eventos" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Eventos</a>
            <a href="#categorias" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Categorias</a>
            <a href="#sobre" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Sobre</a>
            <a href="#contato" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#inscricao" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm hover:shadow-md flex items-center gap-2">
              Inscreva-se
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-500 hover:text-slate-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50">Início</a>
          <a href="#eventos" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50">Eventos</a>
          <a href="#categorias" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50">Categorias</a>
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50">Sobre</a>
          <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50">Contato</a>
          <a href="#inscricao" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50">Criar Evento</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-slate-50 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Conectando pessoas, conhecimento e oportunidades.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
              Descubra workshops, bootcamps, palestras e eventos tecnológicos que podem transformar sua carreira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#eventos" className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
                Explorar Eventos
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#inscricao" className="inline-flex justify-center items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm hover:shadow text-lg">
                Inscreva-se
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative lg:ml-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGNyb3dkfGVufDF8fHx8MTc4MzQ2OTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Pessoas em uma conferência de tecnologia" 
              className="rounded-[2rem] shadow-2xl w-full object-cover h-[400px] lg:h-[400px]"
              />
              </div>
            </div>
          </div>
    </section>
  );
};
/*const SearchBar = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-slate-100">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-3.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
              placeholder="Qual evento você procura?" 
            />
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-3.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
              placeholder="Cidade (ex: São Paulo, SP)" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-8 rounded-xl transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Pesquisar
          </button>
        </form>
      </div>
    </div>
  );
};*/
const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      title: "React Conf Brasil 2026",
      date: "15-17 Ago • 09:00",
      location: "São Paulo, SP",
      category: "Desenvolvimento Web",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzgzNDY5NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "AI Summit LATAM",
      date: "02 Set • 10:00",
      location: "Rio de Janeiro, RJ (Híbrido)",
      category: "Inteligência Artificial",
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzgzNDY5NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "CyberSec Hackathon",
      date: "20 Set • 18:00",
      location: "Online",
      category: "Cibersegurança",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyfGVufDF8fHx8MTc4MzQ2OTU3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Eventos em Destaque</h2>
          <p className="text-lg text-slate-600">Participe das conferências e meetups mais aguardados pela comunidade tech.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-700">
                  {event.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                <div className="space-y-2 mb-6 text-slate-600 text-sm flex-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <a href="#inscricao" className="block text-center w-full bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-medium py-2.5 rounded-xl transition-colors border border-slate-200 hover:border-transparent">
                  Ver detalhes
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#categorias" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Ver todos os eventos <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { name: "Desenvolvimento Web", icon: <Code className="h-6 w-6" />, color: "bg-blue-50 text-blue-600", borderColor: "hover:border-blue-200 hover:shadow-blue-100" },
    { name: "Inteligência Artificial", icon: <Cpu className="h-6 w-6" />, color: "bg-purple-50 text-purple-600", borderColor: "hover:border-purple-200 hover:shadow-purple-100" },
    { name: "Cloud Computing", icon: <Cloud className="h-6 w-6" />, color: "bg-sky-50 text-sky-600", borderColor: "hover:border-sky-200 hover:shadow-sky-100" },
    { name: "Cibersegurança", icon: <ShieldCheck className="h-6 w-6" />, color: "bg-red-50 text-red-600", borderColor: "hover:border-red-200 hover:shadow-red-100" },
    { name: "Data Science", icon: <Database className="h-6 w-6" />, color: "bg-emerald-50 text-emerald-600", borderColor: "hover:border-emerald-200 hover:shadow-emerald-100" },
    { name: "UX/UI Design", icon: <PenTool className="h-6 w-6" />, color: "bg-orange-50 text-orange-600", borderColor: "hover:border-orange-200 hover:shadow-orange-100" }
  ];

  return (
    <section id="categorias" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Explore por Categoria</h2>
          <p className="text-lg text-slate-600">Filtre os eventos e encontre o conteúdo ideal para o seu perfil profissional.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href="#" 
              className={`bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${category.borderColor} group cursor-pointer`}
            >
              <div className={`mx-auto w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${category.color} transition-transform group-hover:scale-110`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Como Funciona</h2>
          <p className="text-lg text-slate-600">Simples, rápido e pensado para a melhor experiência da comunidade.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10"></div>
          
          <div className="text-center relative">
            <div className="mx-auto w-24 h-24 rounded-full bg-blue-50 border-8 border-white flex items-center justify-center mb-6 shadow-sm">
              <Search className="h-10 w-10 text-blue-600" />
            </div>
            <div className="absolute top-0 right-1/4 -mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">1</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Escolha um evento</h3>
            <p className="text-slate-600">Navegue pelas categorias e encontre o evento perfeito para o seu momento de carreira.</p>
          </div>
          
          <div className="text-center relative">
            <div className="mx-auto w-24 h-24 rounded-full bg-purple-50 border-8 border-white flex items-center justify-center mb-6 shadow-sm">
              <Ticket className="h-10 w-10 text-purple-600" />
            </div>
            <div className="absolute top-0 right-1/4 -mr-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">2</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Faça sua inscrição</h3>
            <p className="text-slate-600">Garanta seu ingresso em poucos cliques de forma totalmente segura e transparente.</p>
          </div>
          
          <div className="text-center relative">
            <div className="mx-auto w-24 h-24 rounded-full bg-green-50 border-8 border-white flex items-center justify-center mb-6 shadow-sm">
              <Users className="h-10 w-10 text-green-600" />
            </div>
            <div className="absolute top-0 right-1/4 -mr-4 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">3</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Participe e faça networking</h3>
            <p className="text-slate-600">Conecte-se com outros profissionais, aprenda com especialistas e impulsione sua carreira.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const RegistrationForm = () => {
  return (
    <section id="inscricao" className="py-20 bg-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl mix-blend-screen"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-purple-600/20 to-pink-600/20 blur-3xl mix-blend-screen"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inscreva-se em nosso próximo evento exclusivo</h2>
          <p className="text-lg text-slate-300">Preencha seus dados para garantir acesso antecipado e benefícios.</p>
        </div>

        <div className="bg-white text-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <form onSubmit={(e) => { e.preventDefault(); alert('Ação realizada com sucesso!'); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome completo</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors" placeholder="João da Silva" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-mail</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors" placeholder="joao@empresa.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Telefone</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label htmlFor="cep" className="block text-sm font-medium text-slate-700">CEP</label>
                <input type="text" id="cep" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors" placeholder="00000-000" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"></div>
                <label htmlFor="cep" className="block text-sm font-medium text-slate-700">consulta o CEP</label>
                <button type="button" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors"></button>
                  <span>Consultar</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="street" className="block text-sm font-medium text-slate-700">Rua/Avenida</label>
                <input type="text" id="street" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors" placeholder="Rua das Tecnologias" />
              </div>
              <div className="space-y-2">
                <label htmlFor="neighborhood" className="block text-sm font-medium text-slate-700">Bairro</label>
                <input type="text" id="neighborhood" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors" placeholder="Vila Tech" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="city" className="block text-sm font-medium text-slate-700">Cidade</label>
                <input type="text" id="city" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors" placeholder="São Paulo" />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="block text-sm font-medium text-slate-700">Estado</label>
                <select id="state" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-colors">
                  <option value="">Selecione...</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="RS">Rio Grande do Sul</option>
                  {/* Outros estados */}
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Inscrever-se
              </button>
            </div>
            <p className="text-xs text-center text-slate-500 mt-4">Ao se inscrever, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Ticket className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Event<span className="text-blue-500">Flow</span></span>
            </a>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              A maior e mais inovadora plataforma de eventos de tecnologia do Brasil, conectando pessoas e conhecimento.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#eventos" className="hover:text-blue-400 transition-colors">Eventos</a></li>
              <li><a href="#categorias" className="hover:text-blue-400 transition-colors">Categorias</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Inscreva-se</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Sobre nós</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">A Empresa</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">LGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} EventFlow. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-['Poppins'] min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <FeaturedEvents />
        <Categories />
        <HowItWorks />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
