import personalEs from '../data/es/personal.json';
import personalEn from '../data/en/personal.json';
import projectsEs from '../data/es/projects.json';
import projectsEn from '../data/en/projects.json';
import certsEs from '../data/es/certifications.json';
import certsEn from '../data/en/certifications.json';
import menuEs from '../data/es/menu.json';
import menuEn from '../data/en/menu.json';
import siteEs from '../data/es/site.json';
import siteEn from '../data/en/site.json';

export type Locale = 'es' | 'en';
export const DEFAULT_LOCALE: Locale = 'es';
export const LOCALES: Locale[] = ['es', 'en'];

export function getPersonalData(locale: Locale = DEFAULT_LOCALE) {
  return locale === 'en' ? personalEn : personalEs;
}

export function getProjectsData(locale: Locale = DEFAULT_LOCALE) {
  return locale === 'en' ? projectsEn : projectsEs;
}

export function getCertificationsData(locale: Locale = DEFAULT_LOCALE) {
  return locale === 'en' ? certsEn : certsEs;
}

export function getMenuData(locale: Locale = DEFAULT_LOCALE) {
  return locale === 'en' ? menuEn : menuEs;
}

export function getSiteData(locale: Locale = DEFAULT_LOCALE) {
  return locale === 'en' ? siteEn : siteEs;
}

