/** Architecture diagram with a close-up crop for small screens (and for cards when `focus` is set). */
const WITH_FOCUS = new Set([
  "eks-platform", "family-club", "hybrid-connectivity", "aiops", "finops",
  "occurrences-ai", "sales-portal", "analytics-library", "gcp-data",
]);
const V = "2026-10b";

interface Props {
  slug: string;
  alt: string;
  focus?: boolean;
  className?: string;
  loading?: "lazy" | "eager";
}

const DiagramImage = ({ slug, alt, focus = false, className = "", loading = "lazy" }: Props) => {
  const full = `/architecture/${slug}.svg?v=${V}`;
  const crop = WITH_FOCUS.has(slug) ? `/architecture/${slug}-focus.svg?v=${V}` : full;
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={crop} />
      <img src={focus ? crop : full} alt={alt} width="1280" height="820" loading={loading} className={`block w-full bg-white ${className}`} />
    </picture>
  );
};

export default DiagramImage;
