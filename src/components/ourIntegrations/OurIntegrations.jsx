import React from "react";

const OurIntegrations = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <div className="flex-grow h-px bg-gray-300"></div>
        <p className="px-4 text-gray-700 text-xl font-semibold text-center whitespace-nowrap">
          Our Integrations
        </p>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      <div className="w-full py-6 mt-2">
  <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5 md:gap-20">
    <img
      src="/integrationsImage/integrations1.jpg"
      alt="integrations logo"
      className="w-auto  md:w-40 lg:w-72 h-auto object-contain"
    />
    <img
      src="/integrationsImage/integrations2.jpg"
      alt="integrations logo"
      className="w-auto  md:w-40 lg:w-72 h-auto object-contain"
    />
    <img
      src="/integrationsImage/integrations3.jpg"
      alt="integrations logo"
      className="w-auto  md:w-40 lg:w-72 h-auto object-contain"
    />
    <img
      src="/integrationsImage/integrations4.jpg"
      alt="integrations logo"
      className="w-auto  md:w-40 lg:w-72 h-auto object-contain"
    />
  </div>
</div>

    </div>
  );
};

export default OurIntegrations;
