export const site = {
  name: "Overseas Gateway",
  tagline: "Powered by OG Infinitum",
  email: import.meta.env.VITE_CONTACT_EMAIL || "contactus@overseasgateway.com",
  phones: ["949998351", "949998352"],
  location: "Hyderabad - 500080"
};

export const stats = [
  { value: "1500+", label: "Students Guided" },
  { value: "15+", label: "Countries Covered" },
  { value: "98%", label: "Visa Success Rate" }
];

const photo = (id, params = "auto=format&fit=crop&w=1200&q=82") =>
  `https://images.unsplash.com/${id}?${params}`;

export const images = {
  hero: photo("photo-1522202176988-66273c2fd55f", "auto=format&fit=crop&w=1800&q=85"),
  about: photo("photo-1551836022-d5d88e9218df"),
  services: photo("photo-1523240795612-9a054b0db644"),
  destinations: photo("photo-1503676260728-1c00da094a0b"),
  blog: photo("photo-1523580846011-d3a5bc25702b"),
  eligibility: photo("photo-1543269865-cbf427effbad"),
  contact: photo("photo-1560264280-88b68371db39"),
  cta: photo("photo-1517486808906-6ca8b3f04846", "auto=format&fit=crop&w=1800&q=82")
};

export const services = [
  {
    title: "Free Profile Evaluation",
    image: photo("photo-1523240795612-9a054b0db644"),
    text: "Get a clear review of your academics, budget, goals, and best-fit study abroad opportunities before making a decision."
  },
  {
    title: "1-on-1 Expert Counselling",
    image: photo("photo-1551836022-d5d88e9218df"),
    text: "Speak with experienced counsellors who help you choose the right country, university, course, and career pathway."
  },
  {
    title: "Test Preparation Support",
    image: photo("photo-1434030216411-0b793f4b4173"),
    text: "Receive preparation guidance for IELTS, PTE, TOEFL, GRE, GMAT, and other requirements for your target destination."
  },
  {
    title: "University Admission Guidance",
    image: photo("photo-1516321318423-f06f85e504b3"),
    text: "From shortlisting to SOPs, LORs, applications, offer letters, and enrollment, we simplify the admission process."
  },
  {
    title: "Education Loan Assistance",
    image: photo("photo-1554224155-6726b3ff858f"),
    text: "Plan your finances with support for education loans, documentation, and trusted financial guidance."
  },
  {
    title: "Accommodation Assistance",
    image: photo("photo-1522708323590-d24dbb6b0267"),
    text: "Find safe, student-friendly accommodation options before you travel abroad."
  },
  {
    title: "Pre & Post Departure Support",
    image: photo("photo-1436491865332-7a61a109cc05"),
    text: "Get support for visa guidance, travel planning, arrival preparation, and early settling-in questions."
  },
  {
    title: "Enrollment & Visa Assistance",
    image: photo("photo-1507537297725-24a1c029d3ca"),
    text: "Complete university onboarding, document checks, visa filing, and formalities with confidence."
  }
];

export const destinations = [
  {
    country: "USA",
    image: photo("photo-1564659907532-6b5f98c8e70f"),
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
    image: photo("photo-1467269204594-9661b134dd2b"),
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
    image: photo("photo-1491553895911-0055eca6402d"),
    text: "Explore Europe for affordable education, cultural exposure, specialized programs, and career mobility across diverse economies."
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
    image: photo("photo-1523580846011-d3a5bc25702b"),
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
    image: photo("photo-1552664730-d307ca884978"),
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
    image: photo("photo-1519389950473-47ba0277781c"),
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
    image: photo("photo-1513635269975-59663e0ac1ad"),
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
    image: photo("photo-1551836022-d5d88e9218df"),
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
    image: photo("photo-1523240795612-9a054b0db644"),
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
    image: photo("photo-1506973035872-a4ec16b8e8d9"),
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
    image: photo("photo-1560264280-88b68371db39"),
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
    image: photo("photo-1491553895911-0055eca6402d"),
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
    image: photo("photo-1502602898657-3e91760cbb34"),
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
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || "91949998351";
  const cleaned = number.replace(/\D/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}
