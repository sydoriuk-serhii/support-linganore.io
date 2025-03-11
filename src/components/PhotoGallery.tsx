
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface City {
  id: number;
  name: string;
  images: string[];
  description: string;
}

const cities: City[] = [
  {
    id: 1,
    name: "Mariupol",
    images: ["/images/mariupol1.jpg", "/images/mariupol2.jpg", "/images/mariupol3.jpg"],
    description: "Mariupol endured intense fighting and siege conditions, suffering severe damage to civilian infrastructure and humanitarian crisis."
  },
  {
    id: 2,
    name: "Bucha",
    images: ["/images/bucha1.jpg", "/images/bucha2.jpg"],
    description: "Bucha became a symbol of war crimes, with evidence of civilian casualties discovered after Russian forces withdrew."
  },
  {
    id: 3,
    name: "Kherson",
    images: ["/images/kherson1.jpg", "/images/kherson2.jpg"],
    description: "Kherson was the first major city to fall and later be liberated, experiencing months of occupation and resistance."
  }
];

const PhotoGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageClick = (city: City) => {
    setSelectedCity(city);
    setIsDialogOpen(true);
  };

  return (
    <div className="relative">
      <div 
        className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg transition-all duration-500"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onClick={() => handleImageClick(cities[currentImageIndex])}
      >
        {cities.map((city, index) => (
          <div
            key={city.id}
            className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={city.images[0]}
              alt={city.name}
              className="w-full h-full object-cover"
            />
            {showInfo && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-all duration-300">
                <h3 className="text-xl font-bold">{city.name}</h3>
                <p className="text-sm">Click for more information</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCity?.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-700 mb-4">{selectedCity?.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {selectedCity?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedCity.name} ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
