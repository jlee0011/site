import React, { useState, useEffect } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { CategoryScreen } from './components/CategoryScreen';
import { SubcategoryScreen } from './components/SubcategoryScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { FavoritesScreen } from './components/FavoritesScreen';
import { Navigation } from './components/Navigation';

export type Screen = 'home' | 'category' | 'subcategory' | 'results' | 'favorites';

export interface Place {
  id: string;
  name: string;
  type: string;
  category: string;
  subcategory: string;
  image: string;
  description: string;
  rating: number;
  priceRange: string;
  tags: string[];
  website?: string;
  phone?: string;
  hours: string;
  mapLink: string;
}

export interface NavigationState {
  screen: Screen;
  category?: string;
  subcategory?: string;
  region?: string;
  selectedPlace?: Place;
}

export default function App() {
  const [navState, setNavState] = useState<NavigationState>({ screen: 'home' });
  const [favorites, setFavorites] = useState<string[]>([]);
  const [navHistory, setNavHistory] = useState<NavigationState[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('dateCourse-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage when changed
  useEffect(() => {
    localStorage.setItem('dateCourse-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const navigate = (newState: NavigationState) => {
    setNavHistory(prev => [...prev, navState]);
    setNavState(newState);
  };

  const goBack = () => {
    if (navHistory.length > 0) {
      const previousState = navHistory[navHistory.length - 1];
      setNavHistory(prev => prev.slice(0, -1));
      setNavState(previousState);
    }
  };

  const goHome = () => {
    setNavState({ screen: 'home' });
    setNavHistory([]);
  };

  const toggleFavorite = (placeId: string) => {
    setFavorites(prev => 
      prev.includes(placeId) 
        ? prev.filter(id => id !== placeId)
        : [...prev, placeId]
    );
  };

  const showFavorites = () => {
    setNavHistory(prev => [...prev, navState]);
    setNavState({ screen: 'favorites' });
  };

  const renderScreen = () => {
    switch (navState.screen) {
      case 'home':
        return <HomeScreen onSearch={(region) => navigate({ screen: 'category', region })} />;
      case 'category':
        return (
          <CategoryScreen 
            region={navState.region!}
            onSelectCategory={(category) => navigate({ ...navState, screen: 'subcategory', category })}
          />
        );
      case 'subcategory':
        return (
          <SubcategoryScreen 
            category={navState.category!}
            onSelectSubcategory={(subcategory) => navigate({ ...navState, screen: 'results', subcategory })}
          />
        );
      case 'results':
        return (
          <ResultsScreen 
            category={navState.category!}
            subcategory={navState.subcategory!}
            region={navState.region!}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectPlace={(place) => setNavState({ ...navState, selectedPlace: place })}
            selectedPlace={navState.selectedPlace}
          />
        );
      case 'favorites':
        return (
          <FavoritesScreen 
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        );
      default:
        return <HomeScreen onSearch={(region) => navigate({ screen: 'category', region })} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {navState.screen !== 'home' && (
        <Navigation 
          canGoBack={navHistory.length > 0}
          onGoBack={goBack}
          onGoHome={goHome}
          onShowFavorites={showFavorites}
        />
      )}
      {renderScreen()}
    </div>
  );
}