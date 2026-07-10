export const site = {
  name: "Overseas Gateway",
  tagline: "Powered by OG Infinitum",
  email: import.meta.env.VITE_CONTACT_EMAIL || "contactus@overseasgateway.com",
  phones: ["9949998351", "9949998352"],
  location: "1st - 4th Floor, F958+CJ4 Lorven Tiara, Survey No 34, Junction, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Kothaguda, Hyderabad, Telangana 500084",
  mapLink: import.meta.env.VITE_GOOGLE_MAP_URL || "https://share.google/6r8QTNh9P8Q3FmAoY",
  mapEmbedUrl:
    import.meta.env.VITE_GOOGLE_MAP_EMBED ||
    "https://maps.google.com/maps?q=Lorven+Tiara,+Kondapur,+Hyderabad,+Telangana+500084&z=16&output=embed",
  socials: [
    { label: "Instagram", url: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/" },
    { label: "Facebook", url: import.meta.env.VITE_FACEBOOK_URL || "https://www.facebook.com/" },
    { label: "LinkedIn", url: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/" },
    { label: "YouTube", url: import.meta.env.VITE_YOUTUBE_URL || "https://www.youtube.com/" }
  ]
};

export const stats = [
  { value: "1500+", label: "Students Guided" },
  { value: "15+", label: "Countries Covered" },
  { value: "98%", label: "Visa Success Rate" }
];

const photo = (id, params = "auto=format&fit=crop&w=1200&q=82") =>
  `https://images.unsplash.com/${id}?${params}`;

export const images = {
  hero: photo("photo-1509062522246-3755977927d7", "auto=format&fit=crop&w=1800&q=85"),
  about: photo("photo-1552664730-d307ca884978", "auto=format&fit=crop&w=1800&q=85"),
  services: photo("photo-1516321318423-f06f85e504b3"),
  destinations: photo("photo-1488646953014-85cb44e25828", "auto=format&fit=crop&w=1800&q=85"),
  blog: photo("photo-1499750310107-5fef28a66643"),
  eligibility: photo("photo-1522202176988-66273c2fd55f"),
  contact: photo("photo-1556761175-b413da4baf72"),
  programs: photo("photo-1492538368677-f6e0afe31dcc"),
  universities: photo("photo-1492538368677-f6e0afe31dcc", "auto=format&fit=crop&w=1800&q=82"),
  cta: photo("photo-1529156069898-49953e39b3ac", "auto=format&fit=crop&w=1800&q=82")
};

export const programs = [
  {
    title: "Undergraduate (UG) Programs",
    image: photo("photo-1531498860502-7c67cf02f657"),
    text: "Start your global education journey with internationally recognized bachelor's degrees. We help students choose the right university, course, and destination based on their academic goals and career aspirations."
  },
  {
    title: "Postgraduate (PG) Programs",
    image: photo("photo-1551836022-d5d88e9218df"),
    text: "Advance your expertise and career prospects with world-class master's and postgraduate programs. Our team guides you through university selection, applications, and visa processes for a smooth transition abroad."
  },
  {
    title: "Top-Up Programs",
    image: photo("photo-1554224154-26032ffc0d07"),
    text: "Convert your diploma or equivalent qualification into a full bachelor's degree in a shorter duration. Top-Up programs provide a fast-track pathway to earning an internationally recognized degree."
  },
  {
    title: "Student Exchange Programs",
    image: photo("photo-1503676260728-1c00da094a0b"),
    text: "Experience international education and cultural immersion through short-term study opportunities abroad. Student exchange programs help you gain global exposure, build international networks, and enhance your academic profile."
  }
];

export const services = [
  {
    title: "Free Profile Evaluation",
    image: photo("photo-1552664730-d307ca884978"),
    text: "Get a clear review of your academics, budget, goals, and best-fit study abroad opportunities before making a decision."
  },
  {
    title: "1-on-1 Expert Counselling",
    image: photo("photo-1573497491208-6b1acb260507"),
    text: "Speak with experienced counsellors who help you choose the right country, university, course, and career pathway."
  },
  {
    title: "Test Preparation Support",
    image: photo("photo-1434030216411-0b793f4b4173"),
    text: "Receive preparation guidance for IELTS, PTE, TOEFL, GRE, GMAT, and other requirements for your target destination."
  },
  {
    title: "University Admission Guidance",
    image: photo("photo-1523580846011-d3a5bc25702b"),
    text: "From shortlisting to SOPs, LORs, applications, offer letters, and enrollment, we simplify the admission process."
  },
  {
    title: "Education Loan Assistance",
    image: photo("photo-1554224155-6726b3ff858f"),
    text: "Plan your finances with support for education loans, documentation, and trusted financial guidance."
  },
  {
    title: "Accommodation Assistance",
    image: photo("photo-1560448204-e02f11c3d0e2"),
    text: "Find safe, student-friendly accommodation options before you travel abroad."
  },
  {
    title: "Pre & Post Departure Support",
    image: photo("photo-1436491865332-7a61a109cc05"),
    text: "Get support for visa guidance, travel planning, arrival preparation, and early settling-in questions."
  },
  {
    title: "Enrollment & Visa Assistance",
    image: photo("photo-1450101499163-c8848c66ca85"),
    text: "Complete university onboarding, document checks, visa filing, and formalities with confidence."
  }
];

export const destinations = [
  {
    country: "USA",
    image: photo("photo-1500530855697-b586d89ba3ee"),
    text: "A destination where innovation meets opportunity, with leading universities, research exposure, STEM pathways, and global career networks."
  },
  {
    country: "UK",
    image: photo("photo-1513635269975-59663e0ac1ad"),
    text: "A strong academic destination known for respected degrees, shorter programs, multicultural campuses, and industry-connected learning."
  },
  {
    country: "Canada",
    image: photo("photo-1517935706615-2717063c2225"),
    text: "Popular for its student-friendly environment, high-quality education, practical learning, and long-term career possibilities."
  },
  {
    country: "Australia",
    image: photo("photo-1506973035872-a4ec16b8e8d9"),
    text: "A balanced choice for academic quality, practical exposure, post-study work options, and a vibrant student lifestyle."
  },
  {
    country: "Germany",
    image: photo("photo-1519677100203-a0e668c92439"),
    text: "Ideal for engineering, technology, research, affordability, and strong industry integration across Europe."
  },
  {
    country: "Ireland",
    image: photo("photo-1590089415225-401ed6f9db8e"),
    text: "Europe's fast-growing innovation hub, connecting students to technology, finance, pharma, and global employers."
  },
  {
    country: "New Zealand",
    image: photo("photo-1507699622108-4be3abd695ad"),
    text: "A future-focused education destination with personalized learning, safety, natural beauty, and a balanced student life."
  },
  {
    country: "France",
    image: photo("photo-1502602898657-3e91760cbb34"),
    text: "A global center for creativity, business, culture, luxury, and internationally recognized education."
  },
  {
    country: "European Destinations",
    image: photo("photo-1467269204594-9661b134dd2b"),
    text: "Explore Europe for affordable education, cultural exposure, specialized programs, and career mobility across diverse economies."
  }
];

const logo = (file) => `/Logos/${encodeURIComponent(file)}`;
const blogImage = (file) => `/blog/${encodeURIComponent(file)}`;

export const partnerUniversities = [
  {
    name: "American Business School Paris",
    shortName: "ABS",
    logo: logo("abs.png"),
    country: "France",
    text: "A Paris-based international business school offering American-style undergraduate and graduate programs with a strong focus on global management and multicultural learning."
  },
  {
    name: "Arden University",
    shortName: "Arden",
    logo: logo("Arden.png"),
    country: "UK / Germany",
    text: "A UK university known for flexible, career-focused degrees through online, blended, and campus study options across the UK and Berlin."
  },
  {
    name: "Aviancity",
    shortName: "Aviancity",
    logo: logo("Aviancity.png"),
    country: "Europe",
    text: "An international education partner supporting students with pathway and study-abroad options across selected European destinations."
  },
  {
    name: "BHMS Business & Hotel Management School",
    shortName: "BHMS",
    logo: logo("bhms.png"),
    country: "Switzerland",
    text: "A Swiss hospitality school specializing in hotel management, culinary arts, and business programs with strong industry exposure in Lucerne."
  },
  {
    name: "Berlin School of Business and Innovation",
    shortName: "BSBI",
    logo: logo("BSBI.png"),
    country: "Germany",
    text: "A Berlin-based business school offering English-taught bachelor's, master's, and doctoral pathways in business, IT, marketing, and hospitality."
  },
  {
    name: "Clark University",
    shortName: "Clark",
    logo: logo("Clark.png"),
    country: "USA",
    text: "A private research university in Massachusetts known for its liberal arts foundation, graduate strength, and close-knit academic community."
  },
  {
    name: "CODE University of Applied Sciences",
    shortName: "CODE",
    logo: logo("code uni.png"),
    country: "Germany",
    text: "A Berlin university of applied sciences focused on digital product development, software engineering, and interaction design."
  },
  {
    name: "Drexel University",
    shortName: "Drexel",
    logo: logo("Drexel.png"),
    country: "USA",
    text: "A Philadelphia research university renowned for cooperative education, immersive internships, and career-ready STEM and professional programs."
  },
  {
    name: "EMLV Business School",
    shortName: "EMLV",
    logo: logo("emlv.png"),
    country: "France",
    text: "A Paris business school offering management programs with international exposure, digital business focus, and strong industry connections."
  },
  {
    name: "Excelia Business School",
    shortName: "Excelia",
    logo: logo("Excelia.png"),
    country: "France",
    text: "A triple-accredited French business school known for tourism, hospitality, and international management programs across multiple campuses."
  },
  {
    name: "GISMA University of Applied Sciences",
    shortName: "GISMA",
    logo: logo("GISMA.png"),
    country: "Germany",
    text: "A German university of applied sciences offering practice-oriented business, data, and technology programs for international students."
  },
  {
    name: "Illinois Institute of Technology",
    shortName: "Illinois Tech",
    logo: logo("IIT chicago.png"),
    country: "USA",
    text: "A Chicago technological university recognized for engineering, computing, architecture, and applied science education in an urban research setting."
  },
  {
    name: "International School of Management",
    shortName: "ISM",
    logo: logo("ism.png"),
    country: "Germany",
    text: "A private German business school with campuses across major cities, known for international management and applied business education."
  },
  {
    name: "KEDGE Business School",
    shortName: "KEDGE",
    logo: logo("Kedge.png"),
    country: "France",
    text: "A triple-accredited French grande école with campuses in Bordeaux, Marseille, and Paris, known for management, finance, and supply chain programs."
  },
  {
    name: "Munich Business School",
    shortName: "MBS",
    logo: logo("munich bs.png"),
    country: "Germany",
    text: "A private business school in Munich offering internationally oriented bachelor's and master's programs with strong corporate links in Bavaria."
  },
  {
    name: "NEOMA Business School",
    shortName: "NEOMA",
    logo: logo("neoma.png"),
    country: "France",
    text: "A triple-accredited French business school with campuses in Reims, Rouen, and Paris, known for innovation-driven management education."
  },
  {
    name: "Northeastern University",
    shortName: "Northeastern",
    logo: logo("neu.png"),
    country: "USA",
    text: "A global research university famous for experiential learning, co-op placements, and strong graduate pathways in technology and business."
  },
  {
    name: "Paris School of Business",
    shortName: "PSB",
    logo: logo("psb.png"),
    country: "France",
    text: "A Paris business school offering internationally oriented management degrees with a strong focus on entrepreneurship and professional practice."
  },
  {
    name: "Rennes School of Business",
    shortName: "Rennes SB",
    logo: logo("rennes.png"),
    country: "France",
    text: "A highly international French business school known for English-taught programs, global faculty, and strong management education."
  },
  {
    name: "Rochester Institute of Technology",
    shortName: "RIT",
    logo: logo("RIT.png"),
    country: "USA",
    text: "A leading US university at the intersection of technology, design, and the arts, known for career-focused STEM and creative programs."
  },
  {
    name: "SKEMA Business School",
    shortName: "SKEMA",
    logo: logo("skema.png"),
    country: "France",
    text: "A global French business school with multi-campus presence, known for international business, finance, and digital economy programs."
  },
  {
    name: "SRH University",
    shortName: "SRH",
    logo: logo("SRH.png"),
    country: "Germany",
    text: "A network of German universities of applied sciences offering practice-based programs in business, technology, health, and design."
  },
  {
    name: "State University of New York",
    shortName: "SUNY",
    logo: logo("SUNY.png"),
    country: "USA",
    text: "One of the largest public university systems in the USA, offering diverse campuses and strong academic pathways across many disciplines."
  },
  {
    name: "University of Europe for Applied Sciences",
    shortName: "UE",
    logo: logo("UE.png"),
    country: "Germany",
    text: "A German university of applied sciences focused on business, sports, media, art, and design with campuses in major creative cities."
  },
  {
    name: "University of Houston",
    shortName: "UH",
    logo: logo("UH.png"),
    country: "USA",
    text: "A major public research university in Texas known for energy, engineering, business, and a diverse international student community."
  },
  {
    name: "University of Massachusetts",
    shortName: "UMass",
    logo: logo("UMASS.png"),
    country: "USA",
    text: "A respected public university system in Massachusetts offering strong academics across research, STEM, business, and professional fields."
  },
  {
    name: "Washington State University",
    shortName: "WSU",
    logo: logo("wsu.png"),
    country: "USA",
    text: "A public land-grant research university known for science, engineering, agriculture, and a strong campus community across Washington."
  },
  {
    name: "Yeshiva University",
    shortName: "Yeshiva",
    logo: logo("yeshiva.png"),
    country: "USA",
    text: "A New York research university combining rigorous academics with professional programs in business, law, science, and the humanities."
  }
];

export const values = [
  "Student-centric approach",
  "Integrity and transparency",
  "Ethical practices",
  "Value-driven guidance",
  "Selfless service",
  "Personalized mentorship",
  "Excellence and professionalism",
  "Empowerment through awareness",
  "Global opportunities with local support",
  "Future-ready development"
];

export const blogs = [
  {
    slug: "life-of-an-indian-student-in-the-usa",
    title: "Life of an Indian Student in the USA",
    image: blogImage("indian-student-usa.png"),
    excerpt:
      "Studying in the USA is a journey of independence, emotion, hard work, friendships, and personal growth.",
    body: [
      "For many Indian students, studying in the USA is not only about earning a degree. It is about carrying family dreams, stepping into a new culture, and building a future with courage.",
      "The first few days can feel overwhelming: unfamiliar faces, accents, weather, homesickness, and the silence after phone calls with family. Over time, students learn to cook, manage money, use transport, balance academics, and live independently.",
      "The American education system encourages discussion, creativity, practical exposure, and independent thinking. Students also build resilience through deadlines, part-time work, friendships, and real-world responsibility.",
      "By the end of the journey, students return with more than a qualification. They carry confidence, maturity, global exposure, and a new perspective on life."
    ]
  },
  {
    slug: "opt-and-stem-opt-explained",
    title: "OPT & STEM OPT Explained",
    image: blogImage("opt-stem-opt-explained.png"),
    excerpt:
      "Understand how OPT and STEM OPT help international students gain real work experience in the USA.",
    body: [
      "OPT, or Optional Practical Training, allows F-1 students to work in the USA after graduation in a role related to their field of study.",
      "Regular OPT can provide up to 12 months of work authorization. Students gain industry exposure, professional confidence, networking opportunities, and practical skills.",
      "STEM students may qualify for an additional 24-month extension, allowing up to three years of work experience after graduation.",
      "Students must follow visa rules, work in a related field, and receive proper approval. With the right planning, OPT can become a bridge between education and a global career."
    ]
  },
  {
    slug: "top-stem-courses-in-the-usa",
    title: "Top STEM Courses in the USA",
    image: blogImage("top-stem-courses-usa.png"),
    excerpt:
      "STEM programs remain a strong choice for students seeking high-demand careers and extended work opportunities.",
    body: [
      "STEM stands for Science, Technology, Engineering, and Mathematics. These fields are shaping global careers through AI, data, automation, cybersecurity, biotechnology, and engineering innovation.",
      "Popular choices include Computer Science, Data Science, Artificial Intelligence, Cybersecurity, Engineering, Information Technology, Mathematics, and Biotechnology.",
      "Many STEM programs also qualify for STEM OPT, which gives eligible students more time to gain professional experience in the USA.",
      "Choosing the right course should depend on skills, interest, job market demand, university strength, and long-term career goals."
    ]
  },
  {
    slug: "why-the-uk-is-still-a-top-destination",
    title: "Why the UK is Still a Top Destination",
    image: blogImage("why-uk-top-destination.png"),
    excerpt:
      "The UK continues to attract students through academic reputation, shorter degrees, and global recognition.",
    body: [
      "The UK remains a preferred destination because its universities are globally respected and its programs are often shorter than comparable degrees in other countries.",
      "Students benefit from multicultural campuses, strong academic heritage, practical learning, and access to global networks.",
      "For students who want a premium education with international recognition, the UK offers a strong mix of quality, speed, and opportunity."
    ]
  },
  {
    slug: "top-in-demand-jobs-in-the-uk",
    title: "Top In-Demand Jobs in the UK",
    image: blogImage("top-in-demand-jobs-uk.png"),
    excerpt:
      "Career planning matters. Students should connect course choices with in-demand roles and employer needs.",
    body: [
      "In-demand jobs in the UK often include technology, healthcare, engineering, finance, data, cybersecurity, and business roles.",
      "Students should choose programs that connect academic learning with employability, internships, and industry exposure.",
      "The right course-university-career match can make the study abroad investment much more meaningful."
    ]
  },
  {
    slug: "rankings-vs-career-opportunities",
    title: "Rankings vs Career Opportunities",
    image: blogImage("rankings-career-opportunities.png"),
    excerpt:
      "A high ranking is useful, but career outcomes, location, fees, internships, and course fit matter too.",
    body: [
      "University rankings can help students compare reputation, research quality, and global recognition. But rankings alone should not decide the future.",
      "Students should also evaluate course structure, career services, placement outcomes, location, affordability, scholarships, and alumni network.",
      "The best university is the one that fits the student's goals, strengths, budget, and long-term career direction."
    ]
  },
  {
    slug: "post-study-work-and-pr-in-australia",
    title: "Post-Study Work & PR Opportunities in Australia",
    image: blogImage("australia-post-study-work.png"),
    excerpt:
      "Australia is attractive for practical education, post-study options, and pathways that support career growth.",
    body: [
      "Australia combines quality education with practical learning and a strong international student environment.",
      "Post-study work options can help students gain professional experience after graduation, depending on eligibility, program, and policy requirements.",
      "Students should plan early by choosing relevant courses, understanding visa conditions, and aligning education with career demand."
    ]
  },
  {
    slug: "before-studying-in-australia",
    title: "Everything You Need to Know Before Studying in Australia",
    image: blogImage("before-studying-australia.png"),
    excerpt:
      "Know the essentials before applying: courses, fees, living costs, visa steps, work rules, and accommodation.",
    body: [
      "Before studying in Australia, students should understand course choices, admission requirements, English tests, fees, living costs, health cover, visa rules, and accommodation.",
      "A clear plan reduces confusion and helps families make informed financial and academic decisions.",
      "Good counselling connects destination choice with career outcomes, not just admission paperwork."
    ]
  },
  {
    slug: "biggest-myth-about-studying-in-europe",
    title: "Biggest Myth About Studying in Europe",
    image: blogImage("europe-study-myth.png"),
    excerpt:
      "Europe is not one fixed experience. Costs, languages, programs, careers, and rules differ by country.",
    body: [
      "A common myth is that studying in Europe is either always cheap or always complicated. The truth depends on the country, university, course, language, and career plan.",
      "Europe offers many strong options across technology, business, research, design, hospitality, and engineering.",
      "Students need destination-specific guidance to compare tuition, language requirements, work options, and long-term career fit."
    ]
  },
  {
    slug: "benefits-of-studying-in-europe",
    title: "Benefits of Studying in Europe",
    image: photo("photo-1467269204594-9661b134dd2b", "auto=format&fit=crop&w=1200&q=82"),
    excerpt:
      "Europe offers academic diversity, cultural exposure, affordability, mobility, and specialized career pathways.",
    body: [
      "Europe gives students access to diverse countries, programs, cultures, and industries within a connected region.",
      "Many destinations offer affordable education, strong research, practical exposure, and globally respected qualifications.",
      "For students seeking international experience with variety and mobility, Europe can be a strong study abroad choice."
    ]
  }
];

export function getWhatsAppUrl(message = "Hi Overseas Gateway, I would like a free profile evaluation.") {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || "9949998351";
  const cleaned = number.replace(/\D/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}
