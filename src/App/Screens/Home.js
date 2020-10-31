import React, { useContext } from "react";
import LOGO from "../assets/SOLUSPAY";
import Form from "../Components/Form";
import { LanguageContext } from "../Store/LanguageProvider";

const Home = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="lg:w-2/3 w-1/3">
      <div className="bg-white lg:shadow-lg flex lg:justify-between lg:w-auto justify-center rounded-lg  z-0 relative">
        <div className="bg-white rounded-lg lg:w-1/3 shadow-lg lg:shadow-none">
          <div className="flex items-center flex-col py-8 gap-6 lg:px-0 px-5">
            <div className="uppercase font-semibold text-gray-600">
              {t("welcome to")}
            </div>
            <div className="tracking-widest text-3xl font-bold uppercase">
              <span className="text-secondary">sol</span>
              <span className="text-deepOrange">us</span>
              <span className="text-primary">pay</span>
            </div>
            <p className="font-thin text-black text-lg text-center lg:hidden">
              {t("shortDescription")}
            </p>
            <Form />
          </div>
        </div>
        <div className="bg-deepOrange bg-opacity-75 w-2/3 rounded-r-lg  flex-col items-center py-10 gap-10 px-10 hidden lg:flex">
          {LOGO}
          <p className="font-semibold text-white text-lg">
            {t("longDescription")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
