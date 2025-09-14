import { Place } from '../App';

const mockImages = [
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400',
  'https://images.unsplash.com/photo-1555992336-03a23c4b9c56?w=400'
];

const mockPlaces: Place[] = [
  // Korean restaurants
  {
    id: '1',
    name: '한정식 궁',
    type: 'restaurant',
    category: 'restaurant',
    subcategory: 'korean',
    image: mockImages[0],
    description: '전통 한정식을 현대적으로 재해석한 고급 한식당입니다. 정갈한 상차림과 깊은 맛이 일품입니다.',
    rating: 4.8,
    priceRange: '₩₩₩₩',
    tags: ['한정식', '고급', '데이트', '개별룸'],
    website: 'https://example.com',
    phone: '02-1234-5678',
    hours: '11:30-22:00',
    mapLink: 'https://maps.google.com'
  },
  {
    id: '2',
    name: '청담 갈비',
    type: 'restaurant',
    category: 'restaurant',
    subcategory: 'korean',
    image: mockImages[1],
    description: '최고급 한우 갈비를 전문으로 하는 프리미엄 갈비집입니다.',
    rating: 4.7,
    priceRange: '₩₩₩₩',
    tags: ['한우', '갈비', '고급', '접대'],
    phone: '02-2345-6789',
    hours: '17:00-24:00',
    mapLink: 'https://maps.google.com'
  },
  // Japanese restaurants
  {
    id: '3',
    name: '스시 마루',
    type: 'restaurant',
    category: 'restaurant',
    subcategory: 'japanese',
    image: mockImages[2],
    description: '신선한 활어로 만든 정통 에도마에 스시를 맛볼 수 있습니다.',
    rating: 4.9,
    priceRange: '₩₩₩₩₩',
    tags: ['스시', '오마카세', '신선', '고급'],
    website: 'https://example.com',
    phone: '02-3456-7890',
    hours: '18:00-23:00',
    mapLink: 'https://maps.google.com'
  },
  // Specialty coffee cafes
  {
    id: '4',
    name: '블루보틀 카페',
    type: 'cafe',
    category: 'cafe',
    subcategory: 'specialty-coffee',
    image: mockImages[3],
    description: '세계적인 스페셜티 커피 브랜드로, 최고품질의 원두와 전문적인 추출로 완성된 커피를 제공합니다.',
    rating: 4.6,
    priceRange: '₩₩',
    tags: ['스페셜티', '원두', '핸드드립', '미니멀'],
    website: 'https://bluebottlecoffee.com',
    phone: '02-4567-8901',
    hours: '07:00-21:00',
    mapLink: 'https://maps.google.com'
  },
  // Movie theaters
  {
    id: '5',
    name: 'CGV 강남',
    type: 'activity',
    category: 'activity',
    subcategory: 'movie',
    image: mockImages[4],
    description: '최신 음향 시설과 편안한 좌석을 갖춘 프리미엄 영화관입니다.',
    rating: 4.4,
    priceRange: '₩₩',
    tags: ['영화', 'IMAX', '4DX', '데이트'],
    website: 'https://cgv.co.kr',
    phone: '1544-1122',
    hours: '09:00-24:00',
    mapLink: 'https://maps.google.com'
  },
  // More places for variety
  {
    id: '6',
    name: '더 라운지',
    type: 'cafe',
    category: 'cafe',
    subcategory: 'rooftop',
    image: mockImages[5],
    description: '도시 전망을 감상할 수 있는 루프탑 라운지 카페입니다.',
    rating: 4.5,
    priceRange: '₩₩₩',
    tags: ['루프탑', '뷰', '칵테일', '야경'],
    phone: '02-5678-9012',
    hours: '15:00-02:00',
    mapLink: 'https://maps.google.com'
  }
];

export function getMockPlaces(category: string, subcategory: string): Place[] {
  return mockPlaces.filter(place => 
    place.category === category && place.subcategory === subcategory
  );
}

export function getPlaceById(id: string): Place | undefined {
  return mockPlaces.find(place => place.id === id);
}

export function getFavoritePlaces(favoriteIds: string[]): Place[] {
  return mockPlaces.filter(place => favoriteIds.includes(place.id));
}