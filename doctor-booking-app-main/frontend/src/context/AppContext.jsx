import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currency = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:4000";

  // Tamil Nadu doctors data for demo
  const localDoctors = [
    {
      _id: "1",
      name: "Dr. Arjun Kumar",
      email: "arjun.kumar@prescripto.com",
      speciality: "General physician",
      degree: "MBBS, MD",
      experience: "4 Years",
      about: "Dr. Arjun Kumar is a compassionate general physician from Chennai with expertise in preventive care and chronic disease management.",
      fees: 50,
      address: {
        line1: "17th Cross Road",
        line2: "Anna Nagar, Chennai"
      },
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "2",
      name: "Dr. Priya Venkatesan",
      email: "priya.venkatesan@prescripto.com",
      speciality: "Gynecologist",
      degree: "MBBS, MS (OBG)",
      experience: "6 Years",
      about: "Dr. Priya Venkatesan is a skilled gynecologist from Coimbatore specializing in women's health and maternity care.",
      fees: 60,
      address: {
        line1: "RS Puram",
        line2: "Coimbatore"
      },
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "3",
      name: "Dr. Rajesh Iyer",
      email: "rajesh.iyer@prescripto.com",
      speciality: "Dermatologist",
      degree: "MBBS, MD (Dermatology)",
      experience: "5 Years",
      about: "Dr. Rajesh Iyer is a renowned dermatologist from Madurai known for treating various skin conditions and cosmetic procedures.",
      fees: 55,
      address: {
        line1: "Goripalayam",
        line2: "Madurai"
      },
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "4",
      name: "Dr. Lakshmi Narayanan",
      email: "lakshmi.narayanan@prescripto.com",
      speciality: "Pediatricians",
      degree: "MBBS, MD (Pediatrics)",
      experience: "8 Years",
      about: "Dr. Lakshmi Narayanan is a dedicated pediatrician from Trichy with extensive experience in child healthcare and development.",
      fees: 45,
      address: {
        line1: "Srirangam",
        line2: "Tiruchirappalli"
      },
      image: "https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "5",
      name: "Dr. Suresh Babu",
      email: "suresh.babu@prescripto.com",
      speciality: "Neurologist",
      degree: "MBBS, DM (Neurology)",
      experience: "10 Years",
      about: "Dr. Suresh Babu is a leading neurologist from Salem specializing in neurological disorders and brain health.",
      fees: 70,
      address: {
        line1: "Five Roads",
        line2: "Salem"
      },
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "6",
      name: "Dr. Meena Krishnan",
      email: "meena.krishnan@prescripto.com",
      speciality: "Gastroenterologist",
      degree: "MBBS, MD, DM (Gastro)",
      experience: "7 Years",
      about: "Dr. Meena Krishnan is an expert gastroenterologist from Tirunelveli known for digestive health treatments.",
      fees: 65,
      address: {
        line1: "Palayamkottai",
        line2: "Tirunelveli"
      },
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "7",
      name: "Dr. Vijay Anand",
      email: "vijay.anand@prescripto.com",
      speciality: "General physician",
      degree: "MBBS, MD",
      experience: "3 Years",
      about: "Dr. Vijay Anand is a young and dynamic general physician from Vellore providing comprehensive primary care.",
      fees: 40,
      address: {
        line1: "CMC Campus",
        line2: "Vellore"
      },
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "8",
      name: "Dr. Kavitha Subramanian",
      email: "kavitha.subramanian@prescripto.com",
      speciality: "Gynecologist",
      degree: "MBBS, MS (OBG)",
      experience: "9 Years",
      about: "Dr. Kavitha Subramanian is an experienced gynecologist from Erode specializing in women's reproductive health.",
      fees: 58,
      address: {
        line1: "Perundurai Road",
        line2: "Erode"
      },
      image: "https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "9",
      name: "Dr. Ramesh Chandran",
      email: "ramesh.chandran@prescripto.com",
      speciality: "Dermatologist",
      degree: "MBBS, MD (Dermatology)",
      experience: "6 Years",
      about: "Dr. Ramesh Chandran is a skilled dermatologist from Thanjavur offering advanced skin care treatments.",
      fees: 52,
      address: {
        line1: "Medical College Road",
        line2: "Thanjavur"
      },
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
      available: true
    },
    {
      _id: "10",
      name: "Dr. Anitha Balasubramanian",
      email: "anitha.balasubramanian@prescripto.com",
      speciality: "Pediatricians",
      degree: "MBBS, MD (Pediatrics)",
      experience: "5 Years",
      about: "Dr. Anitha Balasubramanian is a caring pediatrician from Kanyakumari dedicated to children's health and wellness.",
      fees: 48,
      address: {
        line1: "Main Road",
        line2: "Nagercoil"
      },
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      available: true
    }
  ];

  const [doctors, setDoctors] = useState(localDoctors); // Start with local Tamil Nadu doctors
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData, setUserData] = useState(false);

  const getDoctorsData = async () => {
    // Always use local Tamil Nadu doctors data
    setDoctors(localDoctors);
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    doctors,
    getDoctorsData,
    currency,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
  };

  useEffect(() => {
    // Initialize with local Tamil Nadu doctors data
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
