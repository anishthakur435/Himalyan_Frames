import { Film, Service, PricingTier, FAQItem } from '@/types';

export const FILMS: Film[] = [
  {
    id: 'dhauladhars-wake',
    title: 'Dhauladhar’s Wake',
    location: 'Triund, Dharamshala',
    category: 'Travel Film',
    duration: '4m 12s',
    year: '2025',
    coverUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-misty-mountain-landscape-with-forest-and-clouds-41656-large.mp4',
    description: 'A deep atmospheric journey tracking the seasonal transition on the high ridges of the Dhauladhar range. Filmed over 45 days in alpine conditions.',
    roles: ['Director', 'Cinematographer', 'Drone Pilot', 'Colorist'],
    specs: ['RED V-Raptor', 'Atlas Orion Anamorphics', 'DJI Inspire 3'],
    isFeatured: true
  },
  {
    id: 'the-wood-and-stone',
    title: 'The Wood & the Stone',
    location: 'McLeod Ganj, Himachal Pradesh',
    category: 'Resort & Tourism',
    duration: '2m 45s',
    year: '2025',
    coverUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-hotel-with-swimming-pool-and-palms-41716-large.mp4',
    description: 'A refined visual campaign for a boutique luxury resort nestled amongst ancient deodars, integrating slow anamorphic interiors and cinematic dusk drone sweeps.',
    roles: ['Director of Photography', 'Lead Editor', 'Sound Designer'],
    specs: ['Sony FX6', 'Zeiss Supreme Primes', 'DJI Mavic 3 Pro Cine'],
    isFeatured: true
  },
  {
    id: 'prayer-in-the-mist',
    title: 'Prayer in the Mist',
    location: 'Bir Billing & Dharamshala Monasteries',
    category: 'Social Reel Film',
    duration: '1m 15s',
    year: '2025',
    coverUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-misty-forest-pine-trees-aerial-view-4841-large.mp4',
    description: 'A minimalist vertical cinematic essay capturing the spiritual stillness of local monasteries, the sound of fluttering prayers flags, and morning incense.',
    roles: ['Solo Creator', 'Cinematographer', 'Editor'],
    specs: ['Sony FX3', 'Sirui 50mm Anamorphic', 'DJI RS3 Pro'],
    isFeatured: true
  },
  {
    id: 'eighty-kilometers-west',
    title: 'Eighty Kilometers West',
    location: 'Kangra Valley, Himachal Pradesh',
    category: 'Drone Cinematography',
    duration: '3m 05s',
    year: '2024',
    coverUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-with-backpack-hiking-in-the-mountains-aerial-34351-large.mp4',
    description: 'High-speed kinetic drone cinematography tracing free fliers and paragliders catching thermal currents high above the pine canopy of Bir Billing.',
    roles: ['Lead Drone Operator', 'Co-Cinematographer'],
    specs: ['DJI Inspire 3', 'Zenmuse X9-8K Air', 'DJI FPV Drone'],
    isFeatured: false
  },
  {
    id: 'jibhi-winter-story',
    title: 'Jibhi’s Cabin Solitude',
    location: 'Jibhi Valley',
    category: 'Travel Film',
    duration: '3m 40s',
    year: '2024',
    coverUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-snowy-mountain-landscape-with-forest-41662-large.mp4',
    description: 'An editorial visual story capturing snowfall over traditional wooden Himalayan Architecture and riverside quietness in snowy Jibhi.',
    roles: ['Cinematographer', 'Editor', 'Sound Designer'],
    specs: ['Sony FX6', 'Sony GM Prime Lenses', 'Internal ND Filter System'],
    isFeatured: false
  },
  {
    id: 'spiti-empty-skies',
    title: 'Spiti: Empty Skies',
    location: 'Spiti Valley',
    category: 'Tourism Campaign',
    duration: '5m 20s',
    year: '2024',
    coverUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-flying-over-an-alpine-lake-between-rocky-peaks-41618-large.mp4',
    description: 'A grand architectural and natural survey of Key Monastery and the high-altitude cold deserts of Spiti, emphasizing massive scale and ancient ways.',
    roles: ['Director', 'Cinematographer', 'Lead Editor'],
    specs: ['RED V-Raptor', 'Leica R Elmarit Primes', 'DJI Inspire 3'],
    isFeatured: false
  }
];

