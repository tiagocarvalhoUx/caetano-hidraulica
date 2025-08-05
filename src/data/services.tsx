// src/data/services.js
import { Wrench, Zap, Droplets, Wind, Hammer, CheckCircle, Home } from 'lucide-react';

export const SERVICE_CATEGORIES = [
  {
    id: 'pedreiro',
    icon: Wrench,
    title: "PEDREIRO",
    subtitle: "ORÇAMENTO GRATUITO",
    description: "Reformas estruturais de construção civil e reparos diversos em alvenaria",
    color: "bg-amber-600",
    buttonColor: "bg-amber-500"
  },
  {
    id: 'eletrica',
    icon: Zap,
    title: "ELÉTRICA",
    subtitle: "ORÇAMENTO GRATUITO", 
    description: "Instalação e manutenção de sistemas elétricos residenciais e comerciais",
    color: "bg-red-600",
    buttonColor: "bg-red-500"
  },
  {
    id: 'hidraulica',
    icon: Droplets,
    title: "HIDRÁULICA",
    subtitle: "ORÇAMENTO GRATUITO",
    description: "Serviços de encanamento, instalação e manutenção de sistemas hidráulicos",
    color: "bg-blue-600",
    buttonColor: "bg-blue-500"
  },
  {
    id: 'ar-condicionado',
    icon: Wind,
    title: "AR CONDICIONADO", 
    subtitle: "ORÇAMENTO GRATUITO",
    description: "Instalação, manutenção, limpeza e conserto de aparelhos de ar condicionado",
    color: "bg-cyan-700",
    buttonColor: "bg-cyan-600"
  },
  {
    id: 'pintura',
    icon: Hammer,
    title: "PINTURA",
    subtitle: "ORÇAMENTO GRATUITO",
    description: "Pintura residencial e comercial com acabamento profissional e garantia",
    color: "bg-yellow-500",
    buttonColor: "bg-yellow-400"
  }
];

export const COMPANY_SERVICES = [
  {
    id: 'alvenaria',
    icon: CheckCircle,
    title: "Alvenaria",
    description: "Construção e reforma de estruturas em alvenaria com qualidade garantida e acabamento perfeito",
    rating: "Ver mais >",
    iconColor: "text-green-600"
  },
  {
    id: 'hidraulica-company',
    icon: Droplets,
    title: "Hidráulica", 
    description: "Instalação e manutenção de sistemas hidráulicos residenciais e comerciais com garantia",
    rating: "Ver mais >",
    iconColor: "text-green-600"
  },
  {
    id: 'eletrica-company', 
    icon: Zap,
    title: "Elétrica",
    description: "Serviços elétricos seguros e certificados para sua casa ou empresa com profissionais qualificados",
    rating: "Ver mais >",
    iconColor: "text-green-600"
  },
  {
    id: 'pintura-company',
    icon: Wrench,
    title: "Pintura", 
    description: "Serviços de pintura residencial e comercial com acabamento impecável e materiais de qualidade",
    rating: "Ver mais >",
    iconColor: "text-green-600"
  },
  {
    id: 'reparos',
    icon: Hammer,
    title: "Reparos",
    description: "Reparos diversos e manutenção preventiva para manter sua casa sempre em perfeito estado",
    rating: "Ver mais >",
    iconColor: "text-green-600"
  },
  {
    id: 'visita-tecnica',
    icon: Home,
    title: "Visita Técnica",
    description: "Avaliação profissional gratuita com orçamento detalhado e sem compromisso para seu projeto",
    rating: "Ver mais >",
    iconColor: "text-green-600"
  }
];