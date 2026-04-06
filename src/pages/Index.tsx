import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const CENTURIES = ['XVII', 'XVIII', 'XIX'] as const;
type Century = typeof CENTURIES[number];

interface Garment {
  id: number;
  century: Century;
  title: string;
  subtitle: string;
  year: string;
  fabric: string;
  origin: string;
  description: string;
  color: string;
  accent: string;
  emoji: string;
  image: string;
}

const GARMENTS: Garment[] = [
  {
    id: 1,
    century: 'XVII',
    title: 'Придворное платье',
    subtitle: 'Эпоха барокко',
    year: '1650-е',
    fabric: 'Шёлк, золотное шитьё',
    origin: 'Франция, Версаль',
    description: 'Величественное парадное платье с широкими рукавами-буф и богатым кружевным воротником фонтанж. Золотое шитьё создаёт замысловатые орнаменты, отражающие свет дворцовых канделябров.',
    color: '#2d1b0e',
    accent: '#8b3a0f',
    emoji: '👗',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/44342012-c860-4c06-9246-63a429ac0be5.png',
  },
  {
    id: 2,
    century: 'XVII',
    title: 'Камзол дворянина',
    subtitle: 'Мужская мода барокко',
    year: '1670-е',
    fabric: 'Бархат, серебряный галун',
    origin: 'Испания',
    description: 'Роскошный бархатный камзол с серебряными пуговицами и кружевными манжетами. Богатая вышивка на груди символизирует высокое положение владельца при дворе.',
    color: '#1a1a2e',
    accent: '#4a3060',
    emoji: '🎩',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/1b896e68-44ee-4e2b-a2b1-1495a2b784d8.png',
  },
  {
    id: 3,
    century: 'XVII',
    title: 'Венецианское платье',
    subtitle: 'Карнавальный наряд',
    year: '1680-е',
    fabric: 'Парча, муарный шёлк',
    origin: 'Венеция, Италия',
    description: 'Праздничный наряд венецианской знати с характерным декольте и многослойной юбкой. Переливающаяся парча создаёт волшебный эффект в свете факелов карнавала.',
    color: '#1e0a0a',
    accent: '#8b1a1a',
    emoji: '🎭',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/b7d234ae-8616-4e3d-8327-8b4514a967a5.png',
  },
  {
    id: 4,
    century: 'XVIII',
    title: 'Платье à la française',
    subtitle: 'Рококо при дворе',
    year: '1760-е',
    fabric: 'Лионский шёлк, кружево',
    origin: 'Франция, Лион',
    description: 'Изысканное платье в стиле рококо с характерными складками Ватто на спине. Пастельный шёлк украшен цветочными гирляндами — воплощение галантного века Людовика XV.',
    color: '#1a0e1a',
    accent: '#7a3a6a',
    emoji: '🌸',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/06575ddd-f19f-4052-ac17-06a5db413a4b.png',
  },
  {
    id: 5,
    century: 'XVIII',
    title: 'Роброн с фижмами',
    subtitle: 'Придворная мода',
    year: '1740-е',
    fabric: 'Тафта, китовый ус',
    origin: 'Германия, Дрезден',
    description: 'Торжественный роброн на широких фижмах — каркасе из китового уса. Боковая ширина платья достигала полутора метров, делая проход в дверях настоящим искусством.',
    color: '#0e1a0e',
    accent: '#2a6a3a',
    emoji: '🍃',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/848ea8cb-61c9-4c36-a2cb-95c8f74cb010.png',
  },
  {
    id: 6,
    century: 'XVIII',
    title: 'Сюртук сановника',
    subtitle: 'Мужская придворная мода',
    year: '1780-е',
    fabric: 'Шёлковый бархат, золото',
    origin: 'Россия, Санкт-Петербург',
    description: 'Парадный сюртук российского сановника екатерининской эпохи. Расшит золотыми нитями по воротнику и обшлагам, украшен бриллиантовыми пуговицами.',
    color: '#0a100a',
    accent: '#1a4a2a',
    emoji: '⚜️',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/86b2f77a-94db-444c-a844-b10829328e17.png',
  },
  {
    id: 7,
    century: 'XIX',
    title: 'Бальное платье Empire',
    subtitle: 'Ампир и Первая империя',
    year: '1808-е',
    fabric: 'Муслин, тюль, жемчуг',
    origin: 'Франция, Париж',
    description: 'Лёгкое платье эпохи ампир с высокой талией и отделкой из антикизирующих мотивов. Белый муслин украшен вышивкой золотой нитью — дань античным образцам.',
    color: '#12120a',
    accent: '#5a5a1a',
    emoji: '🏛️',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/31ff0570-f97d-4145-8165-679a220c479f.png',
  },
  {
    id: 8,
    century: 'XIX',
    title: 'Викторианское платье',
    subtitle: 'Эпоха кринолина',
    year: '1860-е',
    fabric: 'Моаре, стальной кринолин',
    origin: 'Англия, Лондон',
    description: 'Платье середины викторианской эпохи на стальном кринолине. Пышная юбка в форме купола украшена несколькими рядами воланов из роскошного зелёного муара.',
    color: '#081a0a',
    accent: '#1a5a1a',
    emoji: '🌿',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/94d2e294-fc7c-45dc-b1d9-954aaba6daba.png',
  },
  {
    id: 9,
    century: 'XIX',
    title: 'Фрак джентльмена',
    subtitle: 'Мужская мода эпохи романтизма',
    year: '1840-е',
    fabric: 'Чёрное сукно, шёлковые лацканы',
    origin: 'Англия, Лондон',
    description: 'Безупречный чёрный фрак — визитная карточка английского денди эпохи романтизма. Приталенный силуэт с длинными фалдами, шёлковые лацканы и белоснежная рубашка с галстуком-бабочкой стали каноном мужской элегантности XIX века.',
    color: '#0a0a10',
    accent: '#2a2a40',
    emoji: '🎩',
    image: 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/20ca60dc-cbba-468a-be6a-8dffc6443340.png',
  },
];

