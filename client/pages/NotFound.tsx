import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold text-brandNavy">404</h1>
        <p className="text-xl font-medium text-brandNavy/70">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="text-base font-semibold uppercase tracking-wide text-brandNavy underline underline-offset-4 hover:opacity-70"
        >
          Return to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
