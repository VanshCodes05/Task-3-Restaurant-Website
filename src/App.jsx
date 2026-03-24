const categories = [
  'North Indian',
  'South Indian',
  'Indo-Chinese Veg',
  'Main Course',
  'Desserts',
]

const menuItems = [
  {
    name: 'Pure Veg Indian Thali',
    description: 'Traditional Indian thali with dal, seasonal sabzi, rice, roti, chutneys, and dessert in pure veg style.',
    price: '₹429',
    rating: '4.9',
    image: '/images/pure-veg-indian-thali.png',
  },
  {
    name: 'Paneer Butter Masala',
    description: 'Velvety tomato-cashew gravy with soft paneer cubes and delicate butter finish.',
    price: '₹329',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Dal Makhani Royale',
    description: 'Slow-cooked whole black lentils in rich buttery cream sauce with smoky depth.',
    price: '₹299',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Veg Manchurian',
    description: 'Crispy vegetable dumplings tossed in premium Indo-Chinese garlic soy glaze.',
    price: '₹269',
    rating: '4.6',
    image: '/images/veg-manchurian-premium.png',
  },
  {
    name: 'Veg Hakka Noodles',
    description: 'Wok-tossed noodles with vegetables, sauces, and bold Indo-Chinese flavor.',
    price: '₹249',
    rating: '4.5',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Masala Dosa Supreme',
    description: 'Golden crisp dosa with potato masala, coconut chutney, and temple-style sambar.',
    price: '₹219',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Maharaja Veg Thali',
    description: 'Royal assortment of paneer curry, dal, vegetables, rice, breads, and dessert.',
    price: '₹429',
    rating: '4.4',
    image: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Saffron Kulfi Sundae',
    description: 'House-made kulfi, nuts, rose syrup, and crunchy praline topping.',
    price: '₹179',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80',
  },
]

const offers = [
  { title: 'Family Meals', text: 'Complete family packs for 4-6 members at special value prices.' },
  { title: 'Combo Offers', text: 'Paneer, thali, and dessert pairings designed for premium veg dining.' },
  { title: 'Festival Offers', text: 'Seasonal festive menus with limited-time discounts and sweets.' },
  { title: 'Kids Meals', text: 'Balanced mini meals with fun plating and mild spice options.' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80',
]

function Wave({ fill = '#fff7e7' }) {
  return (
    <div className="wave-divider">
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill={fill}
          d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,112C672,128,768,128,864,117.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,140L1392,140C1344,140,1248,140,1152,140C1056,140,960,140,864,140C768,140,672,140,576,140C480,140,384,140,288,140C192,140,96,140,48,140L0,140Z"
        />
      </svg>
    </div>
  )
}

function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="mb-10 text-center">
      <h2 className={`text-3xl font-extrabold md:text-4xl ${light ? 'text-white' : 'text-zinc-900'}`}>{title}</h2>
      <p className={`mx-auto mt-3 max-w-2xl ${light ? 'text-zinc-300' : 'text-zinc-600'}`}>{subtitle}</p>
    </div>
  )
}

