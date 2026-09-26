export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  category: "industrial" | "it" | "catering";
  categoryLabel: string;
  title: string;
  titleAr: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  features?: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  category: "industrial" | "om" | "ei" | "technology";
  categoryLabel: string;
  client: string;
  mainContractor: string;
  location: string;
  status: "Ongoing" | "Completed";
  year: string;
  scope: string;
  overview: string;
  deliverables: string[];
  gallery: string[];
  highlights?: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  features: {
    title: string;
    desc: string;
  }[];
  specifications: string[];
  badge?: string;
  image: string;
}

export interface ResourceCategory {
  title: string;
  titleAr: string;
  description: string;
  items: {
    name: string;
    nameAr?: string;
    quantity: string | number;
    category?: string;
  }[];
  image: string;
}

export interface ClientItem {
  name: string;
  sector: string;
  logoText: string;
  location: string;
  featured?: boolean;
  logo?: string;
}

export interface PartnerItem {
  name: string;
  specialty: string;
  desc: string;
  logoText: string;
  logo?: string;
}

export const COMPANY_INFO = {
  nameEn: "Bezel Arabia Company Ltd.",
  nameAr: "شركة بيزل العربية المحدودة",
  taglineEn: "Engineering Solutions Built for Industry",
  taglineAr: "حلول هندسية متكاملة للقطاع الصناعي",
  establishedYear: "1992",
  isoCert: "ISO 9001:2015 Certified",
  headquarters: "Al Jubail Industrial City, Kingdom of Saudi Arabia",
  phoneNumbers: ["+966 13 361 1280", "+966 13 361 4685"],
  whatsapp: "+966 55 539 1530",
  email: "contact@bezelarabia.com",
  postalAddress: "P.O. Box 917, Al Jubail 31951, Kingdom of Saudi Arabia",
  locations: [
    {
      city: "Al Jubail (Head Office)",
      cityAr: "الجبيل (المقر الرئيسي)",
      type: "Headquarters & Engineering Hub",
      address: "P.O. Box 917, Industrial Area, Al Jubail 31951, KSA",
      phone: "+966 13 361 1280 / +966 13 361 4685",
      email: "jubail@bezelarabia.com",
      mapCoords: "27.0174, 49.6583",
    },
    {
      city: "Jeddah",
      cityAr: "جدة",
      type: "Western Province Regional Branch",
      address: "Commercial Hub, Jeddah, Kingdom of Saudi Arabia",
      phone: "+966 12 600 0000",
      email: "jeddah@bezelarabia.com",
      mapCoords: "21.5433, 39.1728",
    },
    {
      city: "Rabigh",
      cityAr: "رابغ",
      type: "Industrial Support & Maintenance Center",
      address: "Industrial Petrochemical Zone, Rabigh, KSA",
      phone: "+966 12 422 1200",
      email: "rabigh@bezelarabia.com",
      mapCoords: "22.7984, 39.0348",
    },
    {
      city: "Yanbu",
      cityAr: "ينبع",
      type: "Western Industrial Operations Base",
      address: "Royal Commission Light Industrial Park, Yanbu, KSA",
      phone: "+966 14 321 4400",
      email: "yanbu@bezelarabia.com",
      mapCoords: "24.0891, 38.0637",
    },
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/bezel-arabia-company-limited-9357b31b6/",
    facebook: "https://www.facebook.com/Bezelarabia-114939183675123/",
    twitter: "https://twitter.com/ArabiaBezel",
    instagram: "https://www.instagram.com/bezelarabia",
    whatsapp: "https://wa.me/966555391530",
  },
  overview:
    "BEZEL ARABIA COMPANY LTD. is an ISO 9001 Certified Company, having proven its existence in the Saudi market since 1992. We are a premier Contractor of SAUDI ARAMCO, SABIC and all its Affiliate Companies, SAUDI ELECTRICITY COMPANY, CEMENT COMPANIES, and many other National and Multi-national Companies of great repute. We provide Engineering, Construction, Contracting, Maintenance, Information Technology, and Industrial Camp & Catering services across four strategically located hubs in the Kingdom.",
  overviewAr:
    "شركة بيزل العربية المحدودة هي شركة معتمدة بشهادة الآيزو 9001، أثبتت ريادتها في السوق السعودي منذ عام 1992. وتعد مقاولاً رئيسياً ومعتمداً لشركة أرامكو السعودية وسابك وجميع الشركات التابعة لها، والشركة السعودية للكهرباء، وشركات الإسمنت وكبرى الشركات الوطنية والعالمية المرموقة.",
  vision:
    "Bezel Arabia’s vision, core values, and guiding principles enhance the organization’s internal culture and maintain Bezel Arabia’s reputation as a construction and industrial leader, an employer of choice, and an active community partner across Saudi Arabia.",
  mission:
    "Bezel Arabia aspires to be the most respected builder and industrial solutions partner in Saudi Arabia, renowned for Excellence, Leadership, and Unsurpassed Value in engineering execution.",
  coreValues: [
    {
      title: "Excellence in Execution",
      desc: "Delivering world-class precision across Civil, Mechanical, Electrical, and Instrumentation construction standards.",
    },
    {
      title: "Integrity & Safety First",
      desc: "Uncompromising adherence to Saudi Aramco & SABIC safety guidelines with an absolute target of zero accidents.",
    },
    {
      title: "Technological Agility",
      desc: "Integrating state-of-the-art Industrial IoT, AI diagnostics, and enterprise cloud infrastructure for modern industrial performance.",
    },
    {
      title: "Client Partnership",
      desc: "Building long-term strategic relationships with Saudi Arabia’s foundational energy, petrochemical, and utilities leaders.",
    },
  ],
  qualityPolicy:
    "Bezel Arabia is committed to providing engineering, construction, IT, and maintenance services that consistently exceed client expectations while meeting all international ISO 9001:2015 quality requirements. Continuous evaluation, structured audits, and stringent QA/QC protocols govern every project phase from procurement through commissioning.",
  hsePolicy:
    "At Bezel Arabia, the Health, Safety, and Environment (HSE) of our workforce, contractors, and client facilities is our paramount priority. We uphold rigorous risk assessment, proactive hazard mitigation, continuous safety training, and zero-compromise environmental stewardship.",
};

