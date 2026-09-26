import { useEffect, useRef, useState } from "react";
import {
  profile,
  navLinks,
  stats,
  projects,
  strengths,
  timeline,
  footerCopy,
} from "./data.js";

const icons = {
  microscope: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M8.5 5.5h7M9.5 5.5v3M14.5 5.5v3M6 20h12M9 18l1.2-4M15 18l-1.2-4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </>
  ),
  network: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M6.7 7.4 10.3 16M17.3 7.4 13.7 16M7 6h10" />
    </>
  ),
  pulse: (
    <>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z" />
      <path d="M4 5.5V21M8 7h8M8 11h8" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <>
      <path d="M12 3a9 9 0 0 0-2.85 17.55c.45.08.61-.2.61-.43v-1.52c-2.5.54-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.61.75.08-.58.31-.98.56-1.2-1.96-.22-4.02-.98-4.02-4.36 0-.96.34-1.75.91-2.37-.09-.22-.4-1.12.09-2.34 0 0 .73-.23 2.4.91a8.28 8.28 0 0 1 4.37 0c1.67-1.14 2.4-.91 2.4-.91.49 1.22.18 2.12.09 2.34.57.62.91 1.41.91 2.37 0 3.39-2.06 4.13-4.03 4.35.32.27.61.82.61 1.66v2.45c0 .24.16.52.62.43A9 9 0 0 0 12 3Z" />
    </>
  ),
};

function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function Logo() {
  return (
    <a className="nav__logo" href="#top" aria-label="返回顶部">
      <span className="nav__logo-mark">X</span>
      <span className="nav__logo-text">徐天桐</span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Logo />
        <nav className={`nav__links ${menuOpen ? "is-open" : ""}`} aria-label="主导航" id="site-navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="nav__cta" href="#contact" onClick={() => setMenuOpen(false)}>
            联系我
          </a>
        </nav>
        <button
          className="nav__toggle"
          type="button"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__fallback" />
        <img className="hero__image" src={`${import.meta.env.BASE_URL}hero-bg.png`} alt="" />
        <div className="hero__veil" />
      </div>
      <div className="hero__leaves" aria-hidden="true">
        {["one", "two", "three", "four", "five"].map((leaf) => (
          <svg className={`hero__leaf hero__leaf--${leaf}`} viewBox="0 0 80 140" key={leaf}>
            <path
              className="hero__leaf-shape"
              d="M40 132C17 105 7 73 13 46 18 25 31 12 40 7c9 5 22 18 27 39 6 27-4 59-27 86Z"
            />
            <path className="hero__leaf-vein" d="M40 128C39 88 40 48 40 11M39 92 22 73M40 73l18-21M40 106l17-19M40 55 26 40" />
          </svg>
        ))}
      </div>

      <div className="hero__content container">
        <Reveal className="hero__eyebrow" delay={80}>
          <span className="dot" />
          <span>徐天桐 <span className="hero__eyebrow-divider">/</span> TIANTONG XU</span>
        </Reveal>
        <Reveal className="hero__theme" delay={170} as="h1">
          <span className="hero__theme-word">自然生长，</span>
          <strong className="hero__theme-name">严谨造物。</strong>
        </Reveal>
        <Reveal className="hero__subtitle" delay={280}>
          <p>计算机视觉 <span>·</span> 智能系统 <span>·</span> 把想法做成可用的东西</p>
        </Reveal>
        <Reveal className="hero__lede" delay={370}>
          <p className="hero__motto">{profile.motto}</p>
        </Reveal>
        <Reveal className="hero__actions" delay={460}>
          <a className="button button--primary" href="#work">
            查看作品
            <Icon name="arrow" size={18} />
          </a>
          <a className="button button--ghost" href="#contact">
            联系我
          </a>
        </Reveal>
      </div>

      <div className="hero__side-note" aria-hidden="true">RESEARCH / ENGINEERING / EXPLORATION</div>

      <div className="hero__scroll" aria-hidden="true">
        <span>SCROLL</span>
        <i />
      </div>
    </section>
  );
}

function SectionHeading({ index, kicker, title, lead, align = "left" }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <div className="section-heading__index">{index}</div>
      <div>
        <p className="section-heading__kicker">{kicker}</p>
        <h2 className="section-heading__title">{title}</h2>
        {lead ? <p className="section-heading__lead">{lead}</p> : null}
      </div>
    </Reveal>
  );
}

