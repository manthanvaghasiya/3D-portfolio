import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";

const Hero = () => {
  const line1 = "I turn ideas into";
  const line2 = "scalable digital products";

  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    let j = 0;

    const interval1 = setInterval(() => {
      setText1(line1.slice(0, i + 1));
      i++;

      if (i === line1.length) {
        clearInterval(interval1);

        const interval2 = setInterval(() => {
          setText2(line2.slice(0, j + 1));
          j++;

          if (j === line2.length) clearInterval(interval2);
        }, 60);
      }
    }, 60);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  // Render line 1 with only "ideas" in gradient
  const renderLine1 = () => {
    if (!text1) return null;
    const word = "ideas";
    const idx = text1.indexOf(word);

    if (idx === -1) {
      return <>{text1}</>;
    }

    const before = text1.slice(0, idx);
    const typedIdeas = text1.slice(idx, idx + word.length);
    const after = text1.slice(idx + word.length);

    return (
      <>
        {before}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-red-500">
          {typedIdeas}
        </span>
        {after}
      </>
    );
  };

  // Render line 2 with "scalable digital" in gradient
  const renderLine2 = () => {
    if (!text2) return null;
    const word = "products";
    const idx = text2.indexOf(word);

    if (idx === -1) {
      return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-red-500">
          {text2}
        </span>
      );
    }

    const before = text2.slice(0, idx);
    const typedProducts = text2.slice(idx);

    return (
      <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-red-500">
          {before}
        </span>{" "}
        <span className="text-slate-900">{typedProducts}</span>
      </>
    );
  };

  return (
    <section
      id="home"
      // UPDATED: 'lg:min-h-screen' ensures tablet scrolls naturally instead of forcing full height
      // 'lg:pt-36' delays the heavy padding until desktop
      className="relative flex items-center px-6 pt-28 pb-12 lg:min-h-screen lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-tr from-emerald-100 via-white to-sky-100 scroll-mt-24 lg:scroll-mt-32"
    >
      {/* ---------------- BACKGROUND SHAPES ---------------- */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />
        {/* Adjusted background blobs for tablet visibility */}
        <div className="absolute -left-20 bottom-0 lg:-left-40 lg:bottom-[-140px] h-60 w-60 lg:h-80 lg:w-80 rounded-full bg-emerald-300/60 blur-3xl" />
        <div className="absolute -right-20 top-0 lg:-right-40 lg:-top-32 h-60 w-60 lg:h-72 lg:w-72 rounded-full bg-sky-300/60 blur-3xl" />
      </div>

      {/* Big orange circle behind image */}
      {/* UPDATED: Changed md: prefixes to lg: to keep the circle centered on tablet */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-40px] lg:left-[-140px] lg:translate-x-0 lg:bottom-[-120px] h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[560px] lg:w-[560px] rounded-full bg-gradient-to-tr from-orange-500 via-orange-400 to-rose-500 -z-10 opacity-60 lg:opacity-100" />

      {/* UPDATED: Flex direction changes at lg (1024px) instead of md (768px) */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* ---------- LEFT: IMAGE ---------- */}
        {/* UPDATED: Width and Order. Kept stacked (order-1) on Tablet. */}
        <div
          className="w-full lg:w-[45%] flex justify-center lg:justify-start order-1 lg:order-1"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {/* UPDATED: Image sizing. Added 'md:max-w-md' specifically for Tablet */}
          {/* Removed negative margins on Tablet, kept them for Desktop (lg) only */}
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl lg:-mr-6 -mt-8 lg:-mt-24">
            <img
              src="/profile.jpg"
              alt="Manthan"
              className="w-full h-auto max-h-[350px] md:max-h-[500px] lg:max-h-[720px] object-contain drop-shadow-2xl transform scale-100 lg:scale-110 xl:scale-[1.18] origin-bottom hover:scale-[1.05] lg:hover:scale-[1.2] transition-transform duration-700 ease-out animate-float"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* ---------- RIGHT: TEXT ---------- */}
        {/* UPDATED: Alignment. Text stays centered on Tablet (md), goes left only on Desktop (lg) */}
        <div className="w-full lg:w-[55%] text-center lg:text-left space-y-5 md:space-y-7 lg:space-y-6 order-2 lg:order-2">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-3 py-1.5 md:px-5 md:py-2.5 lg:px-4 lg:py-2 text-[10px] md:text-xs lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for Work
          </div>

          {/* Heading */}
          <h1
            className="font-black text-slate-900 tracking-tight leading-[1.2]"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            <span className="block text-xl md:text-2xl font-bold text-slate-700 mb-2">
                Hi, I&apos;m Manthan Vaghasiya
              </span>

            <span className="block text-[10px] md:text-sm lg:text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3 md:mb-4 lg:mb-3">
              Full-Stack Developer
            </span>

            <span className="block text-3xl md:text-5xl lg:text-5xl mb-1 min-h-[40px] md:min-h-auto">
              {renderLine1()}
            </span>

            <span className="block mt-1 md:mt-2 text-3xl md:text-5xl lg:text-5xl whitespace-normal lg:whitespace-nowrap">
              {renderLine2()}
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-4 text-sm md:text-lg lg:text-lg text-slate-700 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-2 md:px-0"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            As a <b>Full Stack Developer</b>, I design and develop complete web
            products from the ground up. From building{" "}
            <b>robust backend architectures</b> to crafting{" "}
            <b>user–friendly interfaces</b>, I focus on{" "}
            <b>performance, maintainability, and real business impact</b>. My
            portfolio includes platforms like{" "}
            <a
              href="#projects"
              className="font-bold text-slate-900 underline underline-offset-4 hover:no-underline transition"
            >
              DairyFlow
            </a>{" "}
            and{" "}
            <a
              href="#projects"
              className="font-bold text-slate-900 underline underline-offset-4 hover:no-underline transition"
            >
              LifeOS
            </a>.
          </p>

          {/* CTAs */}
          {/* UPDATED: Buttons stay centered on Tablet, align left on Desktop */}
          <div
            className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5 lg:gap-4 pt-2"
            data-aos="fade-up"
            data-aos-delay="360"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden flex items-center gap-2 md:gap-3 rounded-full bg-slate-900 px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black active:scale-95"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <span className="relative z-20">Hire Me</span>
            </a>

            <a
              href="/resume.pdf"
              download="Manthan_Vaghasiya_Resume.pdf"
              target="_blank"  // <--- ADD THIS
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-slate-800 shadow-sm transition hover:border-orange-500 hover:text-orange-600 active:scale-95"
            >
              Download CV <Download size={18} className="md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]" />
            </a>
          </div>

          {/* Socials */}
          <div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            data-aos="fade-up"
            data-aos-delay="460"
          >
            {/* Hidden on tablet/mobile, shown on desktop */}
            <div className="hidden lg:block mx-2 h-6 w-px bg-slate-400" />

            <div className="flex items-center gap-6 md:gap-8 lg:gap-4 text-slate-400">
              <a
                href="https://github.com/manthanvaghasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition hover:scale-110"
              >
                <Github size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition hover:scale-110"
              >
                <Linkedin size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
              <a
                href="https://www.instagram.com/manthan_vaghasiya_07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition hover:scale-110"
              >
                <Instagram size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;