const MenuTab = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`menu-tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MenuTab; 