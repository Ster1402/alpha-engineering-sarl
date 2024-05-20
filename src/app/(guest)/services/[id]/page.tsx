import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceProject from "@/components/services/ServiceProject";
import lang from "@/lang";

type ServicePageProps = {
  params: {
    id: string;
  };
};

const Service = ({ params: { id } }: ServicePageProps) => {
  const service = lang.services.find((service) => service.id === Number(id));

  if (service === undefined) {
    return <div>Service not found</div>;
  }

  return (
    <article className="h-full bg-white w-full">
      <ServiceHeader service={service} />
      {service.projects && (
        <section className="container mx-auto py-12">
          {service.projects?.map((project, index) => (
            <ServiceProject
              key={project.id}
              project={project}
              reverse={index % 2 === 0}
              slug={service.projects?.length === 1 ? "" : `#${index + 1}`}
            />
          ))}
        </section>
      )}
    </article>
  );
};

export default Service;
