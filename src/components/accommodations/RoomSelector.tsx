
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { packageData } from "@/data/packageData";

interface RoomSelectorProps {
  selectedCategory: string;
  selectedRoom: string;
  onRoomChange: (room: string) => void;
}

const RoomSelector: React.FC<RoomSelectorProps> = ({
  selectedCategory,
  selectedRoom,
  onRoomChange,
}) => {
  if (!selectedCategory) return null;

  const categoryData = selectedCategory === "studio" ? packageData.studio : packageData.bhk2;

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-serif text-eden-dark mb-8 text-center">
        Select Your {selectedCategory === "studio" ? "Studio" : "Apartment"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(categoryData).map((roomName) => (
          <Card
            key={roomName}
            className={cn(
              "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
              selectedRoom === roomName ? "border-eden bg-eden-light/20" : "border-eden-light/50"
            )}
            onClick={() => onRoomChange(roomName)}
          >
            <CardHeader>
              <CardTitle className="text-lg font-serif text-eden-dark text-center">{roomName}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Button 
                  variant={selectedRoom === roomName ? "default" : "outline"}
                  className="w-full"
                >
                  {selectedRoom === roomName ? "Selected" : "Select This Room"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoomSelector;
