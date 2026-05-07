import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-dark md:mx-10 bg-light py-12 px-4 rounded-2xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Top Doctors to Book
        </h1>
        <p className="sm:w-2/3 mx-auto text-center text-gray-600 text-lg leading-relaxed">
          Simply browse through our extensive list of trusted doctors from across Tamil Nadu.
          Schedule your appointment hassle-free with our verified healthcare professionals.
        </p>
      </div>
      <div className="w-full grid grid-cols-auto grid-cols-lg gap-6 pt-8 gap-y-8 px-3 sm:px-0 xl:grid-cols-5">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`), scrollTo(0, 0);
            }}
            className="doctor-card border-0 rounded-2xl overflow-hidden cursor-pointer bg-white"
            key={index}
          >
            <div className="relative">
              <img
                className="w-full h-48 object-cover bg-gradient-to-br from-blue-50 to-indigo-100"
                src={item.image}
                alt={item.name}
              />
              <div className="absolute top-3 right-3">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.available ? 'status-available' : 'status-unavailable'
                }`}>
                  {item.available ? "Available" : "Not available"}
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-dark text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-accent font-semibold text-sm mb-1">{item.speciality}</p>
              <p className="text-gray-600 text-sm mb-3">{item.degree}</p>
              <div className="flex items-center justify-between">
                <span className="text-success font-bold text-lg">${item.fees}</span>
                <button className="btn-primary text-sm px-4 py-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="btn-secondary px-8 py-3 mt-8 text-white font-semibold"
      >
        View All Doctors
      </button>
    </div>
  );
};

export default TopDoctors;
