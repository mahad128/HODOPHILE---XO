import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  Minus,
  Play as PlayIcon,
  Plus,
  X,
} from "lucide-react"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6"

const INSTAGRAM = "https://www.instagram.com/hodophile_xo"
const FACEBOOK = "https://www.facebook.com/share/1dBysR2wjH/"
const WHATSAPP = "https://wa.me/message/IJS2GDYAGWAQI1"
const BOOKING_NUMBER = "923017512670"
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/13126809/13126809-hd_1920_1080_30fps.mp4"
const HERO_POSTER =
  "https://images.pexels.com/videos/13126809/bern-dji-djimini-djimini2-13126809.jpeg?auto=compress&w=1920"

const films = [
  {
    title: "Roads Less Taken",
    place: "Northern Pakistan",
    image:
      "https://images.pexels.com/photos/15916728/pexels-photo-15916728.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85",
    paragraphs: [
      "A Northern Pakistan road trip is about more than reaching a destination. The route north from Islamabad winds through changing valleys, mountain rivers and small towns, turning the drive itself into one of the most memorable parts of travelling in Pakistan.",
      "Take time to explore the landscapes of Naran, Hunza and Skardu at a slower pace. Clear mornings reveal snow-covered peaks, while local markets and roadside tea stops offer a closer look at everyday life in the mountains.",
      "Thoughtful planning makes a big difference on a northern journey. Check seasonal road conditions, allow extra time between stops and pack for changing weather. Travelling with a local guide can make it easier to discover scenic viewpoints and plan a comfortable route.",
      "The best Northern Pakistan tours leave room for unplanned moments: a quiet walk beside the river, a conversation with a local host or one last look at the mountains before sunset. These are the details that make a road less travelled worth remembering.",
    ],
    number: "01",
    className: "film-tall",
  },
  {
    title: "Into the Quiet",
    place: "Garelt Valley",
    image:
      "https://images.pexels.com/photos/35405084/pexels-photo-35405084.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85",
    paragraphs: [
      "A trip through Gilgit-Baltistan’s highlands offers a welcome change of pace from busy city life. In Garelt Valley, green slopes, cool air and mountain views make it easy to slow down and enjoy the journey one moment at a time.",
      "Take time to explore the valley at an unhurried pace. Set out early for a peaceful walk, pause at a viewpoint and leave room to enjoy local food instead of rushing between stops.",
      "For a more comfortable mountain escape, check the weather before travelling and bring layers for cool evenings. Planning transport and accommodation ahead helps you spend more time outdoors and less time figuring out logistics.",
      "The quiet moments often become the highlights: clouds moving across the hills, a walk through the valley and a slow cup of tea at sunset can make a simple trip feel unforgettable.",
    ],
    number: "02",
    className: "",
  },
  {
    title: "Chasing Horizons",
    place: "Hunza Valley",
    image:
      "https://images.pexels.com/photos/35061891/pexels-photo-35061891.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85",
    paragraphs: [
      "A road trip through Hunza is about more than reaching a destination. The route winds through mountain valleys, past rivers and small towns, making the drive itself one of the most memorable parts of travelling in northern Pakistan.",
      "Take time to explore Karimabad and the surrounding valleys. Pause at a mountain viewpoint, enjoy local food and leave room for the unexpected instead of rushing between stops.",
      "Mountain travel rewards good preparation. Check seasonal road conditions, allow extra time between stops and pack for changing weather. A local guide can help you discover scenic viewpoints and plan a comfortable route.",
      "The best journeys leave room for unplanned moments: a quiet walk beside the river, a conversation with a local host or one last look at the mountains before sunset. That is the feeling behind chasing horizons in Hunza.",
    ],
    number: "03",
    className: "",
  },
]

const instagramReels = [
  {
    code: "DIviVClNjfx",
    label: "Travel diary",
  },
  {
    code: "Dei3MaatG4v",
    label: "Camp stories",
  },
  {
    code: "DegSMC2N_lb",
    label: "Mountain mood",
  },
  {
    code: "DeNAI7ItEZR",
    label: "From the road",
  },
  {
    code: "Ddvd7D2NWs9",
    label: "Northern horizons",
  },
]

