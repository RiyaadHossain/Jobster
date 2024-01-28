import SocialIcons from "@/components/ui/SocialIcons";
import "./style/module.style.css";
import { Link } from "react-router-dom";
import { footerData } from "@/constants/footer";

export default function Footer() {
  return (
    <footer>
      <div className="bg-primaryLight py-24 ">
        <div className="max_container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-y-14">
          <div className="flex flex-col gap-7">
            <h3 className="font-bold text-3xl">
              <span className="text-blue-600">J</span>obster
            </h3>
            <p className="footer_item_header">Call us</p>
            <p className="text-[22px] font-medium leading-8 text-primary">
              (123) 456-7890
            </p>
            <div>
              <ul className="footer_sub_items">
                <li>90 Fifth Avenue, 3rd Floor </li>
                <li>San Francisco, CA 1980 </li>
                <li>San Francisco, CA 1980</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-20 lg:justify-end">
            {footerData.map((el, i) => (
              <div key={i}>
                <h3 className="footer_item_header mb-6">{el.title}</h3>
                <ul className="footer_sub_items">
                  {el.links.map((link, j) => (
                    <li key={j}>
                      <Link to={link.link}>{link.display}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-secondaryLight py-[70px]">
        <div className="max_container mx-auto px-6 flex justify-between">
          <p className="font-light text-sm text-grayColor">
            © 2022 Jobster. All Right Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
