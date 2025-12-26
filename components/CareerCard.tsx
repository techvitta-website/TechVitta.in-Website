import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';

interface CareerCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  imageUrl: string;
  skills: string[];
}

export function CareerCard({
  title,
  department,
  location,
  type,
  description,
  imageUrl,
  skills
}: CareerCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl mx-auto flex flex-col md:flex-row">
      {/* Image Section with Department Badge */}
      <div className="relative w-full md:w-2/5 h-64 md:h-auto rounded-t-3xl md:rounded-l-3xl md:rounded-r-none overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute top-4 left-4">
          <span className="bg-white px-4 py-2 rounded-full shadow-lg">
            {department}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="mb-1 text-lg md:text-xl">{title}</h3>
          <div className="flex items-center gap-4 text-sm opacity-90">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>{type}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 flex-1 rounded-b-3xl md:rounded-b-3xl md:rounded-l-none md:rounded-r-3xl">
        <p className="mb-6 text-gray-700 leading-relaxed">
          {description}
        </p>
        
        <div className="mb-8">
          <h4 className="mb-3 text-sm uppercase tracking-wide text-gray-500">
            Key Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <a href="mailto:hr@techvitta.in" className="block w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-all hover:shadow-lg text-center">
          Email us
        </a>
      </div>
    </div>
  );
}