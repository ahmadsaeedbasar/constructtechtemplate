/**
 * Application Content Configuration
 * Centralized content management for the ConstructTech website
 */
import logos from "../assets/logos/index.js"; // Import logos
import { modeling, projectManagement, qualityAssurance, sustainableBuilding } from '../assets/logos/index.js';

export const content = {



  
  
  // NAVIGATION
  
  navbar: {
    logo: 'ConstructTech',
    logoImage: 'src/assets/icons/logo.png',

    links: [
      { text: 'Home', href: '#home' },
      { text: 'Features', href: '#features' },
      { text: 'Projects', href: '#projects' },
      { text: 'Pricing', href: '#pricing' },
      { text: 'Contact', href: '#contact' },
    ],
    
  },
  

  
  // HERO SECTION
  
  hero: {
    headline: 'Building the Future with Innovative',
    headlin: 'Construction Technology',
    subheadline:
      'Revolutionize your construction projects with our cutting-edge solutions and expert team.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'View Projects',
    image: 'src/assets/images/abcd.jpg',
  },
  
  // FEATURES SECTION
  
   features: {
    title: "Our Services",
    subtitle: "Comprehensive construction solutions for modern projects",
    items: [
      {
        title: "3D Modeling",
        description: "Create detailed 3D models of your construction projects for better visualization.",
        icon: modeling, // Use imported image
        iconAlt: "3D Modeling"
      },
      {
        title: "Project Management",
        description: "Efficiently manage all aspects of your construction projects from start to finish.",
        icon: projectManagement,
        iconAlt: "Project Management"
      },
      {
        title: "Quality Assurance",
        description: "Ensure the highest quality standards with our comprehensive QA processes.",
        icon: qualityAssurance,
        iconAlt: "Quality Assurance"
      },
      {
        title: "Sustainable Building",
        description: "Eco-friendly construction solutions that reduce environmental impact.",
        icon: sustainableBuilding,
        iconAlt: "Sustainable Building"
      },
    ],
  },
  
  // PROJECTS SECTION
  
  projects: {
    title: 'Our Projects',
    subtitle: 'Discover our latest construction projects and innovations',
    items: [
      {
        id: 'modern-office-complex',
        title: 'Modern Office Complex',
        description:
          'A sustainable office building with smart technology integration.',
        image: 'src/assets/images/projects/download.webp',
      },
      {
        id: 'residential-tower',
        title: 'Residential Tower',
        description:
          'A 30-story residential building with panoramic city views.',
        image: 'src/assets/images/projects/OIF.jpeg',
      },
      {
        id: 'shopping-mall',
        title: 'Shopping Mall',
        description:
          'A modern shopping center with innovative architectural design.',
        image: 'src/assets/images/projects/OIFA.jpeg',
      },
    ],
  },
  
  // TEAM SECTION
  



  
 team: {
    title: "Our Team",
    subtitle: "Meet the experts behind our successful projects",
    members: [
      {
        name: "John Anderson",
        role: "Chief Executive Officer",
        image: "src/assets/images/team/user1.jpg",
        social: {
          twitter: "johnanderson",
          linkedin: "johnanderson",
          
          email: "john@constructtech.com"
        }
      },
      {
        name: "Sarah Johnson",
        role: "Lead Architect",
        image: "src/assets/images/team/user2.jpg",
        social: {
          twitter: "sarahjohnson",
          linkedin: "sarahjohnson",
          
          email: "sarah@constructtech.com"
        }
      },
      {
        name: "Michael Chen",
        role: "Project Manager",
        image: "src/assets/images/team/user3.jpg",
        social: {
          twitter: "michaelchen",
          linkedin: "michaelchen",
          
          email: "michael@constructtech.com"
        }
      },
      // Add more team members as needed
    ],
  },
  stats: {
    title: 'Our Impact',
    items: [
      { value: 250, label: 'Projects Completed', suffix: '+' },
      { value: 15, label: 'Years of Experience', suffix: '+' },
      { value: 98, label: 'Client Satisfaction', suffix: '%' },
      { value: 500, label: 'Team Members', suffix: '+' },
    ],
  },
  
  // PRICING SECTION
  
  pricing: {
    title: 'Contct And Get a Quote',
    subtitle: 'Contact us for a custom quote tailored to your project needs',
    plans: [
      {
        id: 'basic',
        name: 'Send Mail',
        price: 'Contact',
        period: 'Inquiry',
        features: [
          'Project Management',
          'Basic 3D Models',
          'Email Support',
          'Up to 5 Team Members',
          'Standard Quality Assurance',
          'Sustainable Building Options',
        ],
        cta: 'Mail Us',
      },
      {
        id: 'professional',
        name: 'Dial a Call',
        price: 'Talk',
        period: 'Custoermer Care',
        features: [
          'Advanced Project Management',
          'Detailed 3D Models',
          'Priority Support',
          'Up to full exosure',
          'Quality Assurance',
          'Sustainable Building Options',
        ],
        cta: 'Call Now',
        featured: true,
      },
      {
        id: 'enterprise',
        name: 'Book a Meeting',
        price: 'Meet',
        period: 'Onsite',
        features: [
          'Complete Project Suite',
          'Photorealistic 3D Models',
          '24/7 Dedicated Support',
          'Unlimited Team Members',
          'Premium Quality Assurance',
          'Sustainable Building Consulting',
        ],
        cta: 'Meet Us',
      },
    ],
  },
  
  // TESTIMONIALS SECTION
  
  testimonials: {
    title: 'Client Testimonials',
    subtitle: 'What our clients say about our services',
    items: [
      {
        id: 'robert-williams',
        quote:
          'ConstructTech transformed our construction process. Their technology solutions saved us time and money.',
        author: 'Robert Williams',
        role: 'CEO, BuildRight Inc.',
        image: 'src/assets/images/testimonials/user4.jpg',
      },
      {
        id: 'emily-rodriguez',
        quote:
          'The team at ConstructTech is exceptional. Their innovative approach to construction technology is unmatched.',
        author: 'Emily Rodriguez',
        role: 'Project Manager, Skyline Developments',
        image: 'src/assets/images/testimonials/user5.jpg',
      },
      {
        id: 'james-wilson',
        quote:
          "We've reduced construction errors by 45% since implementing ConstructTech's solutions.",
        author: 'Catherine Lee',
        role: 'CTO, UrbanConstruct',
        image: 'src/assets/images/testimonials/user6.jpg',
      },
    ],
  },



// OFFICES SECTION

  offices: {
    title: 'Our Offices',
    subtitle: 'Visit us at any of our locations worldwide',
    locations: [
      {
        city: 'New York',
        address: '123 Tech Avenue, New York, NY 10001',
        image: 'src/assets/images/offices/ofc1.webp',
      },
      {
        city: 'London',
        address: '456 Innovation Street, London, UK',
        image: 'src/assets/images/offices/ofc2.webp',
      },
      {
        city: 'Tokyo',
        address: '789 Future Road, Tokyo, Japan',
        image: 'src/assets/images/offices/ofc3.webp',
      },
    ],
  },



  
  // PARTNERS SECTIONS
  
  partners: {
    title: 'Our Partners',
    subtitle: 'Trusted by industry leaders worldwide',
    items: [
      { name: 'BuildRight', logo: 'src/assets/images/team/user1.jpg' },
      { name: 'Skyline', logo: 'src/assets/images/team/user2.jpg' },
      { name: 'UrbanConstruct', logo: 'src/assets/images/team/user3.jpg' },
      { name: 'TechBuild', logo: 'src/assets/images/testimonials/user4.jpg' },
      { name: 'FutureConstruct', logo: 'src/assets/images/testimonials/user5.jpg' },
    ],
  },

    
  // FAQ SECTION
  
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our services',
    items: [
      {
        question: 'How long does a typical construction project take?',
        answer:
          'The duration of a construction project varies based on size and complexity. Small projects may take 3-6 months, while large commercial projects can take 1-2 years. We provide detailed timelines during the planning phase.',
      },
      {
        question: 'Do you provide sustainable building options?',
        answer:
          'Yes, we specialize in sustainable construction practices. We offer eco-friendly materials, energy-efficient designs, and green building certifications like LEED and BREEAM.',
      },
      {
        question: 'What technology do you use in your projects?',
        answer:
          'We utilize BIM (Building Information Modeling), drone surveying, 3D printing, IoT sensors, and advanced project management software to ensure precision and efficiency.',
      },
      {
        question: 'How do you ensure quality control?',
        answer:
          'We have a multi-stage quality assurance process that includes regular inspections, material testing, and compliance checks with industry standards and regulations.',
      },
    ],
  },


  // GALLERY SECTION
  
  gallery: {
    title: 'Project Gallery',
    subtitle: 'Visual showcase of our completed projects',
    items: [
      {
        image: 'src/assets/images/gallery/g1.jpg',
        caption: 'Modern Office Complex',
      },
      { image: 'src/assets/images/gallery/g2.jpg',
         caption: 'Residential Tower' },

      { image: 'src/assets/images/gallery/g3.webp',
         caption: 'Shopping Mall' },
      {
        image: 'src/assets/images/gallery/g4.webp',
        caption: 'Hospitality Building',
      },
      {
        image: 'src/assets/images/gallery/g5.webp',
        caption: 'Educational Facility',
      },
      { image: 'src/assets/images/gallery/g6.webp',
         caption: 'Industrial Complex' },
    ],
  },
  
  // CONTACT SECTION
  
  contact: {
    title: 'Contact Us',
    subtitle: 'Get in touch with our team for any inquiries',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message',
    },
    info: {
      address: '123 Tech Avenue, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'info@constructtech.com',
      hours: 'Monday - Friday: 9AM - 5PM',
    },
  },

  
  // FOOTER SECTION
  
  footer: {
    logo: 'ConstructTech',
    description:
      'Building the future with innovative construction technology solutions.',
    links: [
      { text: 'Home', href: '#home' },
      { text: 'Features', href: '#features' },
      { text: 'Projects', href: '#projects' },
      { text: 'Pricing', href: '#pricing' },
      { text: 'Contact', href: '#contact' },
    ],
     social: [
      { 
        name: 'Twitter', 
        href: '#', 
        icon: logos.twitter,
        type: 'image' 
      },
      { 
        name: 'LinkedIn', 
        href: '#', 
        icon: logos.linkedin,
        type: 'image' 
      },
      { 
        name: 'Instagram', 
        href: '#', 
        icon: logos.instagram,
        type: 'image' 
      },
      { 
        name: 'Facebook', 
        href: '#', 
        icon: logos.facebook,
        type: 'image' 
      },
    ],
    contact: {
      email: 'info@constructtech.com',
      phone: '+1 (555) 123-4567',
      address: '123 Tech Avenue, New York, NY 10001',
    },
    copyright: '© 2023 ConstructTech. All rights reserved.',
  },
};
