import SectionHeader from "../ui/SectionHeader";
import ButtonWithArrow from "../ui/ButtonWithArrow";
import notFoundImg from "../../assets/not-found.svg";

export default function NotFound() {
  return (
    <div className="my-20 max_container min-h-[70vh] flex_cen">
      <div>
        <SectionHeader
          title="This page is off the map"
          subtitle="We can't seem to find the page you're looking for."
          classes="pb-0"
        />
        <div>
          <img src={notFoundImg} alt="" className="w-[560px] h-[330px] mx-auto" />
        </div>
        <div>
          <ButtonWithArrow display="Go Home" link="/" />
        </div>
      </div>
    </div>
  );
}
