import { Award, Cog, TrendingUp, Users } from "lucide-react";
import { advantages } from "@/data/company";

const icons = [Users, Cog, Award, TrendingUp];

export default function WhyLinGroup() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            Tecnología pensada desde la operación
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={advantage.title}
                className="text-center p-6 rounded-2xl hover:bg-[#F7F8F6] transition-colors"
              >
                <div className="w-16 h-16 bg-[#12372A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