function Avatar() {
  return (
    <div className="avatar" aria-label={`${profile.name}的个人画像`}>
      <img src={`${import.meta.env.BASE_URL}portrait.png`} alt={`${profile.name}的个人画像`} />
      <span className="avatar__label">{profile.nameLatin}</span>
    </div>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeading
          index="01"
          kicker="About"
          title="关于我"
          lead="一个把好奇心落到代码里的计算机专业本科生。"
        />
        <div className="about__grid">
          <Reveal className="about__visual">
            <Avatar />
            <div className="about__location">
              <Icon name="network" size={16} />
              {profile.locationText}
            </div>
          </Reveal>
          <div className="about__body">
            <Reveal className="about__name">
              <h3>{profile.name}</h3>
              <span>{profile.role}</span>
            </Reveal>
            <Reveal className="about__intro" delay={80}>
              <p>{profile.intro}</p>
              <p>{profile.introSecondary}</p>
            </Reveal>
            <Reveal className="about__contacts" delay={160}>
              <a href={`mailto:${profile.email}`}>
                <Icon name="mail" size={18} />
                {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={18} />
                GitHub
              </a>
            </Reveal>
            <Reveal className="about__stats" delay={240}>
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Reveal className={`project-card project-card--${project.motif}`}>
      <div className="project-card__visual">
        <div className="project-card__art">
          <Motif type={project.motif} />
          <span className="project-card__index">{project.index}</span>
          <span className="project-card__visual-label">{project.visualLabel}</span>
        </div>
      </div>
      <div className="project-card__content">
        <h3>{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Motif({ type }) {
  if (type === "cell") {
    return (
      <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="rgba(159,196,163,0.35)" strokeWidth="1">
          {[
            [210, 180, 70],
            [400, 160, 48],
            [300, 300, 62],
            [470, 290, 38],
            [140, 300, 34],
            [360, 120, 28],
          ].map(([cx, cy, r], index) => (
            <g key={index}>
              <circle cx={cx} cy={cy} r={r} />
              <circle cx={cx} cy={cy} r={r * 0.55} stroke="rgba(236,232,221,0.12)" />
              <circle cx={cx} cy={cy} r={r * 0.16} fill="rgba(159,196,163,0.2)" stroke="none" />
            </g>
          ))}
        </g>
      </svg>
    );
  }

  if (type === "graph") {
    return (
      <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="rgba(212,162,92,0.35)" strokeWidth="1">
          <path d="M120 90 260 180 200 300M260 180l120-70 60 110-60 90M320 250l100 40" />
        </g>
        <g fill="rgba(212,162,92,0.5)">
          {[
            [120, 90],
            [260, 180],
            [200, 300],
            [380, 110],
            [440, 220],
            [380, 310],
            [420, 350],
          ].map(([cx, cy], index) => (
            <circle key={index} cx={cx} cy={cy} r={index === 1 ? 8 : 5} />
          ))}
        </g>
      </svg>
    );
  }

  if (type === "layers") {
    return (
      <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="rgba(135,169,160,0.34)" strokeWidth="1">
          {[90, 160, 230, 300].map((y, index) => (
            <path
              key={index}
              d={`M80 ${y} H520 M80 ${y + 22} H520 M160 ${y} L80 ${y + 22} M360 ${y} L520 ${y + 22}`}
            />
          ))}
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="rgba(183,177,154,0.34)" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <path
            key={index}
            d={`M-40 ${80 + index * 52} C 180 ${40 + index * 54}, 340 ${150 - index * 18}, 640 ${60 + index * 40}`}
          />
        ))}
      </g>
    </svg>
  );
}

function Work() {
  return (
    <section className="work section" id="work">
      <div className="container">
        <SectionHeading
          index="02"
          kicker="Selected Work"
          title="精选项目"
          lead="从研究复现到产品化落地，挑选几个真正投入过时间的项目。"
        />
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="strengths section" id="strengths">
      <div className="container">
        <SectionHeading
          index="03"
          kicker="Strengths"
          title="个人优势"
          lead="不一定什么都做，但做的每一件事，都尽量可验证、可交付。"
        />
        <div className="strengths__grid">
          {strengths.map((item, index) => (
            <Reveal className="strength-card" key={item.title} delay={index * 70}>
              <div className="strength-card__top">
                <span className="strength-card__index">{item.index}</span>
                <span className="strength-card__icon">
                  <Icon name={item.icon} size={24} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="strength-card__detail">{item.detail}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="journal section" id="journal">
      <div className="container">
        <SectionHeading
          index="04"
          kicker="Journal"
          title="日常"
          lead="记录研究和项目里正在发生的小事。"
        />
        <div className="timeline">
          {timeline.map((entry, index) => (
            <Reveal className="timeline__item" key={`${entry.date}-${entry.title}`} delay={index * 60}>
              <div className="timeline__date">{entry.date}</div>
              <div className="timeline__marker" />
              <div className="timeline__card">
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="contact section" id="contact">
      <div className="contact__art" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
          <g fill="none" stroke="rgba(159,196,163,0.16)" strokeWidth="1">
            {Array.from({ length: 18 }).map((_, index) => (
              <circle key={index} cx={160 + index * 88} cy={160 + (index % 5) * 150} r={70 + (index % 4) * 36} />
            ))}
          </g>
        </svg>
      </div>
      <div className="container contact__inner">
        <Reveal className="contact__kicker">
          <span className="dot" />
          {footerCopy.kicker}
        </Reveal>
        <Reveal className="contact__heading" delay={80}>
          <h2>{footerCopy.heading}</h2>
          <p>{footerCopy.subheading}</p>
        </Reveal>
        <Reveal className="contact__actions" delay={160}>
          <a className="button button--light" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={19} />
            {profile.email}
          </a>
          <a className="contact__link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
            <Icon name="arrow" size={17} />
          </a>
        </Reveal>
        <Reveal className="contact__foot" delay={240}>
          <span>{profile.name} © {new Date().getFullYear()}</span>
          <span>{profile.location}</span>
          <span>{profile.availability}</span>
        </Reveal>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Strengths />
        <Journal />
      </main>
      <Footer />
    </>
  );
}