const CENTURY_LABELS: Record<Century, string> = {
  'XVII': 'XVII век',
  'XVIII': 'XVIII век',
  'XIX': 'XIX век',
};

const CENTURY_PERIODS: Record<Century, string> = {
  'XVII': 'Эпоха Барокко',
  'XVIII': 'Эпоха Рококо',
  'XIX': 'Викторианская эпоха',
};

const CENTURY_DESC: Record<Century, string> = {
  'XVII': 'Торжество роскоши и власти. Мода барокко — это избыточность и великолепие, золотые нити и тяжёлые парчовые ткани, символизирующие могущество монархий.',
  'XVIII': 'Галантный век изящества. Рококо принесло пастельные тона, кружева и сложные причёски, превратив моду в высокое искусство французского двора.',
  'XIX': 'Эпоха трансформаций. От ампира к кринолину и турнюру — каждое десятилетие открывало новый силуэт, отражая бурные изменения западного общества.',
};

const OrnamentDivider = () => (
  <div className="ornament-line my-2">
    <span className="text-gold text-lg" style={{ letterSpacing: '0.5em' }}>✦ ✦ ✦</span>
  </div>
);

const CornerOrnaments = () => (
  <>
    <div className="corner-ornament corner-ornament-tl" />
    <div className="corner-ornament corner-ornament-tr" />
    <div className="corner-ornament corner-ornament-bl" />
    <div className="corner-ornament corner-ornament-br" />
  </>
);

interface LightboxProps {
  garment: Garment;
  onClose: () => void;
}

