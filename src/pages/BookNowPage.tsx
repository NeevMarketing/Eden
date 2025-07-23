import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge, Leaf, Ruler, Users } from "lucide-react";
import { RoomType } from "@/types/accommodation";
import { roomTypes } from "../data/packageData";
import { updatedRoomData } from "../data/roomData";
import { useNavigate } from "react-router-dom";

import "@/Styles/Contact.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function BookNowPage() {
  const navigate = useNavigate();
  const availableRoomTypes = roomTypes.filter((room) => room.id !== "3bhk");
  const getRoomData = (roomId) => {
    return (
      updatedRoomData[roomId] || {
        size: roomTypes.find((r) => r.id === roomId)?.size || "",
        guests: `${roomTypes.find((r) => r.id === roomId)?.guests || 1} guests`,
        maxGuests: roomTypes.find((r) => r.id === roomId)?.guests || 1,
      }
    );
  };
  const handleBookNow = (roomType) => {
    const room = roomType.name;
    const price = roomType.startingPrice;
    const size = updatedRoomData[roomType.id]?.size || roomType.size || "";
    const guests = updatedRoomData[roomType.id]?.guests || roomType.guests || 1;

    // 👇 Add maxGuests separately
    const maxGuests = roomType.name.toLowerCase().includes("studio") ? 2 : 3;

    const queryParams = new URLSearchParams({
      room,
      price: price.toString(),
      size,
      guests: String(guests), // display as “1-2 guests” still if needed
      maxGuests: String(maxGuests), // for form dropdown
    });

    navigate(`/book-summary?${queryParams.toString()}`);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="room-selector-container">
          <div className="space-y-12 pt-24" id="pick-your-apartment">
            <div className="text-center">
              <div className=" customflex  mb-6">
                <Leaf className="w-8 h-8 text-eden mr-3" />
                <h2 className="font-serif font-bold text-stone-800 text-5xl">
                  Pick Your Apartment
                </h2>
              </div>
              <p className="text-stone-600 text-lg font-light">
                Browse our studio, 1BHK, and 2BHK Apartments to match your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {availableRoomTypes.map((roomType) => {
                const roomData = getRoomData(roomType.id);
                console.log("ROOM ID", roomType.id, "SIZE", roomData.size);
                return (
                  <Card
                    key={roomType.id}
                    className="group hover:-translate-y-2 transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden max-w-sm mx-auto w-full"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={roomType.image}
                        alt={roomType.name}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 right-6 bg-black/50 text-white text-xs md:text-sm px-3 py-1 rounded-md font-medium shadow-lg backdrop-blur-sm">
                        <div className="flex items-center space-x-1">
                          <Ruler className="w-4 h-4 text-eden-dark" />
                          <span>{roomData.size}</span>
                        </div>
                      </div>
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
                          <span className="font-medium">{roomData.guests}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-stone-500 font-medium">
                            Starting from
                          </p>
                          <p className="text-3xl font-serif font-bold text-emerald-700">
                            ₹{roomType.startingPrice.toLocaleString()}
                          </p>
                          <p className="text-sm text-stone-500">per night</p>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          className="w-full bg-eden hover:bg-emerald-700 text-white border-0 py-6 text-lg font-medium transition-all duration-300 rounded-xl"
                          onClick={() => handleBookNow(roomType)}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookNowPage;
