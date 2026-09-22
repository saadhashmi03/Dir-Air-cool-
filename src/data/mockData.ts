import { ServiceItem, GoogleReview, ACProblem } from '../types';

export const BUSINESS_INFO = {
  name: "Dr Air Cool Services",
  fullName: "Dr Air Cool Services - Ac Repair & Services Mumbai",
  tagline: "Mumbai's Trusted AC Doctor - Fast, Reliable & Professional Cooling Solutions",
  rating: 4.9,
  reviewCount: 72,
  category: "Air conditioning repair service",
  phone: "095943 64713",
  phoneRaw: "09594364713",
  phoneInternational: "+919594364713",
  whatsappNumber: "919594364713",
  hours: "Open · Closes 10 pm (Mon - Sun, 8:00 AM - 10:00 PM)",
  address: "Shop No 04 Jai Ambika Nagar, Sunder Baug Ln, Kamani, Kurla West, Mumbai, Maharashtra 400070",
  shortAddress: "Shop 04 Jai Ambika Nagar, Kurla West, Mumbai 400070",
  googleSearchUrl: "https://www.google.com/search?q=mumbai+ac+repair+service&sxsrf=APpeQnuUGohQBqmPCRRmFl7ifj30Ztq-pQ:1790083288920&udm=1&lsack=2ICyauuVN8my4-EPhov-8A0#sv=CCYS0wIKgQEKA3RicxJ6bHJmOiEybTchMWUxNSE0bTIhMTVtMSExc29mZmVyc18xb25saW5lXzFlc3RpbWF0ZXMhNG0yITE1bTEhMXNoYXNfMXdoZWVsY2hhaXJfMWFjY2Vzc2libGVfMWVudHJhbmNlITJtMSExZTIhMm0xITFlMyEzc0lBRT0KHQoBcRIYbXVtYmFpIGFjIHJlcGFpciBzZXJ2aWNlEAEaEHB2LS9nLzExejFzcThyM3cqKAoNL2cvMTF6MXNxOHIzdyIXChFhYyByZXBhaXIgc2VydmljZRACGAMycAoYbXVtYmFpIGFjIHJlcGFpciBzZXJ2aWNlSPu4kYuHvoCACFooEAEQAhADGAAYARgCGAMiGG11bWJhaSBhYyByZXBhaXIgc2VydmljZZIBH2Fpcl9jb25kaXRpb25pbmdfcmVwYWlyX3NlcnZpY2UYCiC97-XGBQ",
  emergencyResponseTime: "45 Minutes",
  warrantyDays: 30,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "jet-foam-split",
    title: "Split AC Deep Jet Foam Servicing",
    category: "cleaning",
    price: 499,
    originalPrice: 699,
    timeEstimate: "45 - 60 Mins",
    popular: true,
    acTypeSupported: "Split & Dual Inverter ACs (0.8 to 2.5 Ton)",
    warrantyDays: 30,
    sparePartGuarantee: "Anti-Bacterial Eco-Safe Coil Cleaner",
    description: "High-pressure jet pump wash using specialized waterproof cover jacket. No mess in your room, 2x cooling boost.",
    features: [
      "Waterproof service bag setup (zero wall dirt)",
      "Chemical foam wash for cooling coil",
      "Outdoor unit high pressure jet blast",
      "Blower & drain tray deep sanitization",
      "Gas pressure & amp performance test",
      "30-day cooling assurance guarantee"
    ],
    steps: [
      "Initial 5-min cooling & airflow temperature reading",
      "Heavy-duty waterproof catch jacket wrapped around indoor unit",
      "120-Bar pressure wash with chemical foam flush",
      "Deep rotary blower fan sanitization & unclogging",
      "Outdoor condenser fin cleaning & amp gauge audit"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "window-ac-service",
    title: "Window AC Deep Overhaul Service",
    category: "cleaning",
    price: 399,
    originalPrice: 599,
    timeEstimate: "40 - 50 Mins",
    popular: false,
    acTypeSupported: "Window ACs (All Brands 1 to 2 Ton)",
    warrantyDays: 30,
    sparePartGuarantee: "Rust-Preventive Protective Coating",
    description: "Complete extraction, cleaning of fins, air filters, fan blades, and drainage pan for optimal airflow and power saving.",
    features: [
      "Filter & front grill sanitization",
      "Condenser & evaporator coil jet clean",
      "Anti-bacterial spray for smell removal",
      "Vibration reduction check",
      "Thermostat & cooling cutoff audit"
    ],
    steps: [
      "Front panel removal and high-velocity filter dusting",
      "Safe extraction of AC chassis if required",
      "High-pressure water rinse of cooling & heating coils",
      "Drain pan rust & algae eradication",
      "Thermostat sensor recalibration and re-mounting"
    ],
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gas-refill-r32",
    title: "AC Gas Leak Fix & Refill (R32 / R410A / R22)",
    category: "gas",
    price: 1899,
    originalPrice: 2499,
    timeEstimate: "60 - 90 Mins",
    popular: true,
    acTypeSupported: "Split, Inverter & Window ACs",
    warrantyDays: 60,
    sparePartGuarantee: "100% Weighed Pure Refrigerant Gas Cylinders",
    description: "Nitrogen pressure leak detection, copper brazing repair, vacuuming, and 100% genuine gas cylinder recharge.",
    features: [
      "Electronic soap & nitrogen leak check",
      "High quality flare nut / joint brazing",
      "Deep moisture vacuuming pump process",
      "100% genuine weighed gas recharge",
      "Temperature drop testing to 16°C-18°C",
      "60-day gas leak guarantee"
    ],
    steps: [
      "Manifold pressure gauge connection & leak point pin-pointing",
      "High-temp copper alloy brazing on joints",
      "Deep two-stage vacuuming to eliminate moisture",
      "Digital weight scale cylinder gas charging by OEM grams",
      "Operating suction pressure and amp draw verification"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ac-repair-diagnostics",
    title: "AC Breakdown Inspection & Repair",
    category: "repair",
    price: 249,
    originalPrice: 399,
    timeEstimate: "30 - 45 Mins",
    popular: false,
    acTypeSupported: "All AC Types & Brands",
    warrantyDays: 30,
    sparePartGuarantee: "OEM Compatible Capacitors & Relays",
    description: "Expert troubleshooting for AC not cooling, tripping MCB, PCB faults, water leaking inside room, or strange buzzing sounds.",
    features: [
      "Complete multi-meter electrical inspection",
      "Capacitor, sensor & relay diagnostic",
      "PCB circuit repair & replacement assistance",
      "Water leakage tray & pipe unclogging",
      "Transparent estimate before repairing"
    ],
    steps: [
      "Electrical supply, MCB rating & voltage testing",
      "Capacitor micro-farad capacity testing",
      "PCB error code scan & motor winding test",
      "Written cost estimate before replacing any component",
      "Same-day genuine replacement part fitting"
    ],
    imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "installation-split",
    title: "Split AC Standard Installation",
    category: "installation",
    price: 1199,
    originalPrice: 1599,
    timeEstimate: "90 - 120 Mins",
    popular: true,
    acTypeSupported: "Split AC (New or Pre-owned)",
    warrantyDays: 30,
    sparePartGuarantee: "Heavy-Duty Powder-Coated Metal Brackets",
    description: "Precision level-drilling, indoor plate mount, outdoor heavy angle bracket setup, copper piping insulation & vacuum check.",
    features: [
      "Vibration-free indoor wall bracket mount",
      "Clean core hole drilling through brick/concrete",
      "Outdoor heavy-duty MS bracket installation",
      "Copper pipe flaring & insulated connection",
      "Vacuum suction & electrical wiring",
      "Drain pipe proper slope positioning"
    ],
    steps: [
      "Laser level alignment for wall backplate mounting",
      "Neat core hole drilling with debris protection",
      "Outdoor heavy MS bracket anchoring with expansion bolts",
      "Copper line brazing/flaring with thermal nitrile wrap",
      "Nitrogen vacuuming and 20-minute cooling test"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "uninstallation-dismantle",
    title: "AC Uninstallation / Safe Dismantling",
    category: "installation",
    price: 599,
    originalPrice: 899,
    timeEstimate: "45 Mins",
    popular: false,
    acTypeSupported: "Split & Window ACs",
    warrantyDays: 30,
    sparePartGuarantee: "100% Refrigerant Retention Guaranteed",
    description: "Gas pump-down lock inside outdoor unit so zero gas is lost during house shifting or renovation.",
    features: [
      "100% Refrigerant lock / pump down",
      "Careful indoor unit disassembly",
      "Outdoor unit safe removal & bracket packing",
      "Copper pipe rolling & wire tagging"
    ],
    steps: [
      "Run AC and lock high-pressure valve",
      "Lock low-pressure valve once gas is retained in compressor",
      "Electrical disconnection and safely tag wires",
      "Dismount indoor split unit from wall plate",
      "Coil copper pipes neatly to avoid kinks"
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "commercial-amc",
    title: "Commercial & Office AC Maintenance (AMC)",
    category: "commercial",
    price: 1999,
    originalPrice: 2800,
    timeEstimate: "Custom Schedule",
    popular: false,
    acTypeSupported: "Offices, Clinics, Retail Shops, Restaurants",
    warrantyDays: 90,
    sparePartGuarantee: "Commercial SLA & GST Invoice Compliant",
    description: "Customized maintenance contracts for offices, showrooms, clinics, restaurants & retail outlets across Mumbai.",
    features: [
      "Priority 4-hour emergency breakdown support",
      "3 or 4 scheduled comprehensive services/year",
      "Coil cleaning, electrical audits & filter wash",
      "Discounted genuine spare parts replacement",
      "GST billing and corporate compliance"
    ],
    steps: [
      "Complete site audit of all cassette, split & ducted units",
      "Preventive scheduled quarterly deep servicing",
      "Immediate breakdown dispatch within 4 hours",
      "Compressor life monitoring and energy efficiency logs",
      "Consolidated GST tax invoicing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    authorName: "Rahul Sharma",
    rating: 5,
    date: "1 week ago",
    location: "Kurla West, Mumbai",
    comment: "Professional and polite, clean execution, good price. The technician used a special jet washing jacket so no dirty water touched my wall or sofa. AC cooling feels like brand new now!",
    verified: true,
    acType: "Daikin 1.5 Ton Split AC"
  },
  {
    id: "rev-2",
    authorName: "Zaid Shaikh",
    rating: 5,
    date: "2 weeks ago",
    location: "Kamani, Kurla, Mumbai",
    comment: "Very prompt service, punctual, and highly skilled at his work. Called them at 11 AM in Kurla and technician was at my home by 11:40 AM. Diagnosed capacitor issue in 10 minutes and replaced with genuine part.",
    verified: true,
    acType: "Voltas Inverter AC"
  },
  {
    id: "rev-3",
    authorName: "Pooja Mehta",
    rating: 5,
    date: "3 weeks ago",
    location: "BKC / Bandra East, Mumbai",
    comment: "Happy with the service provided by the technician. Very honest person, told me clearly that gas was fine and only deep jet servicing was required. Saved me from being cheated by others. Highly recommended in Mumbai!",
    verified: true,
    acType: "LG Dual Inverter AC"
  },
  {
    id: "rev-4",
    authorName: "Imran Khan",
    rating: 5,
    date: "A month ago",
    location: "Sunder Baug Ln, Kurla West",
    comment: "Excellent AC installation work done by Dr Air Cool team. They mounted the outdoor unit safely on the ledge and ensured there was no vibration sound at night. Reasonable rates too.",
    verified: true,
    acType: "Panasonic 2 Ton Split AC"
  },
  {
    id: "rev-5",
    authorName: "Ashish Kadam",
    rating: 5,
    date: "A month ago",
    location: "Ghatkopar West, Mumbai",
    comment: "Water was leaking continuously from inside unit. Dr Air Cool arrived promptly, cleared the choked drain pipe with jet pump, and sealed the tray. Clean work and very courteous behavior.",
    verified: true,
    acType: "Hitachi Split AC"
  },
  {
    id: "rev-6",
    authorName: "Kavita Deshmukh",
    rating: 5,
    date: "2 months ago",
    location: "Chembur, Mumbai",
    comment: "Best AC service in Central Mumbai! 4.9 rating on Google is 100% well deserved. Transparent pricing with no surprises. Will definitely call them for regular servicing.",
    verified: true,
    acType: "Carrier Window AC"
  }
];

export const AC_PROBLEMS: ACProblem[] = [
  {
    id: "prob-1",
    name: "AC Not Cooling / Warm Air",
    hindiName: "ठंडी हवा नहीं आ रही",
    iconName: "ThermometerSnowflake",
    likelyReason: "Choked cooling coil, low refrigerant gas, or failed compressor capacitor",
    recommendedService: "Split AC Deep Jet Service or Gas Check",
    estimatedCost: "From ₹499"
  },
  {
    id: "prob-2",
    name: "Water Dripping Inside Room",
    hindiName: "कमरे के अंदर पानी टपक रहा है",
    iconName: "Droplets",
    likelyReason: "Blocked condensate drainage pipe, frozen indoor coil, or damaged drain tray",
    recommendedService: "Drain Unclogging & Jet Flush",
    estimatedCost: "From ₹349"
  },
  {
    id: "prob-3",
    name: "Foul Smell / Bad Odour",
    hindiName: "बदबूदार या गंदी हवा",
    iconName: "Wind",
    likelyReason: "Bacterial mould growth on wet blower wheel and accumulated dust",
    recommendedService: "Anti-Bacterial Foam Jet Wash",
    estimatedCost: "From ₹499"
  },
  {
    id: "prob-4",
    name: "AC Power Trips / MCB Falling",
    hindiName: "MCB ट्रिप हो रही है",
    iconName: "ZapOff",
    likelyReason: "Short circuit in outdoor compressor, faulty wiring or failed motor",
    recommendedService: "Electrical & PCB Diagnostics",
    estimatedCost: "From ₹249"
  },
  {
    id: "prob-5",
    name: "Loud Noise & Vibration",
    hindiName: "ज्यादा आवाज या वाइब्रेशन",
    iconName: "Volume2",
    likelyReason: "Loose fan blade, outdoor bracket vibration, or worn motor bearings",
    recommendedService: "Hardware Balancing & Mounting",
    estimatedCost: "From ₹399"
  },
  {
    id: "prob-6",
    name: "Ice / Frost on Copper Pipe",
    hindiName: "पाइप पर बर्फ जमना",
    iconName: "Snowflake",
    likelyReason: "Severe refrigerant gas leak or zero airflow due to choked filter",
    recommendedService: "Gas Leakage Test & Refill",
    estimatedCost: "From ₹1899"
  }
];

export const MUMBAI_LOCALITIES = [
  { name: "Kurla West (Our HQ)", time: "15-25 Mins", address: "Kamani, Sunder Baug, Jai Ambika Nagar" },
  { name: "Kurla East & Nehru Nagar", time: "20-30 Mins", address: "Tilak Nagar, Thakkar Bappa" },
  { name: "Bandra Kurla Complex (BKC)", time: "25-35 Mins", address: "G Block, Diamond Bourse, Kalanagar" },
  { name: "Bandra West & East", time: "30-40 Mins", address: "Hill Road, Linking Road, Khar" },
  { name: "Santacruz & Kalina", time: "25-35 Mins", address: "CST Road, Mumbai University area" },
  { name: "Ghatkopar West & East", time: "25-35 Mins", address: "R City, Pant Nagar, Bhatwadi" },
  { name: "Vidyavihar & Tilak Nagar", time: "20-30 Mins", address: "Somaiya College zone, Kirol" },
  { name: "Chembur & Tilak Nagar", time: "30-40 Mins", address: "Diamond Garden, RC Marg, Shell Colony" },
  { name: "Sion & Wadala", time: "30-45 Mins", address: "Sion Circle, Pratiksha Nagar" },
  { name: "Saki Naka & Andheri East", time: "30-45 Mins", address: "Asalpha, Metro Line, Marol" },
  { name: "Powai & Chandivali", time: "35-50 Mins", address: "Hiranandani, Nahar, Raheja" },
  { name: "Dadar & Mahim", time: "35-50 Mins", address: "Shivaji Park, Matunga, City Light" }
];

export const FAQS = [
  {
    q: "How fast can your technician reach my home in Mumbai?",
    a: "Our hub is conveniently located at Shop No 04 Jai Ambika Nagar, Kamani, Kurla West. In Kurla, BKC, Kalina, and Vidyavihar, our technician can arrive in 20-35 minutes. For other Mumbai suburbs like Bandra, Andheri, Ghatkopar, and Chembur, arrival is typically within 45 to 60 minutes."
  },
  {
    q: "Do you provide a warranty on AC repair and gas refilling?",
    a: "Yes! All our AC jet services and repairs come with a 30-Day Workmanship Warranty. For AC gas refilling with leakage fixing, we provide an extended 60-Day cooling and gas guarantee. If any issue reoccurs within this period, our technician visits and fixes it free of cost."
  },
  {
    q: "Will the jet foam wash make a mess on my bedroom wall or floor?",
    a: "Never! We use a specialized 100% waterproof AC wash bag with a guided drain pipe directly into a bucket. All high-pressure jet cleaning happens securely inside the bag. Your walls, floor, and furniture remain completely clean and dry."
  },
  {
    q: "How do I know if my AC needs gas filling or just servicing?",
    a: "Our certified technicians first perform an amp and pressure gauge check. 70% of cooling issues are resolved by deep foam jet cleaning without needing expensive gas! We never charge for gas unless our gauges physically prove a drop in pressure."
  },
  {
    q: "What brands of AC do you repair?",
    a: "We service and repair all major brands including Voltas, Daikin, LG, Samsung, Hitachi, Mitsubishi, Panasonic, Blue Star, Carrier, Lloyd, Godrej, Onida, Haier, and O General."
  }
];

export const SUPPORTED_BRANDS = [
  { name: "Daikin", badge: "Inverter & VRV Specialist" },
  { name: "Voltas", badge: "Tata Trusted Quality" },
  { name: "LG", badge: "Dual Inverter Expert" },
  { name: "Samsung", badge: "WindFree & Triple Inverter" },
  { name: "Blue Star", badge: "Commercial & Precision" },
  { name: "Hitachi", badge: "Expandable Inverter" },
  { name: "Mitsubishi", badge: "Heavy Duty & Electric" },
  { name: "Panasonic", badge: "Nanoe-X Air Purifier ACs" },
  { name: "Carrier", badge: "Global Cooling Expert" },
  { name: "O General", badge: "Tropical Heavy Duty" },
  { name: "Lloyd", badge: "Havells Brand Expert" },
  { name: "Godrej", badge: "Green Inverter Series" }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Book in 30 Seconds",
    desc: "Choose your AC type, problem, and convenient time slot online or on WhatsApp.",
    highlight: "Zero advance required"
  },
  {
    step: "02",
    title: "45-Min Doorstep Arrival",
    desc: "Trained technician arrives at your Mumbai home equipped with high-pressure jet pump & toolkit.",
    highlight: "Background verified"
  },
  {
    step: "03",
    title: "Waterproof Jet Cleaning",
    desc: "We mount a specialized waterproof bag with zero wall stains, deep cleaning coils & blower.",
    highlight: "100% mess-free"
  },
  {
    step: "04",
    title: "Chill Check & 30-Day Warranty",
    desc: "Digital temperature check down to 16°C. Pay only after cooling satisfaction with written warranty.",
    highlight: "Satisfaction guaranteed"
  }
];

export const COMPARISON_DATA = [
  {
    metric: "Cleaning Method",
    drAirCool: "High-Pressure Jet Pump (120 Bar) + Anti-bacterial foam wash",
    localMechanic: "Basic hand brush, water bottle or messy open spray",
    winner: true
  },
  {
    metric: "Wall & Sofa Protection",
    drAirCool: "100% Waterproof AC Service Jacket with guided drain pipe",
    localMechanic: "Zero protection. Walls and curtains get blackened and dirty",
    winner: true
  },
  {
    metric: "Refrigerant Gas Filling",
    drAirCool: "100% Digital Weighed Genuine Gas (R32 / R410A / R22) with vacuuming",
    localMechanic: "Guesswork pressure filling, risk of mixed / contaminated gas",
    winner: true
  },
  {
    metric: "Post-Service Warranty",
    drAirCool: "30-Day unconditional cooling warranty + 60-day gas warranty",
    localMechanic: "Zero warranty. Mechanic doesn't pick up phone after payment",
    winner: true
  },
  {
    metric: "Pricing Transparency",
    drAirCool: "Fixed published rates, transparent estimate before touching any tool",
    localMechanic: "Vague charges, continuous bargaining and hidden surprise fees",
    winner: true
  }
];

export const LIVE_ACTIVITY_STREAM = [
  { name: "Aarav Sharma", area: "Kurla West", service: "Split AC Jet Foam Service", time: "3 mins ago" },
  { name: "Pooja Varma", area: "BKC G Block", service: "AC Breakdown Inspection", time: "8 mins ago" },
  { name: "Farhan Merchant", area: "Bandra East", service: "Gas Leak Fix & Refill", time: "14 mins ago" },
  { name: "Kunal Singhania", area: "Ghatkopar West", service: "2x Split AC Jet Servicing", time: "22 mins ago" },
  { name: "Dr. Alok Joshi", area: "Chembur Diamond Garden", service: "New AC Installation", time: "35 mins ago" },
  { name: "Sameer Patil", area: "Santacruz Kalina", service: "Water Dripping Repair", time: "42 mins ago" }
];

