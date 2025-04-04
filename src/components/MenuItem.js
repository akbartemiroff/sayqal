const MenuItem = ({ name, description, weight, price, image }) => {
  const getPlaceholderImage = () => {
    if (image.includes('/salads/')) {
      return '/images/salads/placeholder.svg';
    } else if (image.includes('/soups/')) {
      return '/images/soups/placeholder.svg';
    } else if (image.includes('/main-dishes/')) {
      return '/images/main-dishes/placeholder.svg';
    } else if (image.includes('/drinks/')) {
      return '/images/drinks/placeholder.svg';
    } else if (image.includes('/breads/')) {
      return '/images/breads/placeholder.svg';
    } else if (image.includes('/desserts/')) {
      return '/images/desserts/placeholder.svg';
    }
    return '/images/placeholder-food.svg';
  };

  return (
    <div className="bg-[#F5E1C8] rounded-xl overflow-hidden shadow-lg border border-[#d4b59e] menu-item-transition">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image || getPlaceholderImage()} 
          alt={name}
          className="w-full h-full object-cover transform hover:scale-110 transition duration-700"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getPlaceholderImage();
          }}
        />
        <div className="absolute top-0 right-0 bg-[#800020] text-[#F5E1C8] px-3 py-1 m-2 rounded-full text-xs font-medium">
          {weight}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#800020] mb-2">{name}</h3>
        <p className="text-[#800020] text-sm mb-4 min-h-[60px]">{description}</p>
        
        <div className="flex justify-between items-center pt-2 border-t border-[#d4b59e]">
          <span className="text-xl font-bold text-[#800020]">{price}</span>
          <button className="bg-[#800020] hover:bg-[#5c0017] text-[#F5E1C8] py-2 px-4 rounded transition duration-300 text-sm font-medium">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem; 