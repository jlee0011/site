import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

interface HomeScreenProps {
  onSearch: (region: string) => void;
}

export function HomeScreen({ onSearch }: HomeScreenProps) {
  const [region, setRegion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (region.trim()) {
      onSearch(region.trim());
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1665697200761-44eaa694e593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNpdHklMjBza3lsaW5lJTIwc3Vuc2V0fGVufDF8fHx8MTc1NzQ5MzA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-md w-full">
        <h1 className="text-white mb-2 text-3xl">데이트 코스 탐색</h1>
        <p className="text-white/90 mb-8">완벽한 데이트 장소를 찾아보세요</p>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="지역을 입력하세요 (예: 강남, 홍대, 명동)"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="pl-10 bg-white/90 backdrop-blur-sm border-white/20"
            />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            검색
          </Button>
        </form>
      </div>
    </div>
  );
}