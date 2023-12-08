import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ContactPage from "../MainPage/Contact/Contact";

const Contact = () => {
  return (
    <>
      <div className="w-full h-[40vh] mb-14 mt-16">
        <Breadcrumb title="Contact" breadcrumb="Home / Contact" />
      </div>
      <ContactPage />
      {/* <div className="w-full h-auto pb-16 lg:px-20 md:px-16 sm:px-8 px-4">
      </div> */}
    </>
  );
};

export default Contact;
