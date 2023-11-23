import SectionHeader from "../../components/reusable/SectionHeader";
import CategoryCard from "../../components/ui/CategoryCard";

export default function Category() {
  const array = [1, 2, 3, 4, 5];

  return (
    <section className="max_container">
      <SectionHeader
        title="Search by Category"
        subtitle="Search your career opportunity with our categories"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-6">
        {array.map((el) => (
          <CategoryCard key={el} />
        ))}
      </div>
    </section>
  );
}