const UI_STRINGS = {
  es: {
    // Header
    themeAria: 'Cambiar modo claro/oscuro',
    langAria: 'Cambiar idioma',
    ctaContact: 'Contáctame',
    
    // Hero
    greeting: 'Hola, soy',
    contactBtn: 'Contactar',
    cvBtn: 'Descargar CV',
    
    // About
    aboutEyebrow: 'Conóceme · Trayectoria & Enfoque',
    aboutTitle: 'Sobre Mí',
    badgeOverview: 'Presentación',
    headlineOverview: 'Ingeniero en Inteligencia Artificial y Machine Learning',
    p1Part1: 'Soy',
    p1Part2: ', afincado en ',
    p1Part3: '. Mi enfoque une un sólido ',
    p1Strong1: 'dominio matemático y algorítmico',
    p1Part4: ' con una arquitectura de software rigurosa, lo que me permite comprender en profundidad el funcionamiento de los modelos, evaluar críticamente su desempeño y explicar sus decisiones con transparencia ',
    p1Italic: '(o hasta donde los modelos nos dejen y las matemáticas no nos vuelvan locos)',
    p1Part5: '.',
    p2Part1: 'Con una firme base académica en ',
    p2Strong: 'Inteligencia Artificial y Computación',
    p2Part2: ', centro mi trabajo en el modelado avanzado de datos, el entrenamiento e interpretabilidad de redes neuronales profundas (Deep Learning) y el diseño de agentes autónomos mediante Aprendizaje por Refuerzo.',
    stat1Val: 'IA & ML',
    stat1Lbl: 'Especialización',
    stat2Val: 'UPM · UPNA',
    stat2Lbl: 'Formación Oficial',
    stat3Val: 'Madrid',
    stat3Lbl: 'Ubicación',
    badgeAcademic: 'Académico',
    headlineAcademic: 'Educación Universitaria Oficial',
    descAcademic: 'Base formal en Ingeniería Informática con especialización de posgrado en Inteligencia Artificial, complementada con formación internacional.',
    badgePillars: 'Especialización',
    headlinePillars: 'Pilares Técnicos y Áreas de Dominio',
    
    // Education Items
    education: [
      {
        degree: 'Máster Universitario en Inteligencia Artificial',
        institution: 'Universidad Politécnica de Madrid (UPM)',
        period: '2024 – Actualidad',
      },
      {
        degree: 'Grado en Ingeniería Informática',
        institution: 'Universidad Pública de Navarra (UPNA)',
        period: '2018 – 2024',
      },
      {
        degree: 'Estancia Académica Internacional (Beca Erasmus+)',
        institution: 'Grenoble INP · Institut Polytechnique de Grenoble (Francia)',
        period: '2023',
      },
      {
        degree: 'Diploma de Especialización en Desarrollo de Videojuegos y Realidad Virtual',
        institution: 'Universidad Pública de Navarra (UPNA)',
        period: '2018 – 2023',
      },
    ],

    // Pillars Items
    pillars: [
      {
        title: 'Machine Learning & Deep Learning',
        desc: 'Modelado predictivo, redes neuronales y análisis avanzado de datos.',
        tools: ['PyTorch', 'Keras', 'Scikit-Learn', 'NumPy', 'Pandas'],
        icon: 'brain',
      },
      {
        title: 'Reinforcement Learning & Optimización',
        desc: 'Agentes inteligentes, simulación de entornos y algoritmos de optimización.',
        tools: ['DQN / PPO', 'PyTorch', 'Ray Tune', 'Pymgrid', 'Metaheurísticas'],
        icon: 'target',
      },
      {
        title: 'Lenguajes de Programación',
        desc: 'Computación científica, algoritmia eficiente y desarrollo de software robusto.',
        tools: ['Python', 'R', 'C', 'Java'],
        icon: 'code',
      },
      {
        title: 'Sistemas & Entornos de Desarrollo',
        desc: 'Gestión de entornos operativos, control de versiones y automatización de flujos.',
        tools: ['Linux', 'Windows', 'Git', 'Bash'],
        icon: 'settings',
      },
    ],

    // Projects
    projectsEyebrow: 'Portfolio',
    projectsTitle: 'Proyectos Destacados',
    filterFeatured: 'Destacados',
    filterAll: 'Todos',
    projectsEmpty: 'No hay proyectos en esta categoría todavía.',
    viewCodeAria: 'Ver código de',
    viewRepoTitle: 'Ver repositorio en GitHub',
    viewDetailsAria: 'Ver detalles de',
    modalTech: 'Tecnologías',
    modalGithub: 'Ver en GitHub',
    modalPrivate: 'Privado / Sin enlace público disponible.',
    modalClose: 'Cerrar modal',

    // Certifications
    certsEyebrow: 'Especializaciones en IA & Cloud',
    certsTitle: 'Certificaciones',
    certsSubtitle: 'Validaciones en IA, Deep Learning & Cloud',
    cardVerify: 'Verificar credencial oficial',
    cardId: 'ID de Credencial',
    cardSkills: 'Habilidades clave',
    cardVerifiedBadge: 'Credencial verificada',

    // Contact
    contactEyebrow: 'Contacto',
    contactTitle: 'Hablemos',
    cardEmail: 'Correo Electrónico',
    cardLocation: 'Ubicación',
    cardSocial: 'También puedes encontrarme en:',
    formName: 'Nombre',
    formNamePlaceholder: 'Tu nombre',
    formEmail: 'Correo Electrónico',
    formSubject: 'Asunto',
    formSubjectPlaceholder: '¿En qué puedo ayudarte?',
    formMessage: 'Mensaje',
    formMessagePlaceholder: 'Cuéntame sobre tu proyecto o propuesta...',
    formSubmit: 'Enviar mensaje',
    formSending: 'Enviando...',
    formSuccess: '¡Mensaje enviado con éxito! Te responderé lo antes posible.',
    formError: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',

    // Footer
    footerNavAria: 'Navegación del pie de página',
    footerPrivacy: 'Política de Privacidad',
    footerTerms: 'Términos de Servicio',
  },
  en: {
    // Header
    themeAria: 'Toggle light/dark mode',
    langAria: 'Change language',
    ctaContact: 'Get in Touch',

    // Hero
    greeting: "Hi, I'm",
    contactBtn: 'Contact Me',
    cvBtn: 'Download CV',

    // About
    aboutEyebrow: 'About Me · Journey & Focus',
    aboutTitle: 'About Me',
    badgeOverview: 'Overview',
    headlineOverview: 'Artificial Intelligence & Machine Learning Engineer',
    p1Part1: "I'm ",
    p1Part2: ', based in ',
    p1Part3: '. My approach unites a strong ',
    p1Strong1: 'mathematical and algorithmic foundation',
    p1Part4: ' with rigorous software engineering, allowing me to deeply understand model behavior, critically evaluate performance, and explain predictions with transparency ',
    p1Italic: '(as far as models allow and mathematics keeps us sane)',
    p1Part5: '.',
    p2Part1: 'Backed by a solid university background in ',
    p2Strong: 'Artificial Intelligence and Computer Science',
    p2Part2: ', my work centers on advanced data modeling, deep neural network training and interpretability, and autonomous agents powered by Reinforcement Learning.',
    stat1Val: 'AI & ML',
    stat1Lbl: 'Specialization',
    stat2Val: 'UPM · UPNA',
    stat2Lbl: 'Accredited Education',
    stat3Val: 'Madrid',
    stat3Lbl: 'Location',
    badgeAcademic: 'Academic',
    headlineAcademic: 'Accredited University Education',
    descAcademic: 'Formal degree in Computer Science with postgraduate specialization in Artificial Intelligence, enriched with international academic exchange.',
    badgePillars: 'Expertise',
    headlinePillars: 'Technical Pillars & Core Domains',

    // Education Items
    education: [
      {
        degree: "Master's Degree in Artificial Intelligence",
        institution: 'Technical University of Madrid (UPM)',
        period: '2024 – Present',
      },
      {
        degree: "Bachelor's Degree in Computer Science",
        institution: 'Public University of Navarre (UPNA)',
        period: '2018 – 2024',
      },
      {
        degree: 'International Academic Exchange (Erasmus+ Grant)',
        institution: 'Grenoble INP · Univ. Grenoble Alpes (France)',
        period: '2023',
      },
      {
        degree: 'Specialization Diploma in Video Game Development & Virtual Reality',
        institution: 'Public University of Navarre (UPNA)',
        period: '2018 – 2023',
      },
    ],

    // Pillars Items
    pillars: [
      {
        title: 'Machine Learning & Deep Learning',
        desc: 'Predictive modeling, deep neural networks, and advanced data pipelines.',
        tools: ['PyTorch', 'Keras', 'Scikit-Learn', 'NumPy', 'Pandas'],
        icon: 'brain',
      },
      {
        title: 'Reinforcement Learning & Optimization',
        desc: 'Autonomous intelligent agents, environment simulation, and optimization algorithms.',
        tools: ['DQN / PPO', 'PyTorch', 'Ray Tune', 'Pymgrid', 'Metaheuristics'],
        icon: 'target',
      },
      {
        title: 'Programming Languages',
        desc: 'Scientific computing, algorithmic efficiency, and robust software engineering.',
        tools: ['Python', 'R', 'C', 'Java'],
        icon: 'code',
      },
      {
        title: 'Systems & Development Environments',
        desc: 'Operating systems management, version control, and automated developer workflows.',
        tools: ['Linux', 'Windows', 'Git', 'Bash'],
        icon: 'settings',
      },
    ],

    // Projects
    projectsEyebrow: 'Portfolio',
    projectsTitle: 'Featured Projects',
    filterFeatured: 'Featured',
    filterAll: 'All',
    projectsEmpty: 'No projects in this category yet.',
    viewCodeAria: 'View code for',
    viewRepoTitle: 'View repository on GitHub',
    viewDetailsAria: 'View details for',
    modalTech: 'Technologies',
    modalGithub: 'View on GitHub',
    modalPrivate: 'Private / No public repository available.',
    modalClose: 'Close modal',

    // Certifications
    certsEyebrow: 'AI & Cloud Specializations',
    certsTitle: 'Certifications',
    certsSubtitle: 'AI, Deep Learning & Cloud Credentials',
    cardVerify: 'Verify official credential',
    cardId: 'Credential ID',
    cardSkills: 'Core skills',
    cardVerifiedBadge: 'Verified credential',

    // Contact
    contactEyebrow: 'Contact',
    contactTitle: "Let's Talk",
    cardEmail: 'Email Address',
    cardLocation: 'Location',
    cardSocial: 'You can also find me on:',
    formName: 'Name',
    formNamePlaceholder: 'Your name',
    formEmail: 'Email Address',
    formSubject: 'Subject',
    formSubjectPlaceholder: 'How can I help you?',
    formMessage: 'Message',
    formMessagePlaceholder: 'Tell me about your project or inquiry...',
    formSubmit: 'Send Message',
    formSending: 'Sending...',
    formSuccess: 'Message sent successfully! I will get back to you as soon as possible.',
    formError: 'There was an error sending the message. Please try again.',

    // Footer
    footerNavAria: 'Footer navigation',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
  },
};

export function useTranslations(locale: Locale = DEFAULT_LOCALE) {
  return UI_STRINGS[locale] ?? UI_STRINGS[DEFAULT_LOCALE];
}
