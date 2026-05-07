import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  const colors = [
    'from-blue-400 to-blue-600',
    'from-pink-400 to-pink-600',
    'from-green-400 to-green-600',
    'from-purple-400 to-purple-600',
    'from-yellow-400 to-yellow-600',
    'from-red-400 to-red-600'
  ];

  return (
    <div
      className="flex flex-col items-center gap-6 py-20 text-dark bg-gradient-to-br from-light to-white"
      id="speciality"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          Find by Speciality
        </h1>
        <p className="sm:w-2/3 mx-auto text-center text-gray-600 text-lg leading-relaxed">
          Simply browse through our extensive list of trusted doctors from Tamil Nadu,
          schedule your appointment hassle-free with specialists in various fields.
        </p>
      </div>
      <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-scroll px-4">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => {
              scrollTo(0, 0);
            }}
            className="speciality-card flex flex-col items-center text-sm cursor-pointer flex-shrink-0 p-6 rounded-2xl shadow-lg hover:shadow-xl"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <div className={`w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center p-4 shadow-lg`}>
              <img className="w-full h-full object-contain" src={item.image} alt={item.speciality} />
            </div>
            <p className="font-semibold text-dark text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
