import { MoveRightIcon } from "lucide-react";

export default function StripFtl({ text, button, m }) {
  return (
    <div className="counterSection1" style={{ marginTop: `${m}px` }}>
      <div className="global-container flex items-center gap-[26px]">
        <h2
          className="red-strip-text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className="flex items-center hero-button !bg-white gap-2 w-fit">
          <p className="text-thm-strip-red font-semibold">{button.label}</p>
          {button.icon === "MoveRightIcon" && (
            <MoveRightIcon color={button.color} />
          )}
        </div>
      </div>
    </div>
  );
}
