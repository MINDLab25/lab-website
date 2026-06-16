import { lab } from '@/data/site'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function JoinSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="join" className="border-t border-surface-border bg-white">
      <div className="container-content py-20 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/images/mindlab-logo-symbol.png`}
          alt=""
          className="w-12 h-12 mx-auto mb-5 opacity-90"
        />
        <h2 className="text-2xl font-semibold mb-3">Interested in Joining?</h2>
        <div className="text-ink-muted max-w-xl mx-auto mb-6 leading-relaxed space-y-3">
          {lab.joinDescription.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <button
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-surface-border-strong text-ink text-sm font-medium hover:bg-surface-subtle transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Get in Touch
        </button>

        <div className="mt-10 space-y-1 text-sm text-ink-faint">
          <p>Computer Science Department</p>
          <p>{lab.university}</p>
          <p>{lab.room}</p>
          <p>{lab.address}</p>
          <p>
            <a href={`mailto:${lab.email}`} className="hover:text-brand-purple transition-colors">
              {lab.email}
            </a>
          </p>
        </div>

        <p className="mt-10 text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} MIND Lab
        </p>
      </div>
    </section>
  )
}
