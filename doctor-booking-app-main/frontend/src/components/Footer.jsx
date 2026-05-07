import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*---------- Left Side ----------*/}
        <div>
          <p className="mb-5 w-40 text-3xl font-bold text-primary cursor-pointer">
            BDoctor
          </p>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        {/*---------- Center ----------*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              onClick={() => scrollTo(0, 0)}
              className="cursor-pointer hover:text-black transition-all duration-500"
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              onClick={() => scrollTo(0, 0)}
              className="cursor-pointer hover:text-black transition-all duration-500"
            >
              <NavLink to="/about">About us</NavLink>
            </li>
            <li
              onClick={() => scrollTo(0, 0)}
              className="cursor-pointer hover:text-black transition-all duration-500"
            >
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li className="cursor-pointer hover:text-black transition-all duration-500">
              Privacy policy
            </li>
          </ul>
        </div>
        {/*---------- Right Side ----------*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer hover:text-black transition-all duration-500">
              +998912019909
            </li>
            <li className="cursor-pointer hover:text-black transition-all duration-500">
              akmalov1c09@gmail.com
            </li>
          </ul>
        </div>
      </div>
      {/*---------- Copyright Text ----------*/}
      <div>
        <hr className="text-gray-400" />
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright © 2025 Sardor Akmalovich - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
