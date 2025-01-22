import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import ServiceModal from "./service-modal";

// @ts-expect-error
const ServicesSection = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => window.HSOverlay.autoInit(), 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="p-8 md:p-16 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex flex-col gap-12 flex-1">
          <h2 className="text-2xl md:text-5xl font-bold font-euro text-center md:text-left mx-auto md:mx-0">
            <span className="text-white">OUR </span>
            <span className="text-[#40E0D0]">SERVICES</span>
          </h2>
          <div className="grid gap-12 items-center">
            <div className="flex flex-col gap-4">
              {/* @ts-expect-error */}
              {items.map((service, index) => (
                <div
                  key={service.number}
                  className="flex flex-col gap-3 cursor-pointer"
                  data-aos="fade-right"
                  data-aos-delay={index * 200}
                >
                  <div
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "flex md:flex-col items-center md:items-start gap-4 md:gap-0 mx-auto md:mx-0 hover:scale-105 transition-all duration-300"
                    )}
                  >
                    <span className="text-[#FF3131] text-4xl font-bold font-euro">
                      {service.number}
                    </span>

                    <div
                      className={cn(
                        "w-0.5 self-center h-8 bg-[#ff9f1c] md:hidden"
                      )}
                    />

                    <h3
                      className={cn(
                        "text-white text-lg md:text-xl font-bold max-w-32 sm:max-w-full font-euro",
                        ""
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {index === activeIndex && (
                    <>
                      <div
                        className="rounded-3xl overflow-hidden md:hidden border border-[#2C688E]"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls={`service-modal-${service.number}`}
                        onClick={() =>
                          window.HSOverlay.open(
                            `#service-modal-${service.number}`
                          )
                        }
                      >
                        <img
                          src={service?.image.src}
                          alt={service.title}
                          className="w-full h-full aspect-video object-contain"
                          loading="eager"
                        />
                      </div>

                      {service.description && (
                        <p className="text-[#8B8B8B]" data-aos="fade-up-right">
                          {service.description}
                        </p>
                      )}
                    </>
                  )}
                  <ServiceModal service={service} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex-1 hidden md:block" data-aos="fade-left">
          <div
            className="rounded-3xl border border-[#2C688E] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls={`service-modal-${items[activeIndex].number}`}
            // data-hs-overlay={`#service-modal-${items[activeIndex].number}`}
            onClick={() =>
              window.HSOverlay.open(
                `#service-modal-${items[activeIndex].number}`
              )
            }
          >
            <img
              src={items[activeIndex].image.src}
              alt={items[activeIndex].title}
              className="w-full h-full aspect-video object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
