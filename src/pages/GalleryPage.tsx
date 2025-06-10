import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Image, ChevronDown, ChevronLeft, ChevronRight, Play, Video, X } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
interface GalleryImage {
  src: string;
  alt: string;
}
interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}
interface GalleryCategory {
  title: string;
  images: GalleryImage[];
}
interface AmenitySubcategory {
  title: string;
  images: GalleryImage[];
  videos?: VideoItem[];
}
interface AmenitiesCategory {
  title: string;
  subcategories: Record<string, AmenitySubcategory>;
}
interface VideosCategory {
  title: string;
  videos: VideoItem[];
}
type GalleryCategoryType = GalleryCategory | AmenitiesCategory | VideosCategory;
const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<GalleryImage[]>([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>(['exterior']);
  const galleryCategories: Record<string, GalleryCategoryType> = {
    exterior: {
      title: "Exterior",
      images: [{
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Exterior/_DSC1209%20(1).jpg?updatedAt=1749486972610",
        alt: "Garden pathway"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Exterior/DJI_0657.jpg?updatedAt=1749487103646",
        alt: "Exterior view"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Exterior/_DSC1212.JPG?updatedAt=1749487139291",
        alt: "Landscape view"
      }]
    },
    corridors: {
      title: "Corridors",
      images: [{
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Corridors/_DSC1237.JPG?updatedAt=1749486628604",
        alt: "Garden pathway"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Corridors/_DSC1241%20(2).jpg?updatedAt=1749486672844",
        alt: "Exterior view"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Corridors/_DSC1329%20(1).jpg?updatedAt=1749486828383",
        alt: "Landscape view"
      }]
    },

    lobby: {
      title: "Lobby",
      images: [{
        src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
        alt: "Main lobby"
      }, {
        src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
        alt: "Reception area"
      }, {
        src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
        alt: "Lobby seating"
      }, {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
        alt: "Welcome area"
      }]
    },
    amenities: {
      title: "Amenities",
      subcategories: {
        gym: {
          title: "Gym",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Gym%20/_DSC1216.png?updatedAt=1749487463412",
            alt: "Main gym area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Gym%20/_DSC1215%20(1).jpg?updatedAt=1749489855132",
            alt: "Cardio section"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Gym%20/_DSC1217%20(1).JPG?updatedAt=1749489900850",
            alt: "Weight training"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Gym%20/_DSC1228.JPG?updatedAt=1749490008769",
            alt: "Fitness equipment"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Gym%20/_DSC1229.JPG?updatedAt=1749490027431",
            alt: "Cardio equipment"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Gym%20/_DSC1231%20(1).jpg?updatedAt=1749491571075",
            alt: "Treadmill"
          }  
        ],
          videos: [{
            id: "gym1",
            title: "State-of-the-Art Gym Tour",
            thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Take a virtual tour of our modern fitness facility"
          }]
        },
        library: {
          title: "Library",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Librarry/_DSC6652.png?updatedAt=1749492021261",
            alt: "Reading room"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Librarry/_DSC6649.png?updatedAt=1749492021348",
            alt: "Book collection"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Librarry/_DSC6661.png?updatedAt=1749492021847",
            alt: "Study area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Librarry/_DSC6654.png?updatedAt=1749492021796",
            alt: "Book rack"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Librarry/_DSC6668.png?updatedAt=1749492022019",
            alt: "Bookshelf"
          }
        ]
        },
        yoga: {
          title: "Yoga",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Yoga/_DSC1494.JPG?updatedAt=1749528345325",
            alt: "Yoga studio"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Yoga/_DSC1199.JPG?updatedAt=1749528354404",
            alt: "Meditation space"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Yoga/_DSC1185%20(1).jpg?updatedAt=1749528557080",
            alt: "Practice area"
          },{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Yoga/_DSC1209%20(2)%20(1).jpg?updatedAt=1749528558362",
            alt: "Meditation space"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Yoga/_DSC1177%20(1).jpg?updatedAt=1749528557098",
            alt: "Meditation space"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Yoga/_DSC1193%20(1).jpg?updatedAt=1749528557172",
            alt: "Meditation space"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Yoga/_DSC1202%20(2).jpg?updatedAt=1749528557517",
            alt: "Meditation space"
          },
        
        ],
          videos: [{
            id: "yoga1",
            title: "Yoga Studio Overview",
            thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Experience the tranquility of our yoga and meditation spaces"
          }]
        },
        medicare: {
          title: "Medicare",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Medical%20Care/_DSC6800.jpg?updatedAt=1749492446800",
            alt: "Medical facility"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Medical%20Care/_DSC6806.png?updatedAt=1749492454225",
            alt: "Healthcare room"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Medical%20Care/_DSC6796.png?updatedAt=1749492454470",
            alt: "Medical equipment"
          }]
        },
        pools: {
          title: "Pools & Jacuzzi",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Pool%20&%20Jacuzzi/_DSC1908.JPG?updatedAt=1749492737609",
            alt: "Swimming pool"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Pool%20&%20Jacuzzi/_DSC1389.JPG?updatedAt=1749492741817",
            alt: "Jacuzzi area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Pool%20&%20Jacuzzi/_DSC1922.JPG?updatedAt=1749492741864",
            alt: "Pool deck"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Pool%20&%20Jacuzzi/_DSC1881.JPG?updatedAt=1749492742176",
            alt: "Pool table"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Pool%20&%20Jacuzzi/_DSC1879.JPG?updatedAt=1749492742271",
            alt: "Pool table"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Pool%20&%20Jacuzzi/_DSC1882.JPG?updatedAt=1749492742444",
            alt: "Pool table"
          }
        ]
        },
        dining: {
          title: "Dining",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Private%20Dining/_DSC1861%20(1).jpg?updatedAt=1749493270482",
            alt: "Dining hall"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Private%20Dining/_DSC1837%20(2)%20(1).jpg?updatedAt=1749493270577",
            alt: "Dining area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Private%20Dining/_DSC1333.JPG?updatedAt=1749493284509",
            alt: "Community dining"
          }
          , {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Private%20Dining/_DSC1344.JPG?updatedAt=1749493284584",
            alt: "Community dining"
          }
          , {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Private%20Dining/_DSC1330.JPG?updatedAt=1749493284760",
            alt: "Community dining"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Private%20Dining/_DSC1854.JPG?updatedAt=1749493284889",
            alt: "Community dining"
          }
        ]
        },
        restaurant: {
          title: "Restaurant",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1311%20(1).jpg?updatedAt=1749525199382",
            alt: "Restaurant interior"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1302%20(2).jpg?updatedAt=1749525200674",
            alt: "Fine dining"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1853%20(1).jpg?updatedAt=1749525201571",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1325%20(1).jpg?updatedAt=1749525201690",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1255%20(2).jpg?updatedAt=1749525201981",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1259%20(2).jpg?updatedAt=1749525202045",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1329%20(1)%20(1).jpg?updatedAt=1749525202069",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1306%20(1).jpg?updatedAt=1749526905571",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1252%20(1).jpg?updatedAt=1749526908426",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1259%20(3)%20(1).jpg?updatedAt=1749526909241",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1245%20(1).jpg?updatedAt=1749526909420",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1253%20(1).jpg?updatedAt=1749526909492",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1250%20(1).jpg?updatedAt=1749526909576",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1268%20(1).jpg?updatedAt=1749526909553",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1242%20(1).jpg?updatedAt=1749526909562",
            alt: "Restaurant seating"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Restaurant/_DSC1269%20(1).jpg?updatedAt=1749526909584",
            alt: "Restaurant seating"
          }]
        },
        saloon: {
          title: "Saloon and Spa", 
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1616.jpg?updatedAt=1749527444754",
            alt: "Sauna room"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1651.jpg?updatedAt=1749527444944",
            alt: "Steam room"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1609.jpg?updatedAt=1749527445342",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1675.jpg?updatedAt=1749527445664",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1637.jpg?updatedAt=1749527448478",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1662.JPG?updatedAt=1749527595174",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1619.JPG?updatedAt=1749527595213",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1648.JPG?updatedAt=1749527595529",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1676.JPG?updatedAt=1749527595513",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1628.JPG?updatedAt=1749527595563",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1632.JPG?updatedAt=1749527628404",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1640%20(1).jpg?updatedAt=1749527688179",
            alt: "Wellness area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Spa%20etc/_DSC1696%20(1).jpg?updatedAt=1749527688307",
            alt: "Wellness area"
          }]
        },  
        recreation: {
          title: "Recreation Room (Chess, Carrom, Cards)",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Rec%20room/_DSC6745.jpg?updatedAt=1749493648460",
            alt: "Recreation room"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Rec%20room/_DSC6739.jpg?updatedAt=17494936484850",
            alt: "Game tables"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Rec%20room/_DSC6731.jpg?updatedAt=1749493648566",
            alt: "Social games area"
          }, {
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Rec%20room/_DSC6735.jpg?updatedAt=1749493648852",
            alt: "Recreation room"
          }
        ]
        },
        poolTable: {
          title: "Pool Table",
          images: [{
            src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Pool%20table/Screenshot%202025-06-06%20180147.png?updatedAt=1749492961943",
            alt: "Pool table area"
          }, {
            src: "hhttps://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Pool%20table/_DSC6618.png?updatedAt=1749493032485",
            alt: "Billiards room"
          }]
        }
      }
    },

    studio: {
      title: "Studio",
      images: [{
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Studio%20Appartment/Screenshot%202025-06-06%20170502.png?updatedAt=1749527870730",
        alt: "Modern studio apartment"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Studio%20Appartment/_DSC1506.JPG?updatedAt=1749527880650",
        alt: "Studio living area"
      },{
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Studio%20Appartment/_DSC1556.JPG?updatedAt=1749527881030",
        alt: "Compact studio design"
      },{
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Studio%20Appartment/_DSC1548%20(1).jpg?updatedAt=1749527959259",
        alt: "Compact studio design"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Studio%20Appartment/_DSC1565%20-%20Copy%20(1).jpg?updatedAt=1749527959716",
        alt: "Studio bedroom area"
      }]
    },
    onebhk: { 
      title: "1BHK",
      images: [{
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/1BHK/_DSC6704.jpg?updatedAt=1749473533772 ",
        alt: "1BHK living room"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/1BHK/_DSC6703.jpg?updatedAt=1749469796091",
        alt: "1BHK bedroom"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/1BHK/_DSC6700.jpg?updatedAt=1749469757051",
        alt: "1BHK kitchen"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/1BHK/_DSC6690.jpg?updatedAt=1749469726423",
        alt: "1BHK bathroom"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/2BHK/_DSC1972%20(1).jpg?updatedAt=1749470200400",
        alt: "1BHK balcony"
      }]
    },
    twobhk: {
      title: "2BHK",
      images: [{
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/2BHK/005.jpg?updatedAt=1749470164831",
        alt: "2BHK living room"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/2BHK/_DSC1962%20(1).jpg?updatedAt=1749470119057",
        alt: "2BHK master bedroom"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/2BHK/_DSC1957%20(2).jpg?updatedAt=1749470056411",
        alt: "2BHK second bedroom"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/2BHK/_DSC1940%20(1).jpg?updatedAt=1749469955530",
        alt: "2BHK kitchen"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/2BHK/_DSC1943.JPG?updatedAt=1749469913562",
        alt: "2BHK bathroom"
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/2BHK/_DSC1972%20(1).jpg?updatedAt=1749470200400",
        alt: "2BHK balcony"   
      }, {
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/2BHK/008.jpg?updatedAt=1749470315428",
        alt: "2BHK master bathroom"
      }
      
      
    ]
    },
    videos: {
      title: "Videos",
      videos: [{
        id: "video1",
        title: "Eden Gracious Living Tour",
        thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Take a comprehensive virtual tour of our peaceful wellness sanctuary"
      }, {
        id: "video2",
        title: "Wellness Center Experience",
        thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Explore our state-of-the-art wellness facilities and amenities"
      }, {
        id: "video3",
        title: "Community Living at Eden",
        thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Discover the warm community and social spaces at Eden"
      }, {
        id: "video4",
        title: "Apartment Showcase",
        thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "See our beautifully designed apartments and living spaces"
      }]
    },
    miscellaneous: {
      title: "Miscellaneous",
      images: [{
        src: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Gallery/Misc/_DSC1324.JPG?updatedAt=1749492253399",
        alt: "Common area"
      }
    ]
    }
  };
  const openLightbox = (images: GalleryImage[], startIndex: number) => {
    setCurrentImages(images);
    setSelectedImageIndex(startIndex);
    setIsOpen(true);
  };
  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev === 0 ? currentImages.length - 1 : prev - 1);
    } else {
      setSelectedImageIndex(prev => prev === currentImages.length - 1 ? 0 : prev + 1);
    }
  };
  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsVideoModalOpen(true);
  };
  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]);
  };
  const renderImageGrid = (images: GalleryImage[]) => <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      {images.map((image, index) => <div key={index} className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300" onClick={() => openLightbox(images, index)}>
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute inset-0 bg-eden-dark/0 group-hover:bg-eden-dark/20 transition-all duration-300 flex items-center justify-center">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Image size={24} />
            </div>
          </div>
        </div>)}
    </div>;
  const renderVideoGrid = (videos: VideoItem[]) => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map(video => <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => openVideoModal(video.videoUrl)}>
          <div className="relative overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-eden ml-1" />
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <h4 className="font-semibold text-stone-800 mb-2">{video.title}</h4>
            <p className="text-sm text-stone-600 line-clamp-2">{video.description}</p>
          </CardContent>
        </Card>)}
    </div>;
  const isAmenitiesCategory = (category: GalleryCategoryType): category is AmenitiesCategory => {
    return 'subcategories' in category;
  };
  const isGalleryCategory = (category: GalleryCategoryType): category is GalleryCategory => {
    return 'images' in category;
  };
  const isVideosCategory = (category: GalleryCategoryType): category is VideosCategory => {
    return 'videos' in category;
  };
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Banner Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80')"
      }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-xl font-light">Explore the elegance and charm of Eden through curated images and videos.
        </p>
        </div>
      </section>

      <main className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">What Life at Eden Looks Like</h2>
            <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
            <p className="text-eden-text text-lg">Get a closer look at the spaces, details, and experiences that define our stays
          </p>
          </div>

          <div className="space-y-6 mb-16">
            {/* Regular Categories - ordered with miscellaneous at the end */}
            {Object.entries(galleryCategories).filter(([key]) => !['amenities', 'videos', 'miscellaneous'].includes(key)).concat([['miscellaneous', galleryCategories.miscellaneous]]).map(([key, category]) => <Card key={key} className="overflow-hidden shadow-lg border-0">
                <Collapsible open={openSections.includes(key)} onOpenChange={() => toggleSection(key)}>
                  <CollapsibleTrigger asChild>
                    <div className="cursor-pointer hover:bg-stone-50 transition-colors bg-gradient-to-r from-stone-50 to-white p-6">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-serif text-stone-800 flex items-center space-x-3">
                          <div className="w-2 h-8 bg-eden rounded-full"></div>
                          <span>{category.title}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-eden/10 text-eden border-0 px-3 py-1">
                            {isGalleryCategory(category) ? category.images.length : 0} photos
                          </Badge>
                          <ChevronDown className={`w-5 h-5 text-stone-600 transition-transform duration-300 ${openSections.includes(key) ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      {isGalleryCategory(category) && renderImageGrid(category.images)}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>)}

            {/* Amenities Category */}
            <Card className="overflow-hidden shadow-lg border-0">
              <Collapsible open={openSections.includes('amenities')} onOpenChange={() => toggleSection('amenities')}>
                <CollapsibleTrigger asChild>
                  <div className="cursor-pointer hover:bg-stone-50 transition-colors bg-gradient-to-r from-stone-50 to-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-serif text-stone-800 flex items-center space-x-3">
                        <div className="w-2 h-8 bg-eden rounded-full"></div>
                        <span>Amenities</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="bg-eden/10 text-eden border-0 px-3 py-1">
                          {isAmenitiesCategory(galleryCategories.amenities) ? Object.keys(galleryCategories.amenities.subcategories).length : 0} categories
                        </Badge>
                        <ChevronDown className={`w-5 h-5 text-stone-600 transition-transform duration-300 ${openSections.includes('amenities') ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 space-y-8">
                    {isAmenitiesCategory(galleryCategories.amenities) && Object.entries(galleryCategories.amenities.subcategories).map(([subKey, subcategory]) => <div key={subKey} className="border-l-4 border-eden/30 pl-6">
                          <h3 className="text-lg font-semibold text-stone-800 mb-4 flex items-center">
                            {subcategory.title}
                            <Badge variant="outline" className="ml-3 border-eden/50 text-eden">
                              {subcategory.images.length} photos
                              {subcategory.videos && ` • ${subcategory.videos.length} videos`}
                            </Badge>
                          </h3>
                          {renderImageGrid(subcategory.images)}
                          {subcategory.videos && subcategory.videos.length > 0 && <div>
                              <h4 className="text-md font-medium text-stone-700 mb-3 flex items-center">
                                <Video className="w-4 h-4 mr-2" />
                                Videos
                              </h4>
                              {renderVideoGrid(subcategory.videos)}
                            </div>}
                        </div>)}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Videos Category */}
            <Card className="overflow-hidden shadow-lg border-0">
              <Collapsible open={openSections.includes('videos')} onOpenChange={() => toggleSection('videos')}>
                <CollapsibleTrigger asChild>
                  <div className="cursor-pointer hover:bg-stone-50 transition-colors bg-gradient-to-r from-stone-50 to-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-serif text-stone-800 flex items-center space-x-3">
                        <div className="w-2 h-8 bg-eden rounded-full"></div>
                        <span>Videos</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="bg-eden/10 text-eden border-0 px-3 py-1">
                          {isVideosCategory(galleryCategories.videos) ? galleryCategories.videos.videos.length : 0} videos
                        </Badge>
                        <ChevronDown className={`w-5 h-5 text-stone-600 transition-transform duration-300 ${openSections.includes('videos') ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6">
                    {isVideosCategory(galleryCategories.videos) && renderVideoGrid(galleryCategories.videos.videos)}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>
        </div>
      </main>

      {/* Enhanced Image Lightbox with Navigation */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-black/95">
          <div className="relative">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
            
            {currentImages.length > 1 && <>
                <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full" onClick={() => navigateImage('prev')}>
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full" onClick={() => navigateImage('next')}>
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>}
            
            <img src={currentImages[selectedImageIndex]?.src} alt={currentImages[selectedImageIndex]?.alt} className="w-full h-[80vh] object-contain" />
            
            {currentImages.length > 1 && <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {currentImages.length}
              </div>}
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="aspect-video">
            <iframe src={selectedVideo} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>;
};
export default GalleryPage;