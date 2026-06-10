import { Award, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import trophyImage from "../assets/images/hero_3d_illustration_1781005351599.png"; // We can reuse our premium illustration as the 3D focal asset

export default function WhyChooseUs() {
  const points = [
    {
      icon: Award,
      title: "Results-first Philosophy",
      desc: "We don't sell vanity metrics like impressions and likes. We focus entirely on direct customer calls, closed leads, and real revenue expansion.",
    },
    {
      icon: ShieldCheck,
      title: "Google & Meta Certified Experts",
      desc: "Our campaigns are configured and maintained by verified industry professionals who reverse-engineer hyper-localized competitors.",
    },
    {
      icon: HeartHandshake,
      title: "100% Transparent Tracking",
      desc: "Get absolute transparency on every rupee spent. Track live phone records, direct form inquiries, and real conversion statistics in real-time.",
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-accent/5 border border-accent/10 px-3 py-1 rounded-full text-xs font-semibold text-accent uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Partner With Us</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-heading tracking-tight mb-4">
            Why Ambitious Local Businesses Choose Us
          </h2>
          <p className="text-brand-body text-sm md:text-base">
            We build and configure custom marketing engines that handle your digital acquisition automatically.
          </p>
        </div>

        {/* 2 Column Layout -> 1 Column Stack on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Feature list */}
          <div className="lg:col-span-7 space-y-6 w-full">
            {points.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row gap-4 p-4 md:p-6 bg-white border border-gray-200/80 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200"
                >
                  {/* Icon */}
                  <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-xl bg-[#EFF6FF] flex items-center justify-center text-accent shrink-0">
                    <IconComp className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-[#0F2167] mb-1.5">
                      {pt.title}
                    </h3>
                    <p className="text-brand-body text-[13px] sm:text-sm leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 3D Illustration Panel / trophy */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-h-[220px] md:max-h-none flex items-center justify-center p-2 rounded-2xl bg-white border border-gray-150/80 shadow-md max-w-sm mx-auto"
            >
              <img
                src={trophyImage}
                alt="LocalBuild Growth Trophy Illustration"
                referrerPolicy="no-referrer"
                className="w-full max-h-[200px] md:max-h-[300px] object-contain rounded-xl drop-shadow-lg"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
