import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronUp,
  Download,
  ExternalLink,
  Facebook,
  Gauge,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MousePointerClick,
  Phone,
  Rocket,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const profile = {
  name: "Imran Ansari",
  location: "Chembur, Mumbai, Maharashtra, India",
  phone: "95948 76201",
  phoneHref: "tel:+919594876201",
  email: "imraann.1905@gmail.com",
  linkedin: "https://www.linkedin.com/in/imran-ansari-5184b4331",
  photo: "/profile-photo.jpeg",
  resume: "/Profile.pdf",
};

const typingRoles = [
  "AI Automation Specialist",
  "Google Ads Expert",
  "Meta Ads Specialist",
  "Digital Marketer",
  "Performance Marketer",
];

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Timeline", "timeline"],
  ["Contact", "contact"],
];

const services = [
  ["AI Automation", "Build faster systems with automation workflows that reduce manual work and improve response speed.", Bot],
  ["Google Ads", "Search-first campaign planning for measurable traffic, leads, and growth.", Search],
  ["Meta Ads", "Audience, creative, and funnel thinking for Facebook and Instagram campaigns.", Facebook],
  ["Digital Marketing", "Modern strategy across channels, content, campaigns, and customer journeys.", Megaphone],
  ["Social Media Marketing", "Content and campaign systems designed for attention, trust, and repeat engagement.", Instagram],
  ["Lead Generation", "Conversion-focused workflows that turn interest into qualified conversations.", Target],
  ["Marketing Funnels", "Structured awareness-to-action journeys for offers, campaigns, and remarketing.", Workflow],
  ["Automation Systems", "Simple, scalable systems for follow-ups, tracking, content, and campaign support.", BrainCircuit],
];

const skills = [
  ["AI Automation", 94, Bot],
  ["Google Ads", 90, Search],
  ["Meta Ads", 89, MousePointerClick],
  ["Lead Generation", 92, Target],
  ["Marketing Strategy", 88, Rocket],
  ["Analytics", 84, Gauge],
  ["Social Media Marketing", 91, Users],
  ["Campaign Management", 87, Megaphone],
  ["Performance Marketing", 90, TrendingUp],
  ["Creative Ads", 86, Sparkles],
];

const projects = [
  {
    title: "AI Automation Workflow",
    type: "Automation",
    icon: Workflow,
    description:
      "A workflow concept for automating repetitive marketing tasks, lead follow-ups, and response systems for faster execution.",
    stack: ["AI Tools", "Automation", "Lead Flow"],
  },
  {
    title: "Google Ads Campaign",
    type: "Search Growth",
    icon: Search,
    description:
      "A performance campaign structure focused on high-intent keywords, clear offer positioning, and conversion tracking.",
    stack: ["Google Ads", "SEM", "Analytics"],
  },
  {
    title: "Meta Ads Funnel",
    type: "Paid Social",
    icon: Facebook,
    description:
      "A Meta funnel designed around creative testing, audience segments, retargeting, and lead capture.",
    stack: ["Meta Ads", "Creative", "Funnels"],
  },
  {
    title: "Lead Generation System",
    type: "Conversion",
    icon: Target,
    description:
      "A practical system for turning traffic and social interest into qualified leads through structured follow-ups.",
    stack: ["Leads", "CRM Thinking", "Follow-up"],
  },
  {
    title: "Digital Marketing Campaign",
    type: "Strategy",
    icon: ChartNoAxesCombined,
    description:
      "A multi-channel campaign concept combining content, paid ads, AI-assisted messaging, and business goals.",
    stack: ["Strategy", "Content", "Ads"],
  },
];

const testimonials = [
  {
    quote:
      "Imran brings a rare mix of practical business sense and modern marketing curiosity. His customer-first thinking stands out.",
    name: "Local Business Collaborator",
    role: "Operations & Growth",
  },
  {
    quote:
      "He understands sales, service, payments, inventory, and customer trust from the ground up, which makes his marketing ideas practical.",
    name: "Business Mentor",
    role: "Retail & Customer Experience",
  },
  {
    quote:
      "Creative, fast-learning, and focused on growth. A strong profile for AI automation and performance marketing work.",
    name: "Digital Marketing Peer",
    role: "Campaign Strategy",
  },
];

const stats = [
  ["Projects Completed", 18],
  ["Campaigns Managed", 12],
  ["Leads Generated", 850],
  ["Clients Served", 9],
];

