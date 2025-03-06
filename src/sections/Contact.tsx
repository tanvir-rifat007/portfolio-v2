import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grayImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900
        dark:from-[#d3e2a2] dark:to-[#4a5568] dark:text-[#112A46]
          py-8 px-10 rounded-3xl text-center md:text-left shadow-lg relative overflow-hidden
          z-0
        "
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grayImage.src})`,
            }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <button
                className="inline-flex items-center justify-center
          bg-white text-gray-950  dark:bg-[#333333] dark:text-[#e0e0e0] px-6 py-3 rounded-xl font-semibold gap-2 cursor-pointer w-max
          "
              >
                <span className="font-semibold">
                  <a href="mailto:tanvihassanrifat50@gmail.com">Contact Me </a>
                </span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
