import { SECTIONS_IDS } from "@/config";
import { Button } from "../ui/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id={SECTIONS_IDS.ABOUT_US} className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 sm:py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <Image
            width={720}
            height={600}
            className="object-cover object-center rounded"
            alt="hero"
            src="/assets/images/about-us.jpeg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            À propos de nous
          </h1>
          <p className="mb-8 leading-relaxed">
            <strong className="font-bold">ALPHA ENGINEERING</strong> est Une
            société spécialisée en ingénierie qui offre des services
            professionnels dans divers domaines tels que le génie civil, le
            génie mécanique, le génie électrique, le génie chimique, et autres
            spécialisations techniques. Elle met en œuvre des principes
            scientifiques et techniques pour concevoir, développer et gérer des
            projets ou des systèmes complexes. A travers ses équipes
            d’ingénieurs et techniciens expérimentés, elle propose des solutions
            innovantes et adaptées aux différents besoins de ses clients.
          </p>
          <div className="flex flex-1 justify-center">
            <Button className="inline-fle border-2 border-dark py-2 px-6 focus:outline-none rounded text-lg">
              Contactez-Nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
