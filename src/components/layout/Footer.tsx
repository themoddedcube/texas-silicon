import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#141414] px-6 pt-8 pb-8 text-[13px] text-white/60">
      <div className="mx-auto max-w-[1200px]">
        <nav
          aria-label="Footer"
          className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/70"
        >
          <a href={`mailto:${SITE.contactEmail}`} className="hover:text-white">
            {SITE.contactEmail}
          </a>
        </nav>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex max-w-[560px] flex-col gap-2">
            <span>
              © {new Date().getFullYear()} {SITE.name}
            </span>
            <span className="text-white/40">
              {SITE.name} is a student-run organization. This is not an
              official website of The University of Texas at Austin, and its
              content does not necessarily represent the views of the
              University.
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 tracking-[0.12em] text-white/70 uppercase">
              Chips, designed at Texas
            </span>
            <span className="text-white/45">
              Built for students, by students.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
