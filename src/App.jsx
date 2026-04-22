import React, { useState, useEffect } from 'react';
import {
    Globe,
    Zap,
    ShieldCheck,
    ChevronRight,
    ChevronLeft,
    ShoppingCart,
    Search,
    Menu,
    X,
    Smartphone,
    Wifi,
    QrCode,
    Check,
    CreditCard,
    Clock,
    MapPin,
    Send,
    Circle,
    Star,
    MessageCircle,
    Phone,
    Mail,
    Calendar,
    Minus,
    Plus,
    Heart,
    Award,
    Users,
    CheckCircle,
    Cpu,
    Package,
    ArrowRight
} from 'lucide-react';

// --- CONSTANTES E DADOS ---

const logoUrl = "/logo.png";

const allProducts = [
    { id: 1, country: 'Estados Unidos', price: '259', promo: null, type: 'USA', category: 'eSIM', features: ['Internet Ilimitada', 'Velocidade 5G/4G', 'Mantenha seu número de WhatsApp', 'Ativação imediata, 100% digital'] },
    { id: 2, country: 'Europa', price: '329', promo: null, type: 'EUROPE', category: 'eSIM', features: ['28 Países Cobertos', 'Internet Ilimitada', 'Mantenha seu número de WhatsApp', 'Velocidade 5G/4G'] },
    { id: 3, country: 'América do Sul', price: '289', promo: null, type: 'SA', category: 'eSIM', features: ['8 Países Cobertos', 'Internet Ilimitada', 'Mantenha seu número de WhatsApp', 'Dados em alta velocidade'] },
    { id: 4, country: 'Mundo', price: '349', promo: null, type: 'WORLD', category: 'eSIM', features: ['+200 Destinos', 'Internet Ilimitada', 'Mantenha seu número de WhatsApp', 'Ideal para múltiplos países'] },
    { id: 5, country: 'Estados Unidos', price: '299', promo: null, type: 'USA', category: 'Chip Físico', features: ['Internet Ilimitada', 'Velocidade 5G/4G', 'Mantenha seu número de WhatsApp', 'Receba diretamente em casa'] },
    { id: 6, country: 'Europa', price: '369', promo: null, type: 'EUROPE', category: 'Chip Físico', features: ['28 Países Cobertos', 'Internet Ilimitada', 'Mantenha seu número de WhatsApp', 'Velocidade 5G/4G'] },
    { id: 7, country: 'América do Sul', price: '319', promo: null, type: 'SA', category: 'Chip Físico', features: ['8 Países Cobertos', 'Internet Ilimitada', 'Mantenha seu número de WhatsApp', 'Dados em alta velocidade'] },
    { id: 8, country: 'Mundo', price: '399', promo: null, type: 'WORLD', category: 'Chip Físico', features: ['+200 Destinos', 'Internet Ilimitada', 'Mantenha seu número de WhatsApp', 'Ideal para múltiplos países'] }
];

const benefits = [
    { icon: <Package className="w-8 h-8 text-[#A64DFF]" />, title: 'Receba em casa', desc: 'Chip Físico entregue em todo o Brasil antes da sua viagem.', badge: 'Entrega padrão gratuita' },
    { icon: <Smartphone className="w-8 h-8 text-[#00D1FF]" />, title: 'eSIM em 2 horas', desc: 'Receba o QR Code por WhatsApp e ative diretamente no celular.', badge: '100% digital' },
    { icon: <Globe className="w-8 h-8 text-green-500" />, title: '+200 destinos', desc: 'Internet de alta velocidade em praticamente todo o mundo.', badge: '8 anos no mercado' },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: 'Ativação automática', desc: 'Planos programados para o período da viagem.', badge: 'Zero Complicações' },
    { icon: <CreditCard className="w-8 h-8 text-[#2E5BFF]" />, title: 'Pague em reais', desc: 'PIX com 5% de desconto ou parcele em 12x. Sem IOF.', badge: 'Sem taxa extra' },
    { icon: <MessageCircle className="w-8 h-8 text-[#00D1FF]" />, title: 'Suporte em português', desc: 'Atendimento especializado pelo WhatsApp 24h por dia.', badge: 'Atendimento humano' }
];

