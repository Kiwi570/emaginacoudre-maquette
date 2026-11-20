import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
const R = process.argv[2];
const L = [['grok/accueil-ouverture',4/5],['grok/atelier-ouverture',4/5],['grok/prise-en-main-ouverture',21/9],['grok/la-maison-ouverture',16/9],['grok/contact-ouverture',4/5],['grok/404',16/9],['grok/duo-pascal',4/5],['grok/duo-michele',4/5],['grok/cours-couture',3/2],['boutique-vitrine',3/2]];
for (const [n, r] of L) {
  mkdirSync(R + '/assets/images/' + n.split('/').slice(0,-1).join('/'), { recursive: true });
  for (const w of [640, 1280]) {
    const h = Math.round(w / r);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9ddcc"/><stop offset="1" stop-color="#b9a48d"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" font-size="${w/20}" text-anchor="middle" fill="#172033" font-family="sans-serif">${n}</text></svg>`;
    await sharp(Buffer.from(svg)).webp({ quality: 60 }).toFile(`${R}/assets/images/${n}-${w}.webp`);
  }
}
console.log('ok');
