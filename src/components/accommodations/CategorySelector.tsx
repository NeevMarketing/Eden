
// import React from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Bed } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface CategorySelectorProps {
//   selectedCategory: string;
//   onCategoryChange: (category: string) => void;
// }

// const CategorySelector: React.FC<CategorySelectorProps> = ({
//   selectedCategory,
//   onCategoryChange,
// }) => {
//   return (
//     <div className="mb-12">
//       <h3 className="text-2xl font-serif text-eden-dark mb-8 text-center">Choose Your Accommodation Type</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//         <Card 
//           className={cn(
//             "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
//             selectedCategory === "studio" ? "border-eden bg-eden-light/20" : "border-eden-light/50"
//           )}
//           onClick={() => onCategoryChange("studio")}
//         >
//           <CardHeader className="text-center">
//             <Bed className="w-12 h-12 text-eden mx-auto mb-4" />
//             <CardTitle className="text-xl font-serif text-eden-dark">Studio Apartments</CardTitle>
//             <CardDescription className="text-lg">
//               Cozy, well-designed spaces perfect for comfortable living
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <p className="text-center text-eden-text">3 options available</p>
//             <p className="text-center text-sm text-muted-foreground mt-2">
//               Hamilton • Skyline • Crest
//             </p>
//           </CardContent>
//         </Card>

//         <Card 
//           className={cn(
//             "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
//             selectedCategory === "bhk2" ? "border-eden bg-eden-light/20" : "border-eden-light/50"
//           )}
//           onClick={() => onCategoryChange("bhk2")}
//         >
//           <CardHeader className="text-center">
//             <Bed className="w-12 h-12 text-eden mx-auto mb-4" />
//             <CardTitle className="text-xl font-serif text-eden-dark">1BHK & 2BHK Apartments</CardTitle>
//             <CardDescription className="text-lg">
//               Spacious apartments with separate living areas for enhanced comfort
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <p className="text-center text-eden-text">3 options available</p>
//             <p className="text-center text-sm text-muted-foreground mt-2">
//               Renaissance 2BHK • Victoria 2BHK • Regency 1BHK
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default CategorySelector;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ChevronLeft, Home } from "lucide-react";
import { RoomType, RoomCategory } from "@/types/accommodation";
import { roomCategories } from "../../data/packageData";

interface RoomCategorySelectorProps {
  roomType: RoomType;
  onSelect: (category: RoomCategory) => void;
  onBack: () => void;
}

const RoomCategorySelector = ({ roomType, onSelect, onBack }: RoomCategorySelectorProps) => {
  const categories = roomCategories.filter(cat => cat.roomTypeId === roomType.id);

  return (
    <div className="space-y-10">
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="lg"
          onClick={onBack}
          className="flex items-center space-x-2 border-stone-300 text-stone-600 hover:bg-stone-50 hover:border-stone-400 rounded-xl"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <Home className="w-8 h-8 text-emerald-600 mr-3" />
          <h2 className="text-4xl font-serif font-bold text-stone-800">
            Choose Your {roomType.name} Collection
          </h2>
        </div>
        <p className="text-stone-600 text-lg font-light">Select from our curated sanctuary categories</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Card key={category.id} className="group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <Badge className="absolute top-6 left-6 bg-white/90 text-stone-700 hover:bg-white border-0 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                {category.size}
              </Badge>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-serif font-bold text-stone-800">
                {category.name}
              </CardTitle>
              <CardDescription className="text-stone-600 leading-relaxed font-light">
                {category.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium text-stone-800">Sanctuary Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-0 rounded-full">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-stone-600">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <span className="font-medium">{category.guests} guests</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-stone-500 font-medium">Starting from</p>
                  <p className="text-2xl font-serif font-bold text-emerald-700">
                    ₹{category.startingPrice.toLocaleString()}
                  </p>
                  <p className="text-sm text-stone-500">per night</p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-0 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                onClick={() => onSelect(category)}
              >
                Select Sanctuary
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoomCategorySelector;
