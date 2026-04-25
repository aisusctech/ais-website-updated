export type BoardTeam = {
  id: number
  slug: string
  name: string
  shortName: string
  description: string
  purpose: string
  responsibilities: string[]
  icon: "users" | "dollar" | "code" | "camera" | "calendar" | "handshake" | "heart" | "building"
  color: string
  borderColor: string
  image: string
  imageAlt: string
  imageCaption: string
  imagePosition: string
  members: string[]
}

export const boardTeams: BoardTeam[] = [
  {
    id: 1,
    slug: "president",
    name: "President Team",
    shortName: "President",
    description: "Leading AIS with vision and dedication to serve our community",
    purpose: "The President Team sets the direction for AIS, coordinates across every department, and makes sure the organization stays focused on serving Indian students and the wider USC community.",
    responsibilities: [
      "Guide organization-wide priorities and semester planning",
      "Coordinate communication between every executive board team",
      "Represent AIS in campus partnerships and major decisions",
      "Support team leads so events, sponsors, and community initiatives stay aligned",
    ],
    icon: "users",
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/20",
    image: "/board/president.jpg",
    imageAlt: "AIS USC President Team executive board collage with student leaders",
    imageCaption: "President Team leads AIS USC strategy, coordination, and community direction.",
    imagePosition: "center",
    members: ["Annav Banthia", "Vineeth K V", "Anushka Mahajan", "Veer Vora", "Aayushi Singh"],
  },
  {
    id: 2,
    slug: "finance",
    name: "Finance Team",
    shortName: "Finance",
    description: "Managing budgets and ensuring financial sustainability",
    purpose: "The Finance Team keeps AIS financially organized by managing budgets, reimbursements, vendor payments, and the financial planning needed to make large cultural events possible.",
    responsibilities: [
      "Build and monitor event budgets",
      "Track expenses, reimbursements, and financial records",
      "Coordinate payment logistics with vendors and campus partners",
      "Help teams make practical decisions within budget",
    ],
    icon: "dollar",
    color: "from-yellow-500/20 to-amber-600/10",
    borderColor: "border-yellow-500/20",
    image: "/board/finance.jpg",
    imageAlt: "AIS USC Finance Team executive board collage with student leaders",
    imageCaption: "Finance Team manages AIS USC budgets, payments, and financial planning.",
    imagePosition: "center",
    members: ["Sahil Satasya", "Ambarish Kshirsagar", "Yashvi Sanghani", "Vaishnavi Srinivas"],
  },
  {
    id: 3,
    slug: "tech",
    name: "Tech Team",
    shortName: "Tech",
    description: "Building digital experiences and technical infrastructure",
    purpose: "The Tech Team builds and maintains AIS digital systems, including the website, technical workflows, event tooling, and infrastructure that helps the board move faster.",
    responsibilities: [
      "Maintain the AIS website and technical stack",
      "Create digital tools for events, forms, and internal workflows",
      "Support data, automation, and platform needs across teams",
      "Keep online experiences polished and reliable",
    ],
    icon: "code",
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/20",
    image: "/board/tech.jpg",
    imageAlt: "AIS USC Tech Team executive board collage with student leaders",
    imageCaption: "Tech Team builds AIS USC digital systems, website experiences, and event tools.",
    imagePosition: "center",
    members: ["Saikarthik Pendela", "Ameya Deshmukh", "Amritesh Amrit", "Athena Marianne Lobo", "Abhijit Kulkarni"],
  },
  {
    id: 4,
    slug: "content",
    name: "Content Team",
    shortName: "Content",
    description: "Crafting stories and creating engaging visual content",
    purpose: "The Content Team shapes the public voice and visual identity of AIS through social media, event graphics, photography, reels, campaigns, and storytelling.",
    responsibilities: [
      "Create social posts, graphics, reels, and event recaps",
      "Capture the energy of AIS events through photo and video",
      "Maintain a consistent visual identity across channels",
      "Promote events with clear and engaging campaigns",
    ],
    icon: "camera",
    color: "from-pink-500/20 to-pink-600/10",
    borderColor: "border-pink-500/20",
    image: "/board/content.jpg",
    imageAlt: "AIS USC Content Team executive board collage with student creators",
    imageCaption: "Content Team shapes AIS USC social media, photography, video, and event storytelling.",
    imagePosition: "center",
    members: ["Charan Kumar", "Aashwini Vachhani", "Preet Kumar", "Aayushi Soni", "Jash Shah", "Aarushi Singh"],
  },
  {
    id: 5,
    slug: "events",
    name: "Events Team",
    shortName: "Events",
    description: "Planning and executing memorable cultural celebrations",
    purpose: "The Events Team plans the cultural celebrations and community gatherings that define AIS, turning ideas into organized, memorable, and welcoming experiences.",
    responsibilities: [
      "Plan event themes, timelines, logistics, and guest experience",
      "Coordinate venues, vendors, supplies, and event flow",
      "Work with content, finance, hospitality, and sponsorship teams",
      "Make cultural celebrations feel polished, inclusive, and energetic",
    ],
    icon: "calendar",
    color: "from-sky-500/20 to-blue-600/10",
    borderColor: "border-sky-500/20",
    image: "/board/events.jpg",
    imageAlt: "AIS USC Events Team executive board collage with student event planners",
    imageCaption: "Events Team plans AIS USC cultural celebrations including Diwali, Holi, and Garba.",
    imagePosition: "center",
    members: ["Neel Jadhav", "Weona Lazarus", "Sameeksha Desai", "Uraaz Gorimar", "Sanjay Balasubramaniam"],
  },
  {
    id: 6,
    slug: "relations",
    name: "Relations Team",
    shortName: "Relations",
    description: "Building bridges with other organizations and partners",
    purpose: "The Relations Team strengthens AIS by building relationships with student groups, university partners, alumni, and community organizations.",
    responsibilities: [
      "Coordinate collaborations with student organizations",
      "Nurture partnerships across USC and the broader community",
      "Support outreach for cultural, professional, and social initiatives",
      "Help AIS stay connected beyond its own events",
    ],
    icon: "handshake",
    color: "from-zinc-400/20 to-zinc-600/10",
    borderColor: "border-zinc-400/20",
    image: "/board/relation.jpg",
    imageAlt: "AIS USC Relations Team executive board collage with student partnership leads",
    imageCaption: "Relations Team builds collaborations across USC student groups and community partners.",
    imagePosition: "center",
    members: ["Anaaya Singhania", "Dhruvika Joshi", "Tiana Viola Pinto", "Dev Kachiwala", "Mitali Jain"],
  },
  {
    id: 7,
    slug: "sponsorship",
    name: "Sponsorship Team",
    shortName: "Sponsorship",
    description: "Securing partnerships to support our mission",
    purpose: "The Sponsorship Team builds sponsor relationships and secures the funding and collaborations that allow AIS to host ambitious, accessible events.",
    responsibilities: [
      "Identify and contact potential sponsors",
      "Build sponsor packages and partnership proposals",
      "Maintain sponsor relationships before and after events",
      "Coordinate sponsor visibility with content and events teams",
    ],
    icon: "building",
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-500/20",
    image: "/board/sponsor.jpg",
    imageAlt: "AIS USC Sponsorship Team executive board collage with student partnership leads",
    imageCaption: "Sponsorship Team secures partnerships that support AIS USC events and initiatives.",
    imagePosition: "center",
    members: ["Arya Wadhwani", "Saurabh Mhatre", "Hrishank Chhatbar", "Anjana K", "Siya Tayal", "Sanika Dhavan"],
  },
  {
    id: 8,
    slug: "hospitality",
    name: "Hospitality Team",
    shortName: "Hospitality",
    description: "Ensuring every guest feels welcomed and valued",
    purpose: "The Hospitality Team makes AIS events feel warm, organized, and welcoming by supporting guest experience, check-in, food flow, and on-site coordination.",
    responsibilities: [
      "Create a welcoming experience for attendees",
      "Support check-in, crowd flow, and guest questions",
      "Coordinate food, refreshments, and hospitality logistics",
      "Help events run smoothly from setup through cleanup",
    ],
    icon: "heart",
    color: "from-teal-500/20 to-emerald-600/10",
    borderColor: "border-teal-500/20",
    image: "/board/hospitality.jpg",
    imageAlt: "AIS USC Hospitality Team executive board collage with student hospitality leads",
    imageCaption: "Hospitality Team makes AIS USC events welcoming, organized, and guest-focused.",
    imagePosition: "center",
    members: ["Aayush Charnia", "Rahul Jakhotia", "Charudisha Ashjay"],
  },
]

export function getBoardTeam(slug: string) {
  return boardTeams.find((team) => team.slug === slug)
}
