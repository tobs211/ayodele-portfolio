import { useEffect, useState } from 'react';
import './App.css';

const heroIntro = 'Hi, I’m Ayodele Oluwatobiloba — a digital marketer and developer who loves the details.';

const profile = {
  name: 'Ayodele Oluwatobiloba',
  email: 'tobiayodele95@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/tobi-ayodele-001284173?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    behance: 'https://www.behance.net/ayodeletobi',
    github: 'https://github.com/tobs211',
    portfolio: 'https://drive.google.com/file/d/1aCBKy2yfugcw7Am4CRBL6_1-1ibQBIUr/view?usp=drivesdk',
    video: 'https://drive.google.com/drive/folders/1hNq1Z7GCgMQDomV0xG7WSUE6_L3P8p2y',
    videoCover: 'https://youtu.be/D8rPUq1u3UI?si=xqjSqFJDnm1IsBtp',
  },
};

const projects = [
  {
    number: '01',
    name: 'Launchpad',
    type: 'SaaS dashboard',
    description:
      'A focused analytics workspace that turns product data into clear, actionable insights.',
    stack: ['React', 'TypeScript', 'Node.js'],
    className: 'launchpad',
    link: '',
  },
  {
    number: '02',
    name: 'Fieldnotes',
    type: 'E-commerce',
    description:
      'A fast, accessible storefront for an independent outdoor gear brand.',
    stack: ['Next.js', 'Tailwind CSS', 'Shopify'],
    className: 'fieldnotes',
    link: 'https://docs.google.com/document/d/1et4EHVuO5HAX745JMJwA8vLbNoJyCdFg1ilMHJAljh8/edit?usp=sharing',
  },
  {
    number: '03',
    name: 'Open source, together',
    type: 'Community platform',
    description:
      'A welcoming place for contributors to discover issues and find their next project.',
    stack: ['React', 'Express', 'PostgreSQL'],
    className: 'opensource',
    link: '',
  },
];

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'HTML & CSS',
  'Git',
  'REST APIs',
  'Responsive UI',
];

const marketingServices = [
  {
    name: 'Influencer marketing',
    description: 'Creator partnerships, campaign planning, and performance tracking.',
    link: 'https://docs.google.com/document/d/1ao45IVzvEY2v0_13IhQ2uPIWnYgaoQB3EJfEhQPE0vY/edit?usp=sharing',
  },
  {
    name: 'Social media marketing',
    description: 'Platform strategy, content planning, and community growth.',
    link: 'https://docs.google.com/document/d/1nlrMQgGLtfTcYDriegipMs5MGlb1NSTXibIJMECY4dQ/edit?usp=drivesdk',
  },
  {
    name: 'Email marketing',
    description: 'Campaigns and automated journeys that build lasting relationships.',
    link: '',
  },
];

const designProjects = [
  {
    name: 'Product showcase study',
    detail: 'UX research · Figma prototype',
    link: 'https://www.figma.com/design/mHmKuLgvMjj3o9Cz6aQkz4/Untitled?node-id=1-1573',
    embed: 'https://embed.figma.com/design/mHmKuLgvMjj3o9Cz6aQkz4/Untitled?node-id=1-1573&embed-host=share',
  },
  {
    name: 'Mobile app experience',
    detail: 'Interface design · Design system',
    link: 'https://www.figma.com/proto/HURSVYEtnFaj1pSLsw8YCy/STYKE?node-id=352-5&t=r8bsdqh7necBcG79-0&scaling=scale-down&content-scaling=fixed&page-id=307%3A1598&starting-point-node-id=565%3A212&show-proto-sidebar=1',
    embed: 'https://embed.figma.com/proto/HURSVYEtnFaj1pSLsw8YCy/STYKE?node-id=352-5&t=r8bsdqh7necBcG79-0&scaling=scale-down&content-scaling=fixed&page-id=307%3A1598&starting-point-node-id=565%3A212&show-proto-sidebar=1&embed-host=share',
  },
];

