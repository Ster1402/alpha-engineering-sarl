"use client";

import Section from "@/components/common/section/Section";
import lang from "@/lang";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import React from "react";
import Link from "next/link";
import { ROUTES } from "@/config";
import { cn } from "@/lib/utils";

function Banner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
      stopOnInteraction: true,
    })
  );

  const slides = [
    "bg-slide1",
    "bg-slide2",
    "bg-slide3",
    "bg-slide4",
    "bg-slide5",
    "bg-slide6",
    "bg-slide7",
  ];

  return (
    <Section
      className={cn(
        `bg-light-gray py-4 bg-slide1 bg-center bg-cover bg-opacity-15 relative sm:px-4 md:text-center`,
        slides[current - 1]
      )}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-80" />

      <Carousel
        setApi={setApi}
        className="w-full mx-auto max-w-sm md:max-w-md"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          duration: 50,
          loop: true,
          dragFree: true,
          active: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {lang.services?.map((item, index) => (
            <CarouselItem
              className="h-[80vh] flex items-center justify-center"
              key={index}
            >
              <div className="p-1">
                <Card
                  className={cn(
                    `flex py-4 bg-transparent border-none text-white`
                  )}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                    <div className="flex bg-transparent flex-col justify-start items-center gap-1">
                      <h2 className="font-bold text-2xl md:text-4xl font-heading">
                        {item.title}
                      </h2>
                      <h3 className="font-bold text-xl md:text-3xl font-heading text-orange">
                        {item.subtitle}
                      </h3>
                    </div>
                    <Link
                      className="w-full flex items-center justify-center"
                      href={ROUTES.CONTACT_US}
                    >
                      <Button
                        size={"sm"}
                        className="w-fit border-white text-white"
                      >
                        {lang.buttons["more"]}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex text-white" />
        <CarouselNext className="hidden sm:flex text-white" />
      </Carousel>
    </Section>
  );
}

export default Banner;
