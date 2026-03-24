import { SITE } from "../../utils/constants";

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {SITE.name}. All rights reserved.</p>
        <p>{SITE.email}</p>
      </div>
    </footer>
  );
}

export default Footer;