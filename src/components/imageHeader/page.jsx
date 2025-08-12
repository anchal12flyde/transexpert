import Header from "../home/Header";
import "./style.scss";

export default function ImageHeader() {
  return (
    <div className="imageHeader">
      <Header />

      <div className="w-full flex justify-center pt-30 pb-16">
        <p className="font-bold text-[42px] text-white text-center leading-tight ">
          Built on Trust <br />
          Backed by Standards
        </p>
      </div>
    </div>
  );
}
