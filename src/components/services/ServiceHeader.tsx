import React from "react";
import Image from "next/image";
import lang from "@/lang";
import { Button } from "../ui/button";
import Link from "next/link";
import { ROUTES } from "@/config";
import RenderHtmlContent from "../common/RenderHTMLContent";

type ServiceHeaderProps = {
  service: AppService;
};

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  service: { subtitle, description, expertises = [], imageUrl },
}) => {
  const chunks = [];
  for (let i = 0; i < expertises.length; i += 4) {
    const chunk = expertises.slice(i, i + 4);
    chunks.push(chunk);
  }

  return (
    <section className="w-full h-full flex items-center justify-center py-12 bg-secondary/15">
      <div className="container mx-auto justify-center gap-2 flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-extrabold text-black font-heading">
            Alpha
          </h2>
          <h1 className="text-3xl md:text-5xl">{subtitle}</h1>
          <div className="my-4">
            <RenderHtmlContent content={description} />
          </div>
          {chunks.length > 0 && (
            <span className="inline-flex -mt-4 mb-4">
              Notre expertise inclue :
            </span>
          )}
          <div className="mb-4 flex gap-4 flex-wrap">
            {chunks.map((chunk, index) => (
              <ul key={index}>
                {chunk.map((item, index) => (
                  <li
                    key={index}
                    className="list-disc list-inside marker:text-orange"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 py-2">
            <Link
              className="flex items-center justify-center"
              href={ROUTES.CONTACT_US}
            >
              <Button className="w-fit px-8 py-4">
                {lang.buttons["contact"]}
              </Button>
            </Link>
            <Link
              className="flex items-center justify-center"
              href={ROUTES.SOCIALS.WHATSAPP}
            >
              <Button className="bg-green-500 border-transparent hover:bg-green-700 text-white font-bold">
                {lang.buttons["whatsapp"]}
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center md:items-start">
          <div className="border-b-4 border-orange">
            <Image
              src={imageUrl}
              alt="Service image"
              width={600}
              height={550}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
