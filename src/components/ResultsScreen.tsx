import React from 'react';
import { Place } from '../App';
import { getMockPlaces } from './mockData';
import { PlaceList } from './PlaceList';
import { PlaceDetail } from './PlaceDetail';

interface ResultsScreenProps {
  category: string;
  subcategory: string;
  region: string;
  favorites: string[];
  onToggleFavorite: (placeId: string) => void;
  onSelectPlace: (place: Place) => void;
  selectedPlace?: Place;
}

export function ResultsScreen({ 
  category, 
  subcategory, 
  region, 
  favorites, 
  onToggleFavorite,
  onSelectPlace,
  selectedPlace
}: ResultsScreenProps) {
  const places = getMockPlaces(category, subcategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="mb-1">{region} 지역의 추천 장소</h1>
            <p className="text-muted-foreground">{places.length}개의 장소를 찾았습니다</p>
          </div>
          
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left: Place List */}
            <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-200">
              <PlaceList 
                places={places}
                favorites={favorites}
                onToggleFavorite={onToggleFavorite}
                onSelectPlace={onSelectPlace}
                selectedPlace={selectedPlace}
              />
            </div>
            
            {/* Right: Place Detail */}
            <div className="w-full lg:w-1/2">
              <PlaceDetail 
                place={selectedPlace || places[0]}
                isFavorite={favorites.includes(selectedPlace?.id || places[0]?.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}