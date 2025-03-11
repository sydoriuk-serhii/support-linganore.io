
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const organizations = [
  {
    name: "United24",
    description: "Official fundraising platform of Ukraine, initiated by the President of Ukraine.",
    url: "https://u24.gov.ua/"
  },
  {
    name: "Come Back Alive",
    description: "One of the largest charitable foundations in Ukraine that supports the Armed Forces.",
    url: "https://savelife.in.ua/en/"
  },
  {
    name: "World Central Kitchen",
    description: "Provides meals in response to humanitarian, climate, and community crises in Ukraine.",
    url: "https://wck.org/"
  },
  {
    name: "Razom for Ukraine",
    description: "Supporting the people of Ukraine in their pursuit of democracy with dignity.",
    url: "https://razomforukraine.org/"
  }
];

const SupportOrganizations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {organizations.map((org, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{org.name}</span>
              <a 
                href={org.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </CardTitle>
            <CardDescription>{org.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default SupportOrganizations;
