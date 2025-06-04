
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCategory {
  title: string;
  images: GalleryImage[];
}

interface AmenitySubcategory {
  title: string;
  images: GalleryImage[];
}

interface AmenitiesCategory {
  title: string;
  subcategories: Record<string, AmenitySubcategory>;
}

type GalleryCategoryType = GalleryCategory | AmenitiesCategory;

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [openSections, setOpenSections] = useState<string[]>(['exterior']);

  const galleryCategories: Record<string, GalleryCategoryType> = {
    exterior: {
      title: "Exterior",
      images: [
        { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80", alt: "Garden pathway" },
        { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", alt: "Exterior view" },
        { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80", alt: "Landscape view" }
      ]
    },
    corridors: {
      title: "Corridors",
      images: [
        { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80", alt: "Main corridor" },
        { src: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80", alt: "Wellness corridor" },
        { src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80", alt: "Residential corridor" }
      ]
    },
    lobby: {
      title: "Lobby",
      images: [
        { src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80", alt: "Main lobby" },
        { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80", alt: "Reception area" },
        { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80", alt: "Lobby seating" }
      ]
    },
    amenities: {
      title: "Amenities",
      subcategories: {
        gym: {
          title: "Gym",
          images: [
            { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80", alt: "Main gym area" },
            { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", alt: "Cardio section" }
          ]
        },
        library: {
          title: "Library",
          images: [
            { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80", alt: "Reading area" },
            { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80", alt: "Book collection" }
          ]
        },
        yoga: {
          title: "Yoga",
          images: [
            { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80", alt: "Yoga studio" },
            { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", alt: "Meditation space" }
          ]
        },
        medicare: {
          title: "Medicare",
          images: [
            { src: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80", alt: "Medical facility" },
            { src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80", alt: "Consultation room" }
          ]
        },
        pools: {
          title: "Pools & Jacuzzi",
          images: [
            { src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80", alt: "Swimming pool" },
            { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80", alt: "Jacuzzi area" }
          ]
        },
        dining: {
          title: "Dining",
          images: [
            { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80", alt: "Dining hall" },
            { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80", alt: "Private dining" }
          ]
        },
        restaurant: {
          title: "Restaurant",
          images: [
            { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", alt: "Restaurant interior" },
            { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80", alt: "Restaurant seating" }
          ]
        },
        saloon: {
          title: "Saloon (Sauna & Steam)",
          images: [
            { src: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80", alt: "Sauna room" },
            { src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80", alt: "Steam room" }
          ]
        },
        recreation: {
          title: "Recreation Room (Chess, Carrom, Cards)",
          images: [
            { src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80", alt: "Game room" },
            { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80", alt: "Recreation area" }
          ]
        },
        poolTable: {
          title: "Pool Table",
          images: [
            { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80", alt: "Pool table" },
            { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80", alt: "Billiards area" }
          ]
        }
      }
    },
    miscellaneous: {
      title: "Miscellaneous",
      images: [
        { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", alt: "Common area" },
        { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80", alt: "Garden view" },
        { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80", alt: "Wellness space" }
      ]
    }
  };

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderImageGrid = (images: GalleryImage[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div 
          key={index}
          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => openLightbox(image.src)}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-eden-dark/0 group-hover:bg-eden-dark/30 transition-all duration-300 flex items-center justify-center">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const isAmenitiesCategory = (category: GalleryCategoryType): category is AmenitiesCategory => {
    return 'subcategories' in category;
  };

  const isGalleryCategory = (category: GalleryCategoryType): category is GalleryCategory => {
    return 'images' in category;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-xl font-light">Explore our wellness sanctuary through images</p>
        </div>
      </section>

      <main className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">
              Visual Journey Through Eden
            </h2>
            <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
            <p className="text-eden-text text-lg">
              Discover every corner of our wellness sanctuary
            </p>
          </div>

          <div className="space-y-8">
            {/* Regular Categories */}
            {Object.entries(galleryCategories).filter(([key]) => key !== 'amenities').map(([key, category]) => (
              <Card key={key} className="overflow-hidden">
                <Collapsible 
                  open={openSections.includes(key)} 
                  onOpenChange={() => toggleSection(key)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-stone-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-serif text-stone-800">
                          {category.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">
                            {isGalleryCategory(category) ? category.images.length : 0} photos
                          </Badge>
                          <ChevronDown className={`w-5 h-5 transition-transform ${
                            openSections.includes(key) ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      {isGalleryCategory(category) && renderImageGrid(category.images)}
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}

            {/* Amenities Category with Subcategories */}
            <Card className="overflow-hidden">
              <Collapsible 
                open={openSections.includes('amenities')} 
                onOpenChange={() => toggleSection('amenities')}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-stone-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-serif text-stone-800">
                        Amenities
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">
                          {isAmenitiesCategory(galleryCategories.amenities) ? 
                            Object.keys(galleryCategories.amenities.subcategories).length : 0} categories
                        </Badge>
                        <ChevronDown className={`w-5 h-5 transition-transform ${
                          openSections.includes('amenities') ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 space-y-6">
                    {isAmenitiesCategory(galleryCategories.amenities) && 
                      Object.entries(galleryCategories.amenities.subcategories).map(([subKey, subcategory]) => (
                        <div key={subKey}>
                          <h3 className="text-lg font-medium text-stone-800 mb-4 flex items-center">
                            {subcategory.title}
                            <Badge variant="outline" className="ml-2">
                              {subcategory.images.length} photos
                            </Badge>
                          </h3>
                          {renderImageGrid(subcategory.images)}
                        </div>
                      ))
                    }
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <img 
            src={selectedImage} 
            alt="Gallery image" 
            className="w-full h-full object-contain"
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default GalleryPage;
