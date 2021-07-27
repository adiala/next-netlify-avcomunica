import { useState } from "react";
import servicesData from "data/servicesData";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Services() {
  const [isOpen, setIsOpen] = useState({});
  const toggle = (index) => {
    setIsOpen({ ...isOpen, [index]: !isOpen[index] });
  };

  return (
    <div className="bg-gray-200 min-h-screen md:container mx-auto">
      <div className="p-4">
        <div className="mt-2 w-10 h-0.5 bg-primary mb-2"></div>
        <h1 className="leading-none font-rubik text-3xl text-black uppercase mb-6">
          Serviços
        </h1>
      </div>

      {servicesData.map((service, index) => (
        <div
          key={index}
          onClick={(e) => toggle(index)}
          className="relative mx-auto mb-8 bg-white shadow-md w-4/5 h-auto"
        >
          <div className="absolute -my-4 -mx-4 flex items-center w-12 h-12 bg-primary p-2 shadow-md">
            {service.icon}
          </div>
          <div className="p-4 pb-0 mt-4 ml-8">
            {service.name}
            {!!isOpen[index] && (
              <div className="animate-fade-in-down mb-2">{service.description}</div>
            )}
            {!isOpen[index] && <div></div>}
          </div>
          <div
            className={
              isOpen[index]
                ? "flex justify-center inset-y-3/4 inset-x-0 h-5 bg-transparent"
                : "flex justify-center inset-y-3/4 inset-x-0 h-5 bg-transparent"
            }
          >
            <div className="rounded-b-full flex justify-center bg-white h-8 w-8 shadow-md">
              {!isOpen[index] ? (
                <IoIosArrowDown className="w-6 h-6 mt-2 text-black" />
              ) : (
                <IoIosArrowUp className="w-6 h-6 mt-2 text-black" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