export const CORE_DIVISIONS = [
  {
    id: "industrial",
    number: "01",
    title: "INDUSTRIAL SERVICES",
    titleAr: "الخدمات الصناعية",
    subtitle: "Engineering, CMEI Construction & Maintenance",
    desc: "Turnkey Civil, Mechanical, Electrical & Instrumentation construction, plant shutdown maintenance, valve overhauls, and equipment rental support for energy and petrochemical giants.",
    services: [
      "CMEI Construction",
      "Operation & Maintenance (O&M)",
      "Valves & Instrumentation Overhaul",
      "Industrial Support Services & Heavy Equipment",
    ],
    href: "/services/industrial",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "it",
    number: "02",
    title: "INFORMATION TECHNOLOGY",
    titleAr: "تقنية المعلومات",
    subtitle: "Enterprise Cyber, Cloud & Datacenter Infrastructure",
    desc: "Complete enterprise ICT engineering including Cisco network solutions, intelligent datacenter design, optical fiber networks, IP telephony, and proprietary industrial software.",
    services: [
      "IT Infrastructure Security & Governance",
      "Cisco Systems & Unified Solutions",
      "Intelligent Datacenter Architecture",
      "Structured Cabling & Fiber Optic Networks",
      "Microsoft Core Infrastructure & Cloud Services",
    ],
    href: "/services/information-technology",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "catering",
    number: "03",
    title: "CAMP & CATERING",
    titleAr: "إدارة المخيمات والإعاشة",
    subtitle: "Turnkey Workforce Accommodations & Industrial Catering",
    desc: "Comprehensive workforce camp management, executive accommodations, institutional catering, and hygiene-compliant facility management across Jubail, Yanbu, and Rabigh.",
    services: [
      "Industrial Catering & Meal Logistics",
      "Executive & Workforce Camp Accommodations",
      "Facility Management & Maintenance",
      "HACCP-Compliant Food Services",
    ],
    href: "/services/camp-catering",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  // Industrial Services
  {
    id: "cmei-construction",
    slug: "cmei-construction",
    number: "01",
    category: "industrial",
    categoryLabel: "Industrial Division",
    title: "CMEI Construction",
    titleAr: "إنشاءات الهندسة المدنية والميكانيكية والكهربائية",
    shortDesc: "Complete Civil, Mechanical, Electrical and Instrumentation construction for oil, gas, power plants, and petrochemical complexes.",
    fullDesc:
      "Bezel Arabia delivers turnkey CMEI (Civil, Mechanical, Electrical & Instrumentation) construction solutions for oil, gas, petrochemical, and power generation facilities across Saudi Arabia. From deep foundations and structural steel erection to intricate cable tray installation, switchgear erection, and pneumatic tubing, our certified teams execute projects to the strictest Saudi Aramco and SABIC engineering standards.",
    capabilities: [
      "Electrical & Instrumentation installation, wiring, testing & commissioning",
      "Civil construction, equipment foundations, structural concrete, and control buildings",
      "Mechanical piping fabrication, spool installation, and pipeline modifications",
      "Boiler re-tubing, certified ASME coded welding, and non-destructive testing (NDT)",
      "Pneumatic air supply piping, impulse tubing, and junction box termination",
      "Pre-commissioning, loop checking, and integrated plant startup assistance",
    ],
    image: "/images/industrial/cmei.jpg",
  },
  {
    id: "operation-maintenance",
    slug: "operation-maintenance",
    number: "02",
    category: "industrial",
    categoryLabel: "Industrial Division",
    title: "Operation & Maintenance (O&M)",
    titleAr: "التشغيل والصيانة الصناعية",
    shortDesc: "Comprehensive plant operations, turnaround maintenance, and preventive reliability services for critical production lines.",
    fullDesc:
      "Having managed long-term O&M contracts with companies like Arabian Cement, Saudi Cement, and Saudi Aramco Base Oil Company (Luberef) since 2001, Bezel Arabia possesses deep institutional domain expertise in maintaining continuous manufacturing operations, minimizing downtime, and enhancing asset longevity.",
    capabilities: [
      "Total plant operation and routine maintenance for all production units",
      "Scheduled turnarounds (TAR), shutdowns, and emergency troubleshooting",
      "Predictive vibration monitoring, oil analysis, and thermal thermography",
      "Rotating equipment overhaul (pumps, compressors, gearboxes, blowers)",
      "Electrical switchgear servicing, transformer testing, and relay calibration",
      "Specialized multi-disciplinary technical manpower deployment",
    ],
    image: "/images/industrial/om.jpg",
  },
  {
    id: "valves-instrumentation",
    slug: "valves-instrumentation",
    number: "03",
    category: "industrial",
    categoryLabel: "Industrial Division",
    title: "Valves & Instrumentation",
    titleAr: "خدمات الصمامات والأجهزة الدقيقة",
    shortDesc: "Dedicated state-of-the-art valve testing and repair workshop with on-site calibration and hydrotesting capabilities.",
    fullDesc:
      "Operating our dedicated Valve Workshop in Jubail Industrial City, Bezel Arabia handles the inspection, refurbishing, lapping, seat replacement, recalibration, and hydrotesting of all types of industrial valves including Control Valves, Safety Relief Valves (PSV), Ball Valves, Gate Valves, and Globe Valves.",
    capabilities: [
      "Complete valve overhaul, seat lapping, stem machining, and packing replacement",
      "API 598 & API 527 hydrostatic, pneumatic, and cryogenic pressure testing",
      "Smart positioner setup, actuator calibration (pneumatic, electric, hydraulic)",
      "Transmitter calibration (Pressure, Level, Flow, Temperature - HART / Fieldbus)",
      "In-situ on-site emergency valve testing and packing restoration",
      "Detailed certified test documentation for regulatory compliance",
    ],
    image: "/images/industrial/valves.jpg",
  },
  {
    id: "support-services",
    slug: "support-services",
    number: "04",
    category: "industrial",
    categoryLabel: "Industrial Division",
    title: "Construction Support & Equipment Rental",
    titleAr: "خدمات الدعم والمساندة وتأجير المعدات",
    shortDesc: "Certified heavy equipment fleet leasing, specialized rigging tools, and site mobilization support.",
    fullDesc:
      "Bezel Arabia provides certified heavy equipment, mobile power solutions, and logistics support to ensure seamless construction and shutdown execution across all Saudi industrial sectors.",
    capabilities: [
      "Leasing of certified Mobile Cranes, Forklifts, and Manlifts (Boom / Scissor)",
      "Industrial Diesel Generators, Air Compressors, and Welding Stations",
      "Transport fleet: Heavy trailers, Medium & Mini Buses, Pickups, and SUVs",
      "Hydrotesting pumps, torquing equipment, and specialized rigging tools",
      "Rapid site mobilization and temporary utility setup",
    ],
    image: "/images/industrial/support.jpg",
  },

  // IT Services
  {
    id: "it-infrastructure-security",
    slug: "it-infrastructure-security",
    number: "05",
    category: "it",
    categoryLabel: "IT Division",
    title: "IT Infrastructure & Security",
    titleAr: "أمن البنية التحتية لتقنية المعلومات",
    shortDesc: "Enterprise cybersecurity, risk management, perimeter firewall defense, and regulatory IT governance.",
    fullDesc:
      "We safeguard enterprise networks from sophisticated threats through tailored cybersecurity architectures, multi-layered firewall deployment, risk management, and ISO/NCA regulatory alignment.",
    capabilities: [
      "Next-Gen Firewall (NGFW) deployment and intrusion prevention (IPS/IDS)",
      "Vulnerability assessment, penetration testing, and risk management governance",
      "Enterprise Endpoint Detection & Response (EDR) and SIEM integration",
      "CCTV surveillance networks and biometric access control systems",
      "IT Helpdesk SLA support and proactive network operations center (NOC)",
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cisco-services",
    slug: "cisco-services",
    number: "06",
    category: "it",
    categoryLabel: "IT Division",
    title: "Cisco Services & Solutions",
    titleAr: "حلول وشبكات سيسكو المعتمدة",
    shortDesc: "Certified Cisco routing, switching, wireless point-to-point links, and high-availability architecture.",
    fullDesc:
      "At Bezel Arabia, our certified engineers understand the complex networking needs of both large industrial corporations and commercial enterprises, offering end-to-end Cisco design, deployment, and Smart Net lifecycle management.",
    capabilities: [
      "Infrastructure consultancy, design, and high-availability network topology",
      "Core, distribution, and access switches and enterprise router provisioning",
      "Advanced configurations: QoS, HA, Link Aggregation, BGP, OSPF, and VLAN segmentation",
      "Industrial wireless deployments, long-range Point-to-Point and Point-to-Multipoint links",
      "WAN connectivity over Leased Line, MPLS, IP-VPN, and VSAT backhaul",
      "Cisco Smart Net service contracts, hardware replacement, and technical maintenance",
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "intelligent-datacentre",
    slug: "intelligent-datacentre",
    number: "07",
    category: "it",
    categoryLabel: "IT Division",
    title: "Intelligent Datacentre Solutions",
    titleAr: "حلول مراكز البيانات الذكية",
    shortDesc: "Turnkey tier-compliant datacenter design, server racks, precision cooling, power redundancy, and environmental sensors.",
    fullDesc:
      "We design and build resilient datacenter technical spaces that guarantee maximum uptime for mission-critical operations. We handle everything from raised flooring and server racks to power budget calculations and automatic shutdown protocols.",
    capabilities: [
      "Turnkey datacenter consulting, Tier rating design, and architectural space planning",
      "Server rack integration, high-density KVM switches, and blade server enclosures",
      "Raised anti-static flooring delivery and hot/cold aisle containment",
      "Precision cooling systems, overhead cable ladders, and neat cable management",
      "Power budget calculations, redundant online UPS systems, and power distribution (PDU)",
      "Environmental monitoring (temperature, humidity, water leak, smoke) and automated alerts",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "structured-cabling-fiber",
    slug: "structured-cabling-fiber",
    number: "08",
    category: "it",
    categoryLabel: "IT Division",
    title: "Structured Cabling & Fiber Optics",
    titleAr: "التمديدات الشبكية والألياف البصرية",
    shortDesc: "High-speed Cat6A/Cat7 copper cabling and single/multi-mode fiber optic splicing, testing, and OTDR certification.",
    fullDesc:
      "A robust cabling backbone is crucial for uninterrupted corporate data transfer. Bezel Arabia specializes in high-standard structured cabling and long-distance fiber optic plant infrastructure for harsh industrial environments.",
    capabilities: [
      "End-to-end Cat6, Cat6A, Cat7 structured cabling design and engineering",
      "Single-mode (OS2) and multi-mode (OM3/OM4) fiber optic pulling and fusion splicing",
      "OTDR testing, attenuation loss verification, and Fluke Networks certification",
      "EMT/PVC conduit routing, industrial cable tray erection, and rack patching",
      "Cable plant tracing, tagging, schematic mapping, and documentation",
    ],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cloud-microsoft",
    slug: "cloud-microsoft",
    number: "09",
    category: "it",
    categoryLabel: "IT Division",
    title: "Microsoft Core & Cloud Services",
    titleAr: "البنية التحتية لمايكروسوفت والخدمات السحابية",
    shortDesc: "Active Directory architecture, Microsoft Exchange migration, hybrid cloud deployments, and enterprise backup.",
    fullDesc:
      "We assist enterprise clients in migrating to modern hybrid cloud environments and optimizing their core Microsoft infrastructure for optimal total cost of ownership (TCO) and rapid return on investment.",
    capabilities: [
      "Active Directory Domain Services (AD DS) multi-site design and Federation (ADFS)",
      "Microsoft Exchange Server upgrades, hybrid cloud migrations, and Office 365 setup",
      "Private and public cloud hosting, backup-as-a-service (BaaS), and disaster recovery",
      "Virtualization architectures utilizing Microsoft Hyper-V and VMware vSphere",
      "System Center Configuration Manager (SCCM) and centralized desktop management",
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },

  // Camp & Catering
  {
    id: "catering-management",
    slug: "catering-management",
    number: "10",
    category: "catering",
    categoryLabel: "Camp & Catering Division",
    title: "Industrial Catering Management",
    titleAr: "إدارة الإعاشة والتموين الصناعي",
    shortDesc: "High-volume corporate and industrial catering delivering nutritious multi-cuisine dining under strict HACCP hygiene protocols.",
    fullDesc:
      "Bezel Arabia provides nutritional, hygienic, and scalable catering operations for thousands of engineers, project managers, and workforce personnel located at industrial construction sites, refineries, and remote complexes across the Kingdom.",
    capabilities: [
      "Multi-ethnic culinary menus (Arabic, Asian, Western, Continental) tailored to workforce demographics",
      "Full HACCP and ISO 22000 compliant commercial kitchen operations and storage",
      "Daily breakfast, lunch, dinner, and packed meal distribution to active job sites",
      "Executive dining rooms and VIP banquet catering for corporate events",
      "Continuous health and hygiene testing of food handlers and kitchen equipment",
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "accommodation-facility-mgmt",
    slug: "accommodation-facility-mgmt",
    number: "11",
    category: "catering",
    categoryLabel: "Camp & Catering Division",
    title: "Accommodation & Facility Management",
    titleAr: "إدارة المرافق والمجمعات السكنية",
    shortDesc: "Turnkey management of staff camps, executive guest houses, laundry, recreation, and building maintenance.",
    fullDesc:
      "We manage executive villas, senior staff housing, and large-scale worker accommodations in Jubail, Yanbu, and Rabigh. Our integrated facility services ensure safe, clean, and comfortable living environments for remote project teams.",
    capabilities: [
      "Executive accommodation management with fully furnished living quarters and amenities",
      "Workforce residential camps with round-the-clock security and reception",
      "Commercial laundry, housekeeping, sanitization, and waste management services",
      "HVAC, electrical, plumbing, and general civil maintenance for residential buildings",
      "Recreational facilities, gymnasiums, and sports courts management",
    ],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
  },
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "cerebra",
    slug: "cerebra",
    name: "CEREBRA",
    tagline: "The Industrial AI Platform for Asset & Process Intelligence",
    category: "Industrial IoT & Artificial Intelligence",
    description:
      "Cerebra is an advanced Artificial Intelligence platform tuned specifically for Industrial IoT, powering high-value use cases across asset-heavy and process-heavy petrochemical, energy, and manufacturing plants. Cerebra integrates physical heuristics and Machine Learning models to unlock actionable operational insights.",
    features: [
      {
        title: "Connected Assets",
        desc: "Connect field and factory assets to enable remote health assessment, diagnostic monitoring, automated prognostics, and edge intelligence.",
      },
      {
        title: "Connected Process",
        desc: "Synthesize live telemetry from personnel, control loops, and equipment to drive real-time operational efficiency while eliminating waste and risk.",
      },
      {
        title: "Vision Intelligence",
        desc: "Video analytics powered by cutting-edge computer vision for hazard mitigation, PPE compliance, perimeter security, and operational safety auditing.",
      },
      {
        title: "Engineer's Workbench",
        desc: "Empowers plant engineers with the computational power of data science without requiring coding, allowing fast exploration of operational insights.",
      },
    ],
    specifications: [
      "Industrial IoT Edge & Cloud Architecture",
      "Physics-Informed Machine Learning (PIML)",
      "Real-time OPC-UA / Modbus / MQTT Telemetry Integration",
      "Automated Root Cause Failure Analysis (RCFA)",
      "Predictive Maintenance (PdM) Alert Engine",
    ],
    badge: "Flagship AI Platform",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "view360",
    slug: "view360",
    name: "VIEW 360",
    tagline: "Immersive Plant Visualization & Digital Twin Asset Explorer",
    category: "Specialized Industrial Software",
    description:
      "VIEW 360 is an industrial-grade digital twin visualization platform that renders complete 360-degree virtual walkthroughs of industrial plants, pipelines, and offshore structures, linking each physical component directly to engineering documents, maintenance records, and live telemetry.",
    features: [
      {
        title: "Photorealistic 360° Walkthroughs",
        desc: "Navigate entire refinery units, substations, and offshore platforms with ultra-high resolution 360-degree panoramic imaging.",
      },
      {
        title: "Tag-to-Document Linking",
        desc: "Click any physical valve, pump, or cable tray in the virtual view to immediately retrieve P&IDs, datasheets, calibration logs, and manuals.",
      },
      {
        title: "Remote Inspection & Auditing",
        desc: "Allows offshore specialists, safety auditors, and client management to inspect plant conditions without costly site travel.",
      },
      {
        title: "Turnaround & Shutdown Planning",
        desc: "Virtually simulate equipment removal paths, scaffold erection, and crane staging prior to shutdown execution.",
      },
    ],
    specifications: [
      "High-Resolution 360° Panoramic Mapping",
      "Spatial Tagging & GIS Integration",
      "Enterprise Document Management System (EDMS) Bridge",
      "Web Browser & VR Headset Compatibility",
      "Role-Based Access Security Control",
    ],
    badge: "Digital Twin Solution",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "office-organizer",
    slug: "office-organizer",
    name: "OFFICE ORGANIZER",
    tagline: "Comprehensive Industrial Contracting ERP & Resource Suite",
    category: "Enterprise Management Software",
    description:
      "A purpose-built ERP and office workflow system engineered specifically for contracting, construction, and manpower supply organizations in Saudi Arabia, streamlining project billing, timesheets, Iqama/visa compliance, and material procurement.",
    features: [
      {
        title: "Contract & Billing Management",
        desc: "Track milestone progress, generate Aramco/SABIC compliant invoice formats, and monitor subcontractor payment schedules.",
      },
      {
        title: "Workforce & Iqama Compliance",
        desc: "Automated tracking of worker gate passes, Aramco certifications, safety credentials, and Saudi Labor Law compliance.",
      },
      {
        title: "Equipment & Tool Tracking",
        desc: "Live inventory and maintenance scheduling for vehicles, cranes, welding machines, and calibration tools.",
      },
      {
        title: "Procurement & Material Requisitions",
        desc: "Streamlined purchase orders, vendor quotation comparisons, and warehouse inventory control.",
      },
    ],
    specifications: [
      "Saudi ZATCA Phase 2 E-Invoicing Compliant",
      "Multi-Branch & Multi-Currency Accounting",
      "Automated Biometric Timesheet Sync",
      "Role-Based Permission Matrix",
      "Secure Cloud & On-Premises Deployment Options",
    ],
    badge: "Contractor ERP",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "sadara-chemical-company",
    slug: "sadara-chemical-company",
    title: "Sadara Chemical Company",
    titleAr: "شركة صدارة للكيميائيات",
    category: "ei",
    categoryLabel: "Electrical & Instrumentation",
    client: "Sadara Chemical Company",
    mainContractor: "Larsen & Toubro (L&T)",
    location: "Al Jubail Industrial City, Saudi Arabia",
    status: "Completed",
    year: "2017",
    scope: "Electrical and Instrumentation Construction, Installation, and Commissioning",
    overview:
      "Execution of comprehensive E&I construction packages for Sadara Chemical Company’s massive petrochemical complex in Jubail. Scope included high-precision instrument calibration, hazardous area cable glanding, cable tray routing, DCS marshalling cabinet terminations, and loop testing across critical reaction units.",
    deliverables: [
      "Installation of over 45,000 meters of high-voltage & instrument cabling",
      "Mounting and calibration of 1,200+ smart field transmitters and control valves",
      "Erection of heavy-duty galvanized cable ladder networks and junction boxes",
      "Pre-commissioning loop checks with Honeywell Experion DCS system",
      "Strict compliance with Sadara HSE standards achieving zero lost-time incidents (LTI)",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Major Petrochemical Complex", "Zero LTI Record", "Completed Ahead of Schedule"],
  },
  {
    id: "aramco-kjo-kafji",
    slug: "aramco-kjo-kafji",
    title: "Aramco Kafji Joint Operations (KJO)",
    titleAr: "عمليات الخفجي المشتركة (أرامكو)",
    category: "ei",
    categoryLabel: "Electrical & Instrumentation",
    client: "Aramco Kafji Joint Operation (KJO)",
    mainContractor: "Dragados Gulf Construction",
    location: "Al Khafji, Saudi Arabia",
    status: "Completed",
    year: "2015",
    scope: "Electrical & Instrumentation Construction, Installation, and Commissioning",
    overview:
      "High-specification offshore and onshore petroleum infrastructure E&I construction for Aramco KJO facilities. Project demanded rigorous offshore marine safety compliance, explosion-proof installation practices, and specialized subsea cable terminations.",
    deliverables: [
      "Installation and testing of explosion-proof (Ex-d / Ex-e) electrical assemblies",
      "Instrumentation impulse line tube bending and pneumatic air header networks",
      "Emergency Shutdown (ESD) system loop checks and functional safety tests",
      "Power distribution switchgear and motor control center (MCC) hookup",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Offshore Petroleum Facility", "Ex-Proof Certification", "Joint Aramco Execution"],
  },
  {
    id: "ras-al-khair-power-plant",
    slug: "ras-al-khair-power-plant",
    title: "Ras Al Khair Power & Desalination Plant (SWCC)",
    titleAr: "محطة رأس الخير للطاقة وتحلية المياه",
    category: "industrial",
    categoryLabel: "Industrial Construction",
    client: "Ras Al Khair Power Plant (SWCC)",
    mainContractor: "SEPCO 3",
    location: "Ras Al Khair, Saudi Arabia",
    status: "Completed",
    year: "2015",
    scope: "Electrical and Instrumentation Construction & Power Substation Hookup",
    overview:
      "Turnkey electrical and instrumentation construction for one of the world's largest combined power and water desalination facilities, situated at Ras Al Khair on the Arabian Gulf.",
    deliverables: [
      "Installation of gas turbine generator instrumentation and control cabling",
      "400kV and 132kV GIS substation auxiliary power hookups",
      "Desalination unit RO control valve pneumatic tubing and calibration",
      "Fiber optic backbone interconnection between main control room and remote pumping stations",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Global Scale Power Project", "SWCC Desalination", "Multi-Phase Delivery"],
  },
  {
    id: "arabian-cement-om",
    slug: "arabian-cement-om",
    title: "Arabian Cement Company - Plant O&M",
    titleAr: "شركة الإسمنت العربية - التشغيل والصيانة",
    category: "om",
    categoryLabel: "Operation & Maintenance",
    client: "Arabian Cement Company",
    mainContractor: "Bezel Arabia Co. Ltd.",
    location: "Rabigh, Saudi Arabia",
    status: "Ongoing",
    year: "Ongoing since 2001",
    scope: "Plant Operations and Maintenance of All Production Areas",
    overview:
      "Over two decades of continuous, uninterrupted operation and mechanical/electrical maintenance services for Arabian Cement Company’s flagship production plant in Rabigh, achieving industry-leading uptime and production targets.",
    deliverables: [
      "Full operational supervision of raw mill, rotary kilns, clinker coolers, and cement mills",
      "Preventive mechanical maintenance: refractory inspections, roller alignments, lubrication",
      "Electrical and instrumentation maintenance including MV motors and variable speed drives",
      "Turnaround shutdown overhaul planning and rapid critical component replacement",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["23+ Years Continuous Service", "Complete Plant Scope", "Highest Reliability"],
  },
  {
    id: "luberef-aramco-base-oil",
    slug: "luberef-aramco-base-oil",
    title: "Saudi Aramco Base Oil Company (Luberef)",
    titleAr: "شركة أرامكو السعودية لزيوت الأساس (لوبريف)",
    category: "om",
    categoryLabel: "Operation & Maintenance",
    client: "Saudi Aramco Base Oil Company (Luberef)",
    mainContractor: "Bezel Arabia Co. Ltd.",
    location: "Jeddah and Yanbu Refineries, Saudi Arabia",
    status: "Ongoing",
    year: "Ongoing since 2008",
    scope: "Technical, Operational, and Facility Support Services to Both Refineries",
    overview:
      "Comprehensive multi-discipline technical, operational, and maintenance support contract servicing Luberef refineries located in both Jeddah and Yanbu Industrial Cities.",
    deliverables: [
      "Daily operational assistance for lube oil catalytic hydrocracking and vacuum distillation units",
      "Specialized instrument calibration, control valve servicing, and analytical equipment maintenance",
      "Support manpower deployment: certified mechanical fitters, instrument technicians, and safety marshals",
      "Strict compliance with Aramco loss prevention guidelines",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Multi-Site Contract", "Aramco Affiliate", "16+ Years Ongoing"],
  },
  {
    id: "saudi-cement-om",
    slug: "saudi-cement-om",
    title: "Saudi Cement Company - Plant O&M",
    titleAr: "شركة الإسمنت السعودية - التشغيل والصيانة",
    category: "om",
    categoryLabel: "Operation & Maintenance",
    client: "Saudi Cement Company",
    mainContractor: "Bezel Arabia Co. Ltd.",
    location: "Al Hassa / Hofuf, Eastern Province, Saudi Arabia",
    status: "Ongoing",
    year: "Ongoing since 2012",
    scope: "Plant Operation and Maintenance Services across Kiln & Packing Lines",
    overview:
      "Long-term industrial plant operation and routine maintenance contract ensuring continuous production across heavy clinker production lines and automated packaging terminals.",
    deliverables: [
      "Round-the-clock shift operation and process monitoring",
      "Heavy conveyor belt maintenance, gearbox overhauls, and baghouse filter replacements",
      "Condition monitoring and predictive thermographic inspections",
      "Safety audits adhering to Kingdom industrial safety mandates",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Eastern Province Operations", "Heavy Industrial O&M", "12+ Years Partnership"],
  },
  {
    id: "engie-jubail",
    slug: "engie-jubail",
    title: "ENGIE Energy Company",
    titleAr: "شركة إنجي للطاقة",
    category: "ei",
    categoryLabel: "E&I Maintenance",
    client: "ENGIE Energy Company",
    mainContractor: "Bezel Arabia Co. Ltd.",
    location: "Al Jubail Industrial City, Saudi Arabia",
    status: "Ongoing",
    year: "Ongoing since 2014",
    scope: "Electrical & Instrumentation Maintenance and Support Services",
    overview:
      "Dedicated E&I maintenance contract for multinational utility giant ENGIE's power and steam cogeneration facilities in Al Jubail Industrial City.",
    deliverables: [
      "Calibration of safety instrumentation systems (SIS) and burner management systems (BMS)",
      "Medium and low voltage switchgear maintenance and relay testing",
      "Continuous emissions monitoring system (CEMS) routine servicing",
      "24/7 on-call emergency troubleshooting team",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Cogeneration Power Facility", "10+ Years Continuous Service", "High Precision E&I"],
  },
];

export const RESOURCES_DATA: ResourceCategory[] = [
  {
    title: "MANPOWER RESOURCES",
    titleAr: "الكوادر البشرية",
    description:
      "A disciplined, certified multi-national workforce of engineering professionals, project directors, QA/QC inspectors, certified welders, instrument specialists, and camp management personnel.",
    items: [
      { name: "Office & Administrative Managers", nameAr: "مدراء المكاتب والشؤون الإدارية", quantity: 5 },
      { name: "Project Managers & Directors", nameAr: "مدراء المشاريع والعمليات", quantity: 2 },
      { name: "Engineers & QA/QC Inspectors", nameAr: "مهندسون ومفتشو الجودة والسلامة", quantity: 15 },
      { name: "Site Supervisors & Foremen", nameAr: "مشرفو مواقع ورؤساء فرق العمل", quantity: 20 },
      { name: "Instrument & Valve Technicians", nameAr: "فنيو أجهزة دقيقة وصمامات", quantity: 35 },
      { name: "Certified Welders (6G / ASME)", nameAr: "لحامون معتمدون 6G", quantity: 25 },
      { name: "Mechanical Fitters & Fabricators", nameAr: "فنيو ميكانيكا وتصنيع", quantity: 40 },
      { name: "Catering & Camp Hospitality Staff", nameAr: "طاقم الإعاشة والضيافة وإدارة المخيمات", quantity: 30 },
      { name: "Skilled Support Workers", nameAr: "كوادر فنية مساندة", quantity: 60 },
    ],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "EQUIPMENT RESOURCES",
    titleAr: "أسطول المعدات والآليات",
    description:
      "Fully maintained and Aramco/SABIC safety-certified fleet of heavy transport vehicles, cranes, lifting equipment, power generation, and precision diagnostic tools.",
    items: [
      { name: "SUVs & Site Inspection Vehicles", nameAr: "سيارات الدفع الرباعي للمواقع", quantity: 5, category: "Fleet" },
      { name: "Operational Passenger Cars", nameAr: "سيارات تشغيلية", quantity: 12, category: "Fleet" },
      { name: "Heavy Duty Pickups", nameAr: "شاحنات نقل خفيف (بيك أب)", quantity: 6, category: "Fleet" },
      { name: "Medium Transport Buses", nameAr: "حافلات نقل متوسطة", quantity: 2, category: "Fleet" },
      { name: "Mini Buses", nameAr: "حافلات صغيرة", quantity: 5, category: "Fleet" },
      { name: "Heavy Trucks & Flatbed Trailers", nameAr: "شاحنات نقل ثقيل ومقطورات", quantity: 4, category: "Heavy" },
      { name: "Certified Mobile Cranes", nameAr: "رافعات هيدروليكية معتمدة", quantity: 3, category: "Heavy" },
      { name: "Hydraulic Manlifts & Boom Lifts", nameAr: "رافعات أفراد هيدروليكية", quantity: 6, category: "Lifting" },
      { name: "Industrial Diesel Generators", nameAr: "مولدات كهربائية صناعية", quantity: 8, category: "Power" },
      { name: "Industrial Forklifts", nameAr: "رافعات شوكية", quantity: 4, category: "Lifting" },
      { name: "Multi-Process Welding Machines", nameAr: "مكائن لحام صناعية متعددة العمليات", quantity: 16, category: "Welding" },
      { name: "Hydrotesting & Valve Test Benches", nameAr: "منصات فحص واختبار الصمامات الهيدروستاتيكي", quantity: 3, category: "Testing" },
    ],
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "FACILITIES & INFRASTRUCTURE",
    titleAr: "المرافق والورش والمجمعات السكنية",
    description:
      "Strategic physical assets including our central Valve Workshop in Jubail, heavy fabrication warehouse, executive guest compounds, and fully serviced worker residential camps.",
    items: [
      { name: "Specialized Valve Workshop (Jubail)", nameAr: "ورشة صيانة الصمامات المتخصصة بالجبيل", quantity: 1 },
      { name: "Central Engineering Warehouse", nameAr: "المستودع الهندسي المركزي", quantity: 1 },
      { name: "Executive Accommodation Compounds", nameAr: "مجمعات السكن التنفيذي", quantity: 5 },
      { name: "Senior Staff Camp Facilities", nameAr: "مخيمات سكن كبار الموظفين", quantity: 2 },
      { name: "Industrial Workforce Camps (Jubail / Western)", nameAr: "مخيمات سكن العمال الصناعية", quantity: 3 },
      { name: "Central Commercial Kitchen & Catering Facility", nameAr: "المطبخ المركزي المتطور للإعاشة", quantity: 2 },
    ],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
  },
];

export const CLIENTS_LIST: ClientItem[] = [
  { name: "Saudi Aramco", sector: "Oil & Gas / Energy", logoText: "SAUDI ARAMCO", logo: "/images/clients/aramco.svg", location: "Dhahran / Kingdom-wide", featured: true },
  { name: "SABIC", sector: "Petrochemicals & Chemicals", logoText: "SABIC", logo: "/images/clients/sabic.svg", location: "Riyadh / Jubail / Yanbu", featured: true },
  { name: "Saudi Electricity Company", sector: "Power Generation & Grid", logoText: "SEC", logo: "/images/clients/sec.svg", location: "Kingdom-wide", featured: true },
  { name: "TASNEE", sector: "Petrochemicals & Industrial", logoText: "TASNEE", logo: "/images/clients/tasnee.svg", location: "Jubail", featured: true },
  { name: "Sadara Chemical Company", sector: "Specialty Chemicals", logoText: "SADARA", logo: "/images/clients/sadara.svg", location: "Jubail Industrial II", featured: true },
  { name: "MARAFIQ", sector: "Power & Water Utilities", logoText: "MARAFIQ", logo: "/images/clients/marafiq.svg", location: "Jubail & Yanbu", featured: true },
  { name: "Samsung Engineering", sector: "EPC Contracting", logoText: "SAMSUNG ENGINEERING", logo: "/images/clients/samsung.svg", location: "Kingdom-wide", featured: true },
  { name: "SIPCHEM", sector: "Chemicals & Polymers", logoText: "SIPCHEM", logo: "/images/clients/sipchem.svg", location: "Jubail", featured: true },
  { name: "Hyundai Heavy Industries", sector: "EPC & Heavy Industrial", logoText: "HYUNDAI HEAVY IND.", logo: "/images/clients/hyundai.svg", location: "Kingdom-wide", featured: true },
  { name: "Sahara Petrochemicals", sector: "Petrochemicals", logoText: "SAHARA", logo: "/images/clients/sahara.svg", location: "Jubail", featured: true },
  { name: "Arabia Cement Company", sector: "Building Materials", logoText: "ARABIAN CEMENT", logo: "/images/clients/arabian-cement.svg", location: "Rabigh / Jeddah", featured: true },
  { name: "Saudi Aramco Base Oil Co. (Luberef)", sector: "Refining & Lubricants", logoText: "LUBEREF", logo: "/images/clients/luberef.svg", location: "Jeddah & Yanbu", featured: true },
  { name: "Saudi Cement Company", sector: "Building Materials", logoText: "SAUDI CEMENT", logo: "/images/clients/saudi-cement.svg", location: "Eastern Province", featured: true },
  { name: "SWCC (Saline Water Conversion)", sector: "Water Utilities", logoText: "SWCC", logo: "/images/clients/swcc.svg", location: "Kingdom-wide", featured: true },
  { name: "ENGIE Energy", sector: "Power & Desalination", logoText: "ENGIE", logo: "/images/clients/engie.svg", location: "Jubail", featured: true },
  { name: "Aramco KJO (Khafji Joint Ops)", sector: "Upstream Oil & Gas", logoText: "KJO ARAMCO", logo: "/images/clients/kjo.svg", location: "Al Khafji", featured: true },
  { name: "SEPCO 3 Engineering", sector: "Power Plant EPC", logoText: "SEPCO III", logo: "/images/clients/sepco3.svg", location: "Ras Al Khair", featured: true },
];

export const PARTNERS_LIST: PartnerItem[] = [
  {
    name: "Flutura Business Solutions",
    specialty: "Industrial AI & IoT Analytics",
    desc: "Collaborative partner in deploying Cerebra Industrial AI diagnostics and physics-based machine learning algorithms across petrochemical assets.",
    logoText: "FLUTURA AI",
    logo: "/images/partners/flutura.svg",
  },
  {
    name: "Vevolve",
    specialty: "Enterprise Digital Solutions",
    desc: "Technology partner focused on digital process automation, enterprise mobile solutions, and cloud transformation.",
    logoText: "VEVOLVE",
    logo: "/images/partners/vevolve.svg",
  },
  {
    name: "Kentech",
    specialty: "Global Engineering & Specialized Construction",
    desc: "International engineering alliance partner for specialized industrial electrical, instrumentation, and telecommunication projects.",
    logoText: "KENTECH",
    logo: "/images/partners/kentech.svg",
  },
  {
    name: "Strudco Services",
    specialty: "Structural & Civil Engineering",
    desc: "Specialized partner delivering heavy civil foundations, structural steel design verification, and industrial fabrication support.",
    logoText: "STRUDCO",
    logo: "/images/partners/strudco.svg",
  },
  {
    name: "Epik Solutions",
    specialty: "Cloud & Cyber Infrastructure",
    desc: "Enterprise IT security alliance providing next-gen cyber defense, datacenter virtualization, and hybrid cloud integration.",
    logoText: "EPIK SOLUTIONS",
    logo: "/images/partners/epik.svg",
  },
  {
    name: "Addon Technologies",
    specialty: "Optical Networking & Datacom",
    desc: "Supplying certified optical fiber transceivers, structured cabling components, and high-density datacenter interconnects.",
    logoText: "ADDON",
    logo: "/images/partners/addon.svg",
  },
];

export const AWARDS_CERTIFICATIONS = [
  {
    title: "ISO 9001:2015 Quality Management",
    issuer: "Bureau Veritas / International Organization for Standardization",
    desc: "Certified quality management system across Engineering, Construction, Operation & Maintenance, IT Services, and Camp & Catering.",
    badge: "ISO Certified",
    image: "/images/awards/b2ab586b111a86efb7a9b9324dbc8034.jpg",
  },
  {
    title: "Saudi Aramco Approved Vendor & Contractor",
    issuer: "Saudi Aramco",
    desc: "Official vendor and approved contractor qualification for civil, mechanical, electrical, and maintenance operations.",
    badge: "Aramco Approved",
    image: "/images/awards/539ab2c00b2853febc234aae981d4e5a.jpg",
  },
  {
    title: "SABIC Approved Contractor Recognition",
    issuer: "Saudi Basic Industries Corporation (SABIC)",
    desc: "Qualification certificate for delivering turnaround maintenance, valve servicing, and plant construction across SABIC affiliates.",
    badge: "SABIC Approved",
    image: "/images/awards/b2ab586b111a86efb7a9b9324dbc8034.jpg",
  },
  {
    title: "Safety Performance Excellence Award",
    issuer: "Sadara Chemical Company & L&T",
    desc: "Commendation for achieving over 1,000,000 Safe Manhours without a single Lost Time Incident (LTI) during Jubail execution.",
    badge: "Zero LTI Award",
    image: "/images/awards/539ab2c00b2853febc234aae981d4e5a.jpg",
  },
];

export const HISTORY_TIMELINE = [
  {
    year: "1992",
    title: "Foundation in Al Jubail",
    desc: "Established in Al Jubail Industrial City as an engineering and construction contracting partner to support the rapid industrial expansion in the Eastern Province.",
  },
  {
    year: "2001",
    title: "Long-Term O&M Milestone",
    desc: "Awarded continuous plant operation and maintenance contract with Arabian Cement Company in Rabigh, establishing our Western Province footprint.",
  },
  {
    year: "2008",
    title: "Saudi Aramco Base Oil (Luberef) Contract",
    desc: "Secured comprehensive technical and operational support contract for Luberef refineries in Jeddah and Yanbu.",
  },
  {
    year: "2012",
    title: "Eastern Province Cement Operations",
    desc: "Commenced plant operations and maintenance services for Saudi Cement Company in Al Hassa.",
  },
  {
    year: "2015",
    title: "SWCC Ras Al Khair & Aramco KJO Deliveries",
    desc: "Successfully delivered major E&I construction packages for SEPCO 3 at Ras Al Khair Power Plant and Dragados Gulf at Aramco KJO Khafji.",
  },
  {
    year: "2017",
    title: "Sadara Chemical Mega-Project",
    desc: "Completed extensive electrical and instrumentation installation and commissioning for Sadara in Jubail with L&T.",
  },
  {
    year: "Present",
    title: "Digital & Industrial Expansion",
    desc: "Pioneering the integration of Cerebra AI, digital twin visualization (View 360), and state-of-the-art camp catering across the Kingdom.",
  },
];
