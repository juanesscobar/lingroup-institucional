import { processSteps } from "@/data/company";

export default function Process() {
  return (
    <section className="py-16 lg:py-24 bg-[#F7F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            De un proceso manual a una solución digital
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="text-5xl font-bold text-[#C9A961] mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#C9A961]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