const experienceBullets = [
  "Managed daily store operations including sales, inventory, and customer service.",
  "Handled cash transactions, digital payments, and maintained financial records.",
  "Built strong customer relationships, leading to repeat business and local loyalty.",
  "Ordered stock, negotiated with suppliers, and maintained proper product display.",
  "Ensured cleanliness, safety, and compliance with local regulations.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function useTyping(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && text.length < word.length) {
          setText(word.slice(0, text.length + 1));
          return;
        }
        if (!isDeleting && text.length === word.length) {
          setIsDeleting(true);
          return;
        }
        if (isDeleting && text.length > 0) {
          setText(word.slice(0, text.length - 1));
          return;
        }
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      },
      isDeleting ? 38 : 76
    );

    return () => clearTimeout(timeout);
  }, [isDeleting, text, wordIndex, words]);

  return text;
}

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frame = 0;
    let particles = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(95, Math.max(42, Math.floor(width / 17)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        size: Math.random() * 1.8 + 0.7,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(186, 230, 253, 0.75)";
        context.fill();

        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 124) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(125, 92, 246, ${0.16 * (1 - distance / 124)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      });
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-30" aria-hidden="true" />;
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
    >
      <span className="inline-flex rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-bold text-sky-100">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-black leading-tight text-gradient sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">{copy}</p> : null}
    </motion.div>
  );
}

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const started = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      start = Math.floor(value * (1 - Math.pow(1 - progress, 3)));
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
}

