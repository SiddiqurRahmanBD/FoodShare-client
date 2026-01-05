import foodShare from "../assets/food_share.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group">
      <img
        src={foodShare}
        className="h-20 w-20 md:h-12 md:w-12 object-contain group-hover:scale-110 transition-transform duration-300"
        alt="FoodShare Logo"
      />
      <h1 className="text-2xl md:text-3xl font-black text-base-content">
        Food<span className="text-green-700 dark:text-green-500">Share</span>
      </h1>
    </div>
  );
};

export default Logo;