const testimonials = [
    { id: 1, name: 'Bárbara Luiza Cardoso', text: 'A melhor de todas as empresas, principalmente no pós venda!! Meus pais vem sempre nos visitar e as meninas da PlusSim entregam o chip na casa deles no Brasil e eles chegam aqui nos EUA conectados e eu super aliviada de já poder falar com eles desde o primeiro momento.', location: 'Estados Unidos' },
    { id: 2, name: 'Merinson Scaranello', text: 'Excelente chip... usei nos USA... precisei tirar algumas dúvidas enquanto estava lá e fui prontamente atendido via WhatsApp... Obrigado.. utilizarei novamente com certeza.', location: 'Estados Unidos' },
    { id: 3, name: 'Naiane Lopes', text: 'Excelente...usei para viagem na america do sul argentina, chegando no aeroporto o chip ja conectou em poucos minutos, consegui compartilhar com cel e notebook...e usei mto para chamar uber e mapas. Chamei no whats a equipe pra tirar uma dúvida e fui rapidamente atendida. obg ate a próxima viagem!!!', location: 'América do Sul' },
    { id: 4, name: 'André Maciel', text: 'Chip ótimo! Passei por 5 países e funcionou perfeitamente em todos. Recomendo !', location: 'Europa' },
    { id: 5, name: 'Marcia Palmer Irffi', text: 'Recomendo muito!Funcionou super bem na Alemanha, Escócia e Islândia!Vou comprar na próxima viagem!', location: 'Europa' },
    { id: 6, name: 'Brenna', text: 'Super atenciosos. Sempre que viajo compro com eles, excelente internet e o melhor preço.', location: 'Global' }
];

const faqItems = [
    { q: "O meu telemóvel é compatível com eSIM?", a: "A maioria dos smartphones lançados após 2019 (iPhone 11+, Samsung S20+, etc.) são compatíveis." },
    { q: "Como faço para ativar o plano?", a: "Basta escanear o QR Code que enviamos para o seu WhatsApp e ativar o roaming de dados." },
    { q: "Posso manter o meu número de WhatsApp?", a: "Sim! O eSIM funciona apenas para dados, o seu WhatsApp e apps continuam vinculados ao seu número original." },
    { q: "Preciso de internet para instalar o eSIM?", a: "Sim, recomendamos fazer a instalação ainda no Brasil ou via Wi-Fi no hotel para garantir a ativação." },
    { q: "Quanto tempo demora a entrega do chip físico?", a: "A entrega padrão é gratuita e o prazo varia conforme a sua região, geralmente entre 3 a 7 dias úteis." },
    { q: "O plano de internet é realmente ilimitado?", a: "Sim, nossos planos para os principais destinos oferecem dados ilimitados para que você use sem preocupações." }
];

// --- COMPONENTES AUXILIARES ---

const DestinationIcon = ({ type }) => {
    const iconClass = "w-6 h-6 transition-all duration-500 scale-110 drop-shadow-sm";
    const wrapperClass = "w-12 h-12 rounded-full shadow-sm border border-[#2E5BFF]/20 flex items-center justify-center bg-[#F9F5FF] text-[#2E5BFF] flex-shrink-0 transition-all duration-500 group-hover:bg-[#2E5BFF] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(46,91,255,0.4)]";

    switch (type) {
        case 'USA':
            return (
                <div className={wrapperClass}>
                    <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={iconClass}>
                        <path d="M 12 34 L 28 35 L 36 38 L 48 37 L 62 39 L 78 34 L 88 40 L 85 56 L 81 64 L 79 72 L 85 85 L 80 88 L 74 76 L 62 76 L 50 82 L 40 85 L 35 88 L 25 86 L 15 88 L 10 75 L 12 60 L 8 45 Z" />
                    </svg>
                </div>
            );
        case 'EUROPE':
            return (
                <div className={wrapperClass}>
                    <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={iconClass}>
                        <path d="M 30 85 L 20 70 L 25 50 L 40 45 L 35 30 L 45 25 L 55 10 L 65 10 C 65 10, 60 25, 55 35 L 55 45 L 75 40 L 95 50 L 90 70 C 90 70, 75 75, 70 70 L 80 85 L 75 90 C 75 90, 65 80, 60 80 L 50 95 L 40 95 Z" />
                        <path d="M 20 40 L 28 30 L 30 45 Z" />
                    </svg>
                </div>
            );
        case 'SA':
            return (
                <div className={wrapperClass}>
                    <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={iconClass}>
                        <path d="M 35 15 C 45 10 55 12 65 18 L 85 45 C 80 50 78 65 65 75 L 45 95 C 42 90 38 75 35 60 L 25 40 C 22 30 25 20 35 15 Z" />
                    </svg>
                </div>
            );
        case 'WORLD':
            return (
                <div className={wrapperClass}>
                    <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" className={iconClass}>
                        {/* North America */}
                        <path d="M 12 28 L 22 20 L 32 22 L 35 30 L 28 42 L 18 38 L 12 28 Z" />
                        <path d="M 28 44 L 33 45 L 30 50 L 25 50 Z" />
                        {/* South America */}
                        <path d="M 30 53 L 40 53 L 36 78 L 28 65 Z" />
                        {/* Europe */}
                        <path d="M 42 30 L 52 24 L 58 24 L 56 34 L 46 36 L 42 30 Z" />
                        {/* Africa */}
                        <path d="M 45 42 L 58 40 L 64 52 L 54 75 L 44 60 L 45 42 Z" />
                        {/* Asia */}
                        <path d="M 58 22 L 75 18 L 88 28 L 82 45 L 72 45 L 68 35 L 56 32 Z" />
                        {/* Oceania */}
                        <path d="M 78 60 L 92 64 L 88 74 L 75 70 Z" />
                        {/* Pontos de ilhas (Japão, Indonésia, Caribe/Groenlândia) para detalhe premium */}
                        <circle cx="85" cy="35" r="1" />
                        <circle cx="72" cy="54" r="1" />
                        <circle cx="36" cy="38" r="1.5" />
                        <circle cx="28" cy="15" r="1.5" />
                    </svg>
                </div>
            );
        default: return <div className={wrapperClass}><Globe size={24} /></div>;
    }
};

