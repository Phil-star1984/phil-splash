/** Runtime-assembled contact values — avoids plain addresses in static HTML. */

function fromCodes(codes: number[]): string {
  return String.fromCharCode(...codes);
}

/** info@phil-splash.de */
export function getContactEmail(): string {
  const user = fromCodes([105, 110, 102, 111]);
  const domain = fromCodes([
    112, 104, 105, 108, 45, 115, 112, 108, 97, 115, 104, 46, 100, 101,
  ]);
  return `${user}@${domain}`;
}

/** +49 176 20130451 */
export function getContactPhoneTel(): string {
  return fromCodes([43, 52, 57, 32, 49, 55, 54, 32, 50, 48, 49, 51, 48, 52, 53, 49]);
}

/** 0176 20130451 */
export function getContactPhoneDisplay(): string {
  return fromCodes([48, 49, 55, 54, 32, 50, 48, 49, 51, 48, 52, 53, 49]);
}

export function buildMailtoHref(subject?: string, body?: string): string {
  const email = getContactEmail();
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}

export function buildTelHref(): string {
  return `tel:${getContactPhoneTel().replace(/\s+/g, "")}`;
}

/** Open mail/phone client without navigating the current tab away. */
export function openExternalContact(href: string) {
  const opened = window.open(href, "_blank", "noopener,noreferrer");
  if (!opened) {
    // Popup blocked or mailto handled oddly — keep current page, try location assign in same gesture
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}
