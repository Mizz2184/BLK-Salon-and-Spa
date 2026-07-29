import { ServiceItem, PackageItem, MembershipTier, LuxuryRoom, AwardBadge, ProductItem } from '../types';

export const SALON_SERVICES: ServiceItem[] = [
  // Styling
  {
    id: 'styling-1',
    name: 'Clipper Cut',
    price: '$35+',
    category: 'Styling',
    description: 'Precision clipper hair cut tailored to your head shape and desired aesthetic.'
  },
  {
    id: 'styling-2',
    name: 'Kids Cut (Under 10)',
    price: '$30+',
    category: 'Styling',
    description: 'Gentle, stylish hair cut for children under age 10.'
  },
  {
    id: 'styling-3',
    name: 'Signature Haircut',
    price: '$65+',
    category: 'Styling',
    description: 'Standard cuts, long layers, custom shaping, and blowout.',
    popular: true
  },
  {
    id: 'styling-4',
    name: 'Designer Haircut',
    price: '$75+',
    category: 'Styling',
    description: 'Specialty cuts, shags, wolf cuts, intense texturizing and specialized styling.'
  },
  {
    id: 'styling-5',
    name: 'Curly/Coily Cut',
    price: '$80+',
    category: 'Styling',
    description: 'Specialized dry/wet curl cutting technique for all customers 3A & up.'
  },
  {
    id: 'styling-6',
    name: 'Wash & Style',
    price: '$65+',
    category: 'Styling',
    description: 'Nourishing shampoo wash, conditioning, and professional blowout style.'
  },
  {
    id: 'styling-7',
    name: 'Make-Up Application',
    price: '$95+',
    category: 'Styling',
    description: 'Full face professional glam makeup application customized for your event.'
  },
  {
    id: 'styling-8',
    name: 'Formal Style',
    price: '$85+',
    category: 'Styling',
    description: 'Special occasion updo, formal curls, or red-carpet styling.'
  },
  {
    id: 'styling-9',
    name: 'Formal Style & Make-Up',
    price: '$185+',
    category: 'Styling',
    description: 'Complete beauty package combining formal hair styling and full glam makeup.'
  },

  // Lash & Brow
  {
    id: 'lash-1',
    name: 'Eyebrow Lamination',
    price: '$65+',
    category: 'Lash & Brow',
    description: 'Restructures brow hairs for a fuller, sleek, set shape lasting weeks.',
    popular: true
  },
  {
    id: 'lash-2',
    name: 'Lash Lift & Tint',
    price: '$85+',
    category: 'Lash & Brow',
    description: 'Natural lash curling treatment combined with dark mascara-effect tint.'
  },
  {
    id: 'lash-3',
    name: 'Lash Removal',
    price: '$35+',
    category: 'Lash & Brow',
    description: 'Gentle, professional extension removal maintaining natural lash health.'
  },
  {
    id: 'lash-4',
    name: 'Lash Extensions',
    price: '$150',
    category: 'Lash & Brow',
    description: 'Full customized eyelash extension set for length, curl, and volume.'
  },
  {
    id: 'lash-5',
    name: 'Lash Refill',
    price: '$65+',
    category: 'Lash & Brow',
    description: 'Maintain your lush extension set with 2-3 week fill-ins.'
  },

  // Color
  {
    id: 'color-1',
    name: 'Single Process Color',
    price: '$85+',
    category: 'Color',
    description: 'All-over single shade root touch up or full coverage color application.'
  },
  {
    id: 'color-2',
    name: 'Face Framing Highlights',
    price: '$114+',
    category: 'Color',
    description: 'Money piece or face framing dimension to brighten your complexion.'
  },
  {
    id: 'color-3',
    name: 'Full Highlight',
    price: '$130+',
    category: 'Color',
    description: 'Standard full head foil highlights for bright, multidimensional blonde.',
    notes: 'Base pricing starts at $130+ to $185+ depending on hair density & technique.'
  },
  {
    id: 'color-4',
    name: 'Babylights',
    price: '$130+',
    category: 'Color',
    description: 'Ultra-fine delicate woven highlights for a soft, natural sun-kissed blend.'
  },
  {
    id: 'color-5',
    name: 'Ombre / Balayage',
    price: '$195+',
    category: 'Color',
    description: 'Hand-painted dimensional color transition with seamless root shadow.',
    popular: true
  },
  {
    id: 'color-6',
    name: 'Corrective Color',
    price: '$249+',
    category: 'Color',
    description: 'Major shade transformations, box dye removal, or color repair.',
    notes: 'Requires mandatory in-salon consultation before booking.'
  },

  // Treatments
  {
    id: 'treatment-1',
    name: 'Customized Treatment',
    price: '$15+',
    category: 'Treatments',
    description: 'Targeted hair mask or moisture injection tailored to your hair condition.'
  },
  {
    id: 'treatment-2',
    name: 'Ultimate Repair Treatment',
    price: '$25+',
    category: 'Treatments',
    description: 'Deep bond-rebuilding and structural repair formula.',
    notes: 'Optional Add-on: Scalp Massage for $10'
  },
  {
    id: 'treatment-3',
    name: 'Scalp Facial & Blow Out',
    price: '$70+',
    category: 'Treatments',
    description: 'Exfoliating scalp detox ritual followed by a shiny, bouncy blowout.',
    popular: true,
    notes: 'Optional Add-on: Mini Facial for $15'
  },
  {
    id: 'treatment-4',
    name: 'Express Keratin Blow Out',
    price: '$105+',
    category: 'Treatments',
    description: 'Fast-acting smoothing treatment reducing frizz and cut blow-dry time in half.'
  },
  {
    id: 'treatment-5',
    name: 'Full Keratin Complex',
    price: '$280+',
    category: 'Treatments',
    description: 'Long-lasting smoothing system sealing hair cuticle for up to 5 months.'
  },
  {
    id: 'treatment-6',
    name: 'Smooth Filler Treatment',
    price: '$135+',
    category: 'Treatments',
    description: 'Deep protein and lipid restructuring treatment for silky hair.'
  },

  // Hair Extensions
  {
    id: 'ext-1',
    name: 'Extension Removal',
    price: '$65+',
    category: 'Extensions',
    description: 'Safe extension removal avoiding any tension or natural hair damage.'
  },
  {
    id: 'ext-2',
    name: 'Clip Ins / Halo Installation',
    price: '$130+',
    category: 'Extensions',
    description: 'Custom fitting, blending, and styling for clip-in or halo extension pieces.'
  },
  {
    id: 'ext-3',
    name: 'Hair Volumizers',
    price: '$85+',
    category: 'Extensions',
    description: 'Crown volumizing pieces and density boosters.'
  },
  {
    id: 'ext-4',
    name: 'Invisible Bead Extensions (IBE)',
    price: '$349+',
    category: 'Extensions',
    description: 'Hand-tied hidden bead method for maximum comfort and zero scalp tension.',
    popular: true
  },
  {
    id: 'ext-5',
    name: 'Tape-In Extensions',
    price: '$549+',
    category: 'Extensions',
    description: 'Seamless flat tape-in method providing full coverage and thickness.'
  },
  {
    id: 'ext-6',
    name: 'Keratin / K-Tip Extensions',
    price: '$699+',
    category: 'Extensions',
    description: 'Individual keratin bond method with 360-degree natural movement.',
    notes: 'All extension packages include premium hair & installation. Lengths up to 30" available in various curl patterns & shades.'
  },

  // Facials
  {
    id: 'facial-1',
    name: 'Mini Facial',
    price: '$80',
    category: 'Facials',
    description: '30-minute refreshing facial cleaning, light exfoliation, and hydration mask.'
  },
  {
    id: 'facial-2',
    name: 'Vaginal / Booty / Back Facial',
    price: '$75',
    category: 'Facials',
    description: 'Specialized targeted body skincare treatment for pore clarifying and skin smoothing.'
  },
  {
    id: 'facial-3',
    name: 'Signature Facial',
    price: '$140',
    category: 'Facials',
    description: '60-minute deep cleansing, custom mask, neck & shoulder massage, and tailored serums.',
    popular: true
  },
  {
    id: 'facial-4',
    name: 'Chemical Peel',
    price: '$100+',
    category: 'Facials',
    description: 'Clinical-grade skin resurfacing peel for texture, hyperpigmentation, and tone.'
  },
  {
    id: 'facial-5',
    name: 'Microdermabrasion',
    price: '$75',
    category: 'Facials',
    description: 'Diamond-tip exfoliation removing dead skin cells to reveal glowing skin.'
  },

  // Waxing
  {
    id: 'wax-1',
    name: 'Eyebrow Wax',
    price: '$15',
    category: 'Waxing',
    description: 'Precise brow shaping with gentle botanical wax.'
  },
  {
    id: 'wax-2',
    name: 'Chin / Lip Wax',
    price: '$10',
    category: 'Waxing',
    description: 'Quick hair removal for upper lip or chin areas.'
  },
  {
    id: 'wax-3',
    name: 'Under Arms Wax',
    price: '$20',
    category: 'Waxing',
    description: 'Smooth, long-lasting hair removal for underarms.'
  },
  {
    id: 'wax-4',
    name: 'Bikini Wax',
    price: '$55',
    category: 'Waxing',
    description: 'Clean bikini line hair removal.'
  },
  {
    id: 'wax-5',
    name: 'Brazilian Wax',
    price: '$65',
    category: 'Waxing',
    description: 'Complete front to back smooth hair removal.',
    popular: true
  },
  {
    id: 'wax-6',
    name: 'Bikini Line + Half Arm',
    price: '$40',
    category: 'Waxing',
    description: 'Combo package for upper arm/lower arm and bikini line.'
  },
  {
    id: 'wax-7',
    name: 'Full Chest / Full Stomach',
    price: '$65',
    category: 'Waxing',
    description: 'Complete front torso wax treatment.'
  },
  {
    id: 'wax-8',
    name: 'Full Arm / Lower Leg',
    price: '$50',
    category: 'Waxing',
    description: 'Full arm smooth waxing or knee-down leg waxing.'
  },
  {
    id: 'wax-9',
    name: 'Full Back Wax',
    price: '$65',
    category: 'Waxing',
    description: 'Smooth back hair removal treatment.'
  },
  {
    id: 'wax-10',
    name: 'Full Legs Wax',
    price: '$65',
    category: 'Waxing',
    description: 'Complete leg hair removal from hip to toe.'
  }
];

