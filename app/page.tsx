import Photo from "@/components/Photo";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:p-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="text-[48px] xl:text-[88px] font-semibold">
              Hello I&#39;m
              <br />
              <span>Uttam Jangir</span>
            </h1>
            <p>
              I enjoy the process of building projects and I am proficient in
              various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-600 rounded-full flex justify-center items-center text-blue-600 text-base hover:bg-blue-600 hover:text-gray-800 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
