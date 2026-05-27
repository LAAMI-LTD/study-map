"use client";

export default function Services() {
  const colors = {
    white: "#FFFEFE",
    dustyDenim: "#738DAF",
    oceanDeep: "#0A63B3",
    prussianBlue: "#002856",
    paleSlate: "#C7CDD8",
  };

  const services = [
    {
      title: "Student Counselling",
      description:
        "We help students identify suitable courses, institutions, and career pathways aligned with their goals.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
        </svg>
      ),
      bgColor: colors.white,
      textColor: colors.prussianBlue,
      borderColor: colors.paleSlate,
      iconBgColor: colors.paleSlate,
    },
    {
      title: "Visa Guidance",
      description:
        "Guidance on Australian student visa requirements, documentation, and compliance processes.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 20H19V18H5V20ZM5 4H19V2H5V4ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="currentColor" />
        </svg>
      ),
      bgColor: colors.oceanDeep,
      textColor: colors.white,
      iconBgColor: colors.white,
    },
    {
      title: "Applications Support",
      description:
        "Assistance with preparing and submitting professional applications to partner institutions.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z" fill="currentColor" />
        </svg>
      ),
      bgColor: colors.prussianBlue,
      textColor: colors.white,
      iconBgColor: colors.white,
    },
    {
      title: "Pre-Departure Prep",
      description:
        "Support for travel preparation, accommodation, cultural adjustment, and life in Australia.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.41 4 20 7.59 20 12C20 13.39 19.64 14.68 19.05 15.85L15.15 11.95L12 15.1L8.85 11.95L4.95 15.85C4.36 14.68 4 13.39 4 12C4 7.59 7.59 4 12 4ZM12 6.5C10.62 6.5 9.5 7.62 9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5Z" fill="currentColor" />
        </svg>
      ),
      bgColor: colors.dustyDenim,
      textColor: colors.white,
      iconBgColor: colors.white,
    },
    {
      title: "Career Pathway Planning",
      description:
        "Strategic guidance on long-term career outcomes and job market trends in Australia.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13H8V21H3V13ZM10 8H15V21H10V8ZM17 3H22V21H17V3Z" fill="currentColor" />
        </svg>
      ),
      bgColor: colors.white,
      textColor: colors.prussianBlue,
      borderColor: colors.paleSlate,
      iconBgColor: colors.paleSlate,
    },
    {
      title: "English Test Preparation",
      description:
        "Resources and referrals for IELTS/PTE preparation to meet university entry requirements.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20V4H4V6ZM4 10H20V8H4V10ZM4 14H20V12H4V14ZM4 18H14V16H4V18ZM17 14L22 9L17 4V14Z" fill="currentColor" />
        </svg>
      ),
      bgColor: colors.paleSlate,
      textColor: colors.prussianBlue,
      iconBgColor: colors.prussianBlue,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image contained within this section only - using absolute positioning */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('/global2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002856]/80 to-[#002856]/30 backdrop-blur-[2px]" />
      </div>

      {/* Content - relative to appear above background */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 md:py-8 lg:py-8">
        {/* Section Header - Clean and minimal */}
        <div className="mb-14 text-center md:mb-20">
          <div className="mb-4 flex justify-center">
            <div
              className="h-0.5 w-12"
              style={{ backgroundColor: colors.oceanDeep }}
            />
          </div>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ color: colors.white }}
          >
            Our Services
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-white/80 md:text-lg"
            style={{ color: colors.white, opacity: 0.9 }}
          >
            Comprehensive support from start to finish — guiding you every step
            of the way to your education in Australia.
          </p>
        </div>

        {/* Services Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: service.bgColor,
                border: service.borderColor
                  ? `1px solid ${service.borderColor}`
                  : "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div className="p-6 md:p-7">
                {/* Icon */}
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: service.iconBgColor,
                    color:
                      service.iconBgColor === colors.white
                        ? colors.prussianBlue
                        : service.iconBgColor === colors.paleSlate
                          ? colors.prussianBlue
                          : colors.white,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-xl font-bold leading-tight"
                  style={{ color: service.textColor }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-5 text-sm leading-relaxed"
                  style={{ color: service.textColor, opacity: 0.8 }}
                >
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5">
                  <span
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: service.textColor, opacity: 0.6 }}
                  >
                    Learn more
                  </span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: service.textColor, opacity: 0.6 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center md:mt-20">
          <button
            className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-md"
            style={{
              backgroundColor: colors.oceanDeep,
              color: colors.white,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.prussianBlue;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.oceanDeep;
            }}
          >
            <span>View All Services</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}