import React from 'react';
import { getFavoritePlaces } from './mockData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Heart, Trash2, MapPin } from 'lucide-react';

interface FavoritesScreenProps {
  favorites: string[];
  onToggleFavorite: (placeId: string) => void;
}

export function FavoritesScreen({ favorites, onToggleFavorite }: FavoritesScreenProps) {
  const favoritePlaces = getFavoritePlaces(favorites);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="mb-1">즐겨찾기</h1>
            <p className="text-muted-foreground">저장한 {favoritePlaces.length}개의 장소</p>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left: Favorites List */}
            <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="h-full overflow-y-auto">
                {favoritePlaces.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    <div className="text-center">
                      <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>아직 저장한 장소가 없습니다</p>
                      <p className="text-sm mt-2">마음에 드는 장소를 하트로 저장해보세요</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 space-y-4">
                    {favoritePlaces.map((place) => (
                      <Card key={place.id} className="transition-all duration-200 hover:shadow-md">
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
                                  onClick={() => onToggleFavorite(place.id)}
                                  className="flex-shrink-0 p-1 h-auto text-red-500 hover:text-red-600"
                                >
                                  <Trash2 className="w-4 h-4" />
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
                                {place.tags.slice(0, 2).map((tag, index) => (
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
                )}
              </div>
            </div>

            {/* Right: Mock Map */}
            <div className="w-full lg:w-1/2">
              <div className="h-full bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden">
                {/* Mock Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="border border-gray-300"></div>
                    ))}
                  </div>
                </div>

                {/* Mock Map Markers */}
                <div className="relative h-full p-6">
                  <div className="mb-4">
                    <h3>지도</h3>
                    <p className="text-sm text-muted-foreground">즐겨찾기한 장소들의 위치</p>
                  </div>

                  {favoritePlaces.length > 0 && (
                    <div className="space-y-2">
                      {favoritePlaces.map((place, index) => (
                        <div 
                          key={place.id}
                          className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3"
                          style={{
                            position: 'absolute',
                            top: `${20 + (index * 15) % 60}%`,
                            left: `${20 + (index * 20) % 60}%`
                          }}
                        >
                          <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <span className="text-sm truncate max-w-32">{place.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {favoritePlaces.length === 0 && (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>저장한 장소가 없습니다</p>
                        <p className="text-sm mt-2">장소를 저장하면 지도에서 확인할 수 있습니다</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}