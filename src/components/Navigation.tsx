import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft, X, Heart } from 'lucide-react';

interface NavigationProps {
  canGoBack: boolean;
  onGoBack: () => void;
  onGoHome: () => void;
  onShowFavorites: () => void;
}

export function Navigation({ canGoBack, onGoBack, onGoHome, onShowFavorites }: NavigationProps) {
  return (
    <div className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
      <div>
        {canGoBack && (
          <Button
            variant="outline"
            size="icon"
            onClick={onGoBack}
            className="bg-white/80 backdrop-blur-sm border-white/30 hover:bg-white/90"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={onShowFavorites}
          className="bg-white/80 backdrop-blur-sm border-white/30 hover:bg-white/90"
        >
          <Heart className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onGoHome}
          className="bg-white/80 backdrop-blur-sm border-white/30 hover:bg-white/90"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}