const graphicProjects = [
  {
    name: 'Brand identity',
    detail: 'Logo · Visual identity',
    link: profile.links.behance,
    image: 'https://res.cloudinary.com/djfkcfltf/image/upload/v1792768465/WhatsApp_Image_2026-10-23_at_16.13.16_2_jke4tk.jpg',
  },
  {
    name: 'Campaign graphics',
    detail: 'Digital · Social assets',
    link: profile.links.behance,
    image: 'https://res.cloudinary.com/djfkcfltf/image/upload/v1792768465/WhatsApp_Image_2026-10-23_at_16.13.16_1_m0bc6s.jpg',
  },
  {
    name: 'Print design',
    detail: 'Poster · Editorial',
    link: profile.links.behance,
    image: 'https://res.cloudinary.com/djfkcfltf/image/upload/v1792768465/WhatsApp_Image_2026-10-23_at_16.13.16_vrdoqc.jpg',
  },
];

const codeProjects = [
  {
    name: 'GitHub profile',
    detail: 'Browse my repositories, contributions, and code.',
    link: profile.links.github,
  },
];

const websites = [
  { name: 'SwiftDrop', detail: 'Live website', link: 'https://tobs211.github.io/swiftdrop/' },
  { name: 'Noblesse Obligengo', detail: 'Live website', link: 'https://noblesseobligengo.org' },
];

const videoProjects = [
  { name: 'Video portfolio', detail: 'Campaign edits · Motion graphics · Reels', link: profile.links.video },
];

const starterCode = `const developer = {
  name: '${profile.name}',
  role: 'Digital Marketer & Developer',
  focus: [
    'React',
    'TypeScript',
    'great experiences'
  ],
  openToWork: true,
  coffee: true
};`;

