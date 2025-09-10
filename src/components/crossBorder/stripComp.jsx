import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function StripFtl({ text, button, m }) {
  return (
    <div className="counterSection1" style={{ marginTop: `${m}px` }}>
      <div className="global-container flex items-center gap-[20px]">
        <h2
          className="red-strip-text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <Link href="/fleet-and-infrastructure">
          <div
            className="flex items-center hero-button !bg-white gap-2 w-fit 
                hover:!bg-[#a60400] transition-all duration-300 ease-in-out group"
          >
            <p className="text-thm-strip-red font-semibold group-hover:text-white">
              {button.label}
            </p>
            {button.icon === "MoveRightIcon" && (
              <MoveRightIcon
                color={button.color}
                className="group-hover:text-white"
              />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
