import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translations directly here for simplicity, or import from JSON files
const resources = {
    en: {
        translation: {
            hero: {
                greeting: "Hello! 👋",
                im: "I'm",
                role: "Front End Developer",
                summary: "With over 5 years of experience in frontend development, I have contributed to the design and implementation of efficient, user-centered interfaces.",
                years: "Years",
                experience: "Experience",
                portfolio: "Portfolio",
                hireMe: "Hire me"
            },
            experience: {
                title: "My Work",
                titleHighlight: "Experience",
                roles: {
                    intercorp: {
                        role: "Senior Front End Developer",
                        description: "Developed scalable interfaces with ReactJS, TypeScript, and Styled Components (Micro Frontends). Collaborated in multidisciplinary teams, implemented unit tests, and managed tasks in Azure."
                    },
                    stefanini: {
                        role: "Front End Developer",
                        description: "Implemented features and resolved vulnerabilities in ReactJS and SASS platforms. Optimized reusable components to improve visual consistency."
                    },
                    entelgy: {
                        role: "Front End Developer",
                        description: "Developed components in LitElement. Implemented unit tests with Mocha and E2E tests. Managed tasks with JIRA in agile sprints."
                    },
                    playtec: {
                        role: "Team Lead",
                        description: "Designed web apps with ReactJS, Redux, Hooks. Developed backend solutions with Express/NodeJS and AWS. Collaborated on UX/UI with Figma and led the development team."
                    }
                }
            },
            skills: {
                title: "Technical",
                titleHighlight: "Skills",
                description: "A comprehensive set of technologies and methodologies I use to build efficient and scalable solutions.",
                frontend: "Frontend Development",
                backend: "Backend & Cloud",
                tools: "Tools & Methodologies"
            },
            education: {
                title: "My",
                titleHighlight: "Education",
                degree: "Systems Engineering",
                status: "Graduated - Top 10%"
            },
            hireMe: {
                title: "Why",
                titleHighlight: "Hire me?",
                description: "I enjoy working in collaborative and dynamic environments, providing solutions that drive efficiency and innovation. With a proactive approach and commitment to quality, I ensure the fulfillment of objectives and continuous improvement.",
                projects: "Projects Completed",
                years: "Years Experience"
            },
            footer: {
                connect: "Let's Connect!",
                description: "Front End Developer based in Lima, Peru. Passionate about creating efficient and user-centered web experiences.",
                navigation: "Navigation",
                contact: "Contact",
                latestInfo: "Get the latest information",
                emailPlaceholder: "Email Address",
                copyright: "Copyright© 2024 Miryan Orellana. All Rights Reserved.",
                terms: "User Terms & Conditions",
                privacy: "Privacy Policy",
                nav: {
                    home: "Home",
                    about: "About",
                    skills: "Skills",
                    experience: "Experience",
                    education: "Education",
                    contact: "Contact"
                }
            }
        }
    },
    es: {
        translation: {
            hero: {
                greeting: "¡Hola! 👋",
                im: "Soy",
                role: "Desarrolladora Front End",
                summary: "Con más de 5 años de experiencia en desarrollo frontend, he contribuido al diseño e implementación de interfaces eficientes y centradas en el usuario.",
                years: "Años",
                experience: "Experiencia",
                portfolio: "Portafolio",
                hireMe: "Contrátame"
            },
            experience: {
                title: "Mi",
                titleHighlight: "Experiencia",
                roles: {
                    intercorp: {
                        role: "Desarrolladora Front End Senior",
                        description: "Desarrollé interfaces escalables con ReactJS, TypeScript y Styled Components (Micro Frontends). Colaboré en equipos multidisciplinarios, implementé pruebas unitarias y gestioné tareas en Azure."
                    },
                    stefanini: {
                        role: "Desarrolladora Front End",
                        description: "Implementé funcionalidades y resolví vulnerabilidades en plataformas ReactJS y SASS. Optimicé componentes reutilizables para mejorar la consistencia visual."
                    },
                    entelgy: {
                        role: "Desarrolladora Front End",
                        description: "Desarrollé componentes en LitElement. Implementé pruebas unitarias con Mocha y E2E. Gestioné tareas con JIRA en sprints ágiles."
                    },
                    playtec: {
                        role: "Líder de Equipo",
                        description: "Diseñé apps web con ReactJS, Redux, Hooks. Desarrollé soluciones backend con Express/NodeJS y AWS. Colaboré en UX/UI con Figma y lideré el equipo de desarrollo."
                    }
                }
            },
            skills: {
                title: "Habilidades",
                titleHighlight: "Técnicas",
                description: "Un conjunto integral de tecnologías y metodologías que utilizo para construir soluciones eficientes y escalables.",
                frontend: "Desarrollo Frontend",
                backend: "Backend y Nube",
                tools: "Herramientas y Metodologías"
            },
            education: {
                title: "Mi",
                titleHighlight: "Educación",
                degree: "Ingeniería de Sistemas",
                status: "Titulada - Décimo Superior"
            },
            hireMe: {
                title: "¿Por qué",
                titleHighlight: "Contratarme?",
                description: "Disfruto trabajar en entornos colaborativos y dinámicos, aportando soluciones que impulsan la eficiencia y la innovación. Con un enfoque proactivo y compromiso con la calidad, aseguro el cumplimiento de objetivos y la mejora continua.",
                projects: "Proyectos Completados",
                years: "Años de Experiencia"
            },
            footer: {
                connect: "¡Conectemos!",
                description: "Desarrolladora Front End basada en Lima, Perú. Apasionada por crear experiencias web eficientes y centradas en el usuario.",
                navigation: "Navegación",
                contact: "Contacto",
                latestInfo: "Recibe la última información",
                emailPlaceholder: "Dirección de Correo",
                copyright: "Copyright© 2024 Miryan Orellana. Todos los derechos reservados.",
                terms: "Términos y Condiciones",
                privacy: "Política de Privacidad",
                nav: {
                    home: "Inicio",
                    about: "Sobre mí",
                    skills: "Habilidades",
                    experience: "Experiencia",
                    education: "Educación",
                    contact: "Contacto"
                }
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