export const FACIAL_ADDONS = [
  { name: 'Dermaplaning', price: '+$20' },
  { name: 'Hydrojelly Mask', price: '+$20' },
  { name: 'LED Light Therapy', price: '+$15' },
  { name: 'Gua Sha Acupressure', price: '+$10' },
  { name: 'Paraffin Hand & Foot', price: '+$10' },
  { name: 'Eye and Lip treatment', price: '+$10' },
  { name: 'Scalp Massage', price: '+$10' }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg-1',
    name: 'A Simple Treat',
    price: 150,
    duration: '75 min',
    description: 'An essential head-to-toe pampering experience.',
    features: [
      '60 min signature facial',
      'Relaxing neck & shoulder massage',
      'Nourishing scalp treatment with 10 min scalp massage',
      'Targeted eye & lip rejuvenation treatment',
      'Precision brow wax'
    ]
  },
  {
    id: 'pkg-2',
    name: 'Pampered',
    price: 200,
    duration: '90 min',
    description: 'Deep relaxation combining facial glow and signature hair styling.',
    features: [
      '60 min signature facial with neck & shoulder massage',
      'Restorative scalp treatment with 10 min scalp massage',
      'Warm hand & foot paraffin treatment',
      'Hydrating hydrojelly mask',
      'Bouncy salon blowout finish'
    ],
    popular: true
  },
  {
    id: 'pkg-3',
    name: 'The Works',
    price: 250,
    duration: '120 min',
    description: 'The ultimate head-to-toe luxury transformation package.',
    features: [
      '60 min upgraded custom facial',
      'Relaxing neck & shoulder massage',
      'Scalp treatment with 10 min massage',
      'Soothing jelly mask & LED light therapy',
      'Hand & foot paraffin treatment',
      'Eye & lip treatment',
      'Signature blowout style'
    ]
  },
  {
    id: 'pkg-4',
    name: 'Best For Both (Couples)',
    price: 300,
    duration: '90 min',
    description: 'Side-by-side luxurious spa day designed for two.',
    features: [
      'Couples 60 min upgraded facial',
      'Neck & shoulder massage for both',
      'Scalp treatment with 10 min scalp massage',
      'Hand & foot paraffin treatment',
      'Cooling jelly mask',
      'Signature blowout styling finish'
    ]
  }
];

