import { useState } from "react";
import servicesData from "data/servicesData";

export default function Services() {
  const [isOpen, setIsOpen] = useState({});
  const toggle = (index) => {
    setIsOpen({ ...isOpen, [index]: !isOpen[index] });
  };

  return (
    <section id="servicos" className="bg-background h-full p-4">
      <div className="container mx-auto">
        <div className="p-4">
          <div className="mt-2 w-10 h-0.5 bg-primary mb-2"></div>
          <h1 className="leading-none font-rubik text-3xl md:text-4xl text-gray-900 uppercase mb-6">
            Serviços
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-7 px-4 lg:px-0">
          {servicesData.map((service, index) => (
            <div>
              <div className="grid grid-rows-1 grid-flow-col gap-4 mx-auto lg:w-9/12">
                <div className="w-14 h-14 row-span-2 bg-primary rounded-full p-3">
                  {service.icon}
                </div>
                <div className="">
                  {service.name}
                  <div className="tracking-tight">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
