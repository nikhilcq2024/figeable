import Layout from "@/components/layout/Layout";

const CATEGORIES = [
  {
    title: "Graphic Design",
    description:
      "The art of visual communication using typography, imagery, and color to convey ideas or messages, typically seen in branding, advertising, and print.",
  },
  {
    title: "User Interface (UI) / User Experience (UX) Design",
    description:
      "The discipline of crafting digital screens, buttons, and user flows to ensure digital products are both beautiful and intuitive to navigate.",
  },
  {
    title: "Industrial / Product Design",
    description:
      "The process of creating physical products—from smartphones to furniture—balancing aesthetics, ergonomics, and manufacturing efficiency.",
  },
  {
    title: "Interior Design",
    description:
      "The practice of planning and decorating indoor spaces to maximize functionality, safety, and visual appeal for the people who inhabit them.",
  },
  {
    title: "Fashion Design",
    description:
      "The art of applying aesthetics and design principles to clothing, footwear, and accessories, heavily influenced by cultural and social trends.",
  },
  {
    title: "Motion Graphic Design",
    description:
      "The craft of applying graphic design principles to filmmaking and video production through animation and cinematic effects.",
  },
];

export default function Index() {
  return (
    <Layout>
      <section
        className="flex min-h-[500px] items-end px-6 py-16 sm:px-10 lg:min-h-[700px] lg:px-[120px] lg:py-24"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.69) 0%, rgba(0, 0, 0, 0.69) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/1f845aa7b47ba1251b7d09f03cfdcf32f4f03792?width=2880')",
          backgroundColor: "lightgray",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex max-w-[740px] flex-col gap-3">
          <h1 className="text-3xl font-extrabold text-brandMint sm:text-4xl lg:text-5xl">
            Banner header goes here
          </h1>
          <p className="text-base font-normal text-brandMint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-x-5 gap-y-10 px-6 py-16 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:gap-y-[50px] lg:px-[120px] lg:py-24">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center gap-5 text-center"
          >
            <h3 className="text-xl font-extrabold text-black sm:text-2xl">
              {category.title}
            </h3>
            <p className="text-base font-medium text-black">
              {category.description}
            </p>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center gap-8 bg-brandGold px-6 py-16 sm:px-10 lg:px-[120px] lg:py-24">
        <div className="flex max-w-[700px] flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Heading goes here
          </h2>
          <p className="text-base font-medium text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/72b2e8e5e919ededb3b863107b47cb843aa28911?width=1224"
          alt=""
          className="w-full max-w-[612px] object-cover"
        />
      </section>
    </Layout>
  );
}