export const MEMBERSHIPS: MembershipTier[] = [
  {
    id: 'mem-essential',
    name: 'Essential Experience',
    monthlyPrice: 69,
    annualPrice: 759,
    value: 115,
    savings: '10% OFF Annual ($759/yr)',
    choices: [
      'Choice of blk. signature facial OR haircut, blowout & conditioning treatment each month'
    ],
    perks: [
      '5% OFF all retail products',
      '5% OFF all service add-ons',
      'Exclusive membership discount on extra spa services'
    ]
  },
  {
    id: 'mem-enhanced',
    name: 'Enhanced Experience',
    monthlyPrice: 99,
    annualPrice: 1079,
    value: 175,
    savings: '10% OFF Annual ($1079/yr)',
    choices: [
      'Choice of upgraded facial (Dermaplane or LED light therapy) OR Scalp facial and blowout each month'
    ],
    perks: [
      'Complimentary eyebrow wax included monthly',
      '10% OFF all retail products & add-on services',
      'Membership pricing on all additional spa visits'
    ],
    popular: true
  },
  {
    id: 'mem-elite',
    name: 'Elite Experience',
    monthlyPrice: 139,
    annualPrice: 1512,
    value: 310,
    savings: '10% OFF Annual ($1512/yr)',
    choices: [
      'Choice of premium facial (chemical peel or microdermabrasion) + blowout, OR gloss trim & hair treatment, OR full leg & Brazilian wax each month'
    ],
    perks: [
      'Complimentary choice of paraffin hand/foot treatment, LED light therapy, brow wax, or jelly mask monthly',
      '15% OFF all retail products and add-on services',
      'Priority booking access'
    ]
  }
];