const packages = [
  {
    name: "Mushkpuri Top",
    subtitle: "Pipeline Track & Nathia Gali",
    duration: "1 Day",
    price: 7999,
    note: "Departure Saturday night",
    places: ["Mushkpuri Top", "Pipeline Track", "Nathia Gali"],
    includes: ["Guided experience", "Group transport"],
    image:
      "https://images.unsplash.com/photo-1653163517210-2e3b56190680?auto=format&fit=crop&w=1000&q=75",
  },
  {
    name: "Sharan Forest",
    subtitle: "Forests, waterfalls & lakes",
    duration: "3 Days",
    price: 18000,
    note: "Limited seats",
    places: ["Manshi Top", "Sharan Waterfall", "Khanpur Dam"],
    includes: [
      "3 Breakfasts",
      "2 Dinners",
      "Transport",
      "Rooms",
      "Tour guide",
      "First aid",
    ],
    image:
      "https://images.unsplash.com/photo-1675410222845-9ed1119cdf3b?auto=format&fit=crop&w=1000&q=75",
  },
  {
    name: "Kumrat",
    subtitle: "Escape. Explore. Experience.",
    duration: "4 Days",
    price: 23999,
    note: "All inclusive",
    places: [
      "Kumrat Forest",
      "Kumrat Waterfall",
      "Kala Chashma",
      "Jahaz Banda",
      "Katora Lake",
      "Kund Banda",
    ],
    includes: [
      "4 Breakfasts",
      "3 Dinners",
      "Transport",
      "Rooms",
      "Tour guide",
      "First aid",
    ],
    image:
      "https://images.unsplash.com/photo-1627670668931-f23550b0f17f?auto=format&fit=crop&w=1000&q=75",
  },
  {
    name: "Fairy Meadows",
    subtitle: "Nanga Parbat view",
    duration: "5 Days",
    price: 30000,
    note: "Nature, adventure, memories",
    places: [
      "Fairy Meadows",
      "Nanga Parbat View",
      "Raikot Bridge",
      "Basa",
      "Tattu Village",
    ],
    includes: [
      "5 Breakfasts",
      "4 Dinners",
      "Transport",
      "Rooms",
      "Tour guide",
      "First aid",
    ],
    image:
      "https://images.unsplash.com/photo-1693749292377-f3809e9d14d3?auto=format&fit=crop&w=1000&q=75",
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  const Icon = diagonal ? ArrowUpRight : ArrowRight
  return <Icon aria-hidden="true" />
}

function Play() {
  return <PlayIcon aria-hidden="true" fill="currentColor" />
}

function SocialIcon({ platform }: { platform: "instagram" | "facebook" | "whatsapp" }) {
  const icons = {
    instagram: FaInstagram,
    facebook: FaFacebookF,
    whatsapp: FaWhatsapp,
  }
  const Icon = icons[platform]
  return <Icon aria-hidden="true" />
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible")
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilm, setActiveFilm] = useState<typeof films[number] | null>(
    null,
  )
  const [scrolled, setScrolled] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(0)
  const [guests, setGuests] = useState(1)
  const pageRef = useRef<HTMLElement>(null)
  const chosenPackage = packages[selectedPackage]
  const bookingMessage = encodeURIComponent(
    `Hi Hodophile, I want to book the ${chosenPackage.name} (${chosenPackage.duration}) package for ${guests} ${
      guests === 1 ? "person" : "people"
    }. Estimated total: PKR ${(chosenPackage.price * guests).toLocaleString()}. Please share the next available departure and booking details.`,
  )
  const bookingLink = `https://wa.me/${BOOKING_NUMBER}?text=${bookingMessage}`

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      setScrolled(window.scrollY > 48)
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0
        pageRef.current?.style.setProperty(
          "--scroll-progress",
          String(progress),
        )
        pageRef.current?.style.setProperty(
          "--hero-shift",
          `${Math.min(window.scrollY * 0.22, 180)}px`,
        )
        const heroProgress = Math.min(window.scrollY / window.innerHeight, 1)
        pageRef.current?.style.setProperty(
          "--hero-copy-shift",
          `${heroProgress * -90}px`,
        )
        pageRef.current?.style.setProperty(
          "--hero-copy-opacity",
          String(1 - heroProgress * 1.25),
        )
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeFilm || menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeFilm, menuOpen])

  useEffect(() => {
    let frame = 0
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        pageRef.current?.style.setProperty("--mouse-x", `${event.clientX}px`)
        pageRef.current?.style.setProperty("--mouse-y", `${event.clientY}px`)
      })
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onPointerMove)
    }
  }, [])

  useEffect(() => {
    packages.forEach(({ image }) => {
      const preload = new Image()
      preload.src = image
    })
  }, [])

  return (
    <main ref={pageRef}>
      <div className="cinematic-intro" aria-hidden="true">
        <div className="intro-mark">
          <span>HODOPHILE</span>
          <i />
          <strong>XO</strong>
        </div>
        <p>A VISUAL JOURNEY BEGINS</p>
      </div>
      <div className="cinema-cursor" aria-hidden="true" />
      <div className="cinema-vignette" aria-hidden="true" />
      <div className="cinema-hud" aria-hidden="true">
        <span className="hud-corner hud-top-left" />
        <span className="hud-corner hud-top-right" />
        <span className="hud-corner hud-bottom-left" />
        <span className="hud-corner hud-bottom-right" />
        <span className="hud-rec">
          <i /> REC
        </span>
        <span className="hud-format">4K · 24 FPS</span>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Hodophile XO home">
          HODOPHILE <span>XO</span>
        </a>
        <div className="nav-links">
          <a href="#films">Journal</a>
          <a href="#story">Story</a>
          <a href="#packages">Packages</a>
          <a href="#journal">Reels</a>
        </div>
        <div className="social-links nav-socials" aria-label="Social media">
          <a className="social-icon-link" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
            <SocialIcon platform="instagram" />
          </a>
          <a className="social-icon-link" href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">
            <SocialIcon platform="facebook" />
          </a>
          <a className="social-icon-link" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <SocialIcon platform="whatsapp" />
          </a>
        </div>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["Journal", "Story", "Packages"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a href="#journal" onClick={() => setMenuOpen(false)}>
          Reels
        </a>
        <div className="social-links mobile-socials" aria-label="Social media">
          <a className="social-icon-link" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
            <SocialIcon platform="instagram" />
          </a>
          <a className="social-icon-link" href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">
            <SocialIcon platform="facebook" />
          </a>
          <a className="social-icon-link" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <SocialIcon platform="whatsapp" />
          </a>
        </div>
      </div>

      <header id="top" className="hero">
        <img
          className="hero-video hero-poster"
          src={HERO_POSTER}
          alt="Mountain road landscape"
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
        />
        <video
          className="hero-video"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="hero-wash" />
        <div className="grain" />
        <div className="video-status">
          <span />
          CINEMATIC JOURNAL · VIDEO
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span /> TRAVEL JOURNALS & VISUAL STORIES
          </p>
          <h1>
            Go where you
            <br />
            <em>feel alive.</em>
          </h1>
          <p className="hero-intro">
            Cinematic stories from roads, mountains, and moments that make the
            world feel a little bigger.
          </p>
          <div className="hero-actions">
            <a href="#films" className="button button-light">
              Explore journal <Arrow />
            </a>
            <button
              className="text-button"
              onClick={() => setActiveFilm(films[0])}
            >
              <span className="mini-play">
                <Play />
              </span>{" "}
              Watch showreel
            </button>
          </div>
        </div>
        <div className="hero-side">
          EST. 2024 <span /> PAKISTAN · WORLDWIDE
        </div>
        <a href="#films" className="scroll-cue">
          SCROLL TO WANDER <i />
        </a>
      </header>

      <section id="films" className="films section scroll-scene cinema-scene">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> SELECTED STORIES
            </p>
            <h2>
              Journal from the <em>road.</em>
            </h2>
          </div>
          <p className="heading-note">
            Small moments. Vast places.
            <br />
            Stories worth keeping.
          </p>
        </Reveal>

        <div className="film-grid">
          {films.map((film, index) => (
            <Reveal className={`film-wrap film-${index + 1}`} key={film.title}>
              <button
                className={`film-card ${film.className}`}
                onClick={() => setActiveFilm(film)}
              >
                <img
                  className="scroll-drift"
                  src={film.image}
                  alt={`${film.place} travel journal`}
                  loading="eager"
                />
                <span className="film-shade" />
                <span className="film-number">{film.number}</span>
                <span className="play-button">
                  <Play />
                </span>
                <span className="film-info">
                  <span>{film.place}</span>
                  <strong>{film.title}</strong>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="story" className="story section scroll-scene cinema-scene">
        <div className="story-photo">
          <img
            className="scroll-drift"
            src="https://images.pexels.com/photos/31839245/pexels-photo-31839245.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Travelers crossing a suspension bridge over a mountain lake in Pakistan"
            loading="eager"
          />
          <span className="photo-stamp">
            34°N
            <br />
            73°E
          </span>
        </div>
        <Reveal className="story-copy">
          <p className="eyebrow">
            <span /> THE STORY
          </p>
          <h2>
            Not all who wander are <em>lost.</em>
          </h2>
          <p className="story-lead">
            Hodophile <i>(n.)</i> — one who loves to travel.
          </p>
          <p>
            I make visual journals about the feeling of being somewhere new. The quiet
            before sunrise, roads that have no names, and the people you meet in
            between.
          </p>
          <p>
            This is my visual journal — an invitation to slow down, look closer,
            and keep moving.
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="line-link"
          >
            Follow the journey <Arrow diagonal />
          </a>
        </Reveal>
      </section>

      <section
        id="packages"
        className="packages section scroll-scene cinema-scene"
      >
        <Reveal className="packages-heading">
          <div>
            <p className="eyebrow">
              <span /> UPCOMING ESCAPES
            </p>
            <h2>
              Pick your next <em>adventure.</em>
            </h2>
          </div>
          <p>
            Curated group trips across Pakistan’s most unforgettable northern
            landscapes.
          </p>
        </Reveal>

        <div className="package-layout">
          <div
            className="package-list"
            role="tablist"
            aria-label="Tour packages"
          >
            {packages.map((tourPackage, index) => (
              <button
                key={tourPackage.name}
                role="tab"
                aria-selected={selectedPackage === index}
                className={`package-tab ${
                  selectedPackage === index ? "active" : ""
                }`}
                onClick={() => setSelectedPackage(index)}
              >
                <span className="package-tab-number">0{index + 1}</span>
                <span>
                  <strong>{tourPackage.name}</strong>
                  <small>{tourPackage.subtitle}</small>
                </span>
                <span className="package-tab-duration">
                  {tourPackage.duration}
                </span>
              </button>
            ))}
          </div>

          <div
            className="package-stage"
            key={chosenPackage.name}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect()
              const x = event.clientX - rect.left
              const y = event.clientY - rect.top
              const normalizedX = x / rect.width - 0.5
              const normalizedY = y / rect.height - 0.5
              event.currentTarget.style.setProperty("--cursor-x", `${x}px`)
              event.currentTarget.style.setProperty("--cursor-y", `${y}px`)
              event.currentTarget.style.setProperty(
                "--tilt-x",
                `${normalizedY * -2.4}deg`,
              )
              event.currentTarget.style.setProperty(
                "--tilt-y",
                `${normalizedX * 2.4}deg`,
              )
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.setProperty("--tilt-x", "0deg")
              event.currentTarget.style.setProperty("--tilt-y", "0deg")
            }}
          >
            <div className="package-cursor-glow" aria-hidden="true" />
            <div className="package-visual">
              <img
                src={chosenPackage.image}
                alt={chosenPackage.name}
                loading="eager"
                decoding="async"
              />
              <div className="package-visual-shade" />
              <span className="package-badge">{chosenPackage.duration}</span>
              <div className="package-visual-copy">
                <p>{chosenPackage.note}</p>
                <h3>{chosenPackage.name}</h3>
                <span>{chosenPackage.subtitle}</span>
              </div>
            </div>

            <div className="booking-panel">
              <div className="booking-topline">
                <span>PACKAGE DETAILS</span>
                <span>PER PERSON</span>
              </div>
              <div className="booking-price">
                <span>PKR</span>
                {chosenPackage.price.toLocaleString()}
              </div>

              <div className="package-detail-block">
                <p>Places we’ll explore</p>
                <div className="place-list">
                  {chosenPackage.places.map((place) => (
                    <span key={place}>{place}</span>
                  ))}
                </div>
              </div>

              <div className="package-detail-block">
                <p>What’s included</p>
                <div className="included-list">
                  {chosenPackage.includes.map((item) => (
                    <span key={item}>
                      <i>
                        <Check aria-hidden="true" />
                      </i>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="booking-calculator">
                <div>
                  <span>TRAVELLERS</span>
                  <div className="guest-control">
                    <button
                      onClick={() =>
                        setGuests((count) => Math.max(1, count - 1))
                      }
                      aria-label="Remove traveller"
                    >
                      <Minus aria-hidden="true" />
                    </button>
                    <strong>{guests.toString().padStart(2, "0")}</strong>
                    <button
                      onClick={() =>
                        setGuests((count) => Math.min(12, count + 1))
                      }
                      aria-label="Add traveller"
                    >
                      <Plus aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="booking-total">
                  <span>ESTIMATED TOTAL</span>
                  <strong>
                    PKR {(chosenPackage.price * guests).toLocaleString()}
                  </strong>
                </div>
              </div>

              <a
                className="booking-button"
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp <Arrow diagonal />
              </a>
              <p className="booking-help">
                Prefer to call? <a href="tel:+923017512670">0301-7512670</a>
                <span> · </span>
                <a href="tel:+923334422671">0333-4422671</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="journal"
        className="journal reels-section section scroll-scene cinema-scene"
      >
        <Reveal className="journal-top">
          <div>
            <p className="eyebrow">
              <span /> FROM @HODOPHILE_XO
            </p>
            <h2>
              Real stories. <em>Real journeys.</em>
            </h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="line-link"
          >
            View profile on Instagram <Arrow diagonal />
          </a>
        </Reveal>
        <div className="reel-grid">
          {instagramReels.map((reel, index) => (
            <Reveal className="reel-reveal" key={reel.code}>
              <article className="instagram-reel">
                <div className="reel-topline">
                  <span>0{index + 1}</span>
                  <span>{reel.label}</span>
                </div>
                <div className="reel-player">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.code}/embed/`}
                    title={`Hodophile Instagram reel ${index + 1}`}
                    loading="eager"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <a
                  href={`https://www.instagram.com/hodophile_xo/reel/${reel.code}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on Instagram <Arrow diagonal />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta scroll-scene cinema-scene">
        <div className="cta-orbit">
          <span>KEEP EXPLORING · KEEP EXPLORING · </span>
        </div>
        <Reveal>
          <p className="eyebrow centered">NEXT DESTINATION</p>
          <h2>
            Let’s get <em>lost.</em>
          </h2>
          <p>
            Follow the journey for new travel journals,
            <br />
            stories, and places worth wandering.
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="button button-dark"
          >
            <SocialIcon platform="instagram" /> Follow @hodophile_xo <Arrow diagonal />
          </a>
        </Reveal>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          HODOPHILE <span>XO</span>
        </a>
        <p>TRAVEL JOURNALS · VISUAL STORIES</p>
        <div>
          <span>© 2026 HODOPHILE XO</span>
          <nav className="social-links footer-socials" aria-label="Social media">
            <a className="social-icon-link" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
              <SocialIcon platform="instagram" />
            </a>
            <a className="social-icon-link" href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">
              <SocialIcon platform="facebook" />
            </a>
            <a className="social-icon-link" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <SocialIcon platform="whatsapp" />
            </a>
          </nav>
        </div>
      </footer>

      {activeFilm && (
        <div
          className="film-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="film-blog-title"
        >
          <div className="film-backdrop" aria-hidden="true">
            <img
              src={activeFilm.image}
              alt={`${activeFilm.place} landscape`}
              loading="eager"
            />
            <div className="film-backdrop-wash" />
          </div>
          <button
            className="modal-close"
            onClick={() => setActiveFilm(null)}
            aria-label="Close preview"
          >
            Close <span>×</span>
          </button>
          <div className="film-scroll-content">
            <header className="film-hero">
              <p className="film-story-kicker">
                {activeFilm.place} <span> / </span> TRAVEL JOURNAL
              </p>
              <h1 id="film-blog-title">{activeFilm.title}</h1>
              <span className="timeline">
                <i />
              </span>
              <p className="film-scroll-cue">SCROLL TO READ THE STORY <i /></p>
            </header>
            <article className="film-blog">
              <header className="film-blog-heading">
                <p className="film-story-number">STORY {activeFilm.number}</p>
                <h2>Discover {activeFilm.place}</h2>
                <p>TRAVEL NOTES BY HODOPHILE XO</p>
              </header>
              <div className="film-blog-copy">
                {activeFilm.paragraphs.map((paragraph, index) => (
                  <Reveal className="film-blog-paragraph" key={index}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
              <a
                className="film-blog-link"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                More stories on Instagram <Arrow diagonal />
              </a>
              <span className="film-story-signoff">
                HODOPHILE XO · TRAVEL JOURNAL
              </span>
            </article>
          </div>
          <div className="modal-grain grain" />
        </div>
      )}
    </main>
  )
}

export default App