function PortfolioLink({ href, children, className = '' }) {
  if (!href) {
    return (
      <span className={`${className} portfolio-link-pending`}>
        {children}<span aria-hidden="true"> ↗</span>
      </span>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  );
}

function ArrowIcon({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.01h2.97v9.33ZM6.45 7.74a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.6h-2.96v-4.54c0-1.08-.02-2.47-1.5-2.47-1.51 0-1.74 1.17-1.74 2.39v4.62H9.18V9.01h2.84v1.28h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.56 1.97 3.56 4.53v5.04Z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [editorCode, setEditorCode] = useState(starterCode);
  const [typedIntro, setTypedIntro] = useState('');
  const bookingDetails = 'Choose a date and time that works for you. Add a Google Meet video conference before saving to send the invitation.';
  const calendarBookingUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: 'TEMPLATE',
    text: `Book a call with ${profile.name}`,
    details: bookingDetails,
    add: profile.email,
  })}`;
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedIntro(heroIntro);
      return undefined;
    }

    const characters = Array.from(heroIntro);
    let index = 0;
    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedIntro(characters.slice(0, index).join(''));

      if (index >= characters.length) {
        window.clearInterval(typingTimer);
      }
    }, 24);

    return () => window.clearInterval(typingTimer);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const editorLineCount = editorCode.split('\n').length;
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label={`${profile.name}, home`}>
          <span className="wordmark-icon">t</span>
          <span>tobs<span className="wordmark-period">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#stack" onClick={closeMenu}>Tech stack</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={toggleTheme}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M9 18h6m-5 3h4m-6.2-6.2a7 7 0 1 1 8.4 0c-.9.7-1.2 1.3-1.2 2.2h-6c0-.9-.3-1.5-1.2-2.2Z" />
            <path d="M12 2v2m8 8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 5l1.4 1.4" />
          </svg>
        </button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="availability"><span /> Available for new opportunities</p>
            <p className="hero-kicker" aria-label={heroIntro}>
              <span className="hero-kicker-typed" aria-hidden="true">{typedIntro}</span>
            </p>
            <h1>I build for<br />the <span>real world.</span></h1>
            <p className="hero-description">
              With over 7 years of experience in tech marketing,
              I have worked with businesses and brands to develop marketing strategies, 
              strengthen their digital presence, reach target audiences, 
              and drive business growth. I combine technology, creativity, 
              and data-driven marketing approaches to build brand awareness, 
              generate leads, improve customer engagement, and deliver measurable results.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-red" href={calendarBookingUrl} target="_blank" rel="noreferrer">
                Book a call
              </a>
            </div>
            <div className="hero-meta">
              <span><i className="meta-icon">⌘</i> Front-end &amp; full-stack</span>
              <span><i className="meta-icon">⌖</i> Working worldwide</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Code editor preview">
            <div className="editor-window">
              <div className="editor-bar">
                <div className="window-controls"><i /><i /><i /></div>
                <span>about.tsx</span>
                <span className="editor-status"><i /> editable</span>
                <button className="editor-reset" type="button" onClick={() => setEditorCode(starterCode)}>
                  Reset
                </button>
              </div>
              <div className="editor-content">
                <div className="line-numbers" aria-hidden="true">
                  {Array.from({ length: editorLineCount }, (_, index) => (
                    <span key={index}>{index + 1}</span>
                  ))}
                </div>
                <textarea
                  aria-label="Editable code sample"
                  className="editor-code-input"
                  spellCheck="false"
                  autoCapitalize="off"
                  autoComplete="off"
                  value={editorCode}
                  onChange={(event) => setEditorCode(event.target.value)}
                />
              </div>
              <div className="editor-footer"><span>UTF-8</span><span>TypeScript React</span><span>Ln {editorLineCount}, Col 1</span></div>
            </div>
            <div className="floating-code-chip"><span className="chip-pulse" /> shipping clean code</div>
            <div className="visual-coordinate">37° 46&apos; 49.2&quot; N &nbsp; 122° 25&apos; 09.8&quot; W</div>
          </div>
          <div className="hero-index">01 / INTRODUCTION</div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="section-label">A few selected projects <span>↘</span></p>
              <h2>Made to work.<br /><span>Made to matter.</span></h2>
            </div>
            <p className="section-summary">
              A mix of things I&apos;ve designed, built, and learned from. Each one starts
              with a real problem and ends with a useful product.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a
                  className={`project-preview ${project.className}`}
                  href={project.link || '#contact'}
                  target={project.link ? '_blank' : undefined}
                  rel={project.link ? 'noreferrer' : undefined}
                  aria-label={`View ${project.name} project`}
                >
                  <div className="preview-top"><span>{project.number} / SELECTED PROJECT</span><ArrowIcon diagonal /></div>
                  {project.className === 'launchpad' && (
                    <div className="dashboard-mock">
                      <div className="mock-sidebar"><b>l.</b><i /><i /><i /><i /></div>
                      <div className="mock-main">
                        <div className="mock-heading"><span>Overview</span><i>Last 30 days⌄</i></div>
                        <div className="mock-metrics"><span>Revenue<strong>$48,290</strong><em>↑ 12.8%</em></span><span>Active users<strong>8,549</strong><em>↑ 8.2%</em></span></div>
                        <div className="chart-area"><i /><i /><i /><i /><i /><i /><i /><svg viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 82 C42 76 48 46 90 57 S142 70 180 38 S233 55 270 25 S326 42 365 15 S390 20 400 8" /></svg></div>
                      </div>
                    </div>
                  )}
                  {project.className === 'fieldnotes' && (
                    <div className="store-mock">
                      <div className="store-nav"><b>FIELDNOTES®</b><span>Equipment for the long way round.</span><i>MENU&nbsp; +</i></div>
                      <div className="store-copy"><small>BUILT FOR OUT THERE</small><strong>Go where<br />you feel alive.</strong><span>EXPLORE THE COLLECTION&nbsp; ↗</span></div>
                      <div className="store-sun" />
                      <div className="store-mountain mountain-back" /><div className="store-mountain mountain-front" />
                      <span className="store-caption">FIELD KIT 2025 — 01</span>
                    </div>
                  )}
                  {project.className === 'opensource' && (
                    <div className="terminal-mock">
                      <div className="terminal-title"><span>●</span> git commit -m &quot;make something useful&quot;</div>
                      <div className="terminal-body">
                        <span className="terminal-muted">~/open-source/community</span>
                        <p><b>$</b> npm run build</p>
                        <span className="terminal-success">✓ compiled successfully</span>
                        <span className="terminal-muted">Build completed in 1.42s</span>
                        <p><b>$</b> <i className="terminal-cursor" /></p>
                      </div>
                    </div>
                  )}
                  <span className="preview-caption">{project.type}</span>
                </a>
                <div className="project-details">
                  <div className="project-title-row">
                    <span className="project-number">{project.number}</span>
                    <h3>{project.name}</h3>
                    {project.className === 'fieldnotes' && (
                      <a className="button button-red project-note-button" href={project.link} target="_blank" rel="noreferrer">
                        Add a note
                      </a>
                    )}
                  </div>
                  <p>{project.description}</p>
                  <div className="project-bottom">
                    <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    {project.className !== 'fieldnotes' && (
                      <a className="project-link" href={project.link || '#contact'} aria-label={`Discuss ${project.name}`}>
                        Discuss project <ArrowIcon diagonal />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="section-label">What I can help with <span>↘</span></p>
              <h2>One partner.<br /><span>Many ways forward.</span></h2>
            </div>
            <p className="section-summary">
              Explore my services and work by discipline. Choose an area to jump to
              examples, specialties, and project links.
            </p>
          </div>
          <div className="service-directory">
            <a className="service-directory-card" href="#digital-marketing">
              <span className="directory-number">01 / MARKETING</span>
              <strong>Full-stack digital marketing</strong>
              <span className="directory-note">Influencer · Social media · Email</span>
              <span className="directory-eye"><EyeIcon /></span>
            </a>
            <a className="service-directory-card" href="#product-design">
              <span className="directory-number">02 / DESIGN</span>
              <strong>Product design</strong>
              <span className="directory-note">UX · UI · Figma case studies</span>
              <span className="directory-eye"><EyeIcon /></span>
            </a>
            <a className="service-directory-card" href="#graphic-design">
              <span className="directory-number">03 / VISUALS</span>
              <strong>Graphic design</strong>
              <span className="directory-note">Branding · Campaigns · Print</span>
              <span className="directory-eye"><EyeIcon /></span>
            </a>
            <a className="service-directory-card" href="#frontend-development">
              <span className="directory-number">04 / DEVELOPMENT</span>
              <strong>Front-end development</strong>
              <span className="directory-note">GitHub · Websites · Web apps</span>
              <span className="directory-eye"><EyeIcon /></span>
            </a>
            <a className="service-directory-card" href="#video-graphics">
              <span className="directory-number">05 / VIDEO</span>
              <strong>Video &amp; motion graphics</strong>
              <span className="directory-note">Video portfolio · Drive</span>
              <span className="directory-eye"><EyeIcon /></span>
            </a>
          </div>
        </section>

        <section className="portfolio-detail section-wrap" id="digital-marketing">
          <div className="detail-heading">
            <div>
              <p className="section-label">01 / Strategy &amp; growth</p>
              <h2>Full-stack digital<br /><span>marketing.</span></h2>
              <a className="button button-red detail-heading-action" href="https://docs.google.com/document/d/19yUn0YMktfRqSz5-Av1e8gt6h97uPhEJr6XAx-5PR8g/edit?usp=drivesdk" target="_blank" rel="noreferrer">
                Click here
              </a>
            </div>
            <p>From creator collaborations to campaigns that bring your audience back, explore the marketing services I offer.</p>
          </div>
          <div className="detail-card-grid">
            {marketingServices.map((service, index) => (
              <article className="detail-card" key={service.name}>
                <span className="detail-card-number">0{index + 1}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                {service.link && (
                  <a className="button button-secondary detail-card-action" href={service.link} target="_blank" rel="noreferrer">
                    Click here
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-detail section-wrap" id="product-design">
          <div className="detail-heading">
            <div><p className="section-label">02 / Research &amp; experience</p><h2>Product <span>design.</span></h2></div>
            <p>Selected UX and interface design work. Add your Figma prototype or case-study URLs to the project links.</p>
          </div>
          <div className="link-project-grid">
            {designProjects.map((project, index) => (
              <article className="link-project-card figma-card" key={project.name}>
                <span className="detail-card-number">FIGMA / 0{index + 1}</span>
                <div className="figma-embed">
                  <iframe
                    src={project.embed}
                    title={`${project.name} Figma preview`}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
                <PortfolioLink className="detail-card-link" href={project.link}>
                  {project.link ? 'Open Figma project' : 'Add Figma link'}
                </PortfolioLink>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-detail section-wrap" id="graphic-design">
          <div className="detail-heading">
            <div><p className="section-label">03 / Identity &amp; visual storytelling</p><h2>Graphic <span>design.</span></h2></div>
            <p>A dedicated home for identity work, campaign graphics, and print pieces. Add image or portfolio links to show your finished work.</p>
          </div>
          <div className="graphic-work-grid">
            {graphicProjects.map((project, index) => (
              <article className={`graphic-work-card graphic-tone-${index + 1}`} key={project.name}>
                <div className="graphic-work-art">
                  <img src={project.image} alt={`${project.name} portfolio cover`} loading="lazy" />
                </div>
                <div className="graphic-work-info"><div><h3>{project.name}</h3><p>{project.detail}</p></div><PortfolioLink className="detail-card-link" href={project.link}>{project.link ? 'View artwork' : 'Add artwork link'}</PortfolioLink></div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-detail section-wrap" id="frontend-development">
          <div className="detail-heading">
            <div><p className="section-label">04 / Code &amp; the open web</p><h2>Front-end <span>development.</span></h2></div>
            <p>Browse source code on GitHub and visit live websites I have created. Replace each project URL with your repository or published site.</p>
          </div>
          <div className="development-work-grid">
            <div className="development-column">
              <div className="subsection-title"><h3>GitHub &amp; code</h3><span>REPOSITORIES</span></div>
              {codeProjects.map((project) => (
                <article className="repo-row" key={project.name}>
                  <span className="repo-icon" aria-hidden="true">&lt;/&gt;</span>
                  <div><h4>{project.name}</h4><p>{project.detail}</p></div>
                  <a className="button button-secondary repo-action" href={project.link} target="_blank" rel="noreferrer">View GitHub</a>
                </article>
              ))}
            </div>
            <div className="development-column">
              <div className="subsection-title"><h3>Live websites</h3><span>VISIT PROJECT</span></div>
              {websites.map((project) => (
                <article className="website-row" key={project.name}>
                  <span className="website-preview" aria-hidden="true"><i /><i /><i /></span>
                  <div><h4>{project.name}</h4><p>{project.detail}</p></div>
                  <a className="button button-secondary repo-action" href={project.link} target="_blank" rel="noreferrer">Visit site</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-detail section-wrap" id="video-graphics">
          <div className="detail-heading">
            <div><p className="section-label">05 / Video &amp; motion</p><h2>Video <span>graphics.</span></h2></div>
            <p>Browse the video portfolio in Drive, or watch the featured video on YouTube.</p>
          </div>
          <div className="video-work-card">
            <a className="video-work-visual" href={profile.links.videoCover} target="_blank" rel="noreferrer" aria-label="Watch the featured video on YouTube">
              <img src="https://img.youtube.com/vi/D8rPUq1u3UI/hqdefault.jpg" alt="Featured video cover" loading="lazy" />
              <span className="video-play" aria-hidden="true">▶</span>
              <span className="video-work-label">WATCH ON YOUTUBE ↗</span>
            </a>
            {videoProjects.map((project) => (
              <div className="video-work-info" key={project.name}>
                <div><span className="detail-card-number">VIDEO PORTFOLIO</span><h3>{project.name}</h3><p>{project.detail}</p></div>
                <PortfolioLink className="detail-card-link" href={project.link}>{project.link ? 'Open video portfolio' : 'Add Google Drive link'}</PortfolioLink>
              </div>
            ))}
          </div>
        </section>

        <section className="stack-section section-wrap" id="stack">
          <div className="stack-heading">
            <p className="section-label">Tools of the trade <span>↘</span></p>
            <h2>Good tools.<br /><span>Better outcomes.</span></h2>
            <p>I pick the right tool for the job, keep learning, and try not to make things more complicated than they need to be.</p>
          </div>
          <div className="stack-content">
            <div className="stack-terminal">
              <div className="terminal-head"><span>stack.config</span><span>●●●</span></div>
              <div className="stack-code"><span className="syntax-purple">export const</span> toolkit = {'{'}<br />
                {'  '}frontend: <span className="syntax-green">&apos;React + TypeScript&apos;</span>,<br />
                {'  '}backend: <span className="syntax-green">&apos;Node.js&apos;</span>,<br />
                {'  '}styling: <span className="syntax-green">&apos;CSS, built with care&apos;</span>,<br />
                {'  '}mindset: <span className="syntax-green">&apos;keep it maintainable&apos;</span><br />
                {'}'};</div>
            </div>
            <div className="technology-list">
              {technologies.map((technology, index) => (
                <div className="technology-item" key={technology}>
                  <span className="technology-number">0{index + 1}</span>
                  <span>{technology}</span>
                  <ArrowIcon diagonal />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-index">A LITTLE ABOUT ME</div>
          <div className="about-content">
            <p className="section-label">Digital marketing · technology · creative problem-solving</p>
            <h2>Driven by ideas.<br /><span>Built with purpose.</span></h2>
            <div className="about-columns">
              <p>I&apos;m {profile.name}, a full-stack digital marketer with over 7 years of experience working across digital marketing, technology, and creative problem-solving. Throughout my journey, I&apos;ve had the opportunity to work with brands and organizations including Fastest Cakes, GOMYCODE, and Styke, contributing to digital initiatives that connect businesses with their audiences and strengthen their online presence.</p>
              <p>I work best with curious, collaborative people who care about quality and innovation. Whether I&apos;m developing digital products, planning marketing campaigns, or bringing new ideas to life, I bring clear communication, thoughtful execution, and a strong commitment to delivering results.</p>
            </div>
            <a className="about-link" href="#contact">A bit more about working together <ArrowIcon diagonal /></a>
            <div className="profile-social-links" aria-label="Professional profiles">
              <a className="profile-social-link linkedin-link" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="Visit my LinkedIn profile">
                <LinkedInIcon /><span>LinkedIn</span>
              </a>
              <PortfolioLink className="profile-social-link" href={profile.links.behance}>Behance</PortfolioLink>
            </div>
          </div>
          <div className="about-stamp" aria-hidden="true"><span>BUILD<br />WITH<br />CARE</span><i>✳</i></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-topline"><span>HAVE A GOOD ONE IN MIND?</span><span>LET&apos;S TALK ↘</span></div>
          <div className="contact-main">
            <div><p className="section-label">Your next step starts here</p><h2>Let&apos;s make<br /><span>something real.</span></h2></div>
            <div className="contact-action">
              <p>Have a project, a role, or just want to talk through an idea? My inbox is open.</p>
              <a href={`mailto:${profile.email}`} className="button button-light">Say hello <ArrowIcon diagonal /></a>
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
              <PortfolioLink className="portfolio-download-link" href={profile.links.portfolio}>
                View my portfolio
              </PortfolioLink>
            </div>
          </div>
          <div className="contact-bottom"><span>GOOD THINGS START WITH A CONVERSATION.</span><span>↗ 37°46&apos;49.2&quot;N</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home"><span className="wordmark-icon">t</span><span>tobs<span className="wordmark-period">.</span></span></a>
        <span className="footer-note">Designed &amp; built with care.</span>
        <a className="footer-social-link linkedin-icon-link" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="Visit my LinkedIn profile">
          <LinkedInIcon /><span>LinkedIn ↗</span>
        </a>
        <a className="back-to-top" href="#home">Back to top ↑</a>
        <span className="copyright">© 2026 {profile.name}</span>
      </footer>
    </div>
  );
}

export default App;
