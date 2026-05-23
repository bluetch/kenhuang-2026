interface YouTubePreviewProps {
  href: string;
  title: string;
  image: string;
  domain?: string;
}

export function YouTubePreview({
  href,
  title,
  image,
  domain = "youtube.com",
}: YouTubePreviewProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-8 block overflow-hidden rounded-[1.35rem] border border-[#d1d5db] bg-white no-underline shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="aspect-video w-full overflow-hidden bg-[#e8edf2]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-2 px-6 py-5">
        <div className="flex items-center gap-2 text-[0.95rem] text-[#9ca3af]">
          <span className="inline-flex h-5 w-5 flex-none items-center justify-center">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path
                fill="#FF0000"
                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8Z"
              />
              <path fill="#fff" d="M9.75 15.52V8.48L15.98 12l-6.23 3.52Z" />
            </svg>
          </span>
          <span>{domain}</span>
        </div>
        <div className="text-[0.98rem] leading-8 text-[#111827]">
          {title}
        </div>
      </div>
    </a>
  );
}
