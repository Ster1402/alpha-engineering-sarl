import Image from "next/image";
import { Button } from "../ui/button";
import lang from "@/lang";
import React from "react";
import { SECTIONS_IDS } from "@/config";

const ServicesSection = () => {
  return (
    <section
      id={SECTIONS_IDS.SERVICE}
      className="text-gray-600 bg-[#1CA4B11A]/15 body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-2xl md:text-4xl text-black font-bold text-center mb-2">
          Nos Services
        </h1>
        <p className="text-center mb-12 px-4 md:px-12 lg:px-24 mx-auto">
          Welcome to our services section! Here, you can explore the various
          services we offer to our clients. Each service is designed to meet
          specific needs and provide unique solutions. Take a look at the
          descriptions below to learn more about each service.
        </p>
        <div className="flex flex-wrap -m-4">
          {lang.services.map((service, id) => (
            <React.Fragment key={id}>
              {lang.services.length % 3 === 1 &&
                id === lang.services.length - 1 && (
                  <div className="p-4 md:w-1/3"></div>
                )}
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                  <Image
                    alt="content"
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={service.imageUrl}
                    width={720}
                    height={400}
                    layout="responsive"
                  />
                  <div className="flex flex-col flex-grow justify-between p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      {service.title}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-4">
                      {service.subtitle}
                    </h1>
                    <p className="leading-relaxed h-32 md:h-36 line-clamp-6 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center flex-wrap mt-auto">
                      <Button className="w-full inline-flex border-2 border-dark py-2 px-6 focus:outline-none rounded text-lg items-center md:mb-2 lg:mb-0">
                        En savoir plus
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
