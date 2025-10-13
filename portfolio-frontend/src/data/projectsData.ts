export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  challenges?: string;
  solution?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce application with payment integration',
    fullDescription: 'A complete e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Docker'],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and wishlist',
      'Secure payment processing',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    challenges: 'Implementing secure payment processing and managing complex state across the application',
    solution: 'Used Redux for state management and implemented comprehensive error handling for payment flows'
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    shortDescription: 'Collaborative task tracking application with real-time updates',
    fullDescription: 'A project management tool that helps teams organize and track their work. Built with React, Python Flask, and WebSockets for real-time collaboration.',
    technologies: ['React', 'Python', 'Flask', 'MongoDB', 'WebSockets', 'Redis'],
    features: [
      'Real-time collaboration with WebSockets',
      'Kanban board interface',
      'Team management and permissions',
      'File attachments and comments',
      'Activity timeline and notifications',
      'Sprint planning and reporting'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://taskmanager-demo.com',
    challenges: 'Handling real-time updates efficiently without performance degradation',
    solution: 'Implemented Redis for caching and WebSocket connection pooling for scalability'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    shortDescription: 'Interactive weather visualization with historical data analysis',
    fullDescription: 'A comprehensive weather application that provides current conditions, forecasts, and historical weather data analysis with beautiful visualizations.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'Tailwind CSS'],
    features: [
      'Current weather conditions',
      '7-day forecast with hourly breakdown',
      'Historical weather data visualization',
      'Location search and favorites',
      'Weather alerts and notifications',
      'Responsive design for all devices'
    ],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
    challenges: 'Visualizing complex weather data in an intuitive and accessible way',
    solution: 'Created custom Chart.js components and implemented progressive loading for data-heavy visualizations'
  },
  {
    id: 'social-media-analytics',
    title: 'Social Media Analytics',
    shortDescription: 'Analytics platform for tracking social media performance',
    fullDescription: 'A data analytics dashboard that aggregates and visualizes social media metrics across multiple platforms.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'Docker', 'Jenkins'],
    features: [
      'Multi-platform integration',
      'Custom metrics and KPIs',
      'Interactive data visualizations',
      'Scheduled reports and exports',
      'Sentiment analysis',
      'Competitive benchmarking'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/social-analytics',
    challenges: 'Processing and aggregating large volumes of data from multiple APIs',
    solution: 'Implemented background job processing with Redis queue and optimized database queries'
  }
];