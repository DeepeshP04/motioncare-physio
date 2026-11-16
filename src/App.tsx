import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  Dumbbell,
  HandHelping,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Phone,
  ShieldCheck,
  Sparkles,
  StretchHorizontal,
  TrendingUp,
  X,
} from 'lucide-react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import {
  educationArticles,
  featuredServices,
  services,
  siteConfig,
  teamMembers,
  testimonials,
} from './siteConfig';

const iconMap = {
  Activity,
  BrainCircuit,
  Dumbbell,
  HandHelping,
  HeartPulse,
  MoveRight,
  ShieldCheck,
  Sparkles,
  StretchHorizontal,
  TrendingUp,
};

function PageLoader() {
  return (
    <div className="loader-overlay" aria-live="polite" aria-busy="true">
      <div className="loader-card">
        <div className="loader-logo" aria-label="MotionCare logo">
          <span className="loader-logo-mark" aria-hidden="true">
            <span />
          </span>
        </div>
        <p className="loader-message">Getting You Back in Motion...</p>
        <div className="loader-progress" role="presentation">
          <span />
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-contact">
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}>
            <Phone size={14} />
            {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`}>
            <Mail size={14} />
            {siteConfig.contact.email}
          </a>
          <span>
            <MapPin size={14} />
            {siteConfig.contact.location}
          </span>
        </div>
        <div className="topbar-meta">
          <span>
            <Clock3 size={14} />
            {siteConfig.contact.hours}
          </span>
          <a href="https://maps.google.com" className="directions-link">
            {siteConfig.contact.directions}
          </a>
          <div className="social-row">
            {siteConfig.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                {link.label.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="MotionCare home">
          <div className="brand-mark">
            <span className="brand-core" />
          </div>
          <div>
            <strong>MotionCare</strong>
            <small>Physiotherapy & Rehab</small>
          </div>
        </Link>

        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/appointment"
            className="btn btn-primary mobile-nav-cta"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment
          </Link>
        </nav>

        <Link to="/appointment" className="btn btn-primary nav-cta" onClick={() => setMobileOpen(false)}>
          Book Appointment
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <div className="brand-mark">
              <span className="brand-core" />
            </div>
            <div>
              <strong>MotionCare</strong>
              <small>Physiotherapy & Rehab</small>
            </div>
          </div>
          <p>
            Personalized physiotherapy and rehabilitation care designed to help you recover with confidence and move better every day.
          </p>
        </div>

        <div>
          <h3>Clinic</h3>
          <ul>
            <li>128 Harbour Avenue, Suite 200</li>
            <li>Vancouver, BC</li>
            <li>Open Monday–Saturday</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}>{siteConfig.contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            <li>{siteConfig.contact.emergency}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 MotionCare Clinic</span>
        <span>Restore Movement. Rebuild Strength. Live Better.</span>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Rehabilitation that moves with you</span>
            <h1>Movement Is Life. Let&apos;s Get You Moving Again.</h1>
            <p>
              Expert physiotherapy and personalized rehabilitation programs designed to help you overcome pain,
              restore mobility, and return to an active lifestyle.
            </p>
            <div className="cta-row">
              <Link to="/appointment" className="btn btn-primary">
                Book an Appointment <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
            <div className="hero-trust">
              <span>
                <Check size={14} /> Personalized care
              </span>
              <span>
                <Check size={14} /> Recovery-focused treatment
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              alt="Physiotherapist assisting a patient"
            />
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-image-card">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
              alt="Patient receiving physiotherapy treatment"
            />
          </div>
          <div className="intro-content">
            <SectionHeading
              eyebrow="Who we are"
              title="Professional physiotherapy rooted in movement, recovery, and trust."
              text="At MotionCare, we help people move with greater ease, confidence, and strength through tailored treatment plans and attentive rehabilitation support."
            />
            <Link to="/about" className="btn btn-secondary inline-btn">
              Discover Our Approach
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Featured services"
            title="Recovery support for every stage of movement."
          />

          <div className="card-grid service-grid">
            {featuredServices.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Activity;
              return (
                <article key={service.title} className="service-card">
                  <div className="icon-badge">
                    <Icon size={22} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services">Learn More</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block alternate-block">
        <div className="container">
          <SectionHeading
            eyebrow="Why MotionCare"
            title="A different kind of care experience."
          />
          <div className="feature-grid three-up">
            <div className="info-card">
              <div className="icon-badge small-icon"><HeartPulse size={18} /></div>
              <h3>Personalized Treatment Plans</h3>
              <p>Every program is tailored to your goals, movement patterns, and recovery stage.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge small-icon"><MoveRight size={18} /></div>
              <h3>Individual Recovery Guidance</h3>
              <p>We coach you through each movement milestone with clear, realistic progressions.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge small-icon"><TrendingUp size={18} /></div>
              <h3>Movement-Focused Rehabilitation</h3>
              <p>Our care is designed to restore strength, mobility, and confidence for everyday life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Our approach"
            title="Three steps to stronger movement."
          />
          <div className="three-step-grid">
            <div className="step-card">
              <span>01</span>
              <h3>Assess</h3>
              <p>Understand your condition, limitations, and movement goals before building a care plan.</p>
            </div>
            <div className="step-card">
              <span>02</span>
              <h3>Recover</h3>
              <p>Develop a personalized treatment and rehabilitation plan that fits your pace and needs.</p>
            </div>
            <div className="step-card">
              <span>03</span>
              <h3>Progress</h3>
              <p>Improve strength, mobility, and functional movement as you move confidently toward recovery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block testimonial-block">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Demo stories from our rehabilitation journey."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="testimonial-card">
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block final-cta-wrap">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">Start your care plan</span>
            <h2>Your Next Chapter Starts with Better Movement.</h2>
          </div>
          <Link to="/appointment" className="btn btn-primary">
            Schedule Your Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">About MotionCare</span>
            <h1>Intentional physiotherapy for meaningful recovery.</h1>
          </div>
          <div className="page-hero-image">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80"
              alt="Clinic team in consultation"
            />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container about-grid">
          <div>
            <SectionHeading eyebrow="Our philosophy" title="We treat movement as the foundation of health." />
          </div>
          <div>
            <p>
              MotionCare was built around the idea that everyone deserves care that feels personal, practical, and empowering.
              We combine patient-centered guidance, thoughtful assessment, and progressive rehabilitation to help people move more freely and live more fully.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block alternate-block">
        <div className="container stacked-cards">
          <div className="info-card wide-card">
            <h3>Our mission</h3>
            <p>
              To support each person through evidence-informed rehabilitation that honors their pace, goals, and quality of life.
            </p>
          </div>
          <div className="info-card wide-card">
            <h3>Our approach</h3>
            <p>
              We focus on understanding the root of pain and movement limitations so each treatment plan feels purposeful and sustainable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading eyebrow="Clinic environment" title="A calm, supportive setting for recovery." />
          <div className="feature-grid two-up">
            <div className="info-card">
              <h3>Patient-centered care</h3>
              <p>We listen carefully, explain clearly, and adapt care to individual needs, comfort, and priorities.</p>
            </div>
            <div className="info-card">
              <h3>Movement-focused treatment</h3>
              <p>Our sessions prioritize functional strength, mobility, confidence, and long-term progress.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block alternate-block team-block">
        <div className="container">
          <SectionHeading eyebrow="Meet the team" title="Guiding recovery with empathy and expertise." />
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <img src={member.image} alt={member.name} />
                <div>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block final-cta-wrap">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">Take the first step</span>
            <h2>Let&apos;s build a plan that moves you forward.</h2>
          </div>
          <Link to="/appointment" className="btn btn-primary">
            Book an Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>Care plans designed around how you live, move, and recover.</h1>
        </div>
      </section>

      <section className="section-block">
        <div className="container service-list-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Activity;
            return (
              <article key={service.title} className="service-detail-card">
                <div className="service-detail-header">
                  <div className="icon-badge">
                    <Icon size={22} />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <div className="service-badges">
                  {service.conditions.map((condition) => (
                    <span key={condition}>{condition}</span>
                  ))}
                </div>
                <div className="service-approach">
                  <strong>Treatment approach</strong>
                  <p>{service.approach}</p>
                </div>
                <Link to="/appointment" className="btn btn-primary btn-small">
                  Book Appointment
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-block final-cta-wrap">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">Ready to begin?</span>
            <h2>Let&apos;s create a recovery plan tailored to you.</h2>
          </div>
          <Link to="/appointment" className="btn btn-primary">
            Schedule Your Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function EducationPage() {
  const categories = ['All articles', ...new Set(educationArticles.map((article) => article.category))];
  const [selectedCategory, setSelectedCategory] = useState('All articles');
  const visibleArticles =
    selectedCategory === 'All articles'
      ? educationArticles
      : educationArticles.filter((article) => article.category === selectedCategory);

  return (
    <div className="page-shell">
      <section className="page-hero small-hero education-hero">
        <div className="container education-hero-content">
          <div className="education-icon">
            <BookOpen size={24} />
          </div>
          <span className="eyebrow">MotionCare patient education</span>
          <h1>Clear guidance for your movement and recovery.</h1>
          <p>
            Explore practical, patient-friendly articles about physiotherapy, everyday movement, and
            rehabilitation. Use them as a starting point for a conversation with your care team.
          </p>
        </div>
      </section>

      <section className="section-block education-list-section">
        <div className="container">
          <SectionHeading
            eyebrow="The MotionCare journal"
            title="Helpful reads for every step of your journey."
            text="General educational resources from MotionCare. Every recovery is different, so speak with a qualified health professional about your individual needs."
          />
          <div className="article-filters" aria-label="Filter articles by topic">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={selectedCategory === category ? 'article-filter active' : 'article-filter'}
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="article-grid">
            {visibleArticles.map((article) => (
              <article key={article.slug} className="article-card">
                <Link to={`/education/${article.slug}`} className="article-image-link" tabIndex={-1} aria-hidden="true">
                  <img src={article.image} alt="" />
                </Link>
                <div className="article-card-content">
                  <div className="article-meta">
                    <span>{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>
                    <Link to={`/education/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p>{article.summary}</p>
                  <Link to={`/education/${article.slug}`} className="article-read-link">
                    Read article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block final-cta-wrap">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">Need personal guidance?</span>
            <h2>Let&apos;s talk about what movement means to you.</h2>
          </div>
          <Link to="/appointment" className="btn btn-primary">
            Book an Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function EducationArticlePage() {
  const { slug } = useParams();
  const article = educationArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="page-shell">
        <section className="section-block">
          <div className="container article-not-found">
            <span className="eyebrow">Article not found</span>
            <h1>We couldn&apos;t find that article.</h1>
            <Link to="/education" className="btn btn-primary">
              Browse patient education
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <article className="education-article">
        <header className="article-header container">
          <Link to="/education" className="article-back-link">
            <ArrowRight size={16} /> Patient Education
          </Link>
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <span className="article-reading-time">{article.readTime}</span>
        </header>
        <div className="article-cover container">
          <img src={article.image} alt="" />
        </div>
        <div className="article-body">
          <p className="article-introduction">{article.introduction}</p>
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <aside className="article-disclaimer">{article.note}</aside>
          <Link to="/appointment" className="btn btn-primary">
            Talk to a physiotherapist <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>We&apos;re here to help you take the next step toward recovery.</h1>
        </div>
      </section>

      <section className="section-block">
        <div className="container contact-grid">
          <div className="contact-panel">
            <div className="contact-item">
              <MapPin size={20} />
              <div>
                <h3>Visit our clinic</h3>
                <p>{siteConfig.contact.location}</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <div>
                <h3>Call us</h3>
                <p>{siteConfig.contact.phone}</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <div>
                <h3>Email</h3>
                <p>{siteConfig.contact.email}</p>
              </div>
            </div>
            <div className="contact-item">
              <CalendarDays size={20} />
              <div>
                <h3>Hours</h3>
                <p>{siteConfig.contact.hours}</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <label>
                Full Name
                <input type="text" placeholder="Your full name" />
              </label>
            </div>
            <div className="form-row two-col">
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="(555) 123-4567" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Message
                <textarea rows={5} placeholder="Tell us how we can help" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function AppointmentPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container booking-copy-wrap">
          <div>
            <span className="eyebrow">Book an appointment</span>
            <h1>Let&apos;s Get You Moving Again.</h1>
            <p>
              Tell us a little about your needs, and our team will help you take the next step towards recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container booking-wrap">
          <form className="appointment-form">
            <div className="form-row two-col">
              <label>
                Patient Full Name
                <input type="text" placeholder="Jane Doe" required />
              </label>
              <label>
                Email Address
                <input type="email" placeholder="jane@example.com" required />
              </label>
            </div>

            <div className="form-row two-col">
              <label>
                Phone Number
                <input type="tel" placeholder="(555) 123-4567" required />
              </label>
              <label>
                Preferred Appointment Date
                <input type="date" required />
              </label>
            </div>

            <div className="form-row two-col">
              <label>
                Reason for Visit
                <select defaultValue="">
                  <option value="" disabled>
                    Select a reason
                  </option>
                  <option>Sports injury</option>
                  <option>Back or neck pain</option>
                  <option>Joint pain</option>
                  <option>Post-surgical recovery</option>
                  <option>Posture concerns</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Treatment Interest
                <select defaultValue="">
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option>Physiotherapy assessment</option>
                  <option>Rehabilitation program</option>
                  <option>Strength & mobility training</option>
                  <option>Neurological rehabilitation</option>
                  <option>Geriatric physiotherapy</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>
                Tell us about your symptoms or goals
                <textarea rows={6} placeholder="Describe your pain, injury, or recovery goal" required />
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Request Appointment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function AppLayout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setIsLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      {isLoading ? <PageLoader /> : null}
      <TopBar />
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/education/:slug" element={<EducationArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="page-root">
      <AppLayout />
    </div>
  );
}
