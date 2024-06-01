import { SECTIONS_IDS } from "@/config";
import Image from "next/image";

const Partners = () => {
  function range(start: number, end: number) {
    return Array(end - start + 1)
      .fill(0)
      .map((_, idx) => start + idx);
  }

  return (
    <section id={SECTIONS_IDS.PARTNERS} className="text-gray-600 body-font">
      <div className="container px-5 py-12 sm:py-24 mx-auto">
        <h1 className="text-2xl md:text-4xl text-black font-bold text-center mb-12">
          Il nous ont fait confiance
        </h1>
        <div className="flex flex-wrap -m-4">
          {range(1, 4).map((index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
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
                  Nom du Partenaire {index}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
