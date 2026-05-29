import { colors } from "./colors";

export default function AboutHeader() {
  return (
    <div className="relative w-full min-h-screen pt-20 flex items-center overflow-hidden mb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/global1.jpg" 
          alt="Study Map Consultants - International Education" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay that appears only in dark mode */}
        <div className="absolute inset-0 bg-black/0 dark:bg-black/40"></div>
      </div>

      {/* Hero Card */}
      <div className="relative w-full md:w-[600px] lg:w-[700px] p-4 md:p-12 mx-auto md:mr-8 lg:mr-12">
        <div 
          className="p-5 md:p-8 rounded-lg backdrop-blur-sm"
          style={{
            backgroundColor: `${colors.white}E6`, // 90% opacity
          }}
        >
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 mb-6 px-5 py-2.5"
              style={{
                backgroundColor: colors.paleSlate,
                borderLeft: `4px solid ${colors.oceanDeep}`,
              }}
            >
              <span
                className="font-bold tracking-widest text-[10px] md:text-xs uppercase"
                style={{ color: colors.prussianBlue }}
              >
                About Study Map Consultants
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter mb-4 uppercase">
              <span style={{ color: colors.prussianBlue }}>YOUR TRUSTED</span>
              <br />
              <span
                className="stroke-text inline-block"
                style={{ WebkitTextStrokeColor: colors.prussianBlue }}
              >
                PATHWAY
              </span>
              <br />
              <span style={{ color: colors.oceanDeep }}>OVERSEAS EDUCATION.</span>
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg font-medium leading-relaxed mb-6 pl-4"
              style={{
                color: colors.prussianBlue,
                borderLeft: `4px solid ${colors.oceanDeep}`,
                opacity: 0.85,
              }}
            >
              Helping East African students access quality education opportunities
              through professional guidance and unwavering support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-2 rounded-md transition-colors font-bold uppercase tracking-wide text-sm"
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
                Learn More
              </button>
              
              <a
                href="#"
                className="flex items-center transition-colors font-semibold group"
                style={{ color: colors.oceanDeep }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.prussianBlue;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.oceanDeep;
                }}
              >
                All Services
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Stroke text effect */
        .stroke-text {
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: inherit;
          color: transparent;
        }
        @media (min-width: 768px) {
          .stroke-text {
            -webkit-text-stroke-width: 3px;
          }
        }
      `}</style>
    </div>
  );
}