export const SERVICES: Service[] = [
  {
    id: 'travel-films',
    title: 'Travel & Lifestyle Films',
    priority: 1,
    description: 'Immersive, story-driven narratives designed for active outdoor brands, adventure associations, and travel tourism boards. Focuses on sensory storytelling over static scenic shots.',
    highlight: 'A24-inspired editorial rhythm',
    details: [
      'Complete pre-production scouting & scriptwriting',
      'High-altitude, sub-zero equipment execution capability',
      'Advanced atmospheric sound capture',
      'Full cinematic color grade matching film print stocks'
    ],
    deliverables: [
      '3-5 mins Narrative Explorer Film',
      '60s Cinematic Social Cut',
      'Licensed atmospheric soundscape',
      'High-res film still catalog'
    ]
  },
  {
    id: 'resort-tourism',
    title: 'Resort & Boutique Hotel Stays',
    priority: 2,
    description: 'Sophisticated architecture and experiential assets for luxury mountain retreats, estate properties, and boutique homestays. We trade traditional flat wide shots for intimate deodar-lit memories, misty shadows, and slow motion human-scaled interaction.',
    highlight: 'Focuses on architectural mood & local deodar surroundings',
    details: [
      'Interior lighting optimization matching natural sun arcs',
      'Dusk/Dawn dusk aerial architectural sweeps',
      'Activity, cuisine, and tactile lifestyle showcase',
      'Brand alignment consultation'
    ],
    deliverables: [
      '2-3 mins Premium Resort Experience Film',
      '30s Booking CTA Social Cuts (x2)',
      '30+ Editorial raw-color interior stills'
    ]
  },
  {
    id: 'social-media-reels',
    title: 'Cinematic Vertical Content',
    priority: 3,
    description: 'Premium portrait format (9:16) filmmaking. These are not standard fast-cut trending clips—we produce highly narrative, eye-catching, high-production-value vignettes tailored for authentic audience connection on Instagram, YouTube, and TikTok.',
    highlight: 'Engineered for high engagement & instant mood shift',
    details: [
      '9:16 high-fidelity capture workflow',
      'Fast storytelling hooks without artificial hype',
      'Custom sound-synchronized pacing',
      'Subtitle optimization & clean typography'
    ],
    deliverables: [
      '5x High-grade Cinematic Vignettes (15-45s)',
      'Optimized audio stems representing local natural streams',
      'Custom color grading template'
    ]
  },
  {
    id: 'drone-cinematography',
    title: 'High-Altitude Aerials',
    priority: 4,
    description: 'DGCA compliant professional drone operations. Specialized in dynamic close-tracking of mountain sports, cinematic architecture sweeps, and extreme landscape charting.',
    highlight: 'Inspire 3 Cinema RAW / ProRES capability',
    details: [
      'Fully licensed operating team with safety protocols',
      '4K & 8K high-altitude flight capability',
      'Dynamic FPV close tracking (paragliders, hikers)',
      'Complex weather analysis & wind adaptation'
    ],
    deliverables: [
      'Raw ProRes/CinemaDNG uncompressed reels',
      'Cinematic aerial compilation (2 mins)',
      '3D landscape tracking data upon request'
    ]
  },
  {
    id: 'editing-post-production',
    title: 'Post-Production & Sound Design',
    priority: 5,
    description: 'Professional video assembly, expert color correction targeting Kodak 2383 emulation, and bespoke environmental field-audio mapping.',
    highlight: 'Immersive sound mapping of Himalayan wilderness',
    details: [
      'Multi-cam surgical assembly editing',
      'Advanced Color matching & custom LUT construction',
      'Atmospheric field recording synthesis',
      'Licensed score alignment & licensing licensing rights'
    ],
    deliverables: [
      'Final master print (ProRes 422 HQ)',
      'Subtitled delivery layers',
      'Atmospheric field audio track package'
    ]
  },
  {
    id: 'pre-wedding',
    title: 'Cinematic Pre-Wedding stories',
    priority: 6,
    description: 'Authentic love stories set against dramatic organic backdrops. Strictly avoids luxury wedding ballroom clichés—we seek wind-blown hair, towering pine shadows, and quiet strolls in mountain light.',
    highlight: 'Natural, authentic editorial romance style',
    details: [
      'Location curation matching couple’s vibe',
      'Styling and movement guide (no forced static posing)',
      'Unobtrusive compact film gear capture',
      'Coupled custom visual story script'
    ],
    deliverables: [
      '2-3 mins Eternal Memory Film',
      'Raw footage reel',
      'Selected analog-style portrait prints'
    ]
  },
  {
    id: 'wedding-films',
    title: 'Himalayan Destination Weddings',
    priority: 7,
    description: 'Documentary-style destination wedding storytelling in Himachal Hills. Quiet, emotional snapshots of cultural lineage and natural intimacy, documented with maximum editorial discretion.',
    highlight: 'Non-intrusive documentary filming style',
    details: [
      'Multi-day ceremony tracking log',
      'Ambient audio capture of familial blessings',
      'Candid close-ups and dramatic sunset panoramas',
      'Warm custom color palette'
    ],
    deliverables: [
      '10-15 mins Extended Feature Documentary Film',
      '3 mins Cinematic Highlights Cut',
      'Raw speeches archive'
    ]
  }
];

