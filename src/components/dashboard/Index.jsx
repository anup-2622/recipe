import React, { useContext } from "react";
import { Navbar } from "../navbar/Navbar";
import { AuthContext } from "../../context/AuthProviders";
import { Footer } from "../footer/Footer";

const Index = () => {
  const { user, token } = useContext(AuthContext);

  return (
    <div className="w-full h-full index">
      <Navbar />
      <div className="text-white">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
          praesentium veniam!
        </p>
     
      </div>
      <Footer />
    </div>
  );
};

export default Index;
