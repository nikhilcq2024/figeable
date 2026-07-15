import Layout from "@/components/layout/Layout";

export default function Placeholder({ title }: { title: string }) {
  return (
    <Layout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold text-brandNavy sm:text-4xl">
          {title}
        </h1>
        <p className="max-w-md text-base font-medium text-brandNavy/70">
          This page is coming soon. Keep prompting to fill in the {title}{" "}
          page content.
        </p>
      </div>
    </Layout>
  );
}