const LogoComponent = ({ setView }) => {
    return (
        <div
            className="flex items-center cursor-pointer"
            onClick={() => { setView('home'); window.scrollTo(0, 0); }}
        >
            <img
                src={logoUrl}
                alt="Plus Sim"
                className="h-[80px] md:h-[120px] w-auto object-contain"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-2xl font-black text-[#1A2B6D]">PLUS<span class="text-[#A64DFF]">SIM</span></span>';
                }}
            />
        </div>
    );
};

const ProductPage = ({ setView }) => {
    const [quantity, setQuantity] = useState(1);
    const [planType, setPlanType] = useState('eSIM');
    const [days, setDays] = useState('5');

    return (
        <div className="pt-8 pb-20 bg-white animate-in fade-in duration-500">
            <div className="max-w-6xl mx-auto px-6">
                <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8">
                    <span className="cursor-pointer hover:text-[#2E5BFF]" onClick={() => setView('home')}>Home</span>
                    <ChevronRight size={12} />
                    <span className="cursor-pointer hover:text-[#2E5BFF]">Planos Internacionais</span>
                    <ChevronRight size={12} />
                    <span className="text-[#1A2B6D]">Estados Unidos</span>
                </nav>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div className="lg:sticky lg:top-32">
                        <div className="relative aspect-[4/3] max-w-md mx-auto lg:mx-0 rounded-[32px] overflow-hidden shadow-xl border border-slate-50 group">
                            <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200" alt="Destino EUA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute top-4 left-4">
                                <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl shadow-md flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    <span className="text-[10px] font-black text-[#1A2B6D]">COBERTURA 5G</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E8FF] text-[#A64DFF] rounded-full text-[9px] font-black uppercase tracking-widest mb-3"><Zap size={12} fill="currentColor" /> Recomendado para Viagens Curtas</div>
                            <h1 className="text-3xl md:text-4xl font-black text-[#1A2B6D] mb-4 tracking-tight leading-tight">Plano Estados Unidos</h1>
                            <p className="text-slate-500 font-medium text-base leading-relaxed mb-6 max-w-lg">O melhor chip internacional para quem viaja para os Estados Unidos. Tenha internet ilimitada com tecnologia 5G em todos os estados americanos.</p>
                            <div className="flex items-baseline gap-2"><span className="text-slate-400 text-base font-bold">R$</span><span className="text-4xl font-black text-[#1A2B6D] tracking-tighter">259,90</span></div>
                        </div>
                        <div className="space-y-4 mb-6 p-6 bg-slate-50 rounded-[28px] border border-slate-100 shadow-sm">
                            <div><label className="block text-[10px] font-black text-[#1A2B6D] uppercase tracking-widest mb-2">Data de Ativação</label><div className="relative"><Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2E5BFF]" size={16} /><input type="date" className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 font-bold text-sm text-[#1A2B6D] outline-none" /></div></div>
                            <div className="grid grid-cols-2 gap-3">
                                <div><label className="block text-[10px] font-black text-[#1A2B6D] uppercase tracking-widest mb-2">Duração (Dias)</label><div className="relative"><select value={days} onChange={(e) => setDays(e.target.value)} className="w-full bg-white border border-slate-200 rounded-xl py-3 px-3 font-bold text-sm text-[#1A2B6D] outline-none appearance-none"><option value="5">5 Dias</option><option value="10">10 Dias</option><option value="15">15 Dias</option><option value="30">30 Dias</option></select><ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-300" /></div></div>
                                <div><label className="block text-[10px] font-black text-[#1A2B6D] uppercase tracking-widest mb-2">Tipo de Plano</label><div className="relative"><select value={planType} onChange={(e) => setPlanType(e.target.value)} className="w-full bg-white border border-slate-200 rounded-xl py-3 px-3 font-bold text-sm text-[#1A2B6D] outline-none appearance-none"><option value="eSIM">eSIM (Digital)</option><option value="Fisico">Chip Físico</option></select><ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-300" /></div></div>
                            </div>
                            <div><label className="block text-[10px] font-black text-[#1A2B6D] uppercase tracking-widest mb-2">Quantidade</label><div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-1.5 w-fit"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"><Minus size={14} /></button><span className="font-black text-base w-6 text-center">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"><Plus size={14} /></button></div></div>
                        </div>
                        <div className="mb-8"><button className="w-full max-w-sm bg-[#1A2B6D] hover:bg-[#2E5BFF] text-white py-3.5 rounded-2xl font-black text-sm shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95"><ShoppingCart size={18} /> ADICIONAR AO CARRINHO</button></div>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 py-6 border-y border-slate-50"><div className="flex items-center gap-2 text-[9px] font-black uppercase text-slate-400"><ShieldCheck size={12} className="text-green-500" /> Compra Segura</div><div className="flex items-center gap-2 text-[9px] font-black uppercase text-slate-400"><CreditCard size={12} className="text-[#2E5BFF]" /> Parcele em 12x</div><div className="flex items-center gap-2 text-[9px] font-black uppercase text-slate-400"><Zap size={12} className="text-[#A64DFF]" /> PIX -5%</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL ---

export default function App() {
    const [view, setView] = useState('home');
    const [activeCategory, setActiveCategory] = useState('eSIM');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(() => {
        // Injeção de estilos customizados para animações
        const style = document.createElement('style');
        style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar { display: none; }
      @keyframes floating {
        0% { transform: translateY(0px) rotate(1deg); }
        50% { transform: translateY(-15px) rotate(2deg); }
        100% { transform: translateY(0px) rotate(1deg); }
      }
      .animate-floating {
        animation: floating 4s ease-in-out infinite;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const nextTestimonial = () => {
        setTestimonialIndex((prev) => (prev + 1) % 4);
    };

    const prevTestimonial = () => {
        setTestimonialIndex((prev) => (prev - 1 + 4) % 4);
    };

    return (
        <div className="min-h-screen font-sans text-[#1A2B6D]" style={{ backgroundColor: '#F9F5FF' }}>

            {/* BARRA DE VANTAGENS */}
            <div className="bg-[#1A2B6D] text-white py-2.5 px-4 text-center text-[10px] md:text-xs font-bold tracking-wider relative z-[60]">
                <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 md:gap-12 overflow-x-auto whitespace-nowrap no-scrollbar">
                    <span className="flex items-center gap-2"><Zap size={14} className="text-[#A64DFF]" /> PIX COM 5% DE DESCONTO</span>
                    <span className="flex items-center gap-2"><CreditCard size={14} className="text-[#00D1FF]" /> PARCELE EM ATÉ 12X</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-green-400" /> SUPORTE 24H</span>
                </div>
            </div>

            {/* CABEÇALHO (BARRA DE MENU BRANCA) */}
            <nav className="sticky top-0 z-50 bg-white shadow-md py-0">
                <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
                    <LogoComponent setView={setView} />
                    <div className="hidden md:flex items-center gap-8 font-bold text-[#1A2B6D]">
                        <button className="hover:text-[#2E5BFF] transition-colors" onClick={() => { setActiveCategory('eSIM'); setView('home'); }}>Planos eSIM</button>
                        <button className="hover:text-[#2E5BFF] transition-colors" onClick={() => { setActiveCategory('Chip Físico'); setView('home'); }}>Planos Chip Físico</button>
                        <a href="#" className="hover:text-[#2E5BFF] transition-colors">Compatibilidade eSIM</a>
                        <a href="#" className="hover:text-[#2E5BFF] transition-colors">Blog</a>
                        <div className="h-6 w-px bg-slate-200"></div>
                        <button className="relative p-2 hover:bg-slate-100 rounded-full text-[#1A2B6D]"><ShoppingCart size={22} /><span className="absolute top-0 right-0 w-4 h-4 bg-[#A64DFF] text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span></button>
                    </div>
                    <button className="md:hidden text-[#1A2B6D]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
                        <button className="text-left font-bold text-[#1A2B6D]" onClick={() => { setActiveCategory('eSIM'); setMobileMenuOpen(false); setView('home'); }}>Planos eSIM</button>
                        <button className="text-left font-bold text-[#1A2B6D]" onClick={() => { setActiveCategory('Chip Físico'); setMobileMenuOpen(false); setView('home'); }}>Planos Chip Físico</button>
                        <a href="#" className="font-bold text-[#1A2B6D]">Compatibilidade eSIM</a>
                        <a href="#" className="font-bold text-[#1A2B6D]">Blog</a>
                    </div>
                )}
            </nav>

            {view === 'home' ? (
                <>
                    {/* BANNER PRINCIPAL COM NOVA IMAGEM E SEM BOTÕES */}
                    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center py-20 overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/airplane background.jpg"
                                alt="Airplane Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4b209c] via-[#5A2B99]/80 to-[#6E3BB2]/20 backdrop-blur-[2px]"></div>
                        </div>

                        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 text-white w-full">
                            <div className="md:col-span-7 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 text-xs font-bold uppercase tracking-widest">
                                    <Check size={14} className="text-[#00D1FF]" /> Viaje Conectado
                                </div>

                                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter">
                                    Sua internet <br /> global <br />
                                    <span className="text-[#93C5FD]">sem fronteiras.</span>
                                </h1>

                                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl font-medium leading-relaxed">
                                    Chegue ao seu destino conectado! Internet 5G ilimitada nos EUA, Europa, Ásia e em mais 200 destinos.
                                </p>
                            </div>

                            {/* CARD DE STATUS */}
                            <div className="md:col-span-5 flex justify-center md:justify-end">
                                <div className="relative w-full max-w-[340px] aspect-square bg-[#A66DFF]/20 backdrop-blur-2xl border border-white/20 rounded-[40px] p-10 flex flex-col justify-between shadow-2xl animate-floating">
                                    <div className="flex justify-between items-start">
                                        <Wifi size={32} className="text-white/80" strokeWidth={1.5} />
                                        <div className="flex items-center gap-2 px-3 py-1 bg-[#4ADE80]/20 text-[#4ADE80] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#4ADE80]/30 backdrop-blur-md">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></div> ONLINE
                                        </div>
                                    </div>

                                    <div className="py-8">
                                        <div className="text-7xl font-black tracking-tighter mb-1">5G</div>
                                        <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 text-[#00D1FF]">Ultra Velocidade</div>
                                    </div>

                                    <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                                        <div className="w-14 h-10 bg-gradient-to-br from-[#E2B04E] via-[#FFD700] to-[#B8860B] rounded-lg shadow-lg relative overflow-hidden flex-shrink-0 border border-black/10">
                                            <div className="absolute inset-1.5 border border-black/10 rounded-sm opacity-40">
                                                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/40"></div>
                                                <div className="absolute left-0 right-0 top-1/2 h-px bg-black/40"></div>
                                            </div>
                                            <div className="absolute -top-10 -left-10 w-20 h-40 bg-white/20 rotate-45 pointer-events-none"></div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold uppercase opacity-60 tracking-widest mb-0.5">Status do SIM</div>
                                            <div className="text-sm font-black uppercase tracking-tight text-white">Pronto para uso</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* DESTINOS */}
                    <section className="py-24 bg-white relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="flex flex-col items-center mb-16 gap-6">
                                <h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] tracking-tighter text-center">Escolha o seu Destino</h2>
                                <div className="flex bg-slate-100 p-2 rounded-[24px] border border-slate-200 shadow-inner">
                                    <button onClick={() => setActiveCategory('eSIM')} className={`px-8 py-3.5 rounded-[18px] font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${activeCategory === 'eSIM' ? 'bg-[#2E5BFF] text-white shadow-lg shadow-[#2E5BFF]/30' : 'text-slate-500 hover:text-slate-800'}`}><QrCode size={16} /> eSIM</button>
                                    <button onClick={() => setActiveCategory('Chip Físico')} className={`px-8 py-3.5 rounded-[18px] font-black text-xs uppercase transition-all flex items-center gap-2 ${activeCategory === 'Chip Físico' ? 'bg-[#2E5BFF] text-white shadow-lg shadow-[#2E5BFF]/30' : 'text-slate-500 hover:text-slate-800'}`}><Smartphone size={16} /> Chip Físico</button>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {allProducts.filter(p => p.category === activeCategory).map((p) => {
                                    const isPromo = p.promo === 'Mais vendido';
                                    return (
                                        <div key={p.id} onClick={() => { setView('product'); window.scrollTo(0, 0); }} className="group bg-white rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 relative flex flex-col cursor-pointer border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(46,91,255,0.12)]">
                                            <div className="flex justify-between items-start mb-6"><DestinationIcon type={p.type} />{p.promo && <div className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm ${isPromo ? 'bg-[#00D1FF]/10 text-[#00D1FF]' : 'bg-[#A64DFF]/10 text-[#A64DFF]'}`}>{p.promo}</div>}</div>
                                            <div className="mb-6"><h3 className="text-2xl font-black text-[#1A2B6D] mb-2 leading-tight">{p.country}</h3><p className="text-slate-500 font-medium flex items-baseline gap-1">a partir de <span className="text-[#1A2B6D] font-black text-xl">R${p.price}</span></p></div>
                                            <ul className="space-y-4 mb-10 flex-grow">{p.features.map((f, i) => (<li key={i} className="flex items-start gap-3"><Check size={18} className="text-[#00D1FF]" /><span className="text-slate-600 text-sm font-medium">{f}</span></li>))}</ul>
                                            <button className="w-full py-4 rounded-xl font-black text-xs uppercase border-2 border-[#1A2B6D] text-[#1A2B6D] hover:bg-[#1A2B6D] hover:text-white transition-all">Ver Detalhes</button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* BENEFÍCIOS */}
                    <section className="py-24 bg-[#0B1221] text-white text-center">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-20">
                                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Por que escolher a PlusSim?</h2>
                                <p className="text-slate-400 text-lg font-medium">
                                    Não somos apenas um plano de internet. Somos o seu parceiro de viagem!
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">{benefits.map((b, i) => (<div key={i} className="bg-[#151F32] p-10 rounded-[40px] border border-white/5 transition-all group hover:border-[#00D1FF]/30 hover:bg-[#1a263a]"><div className="mb-6">{b.icon}</div><h4 className="text-2xl font-black mb-4 tracking-tight">{b.title}</h4><p className="text-slate-400 font-medium leading-relaxed mb-8">{b.desc}</p><div className="inline-block px-4 py-1.5 bg-[#00D1FF]/10 text-[#00D1FF] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#00D1FF]/20">{b.badge}</div></div>))}</div>
                        </div>
                    </section>

                    {/* DEPOIMENTOS */}
                    <section className="py-24 bg-white text-center relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-6 relative">
                            <div className="mb-16 flex flex-col items-center gap-6">
                                <div className="text-center w-full"><h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] mb-4 tracking-tighter">O que nossos clientes dizem</h2><p className="text-slate-500 text-lg font-medium opacity-70">Mais de 8 anos conectando brasileiros ao redor do mundo</p></div>
                            </div>
                            <div className="relative">
                                <button onClick={prevTestimonial} className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 lg:-left-12 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1A2B6D] hover:bg-[#1A2B6D] hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-slate-100 active:scale-90"><ChevronLeft size={24} strokeWidth={3} /></button>
                                <button onClick={nextTestimonial} className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 lg:-right-12 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1A2B6D] hover:bg-[#1A2B6D] hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-slate-100 active:scale-90"><ChevronRight size={24} strokeWidth={3} /></button>
                                <div className="relative overflow-hidden px-1 py-4">
                                <div className="flex transition-transform duration-500 ease-out gap-6" style={{ transform: `translateX(-${testimonialIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3))}%)` }}>
                                    {testimonials.map((t) => (
                                        <div key={t.id} className="min-w-full md:min-w-[calc(33.333%-16px)] bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col text-left h-full">
                                            <div className="flex text-yellow-400 gap-0.5 mb-6"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                                            <p className="text-[#1A2B6D] font-medium leading-relaxed mb-8 flex-grow italic text-sm md:text-base">"{t.text}"</p>
                                            <div><h5 className="font-black text-[#1A2B6D] text-base mb-2">{t.name}</h5><div className="inline-block px-3 py-1 bg-[#F3E8FF] text-[#A64DFF] rounded-full text-[10px] font-black uppercase tracking-widest">{t.location}</div></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                            <div className="mt-10 flex justify-center gap-2">
                                {[0, 1, 2, 3].map((dot) => (<button key={dot} onClick={() => setTestimonialIndex(dot)} className={`h-2 rounded-full transition-all duration-300 ${testimonialIndex === dot ? 'w-8 bg-[#A64DFF]' : 'w-2 bg-slate-200 hover:bg-slate-300'}`} />))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-24 bg-[#F9F5FF] text-center">
                        <div className="max-w-4xl mx-auto px-6">
                            <div className="mb-12"><h2 className="text-4xl font-black text-[#1A2B6D] mb-4 tracking-tighter text-center">Dúvidas Frequentes</h2><p className="text-slate-500 font-medium">Tudo o que você precisa saber sobre os planos internacionais da Plus Sim</p></div>
                            <div className="grid gap-3 text-left">
                                {faqItems.map((f, i) => (
                                    <div key={i} className="bg-white p-5 rounded-2xl border border-[#E0D4FF] hover:border-[#A64DFF] transition-all cursor-pointer group shadow-sm">
                                        <div className="flex justify-between items-center"><span className="font-bold text-[#1A2B6D] text-base md:text-lg leading-tight">{f.q}</span><div className="w-6 h-6 rounded-full bg-[#F3E8FF] text-[#A64DFF] group-hover:bg-[#A64DFF] group-hover:text-white transition-all flex-shrink-0 flex items-center justify-center"><ChevronRight size={16} /></div></div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16 p-10 bg-white rounded-[40px] border border-[#E0D4FF] shadow-xl flex flex-col items-center gap-6">
                                <h3 className="text-2xl font-black text-[#1A2B6D]">Ainda com dúvidas?</h3>
                                <p className="text-slate-500 font-medium -mt-2 text-center">Nossa equipe está pronta para te ajudar.</p>
                                <a href="#" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-4 rounded-2xl font-black text-lg flex items-center gap-3 shadow-lg transition-all hover:scale-105 active:scale-95"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> Fale Conosco</a>
                            </div>
                        </div>
                    </section>

                    {/* SOBRE NÓS */}
                    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] mb-8 tracking-tighter">Sobre nós</h2>
                                    <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-medium">
                                        <p className="text-[#1A2B6D] font-bold text-xl leading-relaxed">Viajar é descobrir o novo; e sabemos que estar conectado traz a segurança necessária para explorar o mundo com liberdade!</p>
                                        <p>A <span className="text-[#A64DFF] font-black">Plus Sim</span> está há mais de 8 anos acompanhando e conectando pessoas ao redor do mundo, em mais de 200 destinos, unindo a melhor cobertura de internet a um suporte que fala a sua língua.</p>
                                        <p>Não entregamos apenas um chip ou um eSIM; entregamos a tranquilidade de saber que desde o primeiro contato e até o fim da sua viagem, a Plus Sim estará ao seu lado.</p>
                                    </div>
                                    <div className="mt-12 bg-slate-50 p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-sm">
                                        {/* GRID DE ESTATÍSTICAS AJUSTADO COM whitespace-nowrap E flex-row */}
                                        <div className="grid grid-cols-3 items-center">
                                            <div className="flex items-center gap-2 md:gap-3 text-left px-2 md:px-4">
                                                <div className="w-10 h-10 bg-[#F3E8FF] rounded-xl flex items-center justify-center text-[#A64DFF] shadow-sm flex-shrink-0"><Award size={20} /></div>
                                                <div>
                                                    <div className="text-sm md:text-lg font-black text-[#1A2B6D] leading-tight whitespace-nowrap">8+ Anos</div>
                                                    <div className="text-[8px] md:text-[10px] font-bold uppercase text-slate-400 tracking-wider">Existência</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 md:gap-3 text-left px-2 md:px-4 border-l border-slate-200">
                                                <div className="w-10 h-10 bg-[#DCFCE7] rounded-xl flex items-center justify-center text-green-600 shadow-sm flex-shrink-0"><Users size={20} /></div>
                                                <div>
                                                    <div className="text-sm md:text-lg font-black text-[#1A2B6D] leading-tight whitespace-nowrap">100.000+</div>
                                                    <div className="text-[8px] md:text-[10px] font-bold uppercase text-slate-400 tracking-wider">Clientes</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 md:gap-3 text-left px-2 md:px-4 border-l border-slate-200">
                                                <div className="w-10 h-10 bg-[#E0F2FE] rounded-xl flex items-center justify-center text-[#2E5BFF] shadow-sm flex-shrink-0"><Globe size={20} /></div>
                                                <div>
                                                    <div className="text-sm md:text-lg font-black text-[#1A2B6D] leading-tight whitespace-nowrap">200+</div>
                                                    <div className="text-[8px] md:text-[10px] font-bold uppercase text-slate-400 tracking-wider">Destinos</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-gradient-to-br from-[#00D1FF] to-[#A64DFF] rounded-[50px] blur-2xl opacity-10"></div>
                                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                                            <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1200" alt="Viajantes felizes" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B6D]/60 to-transparent"></div>
                                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                                <div className="flex items-center gap-2 mb-2"><CheckCircle size={20} className="text-[#00D1FF]" /><span className="text-xs font-black uppercase tracking-[0.2em]">Nossa Missão</span></div>
                                                <div className="text-xl font-black text-white">Conectar você à liberdade em qualquer lugar do mundo.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <ProductPage setView={setView} />
            )}

            {/* RODAPÉ */}
            <footer className="bg-[#1A2B6D] text-slate-400 py-16 mt-auto">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="mb-6"><LogoComponent setView={setView} /></div>
                        <p className="text-sm leading-relaxed font-medium mb-6 max-w-xs">Conectividade em alta velocidade para viajantes brasileiros. Sem fronteiras, sem complicações.</p>
                        <div className="flex gap-4"><a href="#" className="hover:text-white transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a><a href="#" className="hover:text-white transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a><a href="#" className="hover:text-white transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></a></div>
                    </div>
                    <div><h5 className="text-white font-black mb-6 uppercase text-lg tracking-widest">Links</h5><ul className="space-y-3 text-sm font-bold flex flex-col items-center md:items-start"><li><button onClick={() => { setActiveCategory('eSIM'); setView('home'); window.scrollTo(0, 0); }} className="hover:text-[#00D1FF] transition-colors">Planos eSIM</button></li><li><button onClick={() => { setActiveCategory('Chip Físico'); setView('home'); window.scrollTo(0, 0); }} className="hover:text-[#00D1FF] transition-colors">Planos Chip Físico</button></li><li><a href="#" className="hover:text-[#00D1FF]">Blog</a></li><li><a href="#" className="hover:text-[#00D1FF]">Seja Nosso Parceiro</a></li><li><a href="#" className="hover:text-[#00D1FF]">Termos e Condições</a></li><li><a href="#" className="hover:text-[#00D1FF]">Privacidade</a></li></ul></div>
                    <div><h5 className="text-white font-black mb-6 uppercase text-lg tracking-widest">Contato</h5><ul className="space-y-4 text-sm font-bold"><li className="flex items-center justify-center md:justify-start gap-3"><MessageCircle size={18} className="text-[#00D1FF]" /> <span>+1(321)310-4764</span></li><li className="flex items-center justify-center md:justify-start gap-3"><Phone size={18} className="text-[#00D1FF] font-bold" /> <span>+55(11)4680-6732</span></li><li className="flex items-center justify-center md:justify-start gap-3"><Mail size={18} className="text-[#00D1FF]" /> <span>info@plussim.com</span></li><li className="flex items-start justify-center md:justify-start gap-3 leading-tight"><MapPin size={18} className="text-[#00D1FF] flex-shrink-0" /> <span className="text-white/70 text-xs text-left">4700 Millenia Blvd, Suite 175<br/>Orlando/FL - 32839</span></li></ul></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 text-center text-[9px] uppercase tracking-[0.3em] font-black opacity-30">© 2024 PLUS SIM - TECNOLOGIA ESIM GLOBAL</div>
            </footer>
        </div>
    );
}