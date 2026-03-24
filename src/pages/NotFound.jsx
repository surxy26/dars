import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-shell text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-neutral-300">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-black"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;