export const SERVICE_AREAS = [
  { name: 'Dharamshala', description: 'Our basecamp. Home to raw pine forests, rocky stream slopes & high deodar cliffs.' },
  { name: 'McLeod Ganj', description: 'Scenic Tibetan quarters, dramatic monastery silhouettes & mountain mist layers.' },
  { name: 'Bir Billing', description: 'The paragliding capital. Expansive valley flight visual, landing fields, gliders.' },
  { name: 'Palampur', description: 'Verdant terraced tea estates contrast against stark sharp mountain walls.' },
  { name: 'Triund', description: 'High-altitude ridges right under the towering snow walls of Dhauladhars.' },
  { name: 'Manali', description: 'Gushing Beas riverbeds, pine forests, high snow mountain views & Solang valleys.' },
  { name: 'Kasol', description: 'Towering river pines, dense morning fog, wild stream rocks & dramatic shadows.' },
  { name: 'Jibhi', description: 'Primal wood-cabin sanctuaries, cold pristine waterfalls & quiet misty meadows.' },
  { name: 'Spiti Valley', description: 'Extreme high deserts, pristine blue lakes, stark dramatic ancient architectures.' }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'reels-essence',
    name: 'Social Vignette Base',
    tagline: 'Authentic 9:16 narrative loops to elevate mountain resort stay appeals.',
    basePrice: '₹45,000',
    travelCovered: true, // true for local Dharamshala
    includes: [
      '3x Cinematic Vertical Frames (15-30s)',
      'Premium sound-design using local stream audios',
      'Natural-light raw editorial color grade',
      '1 Day shoot in Dharamshala / McLeod Ganj',
      'Delivery in 10 working days'
    ],
    bestFor: 'Mountain retreats, luxury cafes & local boutique lifestyle brands'
  },
  {
    id: 'resort-story',
    name: 'Resort Cinematic Experience',
    tagline: 'A comprehensive visual asset overhaul capturing architecture and local environment mood.',
    basePrice: '₹1,25,000',
    travelCovered: true, // within Kangra district
    includes: [
      '2-3 mins High-grade Experience Film (16:9)',
      '2x Optimized promo clips (9:16)',
      'Aerial Inspire-grade dawn & dusk sweeps',
      'Bespoke script & mountain soundtrack licensing',
      '2 Days shoot (capturing full natural light path)',
      '40+ Edited editorial interior/still photographs'
    ],
    bestFor: 'Boutique eco-resorts, luxury homestays & Himalayan tourism partners'
  },
  {
    id: 'adventure-expeditions',
    name: 'Adventure Narrative Film',
    tagline: 'Extreme expedition tracking, high-altitude campaigns & immersive tourism brand films.',
    basePrice: '₹2,50,000',
    travelCovered: false, // customizable depending on trek altitude and region
    includes: [
      '3-5 mins Mini-Documentary Explorer Film',
      'Fully tailored expedition storytelling & scouting',
      'ProRES/RAW cinema camera configuration',
      'Extreme close-tracking FPV and Inspire drone pilotage',
      'Professional atmospheric sound collection & mixing',
      'Custom Kodak-grain master color grading'
    ],
    bestFor: 'Outdoor gear brands, mountaineering catalogs, and State Tourism Boards'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Logistics',
    question: 'Where are you based, and do you travel for shoots?',
    answer: 'We are based permanently in Dharamshala (McLeod Ganj), Himachal Pradesh. We routinely travel across India—especially high-altitude zones like Spiti, Ladakh, and Uttarakhand. Any travel beyond the Kangra valley is subject to basic travel, boarding, and cargo logistics rates.'
  },
  {
    id: 'faq-2',
    category: 'Creative Philosophy',
    question: 'How do Himalyan Frames differ from standard wedding/commercial filmmakers?',
    answer: 'Our approach is rooted deeply in organic nature-inspired documentary aesthetics. We avoid the clinical, artificial look of heavy setups, bright oversaturated skin glows, or generic wedding video templates. Inspired by A24 and Patagonia, we cherish misty moods, cinematic deodar backdrops, deep organic shadows, and authentic narrative pacing.'
  },
  {
    id: 'faq-3',
    category: 'Post-Production',
    question: 'What is the standard delivery timeline for your films?',
    answer: 'Cinema-grade storytelling requires focused color-grading, custom pacing, and careful multi-channel sound alignment. Social content defaults to 10-15 business days. Complex Resort and Travel Narrative films require 4 to 6 weeks. Fast-tracked drafts can be request-contracted.'
  },
  {
    id: 'faq-4',
    category: 'Weather & Altitude',
    question: 'How do you handle unpredictable weather or extreme altitude risks?',
    answer: 'We thrive in extreme environments. Our professional gear is fully weather-sealed, and we maintain lightweight dual-power battery reserves certified for sub-zero high altitude shooting. In the event of extreme monsoons or heavy snow blocks, we carry built-in creative contingencies, using the foggy mist or snowy silence to capture cinematic magic.'
  },
  {
    id: 'faq-5',
    category: 'Permissions',
    question: 'Are drone permissions and filming clearances covered?',
    answer: 'We operate fully DGCA-compliant equipment. For heavy flight operations, we assist in securing relevant Indian air permissions in green/yellow zones. Filming clearances for national parks, private estate trails, or religious structures are typically arranged in collaboration with the booking client.'
  }
];
