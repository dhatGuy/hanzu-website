import x from "../../assets/images/x.png";

export default function ServiceModal({ service }: any) {
  return (
    <div
      id={`service-modal-${service.number}`}
      className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto hs-overlay-backdrop-open:bg-black/40 hs-overlay-backdrop-open:backdrop-blur-sm"
      role="dialog"
      tabIndex={-1}
      aria-labelledby={`service-modal-${service.number}-label`}
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all max-w-full max-h-full h-full">
        <div className="relative flex flex-col-reverse md:flex-row justify-center items-center h-full px-3 md:px-20 gap-6">
          <div className="text-white space-y-2">
            <h2 className="text-4xl font-euro">{service.title}</h2>
            <p className="text-lg">{service.description}</p>
          </div>

          <div className="relative">
            <button
              type="button"
              className="absolute z-10 -right-2 -top-2 size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-[#e71d36] text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Close"
              data-hs-overlay={`#service-modal-${service.number}`}
            >
              <span className="sr-only">Close</span>
              <img src={x.src} alt="Close" className="w-4 h-4 object-contain" />
            </button>
            <div className="rounded-2xl aspect-square md:aspect-video object-cover overflow-hidden border-2 border-[#2C688E]">
              <img
                src={service.image.src}
                alt={service.title}
                className="w-full h-full object-cover scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
