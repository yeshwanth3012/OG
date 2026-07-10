import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { blogs, destinations, getWhatsAppUrl, images, partnerUniversities, programs, services, site, stats, values } from "./data";
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

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const selector = [
      ".page-hero > *",
      ".section-heading",
      ".stats-section > *",
      ".feature-tile",
      ".intro-grid > *",
      ".grid > *",
      ".split > *",
      ".program-grid > *",
      ".program-highlight > *",
      ".why-block > *",
      ".value-pills > *",
      ".cta-section > *",
      ".contact-grid > *",
      ".contact-map-section > *",
      ".article-page > *",
      ".form-card > *",
      ".university-admissions .section-heading",
      ".footer > *"
    ].join(",");
    const elements = [...document.querySelectorAll(selector)];

    elements.forEach((element) => {
      const siblings = [...element.parentElement.children];
      const index = siblings.indexOf(element);
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/programs", "Programs"],
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

function SocialIcon({ label }) {
  const icons = {
    Instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </svg>
    ),
    Facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.5 8.5A2 2 0 1 1 6.5 4.5a2 2 0 0 1 0 4zM4.8 20.2h3.4V9.8H4.8v10.4zM13.2 9.6c-1.2 0-2.1.5-2.6 1.2V9.8H7.3c0 .5-.1 10.4-.1 10.4h3.3v-5.8c0-.3 0-.6.1-.8.3-.6.9-1.2 1.9-1.2 1.3 0 1.9.9 1.9 2.3v5.5h3.3v-5.9c0-3.1-1.7-4.5-3.9-4.5z" />
      </svg>
    ),
    YouTube: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18.1 5 12 5 12 5s-6.1 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C5.9 19 12 19 12 19s6.1 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
      </svg>
    )
  };

  return icons[label] || null;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-intro">
        <Link className="footer-brand" to="/">
          <img src="/og-logo.svg" alt="Overseas Gateway logo" />
          <span>Overseas Gateway</span>
        </Link>
        <p>Powered by OG Infinitum, Built for Global Dreams</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <a className="footer-email" href={`mailto:${site.email}`}>{site.email}</a>
        {site.phones.map((phone) => (
          <a key={phone} href={`tel:${phone}`}>{phone}</a>
        ))}
      </div>
      <div className="footer-location">
        <h3>Locate Us</h3>
        <p>{site.location}</p>
      </div>
      <div>
        <h3>Explore</h3>
        <Link to="/services">Services</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/eligibility">Eligibility Checker</Link>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="social-links">
          {site.socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={`Follow Overseas Gateway on ${social.label}`}>
              <span className="social-icon" aria-hidden="true">
                <SocialIcon label={social.label} />
              </span>
              <span className="social-label">{social.label}</span>
            </a>
          ))}
        </div>
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
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(22, 39, 61, 0.9), rgba(22, 39, 61, 0.56)), url(${images.hero})` }}>
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
      <div className="hero-card">
        <img src="/og-logo.svg" alt="" />
        <span>Trusted guidance for global dreams</span>
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

function DestinationSlider() {
  const sliderItems = [...destinations, ...destinations];

  return (
    <div className="destination-slider" aria-label="Study abroad destinations">
      <div className="destination-track">
        {sliderItems.map((destination, index) => (
          <div className="destination-slide" key={`${destination.country}-${index}`} aria-hidden={index >= destinations.length}>
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </div>
  );
}

function UniversityLogoSlider() {
  const sliderItems = [...partnerUniversities, ...partnerUniversities];

  return (
    <div className="university-slider" aria-label="Partner universities">
      <div className="university-track">
        {sliderItems.map((university, index) => (
          <div className="university-slide" key={`${university.name}-${index}`} aria-hidden={index >= partnerUniversities.length}>
            <div className="university-logo-card">
              <img src={university.logo} alt={university.name} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UniversityAdmissions() {
  return (
    <section className="university-admissions section">
      <SectionHeading title="Our students are admitted into..." center />
      <UniversityLogoSlider />
    </section>
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
      <FeatureTiles />
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
        <SectionHeading eyebrow="Destinations" title="Popular countries for globally ambitious students." text="Explore every destination we guide students through. Hover over the slider to pause and review a country." />
        <DestinationSlider />
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
      <UniversityAdmissions />
    </>
  );
}

function FeatureTiles() {
  const tiles = [
    {
      title: "Our Programs",
      text: "Explore UG, PG, Top-Up, and Student Exchange pathways for your global education goals.",
      to: "/programs",
      tone: "blue"
    },
    {
      title: "Destinations",
      text: "Compare countries by academics, costs, career opportunities, lifestyle, and long-term goals.",
      to: "/destinations",
      tone: "yellow"
    },
    {
      title: "Eligibility",
      text: "Share your profile and receive practical next steps from the Overseas Gateway team.",
      to: "/eligibility",
      tone: "blue"
    }
  ];

  return (
    <section className="feature-tiles">
      {tiles.map((tile) => (
        <article className={`feature-tile ${tile.tone}`} key={tile.title}>
          <h2>{tile.title}</h2>
          <p>{tile.text}</p>
          <Link to={tile.to}>Learn More</Link>
        </article>
      ))}
    </section>
  );
}

function About() {
  usePageMeta("About Us", "Learn about Overseas Gateway, a dedicated vertical of OG Infinitum built for global education guidance and student success.");
  return (
    <>
      <PageHero eyebrow="About Us" title="Overseas Gateway is powered by OG Infinitum and built for global dreams." text="We empower students to pursue global education and international careers with confidence, clarity, and the right guidance at every step." />
      <section className="split page-band">
        <article className="panel">
          <p className="eyebrow">Our Mission</p>
          <h2>Bridge education, future-ready skills, and global career opportunity.</h2>
          <p>Our mission is to empower students with the right guidance, awareness, and overseas education opportunities so they can make confident academic and career decisions.</p>
          <p>We are committed to creating a well-informed ecosystem for students and parents through innovative, scalable, and transparent educational solutions.</p>
          <p>Through personalized mentorship, expert counselling, and continuous awareness, we help students unlock their true potential and pursue global academic and professional success.</p>
        </article>
        <article className="panel">
          <p className="eyebrow">Our Vision</p>
          <h2>Build one of India's most trusted and impactful student growth ecosystems.</h2>
          <p>Our vision is to empower students with career clarity, personalized mentorship, skill development, and future-ready educational support.</p>
          <p>We aspire to be the gateway to world-class education, global exposure, and limitless opportunities for ambitious students.</p>
          <p>Through innovation, transparency, and student-centric guidance, we aim to prepare globally competent individuals ready to thrive in an evolving world.</p>
        </article>
      </section>
      <section className="content-section story-section">
        <SectionHeading eyebrow="Our Story" title="A trusted partner for global education decisions." />
        <p>
          Overseas Gateway, a dedicated vertical of OG Infinitum, was founded after recognizing a growing challenge faced by aspiring students: misinformation, improper counselling, lack of transparency, and confusing admission processes that can lead to wasted time, financial loss, and career decisions that do not align with a student's true potential.
        </p>
        <p>
          We believed students deserved better: a trusted partner that prioritizes their future over mere admissions. With this vision, we created a platform that delivers expert-driven counselling, transparent processes, and personalized mentorship tailored to every student's aspirations, academic background, skills, interests, and long-term career goals.
        </p>
        <p>
          Our approach goes beyond traditional consultancy. We specialize in in-depth student profile assessments that help identify the right courses, universities, and countries best suited for each student's future ambitions.
        </p>
        <p>
          From university shortlisting and application support to visa guidance, financial planning, and pre-departure assistance, we ensure a seamless and stress-free journey at every stage.
        </p>
        <p>
          At Overseas Gateway, we do not simply help students study abroad. We help them unlock opportunities, discover their true potential, and build futures without borders.
        </p>
        <p>
          Backed by the innovation and vision of OG Infinitum, we are committed to opening global pathways for ambitious students and transforming international education dreams into meaningful success stories worldwide.
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
      <PageHero eyebrow="Services" title="Complete overseas education support under one roof." text="From the first profile review to enrollment, visa filing, accommodation, and post-departure support, we help students move step by step." />
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

function Programs() {
  usePageMeta("Programs", "Explore Overseas Gateway programs including undergraduate, postgraduate, top-up, and student exchange pathways abroad.");
  return (
    <>
      <PageHero eyebrow="Programs" title="Choose the study pathway that fits your next chapter." text="From bachelor's degrees to master's programs, top-up pathways, and exchange opportunities, we help students compare the right academic route before applying abroad." />
      <section className="section">
        <SectionHeading eyebrow="Academic Pathways" title="Programs designed around your goals, qualification, and destination." text="Each pathway is matched with your academic profile, budget, timeline, and long-term career plans so your overseas education decision feels clear and practical." />
        <div className="program-grid">
          {programs.map((program, index) => (
            <article className="program-card" key={program.title}>
              <img src={program.image} alt={`${program.title} abroad study pathway`} />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="program-highlight">
        <div>
          <p className="eyebrow">How We Guide You</p>
          <h2>One clear roadmap from program choice to application readiness.</h2>
        </div>
        <div className="value-pills roomy">
          <span>Profile assessment</span>
          <span>Course matching</span>
          <span>Country comparison</span>
          <span>Application planning</span>
          <span>Visa readiness</span>
        </div>
      </section>
      <CTASection title="Need help choosing between UG, PG, Top-Up, or Exchange?" text="Share your current qualification and study goals. We will help you identify the most practical pathway." />
    </>
  );
}

function Destinations() {
  usePageMeta("Destinations", "Explore study abroad destinations including USA, UK, Canada, Australia, Germany, Ireland, New Zealand, France, and Europe.");
  return (
    <>
      <PageHero eyebrow="Destinations" title="Choose the country that fits your goals, budget, and future." text="We help students compare destinations based on academics, career outcomes, affordability, visa pathways, lifestyle, and long-term plans." />
      <section className="section">
        <SectionHeading eyebrow="Study Destinations" title="Explore every country we guide students through." text="Compare academics, career outcomes, affordability, visa pathways, lifestyle, and long-term plans across our key destinations." />
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
      <PageHero eyebrow="Blog" title="Study abroad insights for smarter decisions." text="Concise guides based on common student questions about destinations, work opportunities, career outcomes, and life abroad." />
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
      <PageHero eyebrow="Eligibility Checker" title="Check your eligibility for global study options." text="Share your academic background, destination interests, intake plan, and counselling preference. Our team will review your profile and guide your next step." />
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
      <PageHero eyebrow="Contact" title="Talk to an Overseas Gateway counsellor." text="Reach us for profile evaluation, destination guidance, admission planning, visa support, and free study abroad counselling." />
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
      <section className="contact-map-section">
        <SectionHeading eyebrow="Office Location" title="Find our Hyderabad office on the map." text="Visit Overseas Gateway at Lorven Tiara, Kondapur, for in-person counselling and support." />
        <div className="contact-map">
          <iframe
            title="Overseas Gateway office location map"
            src={site.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a className="text-link contact-map-link" href={site.mapLink} target="_blank" rel="noreferrer">
          Open in Google Maps
        </a>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
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
      setState({ status: "error", message: `Form submission is not available right now. Please email ${site.email} or use WhatsApp.` });
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
  const formRef = useRef(null);
  const [state, setState] = useState({ status: "idle", message: "" });
  const [isSubmitReady, setIsSubmitReady] = useState(false);

  function updateSubmitReady() {
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const ready =
      String(data.get("study_level") || "").trim() !== "" &&
      String(data.get("name") || "").trim() !== "" &&
      String(data.get("phone") || "").trim().length >= 7 &&
      String(data.get("counselling_mode") || "").trim() !== "";

    setIsSubmitReady(ready);
  }

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
      setIsSubmitReady(false);
      setState({ status: "success", message: "Eligibility request submitted. Our team will review your profile and contact you." });
    } catch {
      setState({ status: "error", message: `Form submission is not available right now. Please email ${site.email} or use WhatsApp.` });
    }
  }

  return (
    <form
      ref={formRef}
      className="form-card large"
      onSubmit={handleSubmit}
      onInput={updateSubmitReady}
      onChange={updateSubmitReady}
    >
      <input type="hidden" name="form_type" value="Eligibility Checker" />
      <input type="hidden" name="to_email" value={site.email} />
      <SelectField label="Study level" name="study_level" options={["Undergraduate", "Postgraduate", "Diploma", "PhD", "Not sure yet"]} required />
      <SelectField label="Interested countries" name="interested_countries" options={["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "New Zealand", "France", "Europe", "Multiple countries"]} required />
      <FormField label="Interested course" name="interested_course" required />
      <SelectField label="Intake year" name="intake_year" options={["2026", "2027", "2028", "Not decided"]} required />
      <SelectField label="Main priority" name="main_priority" options={["High salary potential", "Affordable tuition", "PR or settlement", "Top-ranked university", "Scholarship", "Fast admission"]} required />
      <FormField label="Current qualification" name="current_qualification" required />
      <FormField label="Academic percentage/GPA" name="academic_score" required />
      <SelectField label="English test status" name="english_test_status" options={["Not taken yet", "Planning IELTS", "Planning PTE", "Planning TOEFL", "Already have score", "Need guidance"]} required />
      <SelectField label="Work experience" name="work_experience" options={["No experience", "Less than 1 year", "1-2 years", "3-5 years", "5+ years"]} required />
      <SelectField label="Scholarship importance" name="scholarship_importance" options={["Very important", "Good to have", "Not required", "Need guidance"]} required />
      <FormField label="Full name" name="name" required />
      <FormField label="Mobile number" name="phone" type="tel" minLength="7" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="City/State" name="city_state" required />
      <SelectField label="Preferred counselling mode" name="counselling_mode" options={["Phone call", "WhatsApp", "Video call", "In-person"]} required />
      <button
        className={`btn btn-primary wide${state.status === "loading" ? " is-loading" : ""}`}
        type="submit"
        disabled={state.status === "loading" || !isSubmitReady}
      >
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

function SelectField({ label, name, options, required = false }) {
  return (
    <label>
      {label}
      <select name={name} defaultValue="" required={required}>
        <option value="" disabled>Select option</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
