import HeroSectionComponent from "../globalcomponents/HeroSectionComponent";

export default function HeroSectionFTL({
  isScrolled,
  imageSrc,
  title,
  subtitle,
  description,
}) {
  return (
    <div>
      <HeroSectionComponent
        imageSrc={imageSrc}
        title={title}
        // fix for <br/> in subtitle
        subtitle={<span dangerouslySetInnerHTML={{ __html: subtitle }} />}
        description={description}
        isScrolled={isScrolled}
      />
    </div>
  );
}
