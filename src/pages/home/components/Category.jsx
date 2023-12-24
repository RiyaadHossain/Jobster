import SectionHeader from "../../../components/ui/SectionHeader";
import CategoryCard from "../../../components/other/category-card/CategoryCard";
import ButtonWithArrow from "../../../components/ui/ButtonWithArrow";
import { categoriesData } from "../../../data/categories";

export default function Category() {

  return (
    <section className="max_container">
      <SectionHeader
        title="Search by Category"
        subtitle="Search your career opportunity with our categories"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-6">
        {categoriesData.map((category, i) => (
          <CategoryCard key={i} category={category} />
        ))}
      </div>
      <ButtonWithArrow
        display="All Categories"
        link="/job-listing"
        mt="mt-12"
      />
    </section>
  );
}
