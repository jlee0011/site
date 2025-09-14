import React from 'react';
import { Place } from '../App';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Heart, Globe, Phone, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Separator } from './ui/separator';

interface PlaceDetailProps {
  place?: Place;
  isFavorite: boolean;
  onToggleFavorite: (placeId: string) => void;
}

export function PlaceDetail({ place, isFavorite, onToggleFavorite }: PlaceDetailProps) {
  if (!place) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        <p>장소를 선택해주세요</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6">
        {/* Main Image */}
        <div className="relative mb-6">
          <img 
            src={place.image} 
            alt={place.name}
            className="w-full h-64 rounded-lg object-cover"
          />
          <Button
            variant="secondary"
            size="icon"
            onClick={() => onToggleFavorite(place.id)}
            className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm"
          >
            <Heart 
              className={`w-5 h-5 ${
                isFavorite 
                  ? 'fill-red-500 text-red-500' 
                  : 'text-gray-600'
              }`}
            />
          </Button>
        </div>

        {/* Title and Rating */}
        <div className="mb-4">
          <h2 className="mb-2">{place.name}</h2>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>{place.rating}</span>
            </div>
            <span className="text-muted-foreground">{place.priceRange}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-muted-foreground leading-relaxed">
            {place.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h4 className="mb-3">태그</h4>
          <div className="flex flex-wrap gap-2">
            {place.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Contact Information */}
        <div className="space-y-4">
          <h4>상세 정보</h4>
          
          {place.website && (
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <Button
                variant="link"
                className="p-0 h-auto text-primary underline"
                onClick={() => window.open(place.website, '_blank')}
              >
                웹사이트 방문
                <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}

          {place.phone && (
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <span>{place.phone}</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <span>{place.hours}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <Button
              variant="link"
              className="p-0 h-auto text-primary underline"
              onClick={() => window.open(place.mapLink, '_blank')}
            >
              지도에서 보기
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}