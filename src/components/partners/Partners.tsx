import { SECTIONS_IDS } from "@/config";
import Image from "next/image";

const Partners = () => {
  return (
    <section id={SECTIONS_IDS.PARTNERS} className="text-gray-600 body-font">
      <div className="container px-5 py-12 sm:py-24 mx-auto">
        <h1 className="text-2xl md:text-4xl text-black font-bold text-center mb-12">
          Il nous ont fait confiance
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              href="#"
              className="block relative h-48 rounded overflow-hidden"
              title="Partner Link"
            >
              <Image
                alt="partner"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
                width={420}
                height={260}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATÉGORIE
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Nom du Partenaire 1
              </h2>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              href="#"
              className="block relative h-48 rounded overflow-hidden"
              title="Partner Link"
            >
              <Image
                alt="partner"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/421x261"
                width={421}
                height={261}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATÉGORIE
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Nom du Partenaire 2
              </h2>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              href="#"
              className="block relative h-48 rounded overflow-hidden"
              title="Partner Link"
            >
              <Image
                alt="partner"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/422x262"
                width={422}
                height={262}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATÉGORIE
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Nom du Partenaire 3
              </h2>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              href="#"
              className="block relative h-48 rounded overflow-hidden"
              title="Partner Link"
            >
              <Image
                alt="partner"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
                width={423}
                height={263}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATÉGORIE
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Nom du Partenaire 4
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
