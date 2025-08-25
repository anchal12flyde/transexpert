// crawler-dynamic.js
import axios from "axios";
import * as cheerio from "cheerio";

const visited = new Set();
const results = [];

async function crawl(url, base) {
  if (visited.has(url)) return;
  visited.add(url);

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const text = $("body")
      .clone()
      .find("script, style, noscript")
      .remove()
      .end()
      .text()
      .replace(/\s+/g, " ")
      .trim();

    const charCount = text.length;
    const wordCount = text.split(" ").filter(Boolean).length;

    results.push({ url, characters: charCount, words: wordCount });

    console.log(`✅ ${url} -> ${charCount} characters`);

    // internal links in this page
    const links = $("a")
      .map((_, a) => $(a).attr("href"))
      .get()
      .filter(
        (l) =>
          l &&
          !l.startsWith("#") &&
          !l.startsWith("mailto:") &&
          !l.startsWith("tel:")
      );

    for (let link of links) {
      try {
        const absoluteLink = new URL(link, base).href;
        if (absoluteLink.startsWith(base.origin)) {
          await crawl(absoluteLink, base);
        }
      } catch {}
    }
  } catch (err) {
    console.error(`❌ Error crawling ${url}:`, err.message);
  }
}

(async () => {
  const startUrl = "https://transexpert.vercel.app/";
  const base = new URL(startUrl);

  console.log("🚀 Starting crawl...\n");

  // Provide dynamic links here
  const dynamicLinks = [
    "https://transexpert.vercel.app/ftl",
    "https://transexpert.vercel.app/temperature-controlled",
    "https://transexpert.vercel.app/cross-border",
    "https://transexpert.vercel.app/cross-docking",
  ];

  // Crawl home page first
  await crawl(startUrl, base);

  // Crawl all dynamic links
  for (const link of dynamicLinks) {
    await crawl(link, base);
  }

  console.log("\n📊 Crawl results:");
  console.table(results);

  const totalChars = results.reduce((sum, r) => sum + r.characters, 0);
  const totalWords = results.reduce((sum, r) => sum + r.words, 0);

  console.log(`\n🔢 TOTAL CHARACTERS: ${totalChars}`);
  console.log(`📝 TOTAL WORDS: ${totalWords}`);
})();
