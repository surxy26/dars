export function truncateText(text, max = 120) {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max)}...` : text;
}

export function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}