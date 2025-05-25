import { pricingPlans } from "../data/pricing";
import PlanCard from "./PlanCard";
import TagLine from "./TagLine";

const PricingSection = () => {
  return (
    <section
      id="harga"
      className="flex text-center p-10 items-center justify-center flex-col scroll-mt-16">
      <TagLine>Harga</TagLine>
      <h2 className="font-extrabold text-primary text-3xl mb-8 pt-3">
        Harga Murah Kualitas Wah
      </h2>
      <div className="grid mt-10 items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {pricingPlans.map((plan, index) => (
          <PlanCard key={index} {...plan}></PlanCard>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
