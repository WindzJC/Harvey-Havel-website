import type { ActionLink } from "@/data/harvey-site";

type SiteFooterProps = {
  title: string;
  role: string;
  copy: string;
  links: ActionLink[];
};

export function SiteFooter({ title, role, copy, links }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-xl">
          <p className="font-serif text-[2rem] leading-none text-ivory">{title}</p>
          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.32em] text-ivory/45">
            {role}
          </p>
          <p className="mt-5 text-sm leading-7 text-ivory/62">{copy}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] uppercase tracking-[0.28em] text-ivory/66 transition duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
