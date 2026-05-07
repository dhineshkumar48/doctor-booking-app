import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gradient-primary rounded-2xl px-6 md:px-10 2xl:px-20 shadow-2xl">
      {/*---------- Left Side ----------*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight md:leading-tight lg:leading-tight drop-shadow-lg">
          Book Appointment <br />
          <span className="text-yellow-300">With Trusted Doctors</span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-base font-light bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <img className="w-32 rounded-full border-4 border-white/30" src={assets.group_profiles} alt="" />
          <p className="leading-relaxed">
            Simply browse through our extensive list of trusted doctors from Tamil Nadu,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free with verified healthcare professionals.
          </p>
        </div>
        <a
          className="flex items-center gap-3 btn-secondary text-white font-semibold text-lg m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-xl"
          href="#speciality"
        >
          Book appointment
          <img className="w-4" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/*---------- Right Side ----------*/}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-2xl shadow-2xl border-8 border-white/20"
          src={assets.header_img}
          alt=""
        />
        <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-dark px-4 py-2 rounded-full font-bold shadow-lg">
          100+ Doctors
        </div>
      </div>
    </div>
  );
};

export default Header;
