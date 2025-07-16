import { Star } from "lucide-react";

const StarRating = ({ rating, onRatingChange, label }) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRatingChange(star)}
              className={`p-1 rounded-full transition-all duration-200 hover:scale-110 ${
                star <= rating
                  ? "text-amber-400 hover:text-amber-500"
                  : "text-gray-300 hover:text-amber-300"
              }`}
            >
              <Star
                className={`w-8 h-8 ${star <= rating ? "fill-current" : ""}`}
              />
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          {rating === 0 && "Selecciona una calificación"}
          {rating === 1 && "Muy malo"}
          {rating === 2 && "Malo"}
          {rating === 3 && "Regular"}
          {rating === 4 && "Bueno"}
          {rating === 5 && "Excelente"}
        </p>
      </div>
    );
};

export default StarRating;