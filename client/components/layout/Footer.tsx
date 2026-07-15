export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-4 bg-brandNavy px-6 py-10 text-brandMint sm:flex-row sm:items-start sm:justify-between sm:px-10 lg:px-[120px] lg:py-10">
      <p className="text-base text-brandMint">All rights reserved at Figeable</p>
      <div className="flex flex-wrap items-start justify-center gap-5">
        <p className="text-base text-brandMint">Terms of service</p>
        <p className="text-base text-brandMint">Privacy policy</p>
        <p className="text-base text-brandMint">Cookie policy</p>
      </div>
    </footer>
  );
}
