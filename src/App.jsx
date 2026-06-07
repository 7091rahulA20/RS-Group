import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Factory,
  GraduationCap,
  Headphones,
  Hospital,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Warehouse,
} from 'lucide-react';

const industries = [
  { title: 'Offices', icon: Building2, detail: 'Reception, access control, and daily site security.' },
  { title: 'Factories', icon: Factory, detail: 'Gate management, shift coverage, and asset protection.' },
  { title: 'Warehouses', icon: Warehouse, detail: 'Inventory areas, loading docks, and visitor entry.' },
  { title: 'Apartments', icon: Users, detail: 'Residential guards, visitor logs, and patrol support.' },
  { title: 'Schools & Colleges', icon: GraduationCap, detail: 'Campus access, student safety, and events.' },
  { title: 'Hospitals', icon: Hospital, detail: 'Sensitive environments with calm, reliable support.' },
  { title: 'Events', icon: CalendarCheck, detail: 'Crowd guidance, entry points, and temporary staffing.' },
];

const reasons = [
  { title: 'Quick Response', text: 'Send your requirement and our team will get back quickly.', icon: Clock },
  { title: 'Flexible Security Solutions', text: 'Short-term, long-term, day, night, and event coverage.', icon: ShieldCheck },
  { title: 'Customized Requirements', text: 'Security staffing plans aligned with your site and schedule.', icon: Sparkles },
  { title: 'Professional Support', text: 'Clear communication from inquiry to deployment planning.', icon: Headphones },
];

