// src/data/content.ts

export const landingData = {
  hero: {
    title: "Ingeniería de Software y Arquitectura Escalable",
    subtitle: "Construimos soluciones Full Stack robustas y optimizadas para la nube. Transformamos requerimientos complejos en sistemas eficientes.",
    primaryCTA: "Agendar Consultoría",
    secondaryCTA: "Ver Tecnologías",
  },
  services: [
    {
      id: 1,
      title: "Desarrollo Full Stack",
      description: "Aplicaciones web modernas de alto rendimiento, construidas con React, TypeScript y arquitecturas backend sólidas.",
      icon: "Code", 
    },
    {
      id: 2,
      title: "Infraestructura & DevOps",
      description: "Despliegues seguros, automatización y gestión de entornos cloud asegurando alta disponibilidad.",
      icon: "Server",
    },
    {
      id: 3,
      title: "Integración de Sistemas",
      description: "Creación de APIs eficientes y adopción de herramientas modernas (como implementaciones con LLMs) para potenciar tu producto.",
      icon: "Cpu",
    }
  ],

  techStack: {
    title: "Stack Tecnológico",
    description: "Utilizamos herramientas modernas y probadas en la industria para garantizar rendimiento, seguridad y mantenibilidad.",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
      },
      {
        name: "Backend & APIs",
        skills: ["Go", "Python", "FastAPI", "Node.js"]
      },
      {
        name: "Cloud & DevOps",
        skills: ["AWS", "GitHub Actions", "Docker", "n8n"]
      }
    ]
  },

  projects: {
    title: "Casos de Éxito",
    description: "Conoce cómo hemos ayudado a empresas a escalar sus operaciones a través de ingeniería de software robusta y automatización.",
    items: [
      {
        id: 1,
        title: "Modernización de Plataforma E-commerce",
        description: "Migración de un monolito heredado a una arquitectura de microservicios, mejorando los tiempos de carga en un 40% y asegurando alta disponibilidad durante picos de tráfico.",
        impact: "Reducción de costos de servidor en un 30% mensual.",
        tech: ["React", "TypeScript", "Go", "AWS"],
        link: "#"
      },
      {
        id: 2,
        title: "Automatización de Flujos Operativos",
        description: "Se implementó un sistema de automatización para procesos internos de recursos humanos y facturación, conectando múltiples APIs empresariales y reduciendo el trabajo manual.",
        impact: "Ahorro de más de 20 horas semanales en tareas operativas.",
        tech: ["Python", "FastAPI", "n8n", "AWS EC2"],
        link: "#"
      },
      {
        id: 3,
        title: "Sistema de Gestión Documental Inteligente",
        description: "Desarrollo de una plataforma Full Stack para la indexación y búsqueda de documentos empresariales, integrando LLMs como herramienta de apoyo para la clasificación automática de datos.",
        impact: "Optimización en la búsqueda de archivos críticos en un 80%.",
        tech: ["Next.js", "Python", "AWS S3"],
        link: "#"
      }
    ]
  },

  footer: {
    brand: "DevStudio TI",
    description: "Ingeniería de software de alto nivel y arquitectura en la nube.",
    contact: {
      email: "contacto@devstudio.com",
      phone: "+52 (555) 123-4567",
      location: "Chihuahua, México",
    },
    socials: [
      { name: "GitHub", url: "#" },
      { name: "LinkedIn", url: "www.linkedin.com/in/papery2129-1349872bb" },
    ]
  }
};