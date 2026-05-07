import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowfilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div className="bg-gradient-to-br from-light via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            All Doctors
          </h1>
          <p className="text-gray-600 text-lg">Browse through the doctors specialist from Tamil Nadu.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-8 mt-8">
          <button
            className={`py-2 px-4 border-2 rounded-xl text-sm transition-all sm:hidden font-semibold ${
              showFilter ? "bg-primary text-white border-primary" : "bg-white text-dark border-gray-300 hover:border-primary"
            }`}
            onClick={() => setShowfilter((prev) => !prev)}
          >
            Filters
          </button>
          <div
            className={`flex-col gap-4 text-sm text-gray-600 bg-white p-6 rounded-2xl shadow-lg ${
              showFilter ? "flex" : "hidden sm:flex"
            }`}
          >
            <p className="text-lg font-bold text-dark mb-4">Filter by Speciality</p>
            <p
              onClick={() =>
                speciality === "General physician"
                  ? navigate("/doctors")
                  : navigate("/doctors/General physician")
              }
              className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-gray-200 rounded-xl transition-all cursor-pointer font-medium hover:border-primary hover:bg-blue-50 ${
                speciality === "General physician"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500"
                  : "hover:shadow-md"
              }`}
            >
              General physician
            </p>
            <p
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynecologist")
              }
              className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-gray-200 rounded-xl transition-all cursor-pointer font-medium hover:border-pink-400 hover:bg-pink-50 ${
                speciality === "Gynecologist"
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500"
                  : "hover:shadow-md"
              }`}
            >
              Gynecologist
            </p>
            <p
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologist")
              }
              className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-gray-200 rounded-xl transition-all cursor-pointer font-medium hover:border-green-400 hover:bg-green-50 ${
                speciality === "Dermatologist"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500"
                  : "hover:shadow-md"
              }`}
            >
              Dermatologist
            </p>
            <p
              onClick={() =>
                speciality === "Pediatricians"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatricians")
              }
              className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-gray-200 rounded-xl transition-all cursor-pointer font-medium hover:border-purple-400 hover:bg-purple-50 ${
                speciality === "Pediatricians"
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white border-purple-500"
                  : "hover:shadow-md"
              }`}
            >
              Pediatricians
            </p>
            <p
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologist")
              }
              className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-gray-200 rounded-xl transition-all cursor-pointer font-medium hover:border-yellow-400 hover:bg-yellow-50 ${
                speciality === "Neurologist"
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-yellow-500"
                  : "hover:shadow-md"
              }`}
            >
              Neurologist
            </p>
            <p
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroenterologist")
              }
              className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-gray-200 rounded-xl transition-all cursor-pointer font-medium hover:border-red-400 hover:bg-red-50 ${
                speciality === "Gastroenterologist"
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white border-red-500"
                  : "hover:shadow-md"
              }`}
            >
              Gastroenterologist
            </p>
          </div>
          <div className="w-full grid grid-cols-auto gap-6 gap-y-8">
            {filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="doctor-card border-0 rounded-2xl overflow-hidden cursor-pointer bg-white shadow-lg"
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
        </div>
      </div>
    </div>
  );
};

export default Doctors;
