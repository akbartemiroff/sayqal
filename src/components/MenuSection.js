import { useState } from 'react';
import MenuTab from './MenuTab';
import MenuItem from './MenuItem';
import { salads } from '../data/salads';
import { soups } from '../data/soups';
import { mainDishes } from '../data/mainDishes';
import { drinks } from '../data/drinks';
import { breads } from '../data/breads';
import { desserts } from '../data/desserts';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('salads');

  const tabs = [
    { id: 'salads', label: 'Салаты' },
    { id: 'soups', label: 'Супы' },
    { id: 'mainDishes', label: 'Основные Блюда' },
    { id: 'drinks', label: 'Напитки' },
    { id: 'breads', label: 'Хлеб' },
    { id: 'desserts', label: 'Десерты' },
  ];

  const renderMenuItems = () => {
    switch (activeTab) {
      case 'salads':
        return salads.map(item => (
          <MenuItem 
            key={item.id}
            name={item.name}
            description={item.description}
            weight={item.weight}
            price={item.price}
            image={item.image}
          />
        ));
      case 'soups':
        return soups.map(item => (
          <MenuItem 
            key={item.id}
            name={item.name}
            description={item.description}
            weight={item.weight}
            price={item.price}
            image={item.image}
          />
        ));
      case 'mainDishes':
        return mainDishes.map(item => (
          <MenuItem 
            key={item.id}
            name={item.name}
            description={item.description}
            weight={item.weight}
            price={item.price}
            image={item.image}
          />
        ));
      case 'drinks':
        return drinks.map(item => (
          <MenuItem 
            key={item.id}
            name={item.name}
            description={item.description}
            weight={item.weight}
            price={item.price}
            image={item.image}
          />
        ));
      case 'breads':
        return breads.map(item => (
          <MenuItem 
            key={item.id}
            name={item.name}
            description={item.description}
            weight={item.weight}
            price={item.price}
            image={item.image}
          />
        ));
      case 'desserts':
        return desserts.map(item => (
          <MenuItem 
            key={item.id}
            name={item.name}
            description={item.description}
            weight={item.weight}
            price={item.price}
            image={item.image}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <section id="menu" className="py-20 bg-[#800020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Наше Меню</h2>
          <p className="text-xl text-[#F5E1C8] max-w-3xl mx-auto mt-6">
            Откройте для себя широкий ассортимент аутентичных узбекских блюд, приготовленных из лучших ингредиентов
          </p>
        </div>
        
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tabs.map(tab => (
              <MenuTab 
                key={tab.id}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </MenuTab>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderMenuItems()}
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 