function App() {
  return (
    <div className="overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-100 bg-[#fffdf8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#home" className="font-display text-lg font-bold tracking-wide text-amber-700">
            Royal Spice Restaurant
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            <a href="#menu" className="transition hover:text-emerald-700">Menu</a>
            <a href="#specials" className="transition hover:text-emerald-700">Specials</a>
            <a href="#gallery" className="transition hover:text-emerald-700">Gallery</a>
            <a href="#about" className="transition hover:text-emerald-700">About</a>
            <a href="#contact" className="transition hover:text-emerald-700">Contact</a>
          </nav>
          <a
            href="tel:7895745198"
            className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300"
          >
            Call Now
          </a>
        </div>
      </header>

      <main id="home" className="pt-28 text-zinc-900">
        <div className="no-scrollbar mx-auto -mb-2 flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 md:hidden">
          {['Menu', 'Specials', 'Gallery', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="shrink-0 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700"
            >
              {item}
            </a>
          ))}
        </div>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:grid-cols-2 md:px-8">
          <div>
            <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-sm text-amber-700">
              Luxury Pure Vegetarian Dining In Roorkee
            </span>
            <h1 className="font-display mt-5 text-4xl font-black leading-tight md:text-6xl">
              Experience the Taste of Royalty
            </h1>
            <p className="mt-5 max-w-xl text-zinc-600">
              Discover handcrafted vegetarian classics and modern gourmet favorites, served with five-star presentation and unforgettable flavor.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-amber-400 px-7 py-3 font-bold text-zinc-900 transition hover:bg-amber-300">
                Order Now
              </a>
              <a href="#menu" className="rounded-full border border-amber-300 px-7 py-3 font-bold text-amber-700 transition hover:border-emerald-600 hover:text-emerald-700">
                View Menu
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/pure-veg-indian-thali.png"
              alt="Premium pure veg indian thali platter"
              className="depth-card card-shadow h-[470px] w-full rounded-[28px] object-cover"
              fetchPriority="high"
              onError={(e) => {
                e.currentTarget.src =
                  '/images/pure-veg-indian-thali.png'
              }}
            />
            <div className="glass-card floating absolute -left-2 top-8 rounded-2xl px-5 py-4 text-zinc-900 card-shadow md:-left-6">
              <p className="mb-1 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-700">PURE VEG</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Chef Special</p>
              <p className="font-display text-xl font-black">Pure Veg Indian Thali</p>
              <p className="text-sm text-zinc-700">Starting at ₹429</p>
            </div>
          </div>
        </section>
        <Wave fill="#fff7e7" />
      </main>

      <section className="cream-section px-4 py-12 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="hover-lift rounded-full border border-amber-300/60 bg-white/90 px-6 py-3 text-sm font-semibold text-zinc-800 card-shadow"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="cream-section px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Signature Menu"
            subtitle="From royal Indian platters to gourmet veg signatures, every dish is curated for flavor, hygiene, and elegant presentation."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {menuItems.map((item) => (
              <article key={item.name} className="hover-lift depth-card overflow-hidden rounded-3xl bg-white card-shadow">
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="h-52 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-zinc-900">{item.name}</h3>
                    <span className="text-sm font-semibold text-emerald-600">★ {item.rating}</span>
                  </div>
                  <p className="text-sm text-zinc-600">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xl font-extrabold text-orange-600">{item.price}</p>
                    <a href="#contact" className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
                      Order
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="specials" className="bg-gradient-to-br from-[#1d241d] to-[#121812] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Special Dishes"
            subtitle="Premium selections crafted for celebrations, gatherings, and unforgettable dining moments."
            light
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="depth-card overflow-hidden rounded-3xl border border-white/15 bg-white/5">
              <img
                src="/images/nawabi-pure-veg-indian-thali.png"
                alt="Nawabi pure veg indian thali"
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-amber-300">Nawabi Pure Veg Indian Thali</h3>
                <p className="mt-3 text-zinc-300">A complete premium veg thali with paneer preparation, dal, vegetables, soft breads, aromatic rice, and dessert.</p>
              </div>
            </article>
            <article className="depth-card overflow-hidden rounded-3xl border border-white/15 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1631452180539-96aca7d48617?auto=format&fit=crop&w=1800&q=80"
                alt="Royal paneer and dal platter"
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-amber-300">Royal Paneer & Dal Platter</h3>
                <p className="mt-3 text-zinc-300">A premium combination of paneer curry, dal makhani, artisan breads, fragrant rice, and signature desserts.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Wave fill="#fffdf8" />

      <section className="bg-[#fffdf8] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Exclusive Offers"
            subtitle="Designed for every occasion, from family dinners to festive celebrations."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer) => (
              <article key={offer.title} className="hover-lift depth-card rounded-3xl border border-amber-100 bg-white p-6">
                <h3 className="font-display text-xl font-bold text-zinc-900">{offer.title}</h3>
                <p className="mt-3 text-sm text-zinc-600">{offer.text}</p>
                <a href="#contact" className="mt-5 inline-block text-sm font-bold text-orange-600">
                  Get This Offer
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-gradient-to-br from-[#172117] to-[#0e170f] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Gallery"
            subtitle="A glimpse of our food craftsmanship, ambiance, and premium serving style."
            light
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={image} className={`${index === 0 ? 'md:col-span-2' : ''} overflow-hidden rounded-2xl`}>
                <img src={image} alt={`Royal Spice food and restaurant visual ${index + 1}`} loading="lazy" decoding="async" className="h-56 w-full object-cover transition duration-500 hover:scale-110 md:h-64" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80"
            alt="Chef preparing premium vegetarian cuisine"
            loading="lazy"
            decoding="async"
            className="depth-card card-shadow h-full min-h-[370px] rounded-3xl object-cover"
          />
          <div>
            <h2 className="font-display text-3xl font-extrabold text-zinc-900 md:text-4xl">About Royal Spice Restaurant</h2>
            <p className="mt-4 text-zinc-600">
              Located in Roorkee, Royal Spice Restaurant blends heritage vegetarian Indian flavors with modern culinary presentation.
              Our chefs bring 15+ years of experience in premium hospitality dining.
            </p>
            <p className="mt-4 text-zinc-600">
              We follow strict quality and hygiene standards, source fresh ingredients daily, and maintain consistency
              in every plate served.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-2xl font-black text-orange-600">15+</p>
                <p className="text-sm text-zinc-600">Years chef expertise</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-2xl font-black text-emerald-700">100%</p>
                <p className="text-sm text-zinc-600">Hygienic kitchen standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="dark-section px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-3xl border border-white/10 p-6">
            <h2 className="font-display text-3xl font-extrabold text-white">Contact & Location</h2>
            <p className="mt-4 text-zinc-300">Reach us for orders, table reservations, and catering support.</p>
            <div className="mt-6 space-y-4 text-zinc-200">
              <p>Phone: <a href="tel:7895745198" className="font-semibold text-amber-300 hover:underline">7895745198</a></p>
              <p>Email: <a href="mailto:contact@royalspice.com" className="font-semibold text-amber-300 hover:underline">contact@royalspice.com</a></p>
              <p>Address: Roorkee, Uttarakhand, India</p>
              <a
                href="https://wa.me/917895745198"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-emerald-500 px-5 py-2 font-semibold text-white transition hover:bg-emerald-400"
              >
                Chat on WhatsApp
              </a>
            </div>
            <iframe
              title="Royal Spice Restaurant Location"
              src="https://www.google.com/maps?q=Roorkee%2C%20Uttarakhand&output=embed"
              className="mt-6 h-72 w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="depth-card rounded-3xl border border-white/10 bg-white p-6">
            <h2 className="font-display text-3xl font-extrabold text-zinc-900">Reserve a Table</h2>
            <p className="mt-3 text-zinc-600">Book your dining experience with us.</p>
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-orange-400" />
              <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-orange-400" />
              <input type="date" className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-orange-400" />
              <textarea placeholder="Message" rows="4" className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-orange-400" />
              <button type="submit" className="w-full rounded-full bg-zinc-900 px-6 py-3 font-bold text-white transition hover:bg-emerald-600">
                Submit Reservation
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black px-4 py-10 text-zinc-200 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold text-amber-300">Royal Spice Restaurant</p>
            <p className="mt-2 text-sm text-zinc-400">Premium flavors. Trusted quality. Memorable experiences.</p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Subscribe with email"
              className="flex-1 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm outline-none transition focus:border-amber-300"
            />
            <button type="submit" className="rounded-full bg-amber-400 px-5 py-2 text-sm font-bold text-zinc-900 transition hover:bg-amber-300">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 text-sm">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-300">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-300">Facebook</a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-amber-300">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
