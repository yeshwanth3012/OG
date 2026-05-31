import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { blogs, destinations, getWhatsAppUrl, services, site, stats, values } from "./data";
import { sendEmailForm } from "./forms";
import "./styles.css";

function usePageMeta(title, description) {
  useEffect(() => {
    document.title = `${title} | Overseas Gateway`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/destinations", "Destinations"],
    ["/blog", "Blog"],
    ["/eligibility", "Eligibility"],
    ["/contact", "Contact"]
  ];

  return (
    <header className="navbar">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <img src="/og-logo.svg" alt="Overseas Gateway logo" />
        <span>
          Overseas Gateway
          <small>Powered by OG Infinitum</small>
        </span>
      </Link>
      <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "open" : ""} aria-label="Main navigation">
        {links.map(([href, label]) => (
          <NavLink key={href} to={href} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="footer-brand" to="/">
          <img src="/og-logo.svg" alt="Overseas Gateway logo" />
          <span>Overseas Gateway</span>
        </Link>
        <p>Student-first overseas education counselling backed by transparent guidance, practical planning, and complete support.</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>{site.email}</p>
        <p>{site.phones.join(", ")}</p>
        <p>{site.location}</p>
      </div>
      <div>
        <h3>Explore</h3>
        <Link to="/services">Services</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/eligibility">Eligibility Checker</Link>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function StatsSection() {
  return (
    <section className="stats-section" aria-label="Overseas Gateway results">
      {stats.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}

function CTASection({ title = "Ready to start your study abroad journey?", text = "Get a free profile evaluation and a practical roadmap for your preferred destination." }) {
  return (
    <section className="cta-section">
      <div>
        <p className="eyebrow">Free Profile Evaluation</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="button-row">
        <a className="btn btn-primary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
        <Link className="btn btn-secondary" to="/eligibility">
          Check Eligibility
        </Link>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Powered by OG Infinitum</p>
        <h1>Study abroad guidance built around your future.</h1>
        <p>
          Overseas Gateway helps students and parents make confident global education decisions through profile evaluation, transparent counselling, university selection, visa support, and pre-departure guidance.
        </p>
        <div className="button-row">
          <Link className="btn btn-primary" to="/eligibility">
            Get Free Evaluation
          </Link>
          <a className="btn btn-secondary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            WhatsApp Counsellor
          </a>
        </div>
      </div>
      <div className="hero-media">
        <img src="/doc-images/image5.png" alt="Student planning overseas education with global destinations" />
        <div className="hero-card">
          <img src="/og-logo.svg" alt="" />
          <span>Trusted guidance for global dreams</span>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <img src={service.image} alt={`${service.title} support illustration`} />
      <span className="card-icon">{service.title.slice(0, 1)}</span>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>
  );
}

function DestinationCard({ destination }) {
  return (
    <article className="card destination-card">
      <img src={destination.image} alt={`${destination.country} study abroad guidance`} />
      <div>
        <h3>{destination.country}</h3>
        <p>{destination.text}</p>
      </div>
    </article>
  );
}

function BlogCard({ blog }) {
  return (
    <article className="card blog-card">
      <img src={blog.image} alt={`${blog.title} illustration`} />
      <div>
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
        <Link className="text-link" to={`/blog/${blog.slug}`}>
          Read More
        </Link>
      </div>
    </article>
  );
}

function Home() {
  usePageMeta("Home", "Overseas Gateway helps students plan study abroad journeys with transparent counselling and end-to-end support.");
  return (
    <>
      <Hero />
      <StatsSection />
      <section className="intro-grid page-band">
        <div>
          <p className="eyebrow">About Overseas Gateway</p>
          <h2>Clear advice for students who want more than admission paperwork.</h2>
        </div>
        <p>
          We evaluate every student's academics, interests, goals, budget, and long-term ambitions before recommending countries, universities, and next steps. The result is a study abroad plan that feels practical, transparent, and personal.
        </p>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Services" title="Everything you need from planning to departure." text="Get complete support through counselling, applications, documentation, visa guidance, loans, accommodation, and settling abroad." />
        <div className="grid three">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
      <section className="section tinted">
        <SectionHeading eyebrow="Destinations" title="Popular countries for globally ambitious students." />
        <div className="grid four">
          {destinations.slice(0, 4).map((destination) => (
            <DestinationCard key={destination.country} destination={destination} />
          ))}
        </div>
      </section>
      <section className="why-block">
        <SectionHeading eyebrow="Why Choose Us" title="Transparent, ethical, student-first counselling." text="We combine profile assessment, destination comparison, course planning, documentation, visa support, and parent awareness into one connected journey." />
        <div className="value-pills">
          {values.slice(0, 6).map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

function About() {
  usePageMeta("About Us", "Learn about Overseas Gateway, its mission, vision, OG Infinitum connection, and student-first values.");
  return (
    <>
      <PageHero eyebrow="About Us" title="A trusted overseas education partner for confident decisions." text="Overseas Gateway is a dedicated vertical of OG Infinitum, created to help students move beyond confusion and make informed global education choices." image="/doc-images/image1.png" />
      <section className="split page-band">
        <article className="panel">
          <p className="eyebrow">Mission</p>
          <h2>Bridge education, future-ready skills, and global career opportunity.</h2>
          <p>We empower students with the right guidance, awareness, and personalized support to confidently pursue international academic and professional success.</p>
        </article>
        <article className="panel">
          <p className="eyebrow">Vision</p>
          <h2>Build one of India's most trusted student growth ecosystems.</h2>
          <p>We aspire to connect students with world-class education, global exposure, and the clarity needed to shape meaningful careers abroad.</p>
        </article>
      </section>
      <section className="content-section">
        <SectionHeading eyebrow="Our Story" title="Founded to solve confusion, misinformation, and unclear counselling." />
        <p>
          Overseas Gateway was built after recognizing a serious challenge faced by aspiring students: improper counselling, lack of transparency, confusing admission processes, and choices that may not match a student's real potential. We created a platform that prioritizes the student's future over mere admissions.
        </p>
        <p>
          Backed by OG Infinitum, we bring innovation, structure, and transparent mentorship to the entire journey: profile assessment, country selection, university shortlisting, application support, visa guidance, financial planning, accommodation, and pre-departure assistance.
        </p>
      </section>
      <section className="section tinted">
        <SectionHeading eyebrow="Core Values" title="The principles behind every recommendation." />
        <div className="value-pills roomy">
          {values.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </section>
      <CTASection title="Need honest guidance before choosing a country?" />
    </>
  );
}

function Services() {
  usePageMeta("Services", "Explore Overseas Gateway services including profile evaluation, counselling, admissions, visa support, loans, and departure support.");
  return (
    <>
      <PageHero eyebrow="Services" title="Complete overseas education support under one roof." text="From the first profile review to enrollment, visa filing, accommodation, and post-departure support, we help students move step by step." image="/doc-images/image7.png" />
      <section className="section">
        <div className="grid two">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
      <CTASection title="Start with a free profile evaluation." />
    </>
  );
}

function Destinations() {
  usePageMeta("Destinations", "Explore study abroad destinations including USA, UK, Canada, Australia, Germany, Ireland, New Zealand, France, and Europe.");
  return (
    <>
      <PageHero eyebrow="Destinations" title="Choose the country that fits your goals, budget, and future." text="We help students compare destinations based on academics, career outcomes, affordability, visa pathways, lifestyle, and long-term plans." image="/doc-images/image5.png" />
      <section className="section">
        <div className="grid three">
          {destinations.map((destination) => (
            <DestinationCard key={destination.country} destination={destination} />
          ))}
        </div>
      </section>
      <CTASection title="Not sure which country is right for you?" text="Share your profile and we will help you compare your best-fit destinations." />
    </>
  );
}

function Blog() {
  usePageMeta("Blog", "Read concise study abroad guides from Overseas Gateway on USA, UK, Australia, Europe, OPT, STEM, and career planning.");
  return (
    <>
      <PageHero eyebrow="Blog" title="Study abroad insights for smarter decisions." text="Concise guides based on common student questions about destinations, work opportunities, career outcomes, and life abroad." image="/doc-images/image8.png" />
      <section className="section">
        <div className="grid three">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}

function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  usePageMeta(blog ? blog.title : "Blog", blog ? blog.excerpt : "Study abroad insights from Overseas Gateway.");

  if (!blog) {
    return (
      <section className="content-section">
        <h1>Article not found</h1>
        <Link className="btn btn-primary" to="/blog">Back to Blog</Link>
      </section>
    );
  }

  return (
    <article className="article-page">
      <img src={blog.image} alt={`${blog.title} illustration`} />
      <div className="article-content">
        <p className="eyebrow">Student Insight</p>
        <h1>{blog.title}</h1>
        <p className="lead">{blog.excerpt}</p>
        {blog.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link className="btn btn-secondary" to="/blog">Back to Blog</Link>
      </div>
    </article>
  );
}

function EligibilityChecker() {
  usePageMeta("Eligibility Checker", "Check your study abroad eligibility with Overseas Gateway through a modern guided enquiry form.");
  return (
    <>
      <PageHero eyebrow="Eligibility Checker" title="Check your eligibility for global study options." text="Share your academic background, destination interests, intake plan, and counselling preference. Our team will review your profile and guide your next step." image="/doc-images/image1.png" />
      <section className="form-page">
        <EligibilityForm />
      </section>
    </>
  );
}

function Contact() {
  usePageMeta("Contact", "Contact Overseas Gateway for overseas education counselling, eligibility checks, WhatsApp support, and free profile evaluation.");
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to an Overseas Gateway counsellor." text="Reach us for profile evaluation, destination guidance, admission planning, visa support, and free study abroad counselling." image="/doc-images/image6.png" />
      <section className="contact-grid">
        <div className="contact-panel">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><strong>Phone:</strong> {site.phones.join(", ")}</p>
          <p><strong>Location:</strong> {site.location}</p>
          <a className="btn btn-primary" href={getWhatsAppUrl("Hi Overseas Gateway, I want to speak with a counsellor.")} target="_blank" rel="noreferrer">
            WhatsApp CTA
          </a>
        </div>
        <ContactForm />
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <img src={image} alt={`${eyebrow} illustration`} />
    </section>
  );
}

function ContactForm() {
  const [state, setState] = useState({ status: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setState({ status: "loading", message: "" });
    try {
      await sendEmailForm(form);
      form.reset();
      setState({ status: "success", message: "Thanks. Your enquiry has been sent. Our counsellor will contact you soon." });
    } catch {
      setState({ status: "error", message: `Email service is not configured yet. Please email ${site.email} or use WhatsApp.` });
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <input type="hidden" name="form_type" value="Contact Enquiry" />
      <input type="hidden" name="to_email" value={site.email} />
      <FormField label="Name" name="name" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="Phone" name="phone" type="tel" minLength="7" required />
      <label>
        Interested Destination
        <select name="destination" defaultValue="" required>
          <option value="" disabled>Select destination</option>
          {destinations.map((item) => <option key={item.country}>{item.country}</option>)}
          <option>Not sure yet</option>
        </select>
      </label>
      <FormField label="Preferred Time" name="preferred_time" placeholder="Example: Today after 5 PM" required />
      <label className="wide">
        Message
        <textarea name="message" rows="5" required placeholder="Tell us what you need help with." />
      </label>
      <button className="btn btn-primary wide" type="submit" disabled={state.status === "loading"}>
        {state.status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {state.message ? <p className={`form-status ${state.status}`}>{state.message}</p> : null}
    </form>
  );
}

function EligibilityForm() {
  const [state, setState] = useState({ status: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setState({ status: "loading", message: "" });
    try {
      await sendEmailForm(form);
      form.reset();
      setState({ status: "success", message: "Eligibility request submitted. Our team will review your profile and contact you." });
    } catch {
      setState({ status: "error", message: `Email service is not configured yet. Please email ${site.email} or use WhatsApp.` });
    }
  }

  return (
    <form className="form-card large" onSubmit={handleSubmit}>
      <input type="hidden" name="form_type" value="Eligibility Checker" />
      <input type="hidden" name="to_email" value={site.email} />
      <SelectField label="Study level" name="study_level" options={["Undergraduate", "Postgraduate", "Diploma", "PhD", "Not sure yet"]} />
      <SelectField label="Interested countries" name="interested_countries" options={["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "New Zealand", "France", "Europe", "Multiple countries"]} />
      <FormField label="Interested course" name="interested_course" required />
      <SelectField label="Intake year" name="intake_year" options={["2026", "2027", "2028", "Not decided"]} />
      <SelectField label="Main priority" name="main_priority" options={["High salary potential", "Affordable tuition", "PR or settlement", "Top-ranked university", "Scholarship", "Fast admission"]} />
      <FormField label="Current qualification" name="current_qualification" required />
      <FormField label="Academic percentage/GPA" name="academic_score" required />
      <SelectField label="English test status" name="english_test_status" options={["Not taken yet", "Planning IELTS", "Planning PTE", "Planning TOEFL", "Already have score", "Need guidance"]} />
      <SelectField label="Work experience" name="work_experience" options={["No experience", "Less than 1 year", "1-2 years", "3-5 years", "5+ years"]} />
      <SelectField label="Scholarship importance" name="scholarship_importance" options={["Very important", "Good to have", "Not required", "Need guidance"]} />
      <FormField label="Full name" name="name" required />
      <FormField label="Mobile number" name="phone" type="tel" minLength="7" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="City/State" name="city_state" required />
      <SelectField label="Preferred counselling mode" name="counselling_mode" options={["Phone call", "WhatsApp", "Video call", "In-person"]} />
      <button className="btn btn-primary wide" type="submit" disabled={state.status === "loading"}>
        {state.status === "loading" ? "Submitting..." : "Submit Eligibility Check"}
      </button>
      {state.message ? <p className={`form-status ${state.status}`}>{state.message}</p> : null}
    </form>
  );
}

function FormField({ label, name, type = "text", ...props }) {
  return (
    <label>
      {label}
      <input name={name} type={type} {...props} />
    </label>
  );
}

function SelectField({ label, name, options }) {
  return (
    <label>
      {label}
      <select name={name} defaultValue="" required>
        <option value="" disabled>Select option</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/eligibility" element={<EligibilityChecker />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
