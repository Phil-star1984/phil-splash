/**
 * Generates a 3-page A4 landscape offer PDF for Phil Splash.
 * Run: node scripts/generate-offer-pdf.mjs
 */
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assets = path.join(__dirname, ".pdf-assets");
const outDir = path.join(root, "public", "downloads");
const outFile = path.join(
  outDir,
  "phil-splash-live-portraets-fassadenprojektion.pdf",
);

// A4 landscape in points
const W = 841.89;
const H = 595.28;
const M = 36;

const COLORS = {
  void: "#000000",
  elevated: "#0a0b0d",
  signal: "#e8eef5",
  titanium: "#c8ced6",
  dim: "#8b939e",
  laser: "#3dfffc",
  splash: "#ff2bd6",
};

function ensureDirs() {
  fs.mkdirSync(outDir, { recursive: true });
}

function drawBg(doc) {
  doc.rect(0, 0, W, H).fill(COLORS.void);
}

function drawLaserLine(doc, y) {
  const grad = doc.linearGradient(M, y, W - M, y);
  grad.stop(0, COLORS.void);
  grad.stop(0.35, COLORS.laser);
  grad.stop(0.65, COLORS.splash);
  grad.stop(1, COLORS.void);
  doc.rect(M, y, W - M * 2, 1).fill(grad);
}

function coverImage(doc, file, x, y, w, h) {
  doc.save();
  doc.rect(x, y, w, h).clip();
  doc.image(file, x, y, { cover: [w, h], align: "center", valign: "center" });
  doc.restore();
  // subtle dark veil for text contrast if needed
  doc.save();
  doc.rect(x, y, w, h).fillOpacity(0.12).fill("#000");
  doc.restore();
  doc.fillOpacity(1);
}

function pageFooter(doc, pageLabel) {
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(COLORS.dim)
    .text("Phil Splash  ·  Der Millionen Maler  ·  phil-splash.de", M, H - 22, {
      width: W / 2,
      align: "left",
    });
  doc.text(pageLabel, W / 2, H - 22, { width: W / 2 - M, align: "right" });
}

function page1(doc) {
  drawBg(doc);

  // Full-bleed cover image with left panel
  coverImage(doc, path.join(assets, "cover.jpg"), 0, 0, W, H);

  // Left dark panel
  doc.save();
  doc.rect(0, 0, W * 0.42, H).fillOpacity(0.82).fill(COLORS.void);
  doc.restore();
  doc.fillOpacity(1);

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(COLORS.laser)
    .text("ANGEBOT  ·  LIVE EVENT", M, 48, { characterSpacing: 2 });

  doc
    .font("Helvetica-Bold")
    .fontSize(36)
    .fillColor(COLORS.signal)
    .text("PHIL SPLASH", M, 78, { width: W * 0.36 - 8 });

  doc
    .font("Helvetica")
    .fontSize(12)
    .fillColor(COLORS.titanium)
    .text("Der Millionen Maler", M, 128);

  doc
    .font("Helvetica-Bold")
    .fontSize(20)
    .fillColor(COLORS.signal)
    .text("Live-Porträts.\nDirekt auf die Fassade.", M, 168, {
      width: W * 0.36 - 8,
      lineGap: 4,
    });

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(COLORS.titanium)
    .text(
      "Phil Splash zeichnet Gäste live auf dem iPad und projiziert die Porträts in Echtzeit an Hauswand, LED-Wand oder Fassade — für Firmenfeiern, Branding-Events und Veranstaltungen, die im Raum sichtbar werden sollen.",
      M,
      240,
      { width: W * 0.36 - 8, lineGap: 3 },
    );

  drawLaserLine(doc, H - 70);
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(COLORS.dim)
    .text(
      "Zum Weiterleiten an Event-Teams, Agenturen und Entscheider",
      M,
      H - 52,
      { width: W * 0.36 - 8 },
    );
}

