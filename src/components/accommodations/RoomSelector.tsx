
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { packageData } from "@/data/packageData";

// interface RoomSelectorProps {
//   selectedCategory: string;
//   selectedRoom: string;
//   onRoomChange: (room: string) => void;
// }

// const RoomSelector: React.FC<RoomSelectorProps> = ({
//   selectedCategory,
//   selectedRoom,
//   onRoomChange,
// }) => {
//   if (!selectedCategory) return null;

//   const categoryData = selectedCategory === "studio" ? packageData.studio : packageData.bhk2;

//   return (
//     <div className="mb-12">
//       <h3 className="text-2xl font-serif text-eden-dark mb-8 text-center">
//         Select Your {selectedCategory === "studio" ? "Studio" : "Apartment"}
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {Object.keys(categoryData).map((roomName) => (
//           <Card
//             key={roomName}
//             className={cn(
//               "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
//               selectedRoom === roomName ? "border-eden bg-eden-light/20" : "border-eden-light/50"
//             )}
//             onClick={() => onRoomChange(roomName)}
//           >
//             <CardHeader>
//               <CardTitle className="text-lg font-serif text-eden-dark text-center">{roomName}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-center">
//                 <Button 
//                   variant={selectedRoom === roomName ? "default" : "outline"}
//                   className="w-full"
//                 >
//                   {selectedRoom === roomName ? "Selected" : "Select This Room"}
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoomSelector;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Leaf } from "lucide-react";
import { RoomType } from "@/types/accommodation";
import { roomTypes } from "../../data/packageData";

interface RoomTypeSelectorProps {
  onSelect: (roomType: RoomType) => void;
}

const RoomTypeSelector = ({ onSelect }: RoomTypeSelectorProps) => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-8 h-8 text-eden mr-3" />
          <h2 className="text-4xl font-serif font-bold text-stone-800">Choose Your Sanctuary</h2>
        </div>
        <p className="text-stone-600 text-lg font-light">Select the accommodation that nurtures your well-being</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roomTypes.map((roomType) => (
          <Card key={roomType.id} className="group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src={roomType.image}
                alt={roomType.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <Badge className="absolute top-6 left-6 bg-white/90 text-stone-700 hover:bg-white border-0 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                {roomType.size}
              </Badge>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif font-bold text-stone-800">
                {roomType.name}
              </CardTitle>
              <CardDescription className="text-stone-600 text-base leading-relaxed font-light">
                {roomType.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-stone-600">
                  <Users className="w-5 h-5 text-eden" />
                  <span className="font-medium">{roomType.guests} guests</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-stone-500 font-medium">Starting from</p>
                  <p className="text-3xl font-serif font-bold text-emerald-700">
                    ₹{roomType.startingPrice.toLocaleString()}
                  </p>
                  <p className="text-sm text-stone-500">per night</p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-eden hover:bg-emerald-700 text-white border-0 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                onClick={() => onSelect(roomType)}
              >
                Know More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoomTypeSelector;