const Lightbox = ({ garment, onClose }: LightboxProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ background: 'rgba(5,3,2,0.92)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className="relative card-vintage max-w-2xl w-full animate-fade-in"
        onClick={e => e.stopPropagation()}
        style={{
          border: '1px solid rgba(201,168,76,0.4)',
          boxShadow: '0 0 80px rgba(0,0,0,0.8), 0 0 40px rgba(201,168,76,0.08)',
        }}
      >
        <CornerOrnaments />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gold opacity-60 hover:opacity-100 transition-opacity z-10"
          style={{ color: 'var(--gold)' }}
        >
          <Icon name="X" size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          <div
            className="w-full md:w-64 h-72 md:h-auto flex-shrink-0 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${garment.color} 0%, ${garment.accent}55 100%)` }}
          >
            <img
              src={garment.image}
              alt={garment.title}
              className="w-full h-full object-cover object-top"
              style={{ filter: 'sepia(15%) brightness(0.9)' }}
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const fb = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement;
                if (fb) fb.style.display = 'flex';
              }}
            />
            <div
              className="w-full h-full items-center justify-center text-8xl"
              style={{ display: 'none', background: `linear-gradient(135deg, ${garment.color} 0%, ${garment.accent}55 100%)` }}
            >
              {garment.emoji}
            </div>
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
            }} />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="font-display text-xs tracking-widest uppercase" style={{ color: 'var(--gold)', opacity: 0.85 }}>
                {garment.origin}
              </span>
            </div>
          </div>

          <div className="p-8 flex flex-col gap-4">
            <div>
              <div className="font-display text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--gold)', opacity: 0.7 }}>
                {garment.century} век · {garment.year}
              </div>
              <h2 className="font-display text-2xl leading-tight" style={{ color: 'var(--gold-light)' }}>{garment.title}</h2>
              <p className="font-fell italic text-sm mt-1" style={{ color: 'var(--parchment)', opacity: 0.6 }}>{garment.subtitle}</p>
            </div>

            <OrnamentDivider />

            <p className="font-cormorant text-base leading-relaxed" style={{ color: 'var(--parchment)', opacity: 0.85 }}>
              {garment.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <div style={{ borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: '0.75rem' }}>
                <div className="font-display text-xs tracking-wider uppercase" style={{ color: 'var(--gold)', opacity: 0.5 }}>Ткань</div>
                <div className="font-cormorant text-sm" style={{ color: 'var(--parchment)', opacity: 0.8 }}>{garment.fabric}</div>
              </div>
              <div style={{ borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: '0.75rem' }}>
                <div className="font-display text-xs tracking-wider uppercase" style={{ color: 'var(--gold)', opacity: 0.5 }}>Происхождение</div>
                <div className="font-cormorant text-sm" style={{ color: 'var(--parchment)', opacity: 0.8 }}>{garment.origin}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GarmentCardProps {
  garment: Garment;
  onClick: () => void;
  index: number;
}

const GarmentCard = ({ garment, onClick, index }: GarmentCardProps) => (
  <div
    className="gallery-item card-vintage cursor-pointer group"
    onClick={onClick}
    style={{
      animationDelay: `${index * 0.1}s`,
      border: '1px solid rgba(201,168,76,0.15)',
    }}
  >
    <CornerOrnaments />
    <div
      className="relative h-64 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${garment.color} 0%, ${garment.accent}66 100%)` }}
    >
      <img
        src={garment.image}
        alt={garment.title}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        style={{ filter: 'sepia(20%) brightness(0.85) contrast(1.05)' }}
        onError={e => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
          const fb = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement;
          if (fb) fb.style.display = 'flex';
        }}
      />
      <div
        className="w-full h-full absolute inset-0 items-center justify-center text-7xl"
        style={{ display: 'none', background: `linear-gradient(135deg, ${garment.color} 0%, ${garment.accent}66 100%)` }}
      >
        {garment.emoji}
      </div>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)'
      }} />
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(10,6,3,0.6)' }}
      >
        <div className="flex items-center gap-2 font-display tracking-widest text-xs uppercase" style={{ color: 'var(--gold)' }}>
          <Icon name="ZoomIn" size={16} />
          Рассмотреть
        </div>
      </div>
    </div>

    <div className="p-5">
      <div className="font-display text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--gold)', opacity: 0.5 }}>
        {garment.year} · {garment.origin}
      </div>
      <h3 className="font-display text-lg leading-tight" style={{ color: 'var(--gold-light)' }}>{garment.title}</h3>
      <p className="font-fell italic text-sm mt-1" style={{ color: 'var(--parchment)', opacity: 0.5 }}>
        {garment.subtitle}
      </p>
      <div
        className="mt-4 pt-4 text-xs font-cormorant"
        style={{ borderTop: '1px solid rgba(201,168,76,0.15)', color: 'var(--parchment)', opacity: 0.4 }}
      >
        {garment.fabric}
      </div>
    </div>
  </div>
);

