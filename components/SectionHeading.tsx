type SectionHeadingProps = {
  tag: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export const SectionHeading = ({
  tag,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) => (
  <div
    className={`flex flex-col gap-3 ${
      align === "center" ? "items-center text-center" : ""
    }`}
  >
    <span className="inline-flex items-center justify-center rounded-full border border-[#e0c3a1] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#a44518]">
      {tag}
    </span>
    <h2 className="text-3xl font-semibold text-[#2d1c12]">{title}</h2>
    <p className="max-w-2xl text-base text-[#5c4435]">{subtitle}</p>
  </div>
);


