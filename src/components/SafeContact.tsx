"use client";

import { useEffect, useState } from "react";
import {
  buildMailtoHref,
  buildTelHref,
  getContactEmail,
  getContactPhoneDisplay,
  openExternalContact,
} from "@/lib/contact-secure";

type CommonProps = {
  className?: string;
  children?: React.ReactNode;
};

export function SafeMailtoButton({
  className,
  children,
  subject,
  body,
}: CommonProps & { subject?: string; body?: string }) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    openExternalContact(buildMailtoHref(subject, body));
  }

  return (
    <a
      href="#access"
      role="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}

export function SafeTelButton({ className, children }: CommonProps) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    openExternalContact(buildTelHref());
  }

  return (
    <a href="#access" role="button" onClick={onClick} className={className}>
      {children}
    </a>
  );
}

/** Renders email only after mount (not in raw HTML for scrapers). */
export function SafeEmailText({
  className,
  asLink = true,
  subject,
  body,
}: {
  className?: string;
  asLink?: boolean;
  subject?: string;
  body?: string;
}) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(getContactEmail());
  }, []);

  if (!email) {
    return <span className={className}>…</span>;
  }

  if (!asLink) {
    return <span className={className}>{email}</span>;
  }

  return (
    <a
      href="#contact-email"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        openExternalContact(buildMailtoHref(subject, body));
      }}
    >
      {email}
    </a>
  );
}

/** Renders phone only after mount. */
export function SafePhoneText({
  className,
  asLink = true,
}: {
  className?: string;
  asLink?: boolean;
}) {
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    setPhone(getContactPhoneDisplay());
  }, []);

  if (!phone) {
    return <span className={className}>…</span>;
  }

  if (!asLink) {
    return <span className={className}>{phone}</span>;
  }

  return (
    <a
      href="#contact-phone"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        openExternalContact(buildTelHref());
      }}
    >
      {phone}
    </a>
  );
}
