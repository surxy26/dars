import { SITE } from "../../utils/constants";

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`mailto:${SITE.email}`}
        className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
      >
        Email
      </a>
      <a
        href={`tel:${SITE.phone}`}
        className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
      >
        Call
      </a>
      <a
        href={SITE.portfolio}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
      >
        Facebook Portfolio
      </a>
    </div>
  );
}

export default SocialLinks;