const faqs = [
  {
    question: 'What types of security services can we inquire about?',
    answer:
      'You can inquire for offices, factories, warehouses, apartments, schools, hospitals, corporate sites, and event security staffing.',
  },
  {
    question: 'Can RS Group support temporary event security?',
    answer:
      'Yes. The inquiry form supports one-day, multi-day, and recurring event requirements with location and staffing details.',
  },
  {
    question: 'Do you provide customized security arrangements?',
    answer:
      'Yes. Share your location, working hours, number of guards, and special instructions so the team can understand the requirement.',
  },
  {
    question: 'How fast will I receive a response?',
    answer:
      'The page is designed for quick lead capture. After form submission, your team can route inquiries to phone, email, or a CRM workflow.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-guard shadow-lift">
            <ShieldCheck size={25} />
          </span>
          <span>
            <span className="block text-base font-black leading-tight">RS Group</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Security Solutions</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-white/82 md:flex">
          <a href="#industries" className="transition hover:text-white">Industries</a>
          <a href="#why" className="transition hover:text-white">Why Us</a>
          <a href="#inquiry" className="transition hover:text-white">Inquiry</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
        <a
          href="#inquiry"
          className="hidden rounded-lg bg-amber px-5 py-3 text-sm font-extrabold text-ink shadow-lift transition hover:-translate-y-0.5 hover:bg-yellow-400 md:inline-flex"
        >
          Request a Quote
        </a>
        <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white md:hidden" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero bg-cover bg-center text-white">
      <Header />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(245,158,11,.22),transparent_30%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-[1.03fr_.97fr] lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
            <BadgeCheck size={18} />
            Reliable staffing support for protected spaces
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Looking for Professional Security Services?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            We help businesses and organizations connect with reliable security staffing solutions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#inquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 font-extrabold text-ink shadow-lift transition hover:-translate-y-0.5 hover:bg-yellow-400"
            >
              Request a Quote
              <ArrowRight size={19} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/24 bg-white/10 px-6 py-3 font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18"
            >
              Contact Us
              <Phone size={18} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-lg border border-white/18 bg-white/12 p-5 shadow-executive backdrop-blur-xl"
        >
          <div className="rounded-lg bg-white p-5 text-ink">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-sm font-bold text-guard">Lead Desk</p>
                <h2 className="text-xl font-black">Security Requirement Snapshot</h2>
              </div>
              <ShieldCheck className="text-guard" size={32} />
            </div>
            <div className="mt-5 grid gap-3">
              {['Site assessment call', 'Guard count planning', 'Shift and location mapping', 'Quote follow-up'].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-frost p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-guard text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="font-bold text-steel">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-navy p-5 text-white">
              <p className="text-sm text-white/70">Best for</p>
              <p className="mt-1 text-2xl font-black">Corporate, residential, industrial, and event inquiries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55 }} className="max-w-2xl">
          <p className="section-label">Industries We Serve</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Security staffing for busy, high-responsibility places.</h2>
        </motion.div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-lg border border-slate-100 bg-frost p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-guard shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-black text-ink">{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel">{industry.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyContactUs() {
  return (
    <section id="why" className="bg-frost py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55 }}>
          <p className="section-label">Why Contact Us</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">A simple inquiry flow for serious security requirements.</h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Whether you need guards for one facility or multiple sites, the page is built to collect practical details and start the conversation quickly.
          </p>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-lg bg-white p-6 shadow-lift"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-guard/10 text-guard">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-black">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InquiryForm() {
  return (
    <section id="inquiry" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.88fr_1.12fr] lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55 }}>
          <p className="section-label">Inquiry Form</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Request a quote for your location.</h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Fill in the key details and RS Group Security Solutions can respond with the next steps for staffing, schedules, and coverage planning.
          </p>
          <div className="mt-8 space-y-4">
            {['Suitable for companies and institutions', 'Captures exact security requirement', 'Designed for quick follow-up'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-steel">
                <CheckCircle2 className="text-guard" size={21} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-lg border border-slate-100 bg-frost p-5 shadow-executive sm:p-7"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Company Name</span>
              <input className="field" type="text" name="companyName" placeholder="Your company" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Contact Person</span>
              <input className="field" type="text" name="contactPerson" placeholder="Full name" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Phone Number</span>
              <input className="field" type="tel" name="phone" placeholder="+91 98765 43210" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Email</span>
              <input className="field" type="email" name="email" placeholder="name@company.com" required />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-bold text-ink">Location</span>
              <input className="field" type="text" name="location" placeholder="City, area, site address" required />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-bold text-ink">Security Requirement</span>
              <textarea className="field" name="requirement" placeholder="Number of guards, shifts, site type, dates, and special instructions" required />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-guard px-6 py-3 font-extrabold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-teal-800"
          >
            Submit
            <ArrowRight size={19} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-frost py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="section-label">FAQ Section</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Common inquiry questions</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group rounded-lg bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-ink">
                {faq.question}
                <ChevronDown className="shrink-0 text-guard transition group-open:rotate-180" size={21} />
              </summary>
              <p className="mt-3 leading-7 text-steel">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-lg bg-navy p-6 text-white shadow-executive sm:p-9 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber">Contact Information</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Speak with RS Group Security Solutions.</h2>
              <p className="mt-4 leading-7 text-white/72">
                Share your requirement and connect for quote discussion, site coverage planning, and security staffing support.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <a href="tel:+919999999999" className="rounded-lg bg-white/10 p-5 transition hover:bg-white/15">
                <Phone className="mb-4 text-amber" size={25} />
                <span className="block text-sm text-white/62">Phone</span>
                <span className="mt-1 block font-black">+91 99999 99999</span>
              </a>
              <a href="mailto:info@rsgroupsecurity.com" className="rounded-lg bg-white/10 p-5 transition hover:bg-white/15">
                <Mail className="mb-4 text-amber" size={25} />
                <span className="block text-sm text-white/62">Email</span>
                <span className="mt-1 block break-words font-black">info@rsgroupsecurity.com</span>
              </a>
              <div className="rounded-lg bg-white/10 p-5">
                <MapPin className="mb-4 text-amber" size={25} />
                <span className="block text-sm text-white/62">Service Area</span>
                <span className="mt-1 block font-black">Businesses and organizations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-guard text-white">
            <ShieldCheck size={24} />
          </span>
          <div>
            <p className="font-black">RS Group Security Solutions</p>
            <p className="text-sm text-white/58">Professional security staffing inquiries</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-white/68">
          <a href="#industries" className="hover:text-white">Industries</a>
          <a href="#inquiry" className="hover:text-white">Inquiry</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <p className="text-sm text-white/48">© 2026 RS Group Security Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Industries />
      <WhyContactUs />
      <InquiryForm />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
