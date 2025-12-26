export interface JobRole {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  imageUrl: string;
  skills: string[];
}

export const jobRoles: JobRole[] = [
  {
    id: 1,
    title: 'Flutter Developer Intern',
    department: 'Engineering',
    location: 'Hyderabad, India',
    type: 'Internship',
    description: 'Shape seamless mobile experiences across platforms. You\'ll build responsive applications, work with modern Flutter architecture, and collaborate with designers to bring ideas to life.',
    imageUrl: '/flutter.jpg',
    skills: ['Dart', 'Flutter', 'Mobile Development', 'UI/UX']
  },
  {
    id: 2,
    title: 'React/JavaScript Developer Intern',
    department: 'Engineering',
    location: 'Hyderabad, India',
    type: 'Internship',
    description: 'Create dynamic web experiences that users love. You\'ll develop interactive interfaces, integrate APIs, and write clean, maintainable code alongside our development team.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'APIs']
  },
  {
    id: 3,
    title: 'UI/UX Designer Intern',
    department: 'Design',
    location: 'Hyderabad, India',
    type: 'Internship',
    description: 'Design experiences that feel intuitive and look beautiful. You\'ll research user needs, create wireframes and prototypes, and refine designs based on feedback and testing.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&auto=format',
    skills: ['Figma', 'Design Thinking', 'Prototyping', 'User Research']
  },
  {
    id: 4,
    title: 'Video Editor Intern',
    department: 'Creative',
    location: 'Hyderabad, India',
    type: 'Internship',
    description: 'Tell stories through motion and sound. You\'ll edit compelling video content, create engaging social media clips, and collaborate with our creative team to bring concepts to reality.',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop&auto=format',
    skills: ['Premiere Pro', 'DaVinci Resolve', 'Storytelling', 'Motion Graphics']
  },
  {
    id: 5,
    title: 'Post Designer Intern',
    department: 'Creative',
    location: 'Hyderabad, India',
    type: 'Internship',
    description: 'Create visuals that stop the scroll. You\'ll design eye-catching social media graphics, marketing materials, and branded content that communicates clearly and resonates with audiences.',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&auto=format',
    skills: ['Adobe Creative Suite', 'Canva', 'Branding', 'Social Media']
  }
];