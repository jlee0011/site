import React from 'react';
import { Card, CardContent } from './ui/card';
import { UtensilsCrossed, Coffee, Camera } from 'lucide-react';

interface CategoryScreenProps {
  region: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  {
    id: 'restaurant',
    name: '식당',
    icon: UtensilsCrossed,
    description: '맛있는 식사를 함께'
  },
  {
    id: 'cafe',
    name: '카페',
    icon: Coffee,
    description: '달콤한 시간을 보내요'
  },
  {
    id: 'activity',
    name: '콘텐츠',
    icon: Camera,
    description: '특별한 경험을 만들어요'
  }
];

export function CategoryScreen({ region, onSelectCategory }: CategoryScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="mb-2">{region} 지역</h1>
            <p className="text-muted-foreground">어떤 종류의 장소를 찾고 계신가요?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                  onClick={() => onSelectCategory(category.id)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}