
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const galleryImages = [
    {
      src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Gallery/vlcsnap-2025-06-09-06h36m15s474.png?updatedAt=1749466771216",
      alt: "Garden pathway at Eden"
    },
    {
      src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Gallery/_DSC6746.jpg?updatedAt=1749466721083",
      alt: "Wellness center"
    },
    {
      src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Gallery/_DSC6670.jpg?updatedAt=1749466476489",
      alt: "Peaceful surroundings"
    },
    {
      src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Gallery/_DSC1837%20(1).jpg?updatedAt=1749466435951",
      alt: "Studio apartment"
    },
    {
      src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Gallery/_DSC1620.JPG?updatedAt=1749466373617",
      alt: "1BHK apartment"
    },
    {
      src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Gallery/_DSC1491.JPG?updatedAt=1749466311713",
      alt: "2BHK apartment"
    },
    {
      src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Gallery/_DSC1259%20(1).jpg?updatedAt=1749466276851",
      alt: "Nature view from Eden"
    },
    {
      src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Gallery/_DSC1217.JPG?updatedAt=1749466176042", 
      alt: "Community living area"
    },
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const handleExploreGallery = () => {
    window.open('/gallery', '_blank');
  };


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">Photo Gallery</h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
          <p className="text-eden-text">
            Take a visual journey through our thoughtfully designed spaces and serene environments.
          </p>
        </div>
        <Carousel
         responsive={responsive}
         autoPlay
         infinite
         autoPlaySpeed={2000}
         arrows={false}
        //  showDots
         >
        {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group p-8"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className=" rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-eden-dark/0 group-hover:bg-eden-dark/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image size={24} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="text-center">
          <Button 
            onClick={handleExploreGallery}
            className="bg-eden hover:bg-emerald-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 md:mt-8"
          >
            Explore Gallery
          </Button>
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <img 
            src={selectedImage} 
            alt="Gallery image" 
            className="w-full h-full object-contain"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
