
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-serif text-eden-dark mb-8 text-center">Choose Your Accommodation Type</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card 
          className={cn(
            "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
            selectedCategory === "studio" ? "border-eden bg-eden-light/20" : "border-eden-light/50"
          )}
          onClick={() => onCategoryChange("studio")}
        >
          <CardHeader className="text-center">
            <Bed className="w-12 h-12 text-eden mx-auto mb-4" />
            <CardTitle className="text-xl font-serif text-eden-dark">Studio Apartments</CardTitle>
            <CardDescription className="text-lg">
              Cozy, well-designed spaces perfect for comfortable living
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-eden-text">3 options available</p>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Hamilton • Skyline • Crest
            </p>
          </CardContent>
        </Card>

        <Card 
          className={cn(
            "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
            selectedCategory === "bhk2" ? "border-eden bg-eden-light/20" : "border-eden-light/50"
          )}
          onClick={() => onCategoryChange("bhk2")}
        >
          <CardHeader className="text-center">
            <Bed className="w-12 h-12 text-eden mx-auto mb-4" />
            <CardTitle className="text-xl font-serif text-eden-dark">1BHK & 2BHK Apartments</CardTitle>
            <CardDescription className="text-lg">
              Spacious apartments with separate living areas for enhanced comfort
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-eden-text">3 options available</p>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Renaissance 2BHK • Victoria 2BHK • Regency 1BHK
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CategorySelector;
