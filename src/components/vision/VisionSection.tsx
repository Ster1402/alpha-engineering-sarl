//create a react beautiful tailwind Services section
import React from "react";
import Image from "next/image";

const VisionSection = () => {
  const visionPanels = [
    "Innovation continue",
    "Durabilité",
    "Excellence opérationnelle",
    "Engagement communautaire",
    "Leadership éthique",
    "Satisfaction des clients",
  ];

  return (
    <section className="relative bg-orange text-white">
      <div className="container mx-auto flex px-5 py-12 sm:py-24 items-center justify-center flex-col">
        <div className="text-center mb-6 sm:mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-white mb-4">
            Notre Vision
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap md:w-2/3">
          {visionPanels.map((panel, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h2 className="title-font font-medium text-2xl text-white">
                  {panel}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-0 h-full w-1/2">
          <Image
            alt="Vision background"
            src="/assets/images/PNG/vision.png"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
