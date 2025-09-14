import React from 'react';
import { Place } from '../App';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface PlaceListProps {
  places: Place[];
  favorites: string[];
  onToggleFavorite: (placeId: string) => void;
  onSelectPlace: (place: Place) => void;
  selectedPlace?: Place;
}

export function PlaceList({ 
  places, 
  favorites, 
  onToggleFavorite, 
  onSelectPlace, 
  selectedPlace 
}: PlaceListProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 space-y-4">
        {places.map((place) => (
          <Card 
            key={place.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedPlace?.id === place.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => onSelectPlace(place)}
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="truncate pr-2">{place.name}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(place.id);
                      }}
                      className="flex-shrink-0 p-1 h-auto"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          favorites.includes(place.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-400'
                        }`}
                      />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{place.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{place.priceRange}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {place.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {place.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}