function page2(doc) {
  drawBg(doc);

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(COLORS.laser)
    .text("SO FUNKTIONIERT’S", M, 28, { characterSpacing: 2 });

  doc
    .font("Helvetica-Bold")
    .fontSize(26)
    .fillColor(COLORS.signal)
    .text("Zeichnen. Projizieren. Reagieren.", M, 48);

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(COLORS.titanium)
    .text(
      "Drei Dinge passieren gleichzeitig: Jemand wird porträtiert, alle schauen zu — und das Gebäude wird zur Leinwand.",
      M,
      84,
      { width: W - M * 2 },
    );

  const cards = [
    {
      title: "01  Schnellporträt",
      body: "In 2–3 Minuten entsteht eine klare Strichzeichnung auf dem iPad. Wenige Linien, sofort wiedererkennbar — als persönliches Give-away für den Gast.",
      img: "speed.jpg",
    },
    {
      title: "02  Lichtprojektion",
      body: "Ein Videoprojektor wirft das Porträt live auf Fassade, Wand oder LED. Auf Wunsch auch Logos — großflächig, bis ca. 12 m Breite, mit Hochleistungs-Beamer.",
      img: "tech.jpg",
    },
    {
      title: "03  Fürs Event",
      body: "Firmenfeier, Branding, Launch, Gala: Gäste werden Teil der Inszenierung. Die Marke wird im Raum sichtbar — nicht nur auf der Bühne.",
      img: "process.jpg",
    },
  ];

  const gap = 14;
  const cardW = (W - M * 2 - gap * 2) / 3;
  const imgH = 210;
  const cardTop = 120;

  cards.forEach((card, i) => {
    const x = M + i * (cardW + gap);
    coverImage(doc, path.join(assets, card.img), x, cardTop, cardW, imgH);

    doc
      .font("Helvetica-Bold")
      .fontSize(11)
      .fillColor(COLORS.splash)
      .text(card.title, x, cardTop + imgH + 14, { width: cardW });

    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(COLORS.titanium)
      .text(card.body, x, cardTop + imgH + 32, { width: cardW, lineGap: 2 });
  });

  pageFooter(doc, "2 / 3");
}

function page3(doc) {
  drawBg(doc);

  // Right image panel
  const imgX = W * 0.48;
  coverImage(doc, path.join(assets, "facade.jpg"), imgX, 0, W - imgX, H);
  doc.save();
  doc
    .rect(imgX, 0, 80, H)
    .fillOpacity(0.55)
    .fill(COLORS.void);
  doc.restore();
  doc.fillOpacity(1);

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(COLORS.laser)
    .text("DAS ANGEBOT", M, 36, { characterSpacing: 2 });

  doc
    .font("Helvetica-Bold")
    .fontSize(24)
    .fillColor(COLORS.signal)
    .text("Was ihr bekommt.", M, 56, { width: imgX - M - 20 });

  const bullets = [
    "Live-Schnellporträts auf dem iPad (Strichzeichnungen)",
    "Echtzeit-Projektion auf Fassade, Wand oder LED-Fläche",
    "Optional: animierte Logos / Markenmotive",
    "Persönliche Porträts als Give-away für Gäste",
    "Technik: Hochleistungs-Beamer bis 7000 ANSI Lumen",
    "Formate: Firmenfeiern, Branding, Launches, Galas",
  ];

  let y = 100;
  bullets.forEach((b) => {
    doc.circle(M + 3, y + 4, 2).fill(COLORS.laser);
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor(COLORS.titanium)
      .text(b, M + 14, y, { width: imgX - M - 34 });
    y += 22;
  });

  y += 10;
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(COLORS.dim)
    .text(
      "Auszug Referenzen: Calvin Klein, Lavazza, NFL, MAC Cosmetics, Siemens — u. a. berichtet bei RTL, ZDF, SZ, BILD.",
      M,
      y,
      { width: imgX - M - 20, lineGap: 2 },
    );

  y += 48;
  drawLaserLine(doc, y);
  y += 18;

  doc
    .font("Helvetica-Bold")
    .fontSize(14)
    .fillColor(COLORS.signal)
    .text("Nächster Schritt", M, y);

  y += 22;
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(COLORS.titanium)
    .text(
      "Kurz Ort, Datum und Format schicken — dann klären wir Technik, Ablauf und Angebot.\nPreise auf Anfrage. National und international buchbar.",
      M,
      y,
      { width: imgX - M - 20, lineGap: 3 },
    );

  y += 48;
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(COLORS.laser)
    .text("info@phil-splash.de", M, y);
  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor(COLORS.signal)
    .text("+49 176 20130451", M, y + 18);
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(COLORS.titanium)
    .text("phil-splash.de", M, y + 36);

  pageFooter(doc, "3 / 3");
}

function main() {
  ensureDirs();
  const doc = new PDFDocument({
    size: [W, H],
    margin: 0,
    info: {
      Title: "Phil Splash — Live-Porträts & Fassadenprojektion",
      Author: "Phil Splash / Philip Mulfinger",
      Subject: "Angebotspräsentation Live Event",
      Keywords: "Live Portrait, Fassadenprojektion, Event, Phil Splash",
    },
  });

  const stream = fs.createWriteStream(outFile);
  doc.pipe(stream);

  page1(doc);
  doc.addPage({ size: [W, H], margin: 0 });
  page2(doc);
  doc.addPage({ size: [W, H], margin: 0 });
  page3(doc);

  doc.end();

  stream.on("finish", () => {
    const kb = Math.round(fs.statSync(outFile).size / 1024);
    console.log(`Wrote ${outFile} (${kb} KB)`);
  });
}

main();
