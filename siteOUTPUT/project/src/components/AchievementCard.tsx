interface AchievementCardProps {
  year: string;
  title: string;
  description: string;
  image: string;
}

export default function AchievementCard({ year, title, description, image }: AchievementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-0 md:gap-6">
      <div className="flex-shrink-0 w-full md:w-48 h-48 relative overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="16" text-anchor="middle" dy=".3em" fill="%23999"%3ETroféu%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>
      <div className="flex-1 p-6">
        <div className="text-primaryOrange font-bold text-xl mb-2">{year}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