function App() {
  const typedText = useTyping(typingRoles);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const socialLinks = useMemo(
    () => [
      ["LinkedIn", profile.linkedin, Linkedin],
      ["Email", `mailto:${profile.email}`, Mail],
      ["Phone", profile.phoneHref, Phone],
    ],
    []
  );

  return (
    <div className="min-h-screen overflow-hidden bg-night bg-premium-radial font-sans text-white">
      <Particles />
      <div className="premium-grid pointer-events-none fixed inset-0 -z-20 opacity-50" />
      <div className="pointer-events-none fixed left-[-12rem] top-28 -z-10 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none fixed bottom-10 right-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl" />
      <motion.div style={{ width: progressWidth }} className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400" />

      <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4">
        <nav className="glass-strong mx-auto flex max-w-7xl items-center justify-between rounded-3xl px-4 py-3">
          <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 via-violet-500 to-fuchsia-500 text-sm font-black shadow-glow">
              IA
            </span>
            <span className="hidden text-sm font-black tracking-wide sm:block">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="rounded-full px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white">
                {label}
              </a>
            ))}
          </div>

          <a href={profile.resume} download className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:scale-105 md:inline-flex">
            Resume
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/10 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mx-auto mt-3 grid max-w-7xl gap-1 rounded-3xl p-3 lg:hidden"
          >
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-slate-200 hover:bg-white/10">
                {label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </header>

      <main>
        <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-20 pt-32 lg:grid-cols-[1.05fr_.95fr] lg:px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex rounded-full border border-violet-300/25 bg-violet-300/10 px-4 py-2 text-sm font-bold text-violet-100">
              AI Automation + Google Ads + Meta Ads Expert
            </motion.span>
            <motion.h1 variants={fadeUp} className="mt-6 text-5xl font-black leading-[0.92] text-gradient sm:text-7xl lg:text-8xl">
              {profile.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 min-h-10 text-2xl font-black text-sky-100 sm:text-3xl">
              {typedText}
              <span className="typing-cursor">|</span>
            </motion.p>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Not just a learner, a future digital marketer with real growth drive. I blend AI tools, automation workflows,
              performance marketing, SEM, Instagram Ads, customer service, operations, and business management experience.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}?subject=Hiring%20Opportunity%20for%20Imran%20Ansari`} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 px-6 py-4 font-black shadow-glow transition hover:-translate-y-1">
                Hire Me <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </a>
              <a href="#projects" className="rounded-full border border-white/15 bg-white/10 px-6 py-4 font-black backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-sky-300/25 bg-sky-300/10 px-6 py-4 font-black text-sky-100 transition hover:-translate-y-1">
                Contact Me
              </a>
              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1">
                <Download size={18} /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-sky-400/25 via-violet-500/20 to-fuchsia-500/20 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2.5rem] p-4">
              <div className="hero-photo-mask relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-slate-950">
                <img src={profile.photo} alt={`${profile.name} professional profile`} className="h-full min-h-[34rem] w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-3">
                {["AI Tools", "Ads", "Leads"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-black/35 p-4 text-center backdrop-blur-xl">
                    <p className="text-sm font-black text-white">{item}</p>
                    <p className="mt-1 text-xs font-bold text-slate-300">Growth Focus</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="grid gap-4 md:grid-cols-4">
            {stats.map(([label, value]) => (
              <motion.div key={label} variants={fadeUp} className="glass rounded-3xl p-6 text-center">
                <div className="text-4xl font-black text-gradient"><Counter value={value} /></div>
                <p className="mt-2 text-sm font-bold text-slate-300">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <SectionHeading
            eyebrow="About Me"
            title="A practical growth thinker with AI automation and paid ads ambition."
            copy="My foundation comes from real business operations, customer relationships, financial handling, supplier negotiation, and modern marketing certifications."
          />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-[2rem] p-7 md:p-9">
              <h3 className="text-2xl font-black">Professional Story</h3>
              <p className="mt-5 leading-8 text-slate-300">
                I am a BMS student at the University of Mumbai and a future digital marketer certified in SEM, Instagram Ads,
                and AI Content. My profile is built on hands-on business experience, where I managed daily store operations
                including sales, inventory, customer service, payments, records, product display, supplier negotiation, and compliance.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                That ground-level experience helps me approach AI automation, Google Ads, Meta Ads, lead generation, and performance
                marketing with a business-first mindset: clear offers, fast systems, stronger customer journeys, and measurable outcomes.
              </p>
            </motion.article>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
              {[
                ["Real Operations", "Sales, inventory, cash, digital payments, financial records, supplier coordination, and display quality."],
                ["Customer Loyalty", "Built repeat business and local trust through strong service and consistent relationships."],
                ["Modern Expertise", "AI Automation, AI Tools, Google Ads, Meta Ads, Social Media Marketing, and creative campaigns."],
              ].map(([title, copy]) => (
                <motion.div key={title} variants={fadeUp} className="glass rounded-3xl p-6">
                  <CheckCircle2 className="text-sky-300" />
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <SectionHeading
            eyebrow="Services"
            title="Premium marketing systems for smarter growth."
            copy="Designed for brands that need better campaigns, faster workflows, and practical performance thinking."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, copy, Icon]) => (
              <motion.article key={title} variants={fadeUp} whileHover={{ y: -8, scale: 1.02 }} className="glass neon-border rounded-[2rem] p-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-400/25 to-violet-500/25 text-sky-100">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <SectionHeading eyebrow="Skills" title="AI, paid ads, strategy, analytics, and campaign execution." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 md:grid-cols-2">
            {skills.map(([title, level, Icon]) => (
              <motion.article key={title} variants={fadeUp} className="glass rounded-3xl p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-sky-200">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-black">{title}</h3>
                  </div>
                  <span className="text-sm font-black text-sky-200">{level}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400"
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <SectionHeading
            eyebrow="Projects"
            title="Premium showcase concepts shaped around AI automation and performance marketing."
            copy="These project cards present realistic portfolio directions based on my profile, skills, certifications, and business background."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map(({ title, type, icon: Icon, description, stack }) => (
              <motion.article key={title} variants={fadeUp} whileHover={{ y: -10 }} className="glass group relative min-h-[25rem] overflow-hidden rounded-[2rem] p-7">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-sky-400/18 via-violet-500/14 to-fuchsia-500/14 opacity-80 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black text-sky-100">{type}</span>
                    <Icon className="text-sky-200" />
                  </div>
                  <h3 className="mt-12 text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{description}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-black text-sky-200">
                    Start similar project <ExternalLink size={17} />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="timeline" className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <SectionHeading eyebrow="Experience & Education" title="Business operations experience backed by formal management study." />
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-sky-400 via-violet-400 to-fuchsia-400 md:left-1/2" />
            {[
              {
                icon: BriefcaseBusiness,
                date: "January 2023 - Present",
                title: "Digital Marketing Executive",
                meta: "Own business - Mumbai, Maharashtra, India",
                body: experienceBullets.join(" "),
              },
              {
                icon: GraduationCap,
                date: "June 2024 - August 2026",
                title: "Bachelor Management Studies",
                meta: "University of Mumbai - Computer and Information Sciences and Support Services",
                body: "Building management, business, and technology knowledge to support a future in digital marketing, AI tools, automation workflows, and performance marketing.",
              },
              {
                icon: Award,
                date: "Certifications",
                title: "SEM, Instagram Ads & AI Content",
                meta: "Certified profile strengths",
                body: "Certified in search engine marketing, Instagram advertising, and AI content, with a creative mind and real growth drive.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`relative mb-8 grid gap-5 md:grid-cols-2 ${index % 2 ? "md:text-left" : "md:text-right"}`}
              >
                <div className={`${index % 2 ? "md:col-start-2" : ""} ml-10 md:ml-0`}>
                  <div className="glass rounded-[2rem] p-6">
                    <div className={`mb-4 flex items-center gap-3 ${index % 2 ? "" : "md:justify-end"}`}>
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-sky-200">
                        <item.icon size={22} />
                      </span>
                      <span className="text-sm font-black text-sky-200">{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 font-bold text-violet-100">{item.meta}</p>
                    <p className="mt-4 leading-7 text-slate-300">{item.body}</p>
                  </div>
                </div>
                <span className="absolute left-[0.55rem] top-8 h-4 w-4 rounded-full border-4 border-night bg-sky-300 shadow-glow md:left-1/2 md:-translate-x-1/2" />
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <SectionHeading eyebrow="Testimonials" title="Modern credibility for a rising personal brand." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.article key={item.name} variants={fadeUp} className="glass rounded-[2rem] p-7">
                <div className="mb-6 flex gap-1 text-sky-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Sparkles key={index} size={16} />
                  ))}
                </div>
                <p className="leading-8 text-slate-200">"{item.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 font-black">{item.name.slice(0, 1)}</div>
                  <div>
                    <h3 className="font-black">{item.name}</h3>
                    <p className="text-sm font-bold text-slate-400">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <SectionHeading eyebrow="Contact" title="Ready to build smarter campaigns and automation systems?" />
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
              {[
                [Mail, "Email", profile.email, `mailto:${profile.email}`],
                [Phone, "Phone", profile.phone, profile.phoneHref],
                [MapPin, "Location", profile.location, "https://maps.google.com/?q=Chembur%20Mumbai%20Maharashtra"],
                [Linkedin, "LinkedIn", "imran-ansari-5184b4331", profile.linkedin],
              ].map(([Icon, label, value, href]) => (
                <motion.a key={label} variants={fadeUp} href={href} target={label === "Location" || label === "LinkedIn" ? "_blank" : undefined} rel="noreferrer" className="glass flex items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-1">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-sky-200">
                    <Icon size={24} />
                  </span>
                  <span>
                    <strong className="block">{label}</strong>
                    <small className="mt-1 block break-all text-slate-300">{value}</small>
                  </span>
                </motion.a>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map(([label, href, Icon]) => (
                  <a key={label} href={href} target={label === "LinkedIn" ? "_blank" : undefined} rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-sky-100 transition hover:-translate-y-1 hover:bg-white/15" aria-label={label}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={(event) => {
                event.preventDefault();
                const form = new FormData(event.currentTarget);
                const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
                const body = encodeURIComponent(`${form.get("message")}\n\nFrom: ${form.get("name")} <${form.get("email")}>`);
                window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              }}
              className="glass rounded-[2rem] p-6 md:p-8"
            >
              <div className="grid gap-5">
                <label className="grid gap-2 font-bold">
                  Name
                  <input required name="name" className="rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-white outline-none transition focus:border-sky-300" placeholder="Your name" />
                </label>
                <label className="grid gap-2 font-bold">
                  Email
                  <input required type="email" name="email" className="rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-white outline-none transition focus:border-sky-300" placeholder="you@example.com" />
                </label>
                <label className="grid gap-2 font-bold">
                  Message
                  <textarea required name="message" rows="5" className="resize-y rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-white outline-none transition focus:border-sky-300" placeholder="Tell me about your project or campaign" />
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 px-6 py-4 font-black shadow-glow transition hover:-translate-y-1">
                  Send Message <Send size={18} />
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-4 pb-10 text-center text-sm font-bold text-slate-400 md:flex-row md:items-center md:justify-between md:text-left lg:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. AI Automation, Google Ads, Meta Ads, and Digital Marketing.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#home" className="inline-flex items-center gap-1 text-sky-200">
            Top <ChevronUp size={16} />
          </a>
          <a href={profile.resume} download className="text-sky-200">Download Resume</a>
          <a href={`mailto:${profile.email}`} className="text-sky-200">Email Me</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
