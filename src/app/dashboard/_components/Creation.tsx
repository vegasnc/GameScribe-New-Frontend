import type { iCreation } from "./types";

interface CreationProps {
  creation: iCreation;
}

export const Creation = ({ creation }: CreationProps) => {
  return (
    <div
      className="relative flex h-[400px] min-w-[260px] flex-col justify-end gap-[10px] rounded-[6px] px-[24px] py-[8px] text-[#FFF8F1] text-text"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, #121212 95%), url(${creation.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-[24px] font-[var(--font-fancy)] text-[#FFF8F1]">
          {creation.title}
        </h1>
        <p className="font-normal uppercase text-white/60">{creation.race}</p>
      </div>
      <div className="inline-flex justify-between text-[12px]">
        <p>{creation.author}</p>
        <p>{creation.dateCreated}</p>
      </div>
    </div>
  );
};
