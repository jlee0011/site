import React from 'react';
import { Card, CardContent } from './ui/card';

interface SubcategoryScreenProps {
  category: string;
  onSelectSubcategory: (subcategory: string) => void;
}

const subcategories = {
  restaurant: [
    { id: 'korean', name: '한식', emoji: '🍚' },
    { id: 'japanese', name: '일식', emoji: '🍣' },
    { id: 'chinese', name: '중식', emoji: '🥟' },
    { id: 'western', name: '양식', emoji: '🍝' },
    { id: 'fine-dining', name: '파인다이닝', emoji: '🥂' },
    { id: 'casual', name: '캐주얼', emoji: '🍔' }
  ],
  cafe: [
    { id: 'specialty-coffee', name: '스페셜티 커피', emoji: '☕' },
    { id: 'dessert-cafe', name: '디저트 카페', emoji: '🧁' },
    { id: 'brunch', name: '브런치', emoji: '🥐' },
    { id: 'rooftop', name: '루프탑', emoji: '🌅' },
    { id: 'theme-cafe', name: '테마 카페', emoji: '🎨' },
    { id: 'bakery', name: '베이커리', emoji: '🍞' }
  ],
  activity: [
    { id: 'movie', name: '영화관', emoji: '🎬' },
    { id: 'museum', name: '박물관/갤러리', emoji: '🖼️' },
    { id: 'karaoke', name: '노래방', emoji: '🎤' },
    { id: 'bowling', name: '볼링', emoji: '🎳' },
    { id: 'arcade', name: '오락실', emoji: '🕹️' },
    { id: 'escape-room', name: '방탈출', emoji: '🔐' }
  ]
};

const getCategoryName = (category: string) => {
  const names = {
    restaurant: '식당',
    cafe: '카페',
    activity: '콘텐츠'
  };
  return names[category as keyof typeof names] || category;
};

export function SubcategoryScreen({ category, onSelectSubcategory }: SubcategoryScreenProps) {
  const items = subcategories[category as keyof typeof subcategories] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="mb-2">{getCategoryName(category)} 세부 종류</h1>
            <p className="text-muted-foreground">원하는 스타일을 선택해주세요</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <Card 
                key={item.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => onSelectSubcategory(item.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h4>{item.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}