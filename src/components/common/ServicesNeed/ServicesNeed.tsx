import Torneira2 from "../../../assets/images/Banner/Torneira-2.png";
import Alicate from "../../../assets/images/Banner/Alicate.png";
import Chaves from "../../../assets/images/Banner/chaves-cruzadas.png";
import Casinha from "../../../assets/images/Banner/casinha.png";

type ServiceCard = {
  image: string;
  alt: string;
  title: string;
  titleColor: string;
  buttonBg: string;
  buttonHover: string;
  bullets: string[];
  bulletColor: string;
};

const whatsappNumber = "+5518981608512";
const whatsappMessage = "Olá! Gostaria de solicitar um orçamento.";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

const cards: ServiceCard[] = [
  {
    image: Torneira2,
    alt: "Orçamento Caça Vazamento",
    title: "Caça Vazamento",
    titleColor: "text-[#0e3e61]",
    buttonBg: "bg-[#0e3e61]",
    buttonHover: "hover:bg-[#0e3e61]/90",
    bulletColor: "text-[#090033]",
    bullets: [
      "Orçamento descontado no serviço",
      "Agende no melhor dia e horário",
      "Profissionalismo e segurança",
    ],
  },
  {
    image: Alicate,
    alt: "Orçamento Hidráulica",
    title: "Hidráulica",
    titleColor: "text-[#2ab6c5]",
    buttonBg: "bg-[#2ab6c5]",
    buttonHover: "hover:bg-[#2ab6c5]/90",
    bulletColor: "text-[#2ab6c5]",
    bullets: [
      "Orçamento descontado no serviço",
      "Agende no melhor dia e horário",
      "Profissionalismo e segurança",
    ],
  },
  {
    image: Chaves,
    alt: "Visita Técnica",
    title: "Visita Técnica",
    titleColor: "text-[#0e3e61]",
    buttonBg: "bg-[#0e3e61]",
    buttonHover: "hover:bg-[#0e3e61]/90",
    bulletColor: "text-[#090033]",
    bullets: [
      "Diagnóstico técnico no local",
      "Avaliação completa do imóvel",
      "Levantamento detalhado",
    ],
  },
  {
    image: Casinha,
    alt: "Reparos Residenciais",
    title: "Reparos Residenciais",
    titleColor: "text-[#2ab6c5]",
    buttonBg: "bg-[#2ab6c5]",
    buttonHover: "hover:bg-[#2ab6c5]/90",
    bulletColor: "text-[#2ab6c5]",
    bullets: [
      "Pias, registros e válvulas",
      "Atendimento residencial e predial",
      "Equipe certificada",
    ],
  },
];

const CheckIcon = ({ color }: { color: string }) => (
  <svg
    className={`w-3 h-3 flex-shrink-0 ${color}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ServiceSection() {
  return (
    <div className="w-full pt-8 pb-8 md:pt-[34px] md:pb-7 bg-gradient-to-r from-[#0e3e61] to-[#5db0ce] flex flex-col justify-start items-center overflow-hidden">
      <div className="w-full max-w-[1170px] px-4 md:px-[11px] flex flex-col justify-start items-center gap-5 md:gap-[21px]">
        {/* Cabeçalho */}
        <div className="w-full flex flex-col justify-start items-center gap-2 md:gap-[9px] pb-2">
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-8 px-2">
            Precisa de um técnico para detectar o seu vazamento?
          </h2>
          <p className="text-center text-white text-sm sm:text-base md:text-xl font-normal font-['Inter'] leading-normal px-2">
            Solicite uma visita Caetano Hidráulica Caça Vazamento!
          </p>
        </div>

        {/* Grid 2 colunas (mobile-first) → 4 colunas no desktop */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="px-3 py-4 bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-[#dddddd] flex flex-col justify-between items-center gap-3"
            >
              {/* Ícone (menor) */}
              <div className="w-full flex justify-center items-start">
                <img
                  className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] md:w-[100px] md:h-[100px] rounded-md"
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                />
              </div>

              {/* Título */}
              <div className="w-full flex flex-col justify-start items-center min-h-[36px]">
                <h3
                  className={`text-center ${card.titleColor} text-[11px] sm:text-xs md:text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide`}
                >
                  Orçamento
                  <br />
                  {card.title}
                </h3>
              </div>

              {/* Bullets */}
              <ul className="w-full flex flex-col gap-1.5">
                {card.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-1.5"
                  >
                    <CheckIcon color={card.bulletColor} />
                    <span
                      className={`${card.bulletColor} text-[10px] sm:text-[11px] font-normal font-['Inter'] leading-tight`}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Solicitar orçamento de ${card.title}`}
                className={`w-full mt-auto px-3 py-2 ${card.buttonBg} ${card.buttonHover} rounded-md flex justify-center items-center transition-all duration-200 no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 active:scale-[0.98]`}
              >
                <span className="text-white text-xs sm:text-sm md:text-base font-semibold font-['Inter']">
                  Solicitar
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
