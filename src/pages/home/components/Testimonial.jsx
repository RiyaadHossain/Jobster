import SectionHeader from "../../../components/ui/SectionHeader";
import customer1 from "../../../assets/customer-1.png";
import customer2 from "../../../assets/customer-2.png";
import customer3 from "../../../assets/customer-3.png";
import customer4 from "../../../assets/customer-4.png";
import customer5 from "../../../assets/customer-5.png";
import customer6 from "../../../assets/customer-6.png";

export default function Testimonial() {
  return (
    <section className="max_container">
      <SectionHeader
        title="Why Customers Love Us"
        subtitle="What our customers say about us"
      />
      <div className="relative flex items-center justify-center h-[50vh]">
        {/* ------ Left Side ------ */}
        <div
          style={{
            backgroundImage: `url(${customer1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute hidden md:block bg-[#fff0eb]  h-32 w-32 rounded-full left-[8%] top-0"
        ></div>
        <div className="absolute hidden md:block bg-[#f0e9f1]  h-36 w-36 rounded-full left-[12%] top-28"></div>
        <div className="absolute hidden md:block bg-[#fff0eb]  h-[230px] w-[230px] rounded-full left-[2%] top-[300px]"></div>
        <div
          style={{
            backgroundImage: `url(${customer2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute hidden md:block bg-[#f0e9f1]  h-[100px] w-[100px] rounded-full left-[3%] top-[280px]"
        ></div>
        <div
          style={{
            backgroundImage: `url(${customer4})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute hidden md:block bg-[#f0e9f1]  h-[80px] w-[80px] rounded-full left-[15%] top-[490px]"
        ></div>

        {/* ------ Right Side ------ */}
        <div className="absolute hidden md:block bg-[#f0e9f1]  h-[130px] w-[130px] rounded-full right-[10%] top-0"></div>
        <div
          style={{
            backgroundImage: `url(${customer3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute hidden md:block bg-[#fff0eb]  h-[70px] w-[70px] rounded-full right-[8%] top-[50px]"
        ></div>
        <div className="absolute hidden md:block bg-[#fff0eb]  h-[230px] w-[230px] rounded-full right-[3%] top-[180px]"></div>
        <div
          style={{
            backgroundImage: `url(${customer5})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute hidden md:block bg-[#f0e9f1]  h-[80px] w-[80px] rounded-full right-0 top-[280px]"
        ></div>
        <div
          style={{
            backgroundImage: `url(${customer6})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute hidden md:block bg-[#f0e9f1]  h-[90px] w-[90px] rounded-full right-[15%] top-[420px]"
        ></div>

        <div className="max-w-lg text-center z-10">
          <i className="text-base font-light leading-6">
            Each day, I’m inspired by my colleagues to drive innovation that
            accomplishes this. Jobster fosters an environment of trust and
            support where I can drive customer success.
          </i>
          <h3 className="text-lg font-semibold leading-7 mb-2 mt-7">
            Riyad Hossain
          </h3>
          <p className="text-sm font-light leading-5">Software Engineer</p>
        </div>
      </div>
    </section>
  );
}
