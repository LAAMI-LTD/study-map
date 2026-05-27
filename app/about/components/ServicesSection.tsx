import { colors } from "./colors";

const services = [
  {
    title: "Student Counselling",
    desc: "We help students identify suitable courses, institutions, and career pathways aligned with their goals.",
  },
  {
    title: "University & College Applications",
    desc: "We assist with preparing and submitting professional applications to partner institutions in Australia.",
  },
  {
    title: "Visa Guidance",
    desc: "Our team provides guidance on Australian student visa requirements, documentation, and compliance processes.",
  },
  {
    title: "Genuine Student Assessment",
    desc: "We carefully evaluate applicants to ensure they satisfy GS and financial capacity requirements.",
  },
  {
    title: "Pre-Departure Preparation",
    desc: "Students receive guidance on travel preparation, accommodation, cultural adjustment, and life in Australia.",
  },
  {
    title: "Institutional Partnerships",
    desc: "We support colleges through targeted recruitment strategies and student screening across East Africa.",
  },
];

export default function ServicesSection() {
  return (
    <div
      className="rounded-2xl p-6 md:p-8 mb-12"
      style={{
        backgroundColor: colors.paleSlate,
        borderLeft: `4px solid ${colors.prussianBlue}`,
      }}
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-6"
        style={{ color: colors.prussianBlue }}
      >
        Our Services
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: colors.white }}
          >
            <h3
              className="font-bold mb-2"
              style={{ color: colors.prussianBlue }}
            >
              {service.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: colors.prussianBlue, opacity: 0.7 }}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
