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
        src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
        alt: "Garden pathway"
      }, {
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
        alt: "Exterior view"
      }, {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
        alt: "Landscape view"
      }, {
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
        alt: "Building exterior"
      }, {
        src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
        alt: "Garden view"
      }, {
        src: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80",
        alt: "Courtyard"
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
            src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
            alt: "Main gym area"
          }, {
            src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
            alt: "Cardio section"
          }, {
            src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
            alt: "Weight training"
          }, {
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
            alt: "Fitness equipment"
          }],
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
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
            alt: "Reading room"
          }, {
            src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80",
            alt: "Book collection"
          }, {
            src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80",
            alt: "Study area"
          }]
        },
        yoga: {
          title: "Yoga",
          images: [{
            src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
            alt: "Yoga studio"
          }, {
            src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
            alt: "Meditation space"
          }, {
            src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
            alt: "Practice area"
          }],
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
            src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80",
            alt: "Medical facility"
          }, {
            src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80",
            alt: "Healthcare room"
          }, {
            src: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80",
            alt: "Medical equipment"
          }]
        },
        pools: {
          title: "Pools & Jacuzzi",
          images: [{
            src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
            alt: "Swimming pool"
          }, {
            src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
            alt: "Jacuzzi area"
          }, {
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
            alt: "Pool deck"
          }]
        },
        dining: {
          title: "Dining",
          images: [{
            src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
            alt: "Dining hall"
          }, {
            src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
            alt: "Dining area"
          }, {
            src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&q=80",
            alt: "Community dining"
          }]
        },
        restaurant: {
          title: "Restaurant",
          images: [{
            src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&q=80",
            alt: "Restaurant interior"
          }, {
            src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
            alt: "Fine dining"
          }, {
            src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
            alt: "Restaurant seating"
          }]
        },
        saloon: {
          title: "Saloon (Sauna & Steam)",
          images: [{
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
            alt: "Sauna room"
          }, {
            src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
            alt: "Steam room"
          }, {
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
            alt: "Wellness area"
          }]
        },
        recreation: {
          title: "Recreation Room (Chess, Carrom, Cards)",
          images: [{
            src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80",
            alt: "Recreation room"
          }, {
            src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80",
            alt: "Game tables"
          }, {
            src: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80",
            alt: "Social games area"
          }]
        },
        poolTable: {
          title: "Pool Table",
          images: [{
            src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80",
            alt: "Pool table area"
          }, {
            src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80",
            alt: "Billiards room"
          }, {
            src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80",
            alt: "Recreation space"
          }]
        }
      }
    },

    studio: {
      title: "Studio",
      images: [{
        src: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80",
        alt: "Modern studio apartment"
      }, {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        alt: "Studio living area"
      }, {
        src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80",
        alt: "Compact studio design"
      }, {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
        alt: "Studio bedroom area"
      }]
    },
    onebhk: {
      title: "1BHK",
      images: [{
        src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80",
        alt: "1BHK living room"
      }, {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        alt: "1BHK bedroom"
      }, {
        src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
        alt: "1BHK kitchen"
      }, {
        src: "https://images.unsplash.com/photo-1602872030219-ad4b9c0c5309?auto=format&fit=crop&q=80",
        alt: "1BHK bathroom"
      }, {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
        alt: "1BHK balcony"
      }]
    },
    twobhk: {
      title: "2BHK",
      images: [{
        src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
        alt: "2BHK living room"
      }, {
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        alt: "2BHK master bedroom"
      }, {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
        alt: "2BHK second bedroom"
      }, {
        src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
        alt: "2BHK kitchen"
      }, {
        src: "https://images.unsplash.com/photo-1602872030219-ad4b9c0c5309?auto=format&fit=crop&q=80",
        alt: "2BHK bathroom"
      }]
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
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
        alt: "Common area"
      }, {
        src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
        alt: "Garden view"
      }, {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
        alt: "Wellness space"
      }, {
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
        alt: "Peaceful corner"
      }, {
        src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
        alt: "Community space"
      }]
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