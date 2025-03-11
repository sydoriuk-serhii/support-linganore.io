
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog } from '@/components/ui/dialog';
import PhotoGallery from '@/components/PhotoGallery';
import SupportOrganizations from '@/components/SupportOrganizations';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-yellow-400 opacity-10"></div>
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-blue-600">Stand With</span>{" "}
            <span className="text-yellow-500">Ukraine</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto animate-fade-in">
            Join Linganore High School in supporting Ukraine and learning about the impact of war on occupied territories
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50" id="gallery">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Occupied Cities</span>
          </h2>
          <PhotoGallery />
        </div>
      </section>

      {/* Support Organizations Section */}
      <section className="py-16" id="support">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-yellow-500">Support Organizations</span>
          </h2>
          <SupportOrganizations />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Linganore High School - Standing With Ukraine</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
