import { SECTIONS_IDS } from "@/config";
import lang from "@/lang";
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
        <div className="flex flex-wrap justify-center -m-4">
          {lang.partners.map((partner) => (
            <div key={partner.id} className="lg:w-1/4  md:w-1/2 p-4 w-full">
              <a
                href={partner.link}
                className="block relative h-48 rounded overflow-hidden"
                title={partner.name}
              >
                <Image
                  alt="partner"
                  className="object-fill w-full h-full block"
                  src={partner.logo}
                  width={420}
                  height={172}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {partner.name}
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
