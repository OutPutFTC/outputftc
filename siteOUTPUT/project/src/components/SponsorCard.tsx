interface SponsorCardProps {
  name: string;
  image: string;
}

export default function SponsorCard({ name, image }: SponsorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center aspect-square">
      <div className="w-full h-full relative overflow-hidden bg-orange-100 flex items-center justify-center p-4">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23f3f4f6" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="14" text-anchor="middle" dy=".3em" fill="%23999"%3ELogo%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>
    </div>
  );
}