export const LUXURY_ROOMS: LuxuryRoom[] = [
  {
    id: 'room-botanical',
    name: 'The Botanical Room',
    subtitle: 'Natural Tranquility & Organic Stress Relief',
    description: 'Surround yourself with peaceful tranquility. Listen to the soothing cascade of our indoor waterfall while fresh, aromatic botanical plants provide deep stress relief, promote better breathing, and combat anxiety.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    highlights: ['Natural Indoor Waterfall', 'Fresh Aromatic Botanicals', 'Respiratory & Stress Relief Air Filtration'],
    iconName: 'Leaf'
  },
  {
    id: 'room-salt',
    name: 'The Salt Room',
    subtitle: 'Himalayan Halotherapy & Detoxification',
    description: 'Himalayan salt offers therapeutic benefits such as removing toxins from the body, reducing systemic inflammation, treating stubborn skin conditions, and opening clear airways.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200',
    highlights: ['100% Pure Himalayan Salt Walls', 'Anti-Inflammatory Halotherapy', 'Skin Detox & Airway Relief'],
    iconName: 'Sparkles'
  },
  {
    id: 'room-crystalline',
    name: 'The Crystalline Room',
    subtitle: 'Chakra Balancing & Spiritual Rejuvenation',
    description: 'Crystals are renowned for their mental, physical, and spiritual healing vibration properties. Balance your chakras, boost your mood, and calm your mind in an ethereal sound and crystal sanctuary.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200',
    highlights: ['Charged Mineral Crystals', 'Chakra & Energy Alignment', 'Sound Bath & Mindful Quietude'],
    iconName: 'Gem'
  }
];

