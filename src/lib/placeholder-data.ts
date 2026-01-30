
import { Code, Smartphone, Brain, Shield, Database, Palette, Cog, Boxes, Bot } from 'lucide-react';

export const services = [
    {
        id: 'web',
        title: 'Web Development',
        description: 'Scalable, high-performance web applications built with modern frameworks and best practices.',
        details: [
            'Custom web application development',
            'Progressive Web Apps (PWA)',
            'E-commerce platforms',
            'Enterprise portals and dashboards',
            'API development and integration',
            'Performance optimization',
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
        iconName: 'Code'
    },
    {
        id: 'mobile',
        title: 'Mobile Application Development',
        description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
        details: [
            'Native iOS development (Swift)',
            'Native Android development (Kotlin)',
            'Cross-platform solutions (React Native, Flutter)',
            'Mobile app UI/UX design',
            'App Store optimization',
            'Mobile backend development',
        ],
        technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase'],
        iconName: 'Smartphone'
    },
    {
        id: 'design',
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces designed with user experience at the forefront.',
        details: [
            'User research and analysis',
            'Wireframing and prototyping',
            'Visual design and branding',
            'Design systems creation',
            'Usability testing',
            'Accessibility compliance',
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'Framer'],
        iconName: 'Palette'
    },
    {
        id: '3d',
        title: '3D Modeling & Visualization',
        description: 'Immersive 3D experiences and visualizations for products, architecture, and interactive media.',
        details: [
            'Product visualization',
            'Architectural rendering',
            'Interactive 3D experiences',
            'AR/VR development',
            'Game assets creation',
            '3D animation',
        ],
        technologies: ['Blender', 'Unity', 'Unreal Engine', 'Three.js', 'WebGL'],
        iconName: 'Boxes'
    },
    {
        id: 'devops',
        title: 'DevOps Engineering',
        description: 'Streamlined CI/CD pipelines and infrastructure automation for faster, reliable deployments.',
        details: [
            'CI/CD pipeline setup',
            'Cloud infrastructure (AWS, GCP, Azure)',
            'Container orchestration (Kubernetes)',
            'Infrastructure as Code',
            'Monitoring and logging',
            'Security automation',
        ],
        technologies: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'GitHub Actions'],
        iconName: 'Cog'
    },
    {
        id: 'ai',
        title: 'AI Agents Development',
        description: 'Intelligent AI agents and automation solutions that transform business operations.',
        details: [
            'Custom AI chatbots',
            'Autonomous agents',
            'Process automation',
            'Natural language processing',
            'Intelligent document processing',
            'AI-powered decision systems',
        ],
        technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'Hugging Face'],
        iconName: 'Brain'
    },
    {
        id: 'ml',
        title: 'Machine Learning Engineering',
        description: 'Data-driven ML solutions that unlock insights and automate complex decision-making.',
        details: [
            'Predictive analytics',
            'Computer vision solutions',
            'Recommendation systems',
            'Anomaly detection',
            'Model training and optimization',
            'MLOps and deployment',
        ],
        technologies: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'MLflow'],
        iconName: 'Bot'
    },
    {
        id: 'security',
        title: 'Cybersecurity Solutions',
        description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
        details: [
            'Security assessments and audits',
            'Penetration testing',
            'Security architecture design',
            'Incident response planning',
            'Compliance consulting (GDPR, SOC2)',
            'Security training',
        ],
        technologies: ['OWASP', 'Burp Suite', 'Nessus', 'Splunk', 'CrowdStrike'],
        iconName: 'Shield'
    },
    {
        id: 'database',
        title: 'Database Design & Development',
        description: 'Robust, scalable database solutions optimized for performance and reliability.',
        details: [
            'Database architecture design',
            'Data modeling',
            'Migration and optimization',
            'High availability solutions',
            'Data warehousing',
            'Database administration',
        ],
        technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Snowflake'],
        iconName: 'Database'
    },
];
