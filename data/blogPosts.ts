import { } from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Smart Contracts: The Building Blocks of Decentralized Applications',
    excerpt:
      'Understanding how smart contracts work and their role in creating trustless, automated systems in the blockchain ecosystem. Learn about their key characteristics, real-world applications, and the programming languages used to build them.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format',
    date: 'January 15, 2025',
    author: 'TechVitta Team',
    category: 'Smart Contracts',
    featured: true,
  },
  {
    id: 2,
    title: 'Document Verification on Blockchain: The Future of Trust',
    excerpt:
      'Discover how blockchain-based document verification systems are revolutionizing authentication, ensuring complete traceability and immutability for critical documents.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format',
    date: 'January 20, 2025',
    author: 'TechVitta Team',
    category: 'Document Verification',
  },
  {
    id: 3,
    title: 'Asset Tokenization: Unlocking Liquidity in Real Estate',
    excerpt:
      'Learn how tokenization is transforming real estate markets by converting property ownership into digital tokens, enabling fractional ownership and seamless trading.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop&auto=format',
    date: 'January 15, 2025',
    author: 'TechVitta Team',
    category: 'Tokenization',
  },
  {
    id: 4,
    title: 'Supply Chain Transparency with Blockchain Technology',
    excerpt:
      'Discover how blockchain enables end-to-end visibility in supply chains, preventing counterfeiting and improving product traceability.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop&auto=format',
    date: 'January 5, 2025',
    author: 'TechVitta Team',
    category: 'Supply Chain',
  },
  {
    id: 5,
    title: 'Web3 Integration: Connecting to Decentralized Applications',
    excerpt:
      'Understand how Web3 integration enables businesses to leverage decentralized networks and DApps for enhanced functionality and customer experience.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&auto=format',
    date: 'December 30, 2024',
    author: 'TechVitta Team',
    category: 'Web3',
  },
  {
    id: 6,
    title: 'Blockchain Security: Best Practices for Enterprise Solutions',
    excerpt:
      'Learn about essential security measures, vulnerability assessments, and penetration testing strategies to protect your blockchain applications.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format',
    date: 'December 25, 2024',
    author: 'TechVitta Team',
    category: 'Security',
  },
  {
    id: 7,
    title: 'Healthcare Blockchain: Securing Patient Data and Medical Records',
    excerpt:
      'Explore how blockchain technology ensures data integrity, security, and accessibility of patient records while maintaining privacy and compliance.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop&auto=format&q=80',
    date: 'December 20, 2024',
    author: 'TechVitta Team',
    category: 'Healthcare',
  },
  {
    id: 8,
    title: 'Energy Trading on Blockchain: Peer-to-Peer Solutions',
    excerpt:
      'Discover how blockchain enables direct energy trading between consumers and producers, creating efficient and transparent energy markets.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop&auto=format',
    date: 'December 15, 2024',
    author: 'TechVitta Team',
    category: 'Energy',
  },
  {
    id: 9,
    title: 'DeFi Solutions: Revolutionizing Traditional Finance',
    excerpt:
      'Learn how decentralized finance (DeFi) is transforming traditional banking and financial services through blockchain technology and smart contracts.',
    image:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop&auto=format',
    date: 'December 10, 2024',
    author: 'TechVitta Team',
    category: 'DeFi',
  },
  {
    id: 10,
    title: 'NFT Development: Beyond Digital Art',
    excerpt:
      'Explore the expanding applications of NFTs beyond art, including ticketing, identity verification, and digital ownership in various industries.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop&auto=format',
    date: 'December 5, 2024',
    author: 'TechVitta Team',
    category: 'NFT',
  },
  {
    id: 11,
    title: 'Banking & Finance: Blockchain Applications in Traditional Banking',
    excerpt:
      'Discover how blockchain is revolutionizing banking operations, from cross-border payments to trade finance and asset securitization.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&auto=format',
    date: 'November 30, 2024',
    author: 'TechVitta Team',
    category: 'Banking & Finance',
  },
  {
    id: 12,
    title: 'Real Estate Tokenization: Fractional Ownership Explained',
    excerpt:
      'Deep dive into how real estate tokenization enables fractional ownership, making property investment accessible to a broader range of investors.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop&auto=format',
    date: 'November 25, 2024',
    author: 'TechVitta Team',
    category: 'Real Estate',
  },
  {
    id: 13,
    title: 'Blockchain for Supply Chain: Preventing Counterfeiting',
    excerpt:
      'Learn how blockchain technology helps prevent counterfeiting in supply chains by providing immutable records and complete product traceability.',
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop&auto=format',
    date: 'November 20, 2024',
    author: 'TechVitta Team',
    category: 'Supply Chain',
  },
  {
    id: 14,
    title: 'Carbon Credits on Blockchain: Environmental Impact',
    excerpt:
      'Explore how blockchain technology is being used to tokenize and trade carbon credits, promoting transparency in environmental initiatives.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop&auto=format',
    date: 'November 15, 2024',
    author: 'TechVitta Team',
    category: 'Energy',
  },
  {
    id: 15,
    title: 'Luxury Goods Authentication: Blockchain Solutions',
    excerpt:
      'Discover how blockchain ensures authenticity and provenance of luxury goods, protecting both buyers and sellers in high-value transactions.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&auto=format',
    date: 'November 10, 2024',
    author: 'TechVitta Team',
    category: 'Luxury Goods',
  },
];


