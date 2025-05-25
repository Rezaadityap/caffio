import { Check } from "lucide-react";

const PlanCard = ({ price, title, description, features, isPopular }) => {
  return (
    <div className="plan-card border flex flex-col justify-between bg-white/20 backdrop-blur-lg rounded-lg h-full p-6 hover:shadow-md text-left relative">
      {isPopular && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-white text-sm px-3 py-1 rounded-bl-md">
          Best Seller
        </div>
      )}

      <div>
        <div className="inline-flex items-end">
          <h1 className="font-extrabold text-3xl text-primary">{price}</h1>
          <span className="ml-2 text-gray-500">/Bulan</span>
        </div>

        <h2 className="font-bold text-xl my-2 text-secondary">{title}</h2>
        <p className="text-gray-600">{description}</p>

        <div className="border-t border-gray-300 my-4"></div>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center">
                <Check size={14} />
              </div>
              <p className="text-sm">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