export const AWARDS: AwardBadge[] = [
  {
    id: 'award-1',
    title: 'One Shot Hair Awards',
    organization: 'Behind The Chair International',
    year: 'Nominee & Winner',
    iconName: 'Trophy'
  },
  {
    id: 'award-2',
    title: 'The Best of South Jersey',
    organization: 'South Jersey Magazine',
    year: 'Multi-Year Winner',
    iconName: 'Award'
  },
  {
    id: 'award-3',
    title: 'Salon Today Top 200',
    organization: 'Salon Today Magazine',
    year: 'Honoree',
    iconName: 'Star'
  },
  {
    id: 'award-4',
    title: 'Best Spa in Gloucester County',
    organization: 'Gloucester County Excellence',
    year: '1st Place Winner',
    iconName: 'Medal'
  },
  {
    id: 'award-5',
    title: 'Best Salon Decor Nominee',
    organization: 'Behind The Chair',
    year: 'National Finalist',
    iconName: 'Crown'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Kevin Murphy Hydrate-Me.Wash',
    brand: 'Kevin Murphy',
    price: 38,
    category: 'Shampoo & Conditioner',
    description: 'Infused with Kakadu Plum and Shea Butter for weightless hair hydration.',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800',
    benefits: ['Sulfate-Free', 'Paraben-Free', 'Color Safe']
  },
  {
    id: 'prod-2',
    name: 'Briogeo Scalp Revival Charcoal Scrub',
    brand: 'Briogeo',
    price: 42,
    category: 'Scalp Care',
    description: 'Binchotan charcoal draws out impurities while coconut oil moisturizes.',
    image: 'https://images.unsplash.com/photo-1608248597261-e4d09165811a?auto=format&fit=crop&q=80&w=800',
    benefits: ['95% Plant-Based', 'Nutrafol Compatible', 'Cruelty Free']
  },
  {
    id: 'prod-3',
    name: 'Pulp Riot Faction8 Semi-Permanent Color Care',
    brand: 'Pulp Riot',
    price: 32,
    category: 'Vivid Color Care',
    description: 'Protects vivid balayage tones and bright shades with quinoa protein.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    benefits: ['100% Vegan', 'Acidic pH', 'Maximum Shine']
  },
  {
    id: 'prod-4',
    name: 'Wella Professionals Ultimate Repair Miracle Hair Rescue',
    brand: 'Wella',
    price: 48,
    category: 'Hair Treatments',
    description: 'Repairs hair damage in 90 seconds with AHA and Omega-9.',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=800',
    benefits: ['Instant Strength', 'Heat Protection', 'Zero Weight']
  }
];

export const SALON_FAQS = [
  {
    q: "Where is blk. Salon & Spa located?",
    a: "We are located on the Mantua side of Sewell in South Jersey, conveniently within a 10-minute drive of Washington Township, Deptford, Mantua, and Glassboro."
  },
  {
    q: "Do I need a consultation before booking a color service?",
    a: "Based on your hair history, a complimentary consultation may be requested before color appointments. However, ALL corrective color services require a mandatory in-salon consultation!"
  },
  {
    q: "What is the cancellation policy?",
    a: "We ask for a minimum of 24 full business hours (or 48 calendar hours) notice for rescheduling or cancelling. For example, a Friday appointment must be modified before closing on Wednesday."
  },
  {
    q: "Are blk. products safe for sensitive skin and allergies?",
    a: "Yes! We stock nutrafol-based, cruelty-free, sulfate-free, paraben-free products including vegan plant-based color formulas specifically for clients with sensitive skin and allergies."
  }
];
