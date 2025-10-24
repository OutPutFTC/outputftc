interface MemberCardProps {
  name: string;
  image: string;
}

export default function MemberCard({ name, image }: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center">
      {/* Foto redonda e mais abaixada */}
      <div className="w-full aspect-square relative overflow-hidden bg-white flex justify-center items-center">
        <img
          src={image}
          alt={name}
          className="w-4/5 h-4/5 object-cover rounded-full object-top translate-y-6"
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23fff" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="18" text-anchor="middle" dy=".3em" fill="%23999"%3EFoto%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
      </div>
    </div>
  );
}
