import HeroSectionComponent from "../globalcomponents/HeroSectionComponent";

export default function HeroSectionFTL({ isScrolled }) {
  return (
    <div>
      <HeroSectionComponent
        imageSrc="/images/certificate.png"
        title={`Full Truckload`}
        subtitle={
          <>
            Dedicated Capacity.
            <br /> Consistent Performance.
          </>
        }
        description="At Trans Expert Inc., compliance isn’t an afterthought, it’s the foundation of how we operate. Our certifications are more than checkboxes; they are a daily commitment to safety, security, and performance."
        isScrolled={isScrolled}
      />
    </div>
  );
}
