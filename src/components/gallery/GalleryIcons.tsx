export function DownloadIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M5 21h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 6a3 3 0 1 0-2.83-4H13a3 3 0 0 0 2.83 4ZM8 14a3 3 0 1 0-2.83-4H5A3 3 0 0 0 7.83 14ZM16 22a3 3 0 1 0-2.83-4H13A3 3 0 0 0 15.83 22Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m8.6 11.4 6.8-3.2M8.6 12.6l6.8 3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
