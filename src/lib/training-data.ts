
import { BookOpen, Code, Database, Globe, Smartphone, Server, Shield, Brain } from 'lucide-react';

export type Lesson = {
    id: string;
    title: string;
    duration: string;
    type: 'video' | 'article' | 'quiz';
    completed?: boolean;
};

export type Module = {
    id: string;
    title: string;
    lessons: Lesson[];
};

export type Course = {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    topics: string[];
    image: string; // Tailwind class for background gradient or image url
    icon: any;
    modules: Module[];
    progress?: number; // 0 to 100
    enrolled?: boolean;
};

export const courses: Course[] = [
    {
        id: 'full-stack-101',
        title: 'Full Stack Development Bootcamp',
        description: 'Master the art of building modern web applications from scratch using React, Node.js, and PostgreSQL.',
        level: 'Beginner',
        duration: '12 Weeks',
        topics: ['React', 'Node.js', 'PostgreSQL', 'Next.js'],
        image: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10',
        icon: Globe,
        progress: 45,
        enrolled: true,
        modules: [
            {
                id: 'm1',
                title: 'Introduction to Web',
                lessons: [
                    { id: 'l1', title: 'How the Internet Works', duration: '10 min', type: 'video', completed: true },
                    { id: 'l2', title: 'HTML & CSS Basics', duration: '45 min', type: 'video', completed: true },
                    { id: 'l2b', title: 'First Project: Personal Site', duration: '60 min', type: 'article', completed: true },
                ]
            },
            {
                id: 'm2',
                title: 'React Fundamentals',
                lessons: [
                    { id: 'l3', title: 'Components & Props', duration: '30 min', type: 'video', completed: false },
                    { id: 'l4', title: 'State & Effects', duration: '40 min', type: 'video', completed: false },
                    { id: 'l5', title: 'React Quiz', duration: '15 min', type: 'quiz', completed: false },
                ]
            },
            {
                id: 'm3',
                title: 'Backend Basics',
                lessons: [
                    { id: 'l6', title: 'Node.js Setup', duration: '20 min', type: 'video' },
                    { id: 'l7', title: 'Express Server', duration: '50 min', type: 'video' },
                ]
            }
        ]
    },
    {
        id: 'mobile-mastery',
        title: 'Mobile App Mastery',
        description: 'Build cross-platform mobile apps that perform like native using React Native.',
        level: 'Intermediate',
        duration: '10 Weeks',
        topics: ['React Native', 'iOS', 'Android', 'Deployment'],
        image: 'bg-gradient-to-br from-green-500/10 to-teal-500/10',
        icon: Smartphone,
        progress: 10,
        enrolled: true,
        modules: [
            {
                id: 'mm1',
                title: 'Setup & Configuration',
                lessons: [
                    { id: 'mml1', title: 'React Native CLI vs Expo', duration: '15 min', type: 'article', completed: true },
                    { id: 'mml2', title: 'Environment Setup', duration: '30 min', type: 'video' },
                ]
            },
            {
                id: 'mm2',
                title: 'Core Components',
                lessons: [
                    { id: 'mml3', title: 'View, Text, Image', duration: '25 min', type: 'video' },
                    { id: 'mml4', title: 'Flexbox for Mobile', duration: '40 min', type: 'video' },
                ]
            }
        ]
    },
    {
        id: 'devops-cloud',
        title: 'DevOps & Cloud Engineering',
        description: 'Become a master of infrastructure automation, CI/CD, and cloud scalability.',
        level: 'Advanced',
        duration: '8 Weeks',
        topics: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        image: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
        icon: Server,
        enrolled: false,
        modules: [
            {
                id: 'doc1',
                title: 'Containerization',
                lessons: [
                    { id: 'docl1', title: 'Docker Basics', duration: '30 min', type: 'video' },
                    { id: 'docl2', title: 'Writing Dockerfiles', duration: '45 min', type: 'video' },
                ]
            },
            {
                id: 'doc2',
                title: 'Orchestration',
                lessons: [
                    { id: 'docl3', title: 'Intro to Kubernetes', duration: '60 min', type: 'video' },
                ]
            }
        ]
    },
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Dive into the future with practical AI and ML implementation skills.',
        level: 'Intermediate',
        duration: '14 Weeks',
        topics: ['Python', 'TensorFlow', 'LLMs', 'Data Science'],
        image: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
        icon: Brain,
        enrolled: false,
        modules: [
            {
                id: 'aiml1',
                title: 'Python for Data Science',
                lessons: [
                    { id: 'ail1', title: 'NumPy & Pandas', duration: '50 min', type: 'video' },
                    { id: 'ail2', title: 'Data Visualization', duration: '40 min', type: 'video' },
                ]
            },
            {
                id: 'aiml2',
                title: 'Neural Networks',
                lessons: [
                    { id: 'ail3', title: 'Perceptrons', duration: '30 min', type: 'video' },
                    { id: 'ail4', title: 'Backpropagation', duration: '60 min', type: 'video' },
                ]
            }
        ]
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity Fundamentals',
        description: 'Learn how to protect applications and networks from modern threats.',
        level: 'Beginner',
        duration: '6 Weeks',
        topics: ['Network Security', 'Ethical Hacking', 'Compliance'],
        image: 'bg-gradient-to-br from-slate-500/10 to-gray-500/10',
        icon: Shield,
        enrolled: false,
        modules: [
            {
                id: 'cyb1',
                title: 'Threat Landscape',
                lessons: [
                    { id: 'cyle1', title: 'Common Vectors', duration: '25 min', type: 'video' },
                    { id: 'cyle2', title: 'Social Engineering', duration: '35 min', type: 'video' },
                ]
            }
        ]
    },
    {
        id: 'db-design',
        title: 'Advanced Database Design',
        description: 'Architecture scalable and efficient database systems for enterprise apps.',
        level: 'Advanced',
        duration: '5 Weeks',
        topics: ['SQL', 'NoSQL', 'Sharding', 'Caching'],
        image: 'bg-gradient-to-br from-yellow-500/10 to-amber-500/10',
        icon: Database,
        enrolled: false,
        modules: [
            {
                id: 'db1',
                title: 'Normalization',
                lessons: [
                    { id: 'dble1', title: '1NF, 2NF, 3NF', duration: '40 min', type: 'video' },
                ]
            },
            {
                id: 'db2',
                title: 'Indexing Strategies',
                lessons: [
                    { id: 'dble2', title: 'B-Trees vs Hash', duration: '30 min', type: 'video' },
                ]
            }
        ]
    }
];

export function getCourse(id: string): Course | undefined {
    return courses.find(c => c.id === id);
}