export default function Index() {
  const [activeSection, setActiveSection] = useState<'home' | Century>('home');
  const [selectedGarment, setSelectedGarment] = useState<Garment | null>(null);

  const filtered = activeSection === 'home'
    ? GARMENTS
    : GARMENTS.filter(g => g.century === activeSection);

  return (
    <div className="min-h-screen font-cormorant" style={{ color: 'var(--parchment)' }}>

      {/* Header */}
      <header
        className="sticky top-0 z-40"
        style={{
          background: 'rgba(12,8,4,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl" style={{ color: 'var(--gold)' }}>⚜</span>
            <div>
              <div className="font-display text-base tracking-widest uppercase leading-none" style={{ color: 'var(--gold-light)' }}>
                Музей Моды
              </div>
              <div className="font-fell italic text-xs mt-0.5" style={{ opacity: 0.4 }}>XVII–XIX вв.</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {(['home', ...CENTURIES] as const).map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`nav-link font-display text-xs tracking-widest uppercase transition-colors ${activeSection === section ? 'active' : ''}`}
                style={{ color: activeSection === section ? 'var(--gold)' : 'var(--parchment)', opacity: activeSection === section ? 1 : 0.5 }}
              >
                {section === 'home' ? 'Все эпохи' : `${section} Век`}
              </button>
            ))}
          </nav>

          <div className="flex md:hidden items-center gap-3">
            {(['home', ...CENTURIES] as const).map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className="font-display text-xs tracking-wider uppercase transition-colors"
                style={{ color: activeSection === section ? 'var(--gold)' : 'var(--parchment)', opacity: activeSection === section ? 1 : 0.4 }}
              >
                {section === 'home' ? 'Все' : section}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-36"
        style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}
      >
        {/* Historical background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/59ba6053-5c23-4401-8fd3-592be252e408.png"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ transform: 'scale(1.03)' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(8,5,2,0.45) 0%, rgba(8,5,2,0.65) 55%, rgba(8,5,2,0.97) 100%)',
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(8,5,2,0.4) 100%)',
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <div className="ornament-line mb-8">
            <span className="font-display text-xs tracking-widest uppercase" style={{ color: 'var(--gold)', opacity: 0.6 }}>
              Коллекция исторических нарядов
            </span>
          </div>

          <h1
            className="font-display leading-tight mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: 'var(--gold-light)', textShadow: '0 2px 40px rgba(0,0,0,0.8)' }}
          >
            Мода
            <br />
            <span className="font-fell italic" style={{ color: 'var(--parchment)', opacity: 0.85, fontSize: '0.5em' }}>
              XVII–XIX веков
            </span>
          </h1>

          <div className="ornament-line mb-8" />

          <p
            className="font-cormorant text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ opacity: 0.65, color: 'var(--parchment)' }}
          >
            Путешествие сквозь три столетия великолепия — от барокко до викторианской эпохи.
            Редкие наряды, ткани и орнаменты, хранящие дыхание своего времени.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {CENTURIES.map(c => (
              <button
                key={c}
                onClick={() => setActiveSection(c)}
                className="px-8 py-3 font-display text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold/10"
                style={{
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: 'var(--gold)',
                  background: 'rgba(201,168,76,0.05)',
                }}
              >
                {c} Век
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Century Banner */}
      {activeSection !== 'home' && (
        <section className="max-w-6xl mx-auto px-6 pt-8 pb-0 animate-fade-in">
          <div
            className="card-vintage p-8 text-center relative"
            style={{ border: '1px solid rgba(201,168,76,0.2)' }}
          >
            <CornerOrnaments />
            <div className="font-fell italic text-sm mb-2" style={{ color: 'var(--gold)', opacity: 0.6 }}>
              {CENTURY_PERIODS[activeSection as Century]}
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: 'var(--gold-light)' }}>
              {CENTURY_LABELS[activeSection as Century]}
            </h2>
            <OrnamentDivider />
            <p className="font-cormorant text-lg max-w-2xl mx-auto mt-4" style={{ opacity: 0.7, color: 'var(--parchment)' }}>
              {CENTURY_DESC[activeSection as Century]}
            </p>
          </div>
        </section>
      )}

      {/* Gallery */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {activeSection === 'home' ? (
          CENTURIES.map((century) => (
            <section key={century} className="mb-20 relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 -mx-2 rounded-lg overflow-hidden pointer-events-none">
                <img
                  src={century === 'XIX'
                    ? 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/20ca60dc-cbba-468a-be6a-8dffc6443340.png'
                    : 'https://cdn.poehali.dev/projects/067883e8-1fda-446b-875d-9c9a19b06c2c/bucket/14c45784-2710-45e4-a9b5-890ff4d07d5c.png'}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" style={{ background: century === 'XIX' ? 'rgba(5,3,1,0.88)' : 'rgba(8,5,2,0.82)' }} />
              </div>
              <div className="relative flex items-center gap-6 mb-10 pt-6 px-4">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--gold-light)' }}>{century} Век</h2>
                  <p className="font-fell italic text-sm mt-1" style={{ opacity: 0.5 }}>{CENTURY_PERIODS[century]}</p>
                </div>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(201,168,76,0.4), transparent)' }} />
                <button
                  onClick={() => setActiveSection(century)}
                  className="font-display text-xs tracking-widest uppercase flex items-center gap-2 transition-opacity hover:opacity-100"
                  style={{ color: 'var(--gold)', opacity: 0.6 }}
                >
                  Все наряды <Icon name="ArrowRight" size={14} />
                </button>
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-6">
                {GARMENTS.filter(g => g.century === century).map((garment, i) => (
                  <GarmentCard
                    key={garment.id}
                    garment={garment}
                    onClick={() => setSelectedGarment(garment)}
                    index={i}
                  />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filtered.map((garment, i) => (
              <GarmentCard
                key={garment.id}
                garment={garment}
                onClick={() => setSelectedGarment(garment)}
                index={i}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-8 py-12" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="ornament-line mb-6" />
          <span className="text-3xl" style={{ color: 'var(--gold)' }}>⚜</span>
          <p className="font-fell italic mt-4 text-sm" style={{ opacity: 0.3 }}>
            Музей Исторической Моды · XVII–XIX вв.
          </p>
          <p className="font-cormorant text-xs mt-2" style={{ opacity: 0.2 }}>
            Коллекция нарядов и тканей прошедших эпох
          </p>
        </div>
      </footer>

      {selectedGarment && (
        <Lightbox garment={selectedGarment} onClose={() => setSelectedGarment(null)} />
      )}
    </div>
  );
}