"use client";

import React from "react";
import Image from "next/image";
import lang from "@/lang";
import { Button } from "../ui/button";
import Link from "next/link";
import { ROUTES } from "@/config";
import RenderHtmlContent from "../common/RenderHTMLContent";
import { cn } from "@/lib/utils";

type ServiceProjectProps = {
  project: Project;
  slug?: string;
  reverse?: boolean;
};

const ServiceProject: React.FC<ServiceProjectProps> = ({
  project: { title, description, images = [], country = "Cameroun" },
  slug = "",
  reverse = false,
  ...props
}) => {
  const [currentImage, setCurrentImage] = React.useState(images[0]);

  return (
    <div
      {...props}
      className="w-full h-full flex items-center justify-center py-12"
    >
      <div
        className={cn(
          "mx-auto justify-center gap-2 flex flex-col md:flex-row",
          reverse && "md:flex-row-reverse"
        )}
      >
        <div className="flex flex-col min-h-80 flex-1 justify-between h-full w-full md:w-1/2">
          <div>
            <h2 className="text-xl font-extrabold text-black font-heading">
              Projet {slug}
            </h2>
            <h1 className="text-3xl">{title}</h1>
            <div className="my-4 space-y-2">
              <div>
                <b>Description:</b> <RenderHtmlContent content={description} />
              </div>
              <div>
                <b>Pays:</b> {country}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 max-w-sm md:max-w-lg">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                onClick={() => setCurrentImage(image)}
                alt={`Image ${index}`}
                width={100}
                height={80}
                className={cn(
                  image === currentImage && "border-2 border-orange"
                )}
                objectFit="fit"
              />
            ))}
          </div>
        </div>
        <div className="w-full h-full flex-1 md:w-1/2 flex justify-center items-center md:items-start">
          <div className="sm:h-64 md:h-80 overflow-hidden border-b-4 border-orange">
            <Image
              src={currentImage}
              alt="Service image"
              width={600}
              height={550}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProject;
