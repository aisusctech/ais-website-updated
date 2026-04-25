export type SignatureEvent = {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  location: string
  address: string
  date: string
  time: string
  waitlistHref: string
  color: string
  borderColor: string
  iconBg: string
  image: string
  imageAlt: string
  imageCaption: string
  imagePosition: string
  gallery: {
    type: "image" | "video"
    src: string
    alt: string
    caption: string
    poster?: string
  }[]
  startDate: string
  endDate: string
  highlights: string[]
  schedule: {
    time: string
    title: string
    detail: string
  }[]
  testimonials: {
    quote: string
    name: string
    role: string
  }[]
}

export const signatureEvents: SignatureEvent[] = [
  {
    id: 1,
    slug: "diwali",
    title: "Diwali",
    subtitle: "Festival of Lights",
    description: "Traditional performances, fireworks display, and authentic Indian festivities",
    longDescription: "Diwali is AIS USC's flagship celebration of light, performance, food, and community. The night brings together students, alumni, and friends for a polished cultural showcase followed by music, dancing, and moments that feel like home.",
    location: "USC McCarthy Quad",
    address: "McCarthy Quad, University of Southern California, Los Angeles, CA 90089",
    date: "November 2025",
    time: "6:00 PM - 10:30 PM",
    waitlistHref: "/tickets",
    color: "from-amber-500/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-500/20",
    image: "/events/diwali.webp",
    imageAlt: "AIS USC Diwali stage celebration with students raising their hands during a performance finale",
    imageCaption: "AIS USC students celebrate Diwali with performances, music, and community.",
    imagePosition: "center 42%",
    gallery: [
      {
        type: "image",
        src: "/events/diwali/2299d050-b274-43c5-bb21-860e0a2e1ad8.webp",
        alt: "AIS USC Diwali celebration with students gathered under string lights at night",
        caption: "Students coming together for AIS USC's Diwali celebration.",
      },
      {
        type: "image",
        src: "/events/diwali/IMG_4158.webp",
        alt: "AIS USC Diwali students celebrating together",
        caption: "A night of music, community, and festive energy.",
      },
      {
        type: "image",
        src: "/events/diwali/IMG_4161.webp",
        alt: "AIS USC Diwali guests dressed for the celebration",
        caption: "Traditional outfits and photo moments throughout the evening.",
      },
      {
        type: "image",
        src: "/events/diwali/IMG_4162.webp",
        alt: "AIS USC Diwali group enjoying the event",
        caption: "Friends gathering during the Diwali festivities.",
      },
      {
        type: "image",
        src: "/events/diwali/IMG_4153.webp",
        alt: "AIS USC Diwali crowd celebrating on campus",
        caption: "Campus community celebrating the Festival of Lights.",
      },
    ],
    startDate: "2025-11-07T18:00:00-08:00",
    endDate: "2025-11-07T22:30:00-08:00",
    highlights: ["Cultural showcase", "Live performances", "Festive dinner", "Photo moments", "Community dance floor"],
    schedule: [
      { time: "6:00 PM", title: "Doors Open", detail: "Check-in, photos, and welcome music." },
      { time: "6:45 PM", title: "Opening Ceremony", detail: "A short welcome from AIS and campus partners." },
      { time: "7:15 PM", title: "Performance Showcase", detail: "Dance, music, and student-led cultural performances." },
      { time: "8:45 PM", title: "Dinner & Social", detail: "Food, community time, and festival photos." },
      { time: "9:30 PM", title: "Finale", detail: "Music, dancing, and closing celebration." },
    ],
    testimonials: [
      {
        quote: "Diwali felt like the entire USC community came together under one roof. The performances were incredible and the energy stayed high all night.",
        name: "Riya Mehta",
        role: "USC Graduate Student",
      },
      {
        quote: "It was the first event at USC that genuinely reminded me of home. I brought friends who had never celebrated Diwali before and they loved it.",
        name: "Arjun Rao",
        role: "AIS Member",
      },
      {
        quote: "The production, outfits, music, and food made the night feel special. It was easily one of my favorite campus events.",
        name: "Maya Kapoor",
        role: "USC Class of 2026",
      },
    ],
  },
  {
    id: 2,
    slug: "holi",
    title: "Holi",
    subtitle: "Festival of Colors",
    description: "A vibrant celebration bringing the campus together with colors and joy",
    longDescription: "Holi is AIS USC's color-filled outdoor celebration built around music, friendship, and shared joy. Expect a high-energy afternoon with color play, group photos, music, and a campus crowd that gets everyone involved.",
    location: "USC McCarthy Quad",
    address: "McCarthy Quad, University of Southern California, Los Angeles, CA 90089",
    date: "March 2026",
    time: "12:00 PM - 4:00 PM",
    waitlistHref: "/tickets",
    color: "from-pink-500/20 to-purple-600/20",
    borderColor: "border-pink-500/30",
    iconBg: "bg-pink-500/20",
    image: "/events/holi.webp",
    imageAlt: "AIS USC Holi group photo with students covered in bright festival colors",
    imageCaption: "AIS USC Holi brings students together for color, music, and campus community.",
    imagePosition: "center 42%",
    gallery: [
      {
        type: "video",
        src: "/events/holi/IMG_9074.mp4",
        alt: "AIS USC Holi students celebrating with color",
        caption: "Color, music, and motion at AIS USC Holi.",
      },
      {
        type: "image",
        src: "/events/holi/IMG_9027.webp",
        alt: "AIS USC Holi students gathered outdoors with colorful powder",
        caption: "Students gathering before the next color round.",
      },
      {
        type: "image",
        src: "/events/holi/IMG_9022.webp",
        alt: "AIS USC Holi celebration with students covered in festival colors",
        caption: "Bright color moments from the Holi crowd.",
      },
      {
        type: "image",
        src: "/events/holi/IMG_9091.webp",
        alt: "AIS USC Holi group photo with students covered in color",
        caption: "A colorful group moment from Holi on campus.",
      },
      {
        type: "video",
        src: "/events/holi/IMG_9082.mp4",
        alt: "AIS USC Holi celebration video with students dancing",
        caption: "Students celebrating Holi with music and color.",
      },
    ],
    startDate: "2026-03-21T12:00:00-07:00",
    endDate: "2026-03-21T16:00:00-07:00",
    highlights: ["Color toss", "Live DJ", "Group photos", "Outdoor games", "Festival snacks"],
    schedule: [
      { time: "12:00 PM", title: "Check-In", detail: "Wristbands, color packets, and event guidelines." },
      { time: "12:45 PM", title: "Opening Color Toss", detail: "The first big group toss and welcome moment." },
      { time: "1:15 PM", title: "Music & Games", detail: "DJ set, lawn games, and open color play." },
      { time: "2:45 PM", title: "Community Photo", detail: "A full-group Holi photo before the final round." },
      { time: "3:15 PM", title: "Final Color Round", detail: "One last color burst to close the celebration." },
    ],
    testimonials: [
      {
        quote: "Holi was pure chaos in the best way. Everyone was laughing, covered in color, and meeting people they had never talked to before.",
        name: "Nisha Shah",
        role: "USC Undergraduate",
      },
      {
        quote: "The event was so welcoming. I came with one friend and left with a whole group of new people.",
        name: "Kabir Malhotra",
        role: "AIS Volunteer",
      },
      {
        quote: "The photos from Holi were unreal. It felt like the whole quad turned into a celebration.",
        name: "Anika Patel",
        role: "USC Class of 2027",
      },
    ],
  },
  {
    id: 3,
    slug: "ganesha-chaturthi",
    title: "Ganesha Chaturthi",
    subtitle: "Cultural Celebration",
    description: "Dance, music, and cuisine showcasing the richness of Indian culture",
    longDescription: "Ganesha Chaturthi creates a reflective and celebratory space for students to connect with tradition. The event blends cultural storytelling, devotional moments, music, and food in a warm community setting.",
    location: "Bovard Auditorium",
    address: "Bovard Auditorium, 3551 Trousdale Pkwy, Los Angeles, CA 90089",
    date: "August 2026",
    time: "5:30 PM - 8:30 PM",
    waitlistHref: "/tickets",
    color: "from-red-500/20 to-rose-600/20",
    borderColor: "border-red-500/30",
    iconBg: "bg-red-500/20",
    image: "/events/ganesha-chaturthi.webp",
    imageAlt: "Ganesha Chaturthi altar with flowers, candles, and a Ganesha idol at an AIS USC cultural celebration",
    imageCaption: "AIS USC Ganesha Chaturthi creates a warm space for tradition and reflection.",
    imagePosition: "center 55%",
    gallery: [
      {
        type: "image",
        src: "/events/ganesha-chaturthi/IMG_6149.webp",
        alt: "AIS USC Ganesha Chaturthi altar with flowers and candles",
        caption: "A devotional setup for Ganesha Chaturthi.",
      },
      {
        type: "image",
        src: "/events/ganesha-chaturthi/IMG_6148.webp",
        alt: "AIS USC Ganesha Chaturthi cultural decor and offerings",
        caption: "Decor, offerings, and community moments.",
      },
      {
        type: "video",
        src: "/events/ganesha-chaturthi/IMG_6093.mp4",
        alt: "AIS USC Ganesha Chaturthi event video",
        caption: "A glimpse from the Ganesha Chaturthi gathering.",
      },
      {
        type: "image",
        src: "/events/ganesha-chaturthi/IMG_6121.webp",
        alt: "AIS USC Ganesha Chaturthi students gathered at the event",
        caption: "Students gathering for prayer, food, and community.",
      },
      {
        type: "image",
        src: "/events/ganesha-chaturthi/IMG_6130.webp",
        alt: "AIS USC Ganesha Chaturthi celebration details",
        caption: "Details from the Ganesha Chaturthi celebration.",
      },
    ],
    startDate: "2026-08-28T17:30:00-07:00",
    endDate: "2026-08-28T20:30:00-07:00",
    highlights: ["Traditional decor", "Cultural storytelling", "Music", "Prasad", "Community dinner"],
    schedule: [
      { time: "5:30 PM", title: "Welcome", detail: "Arrival, seating, and introductions." },
      { time: "6:00 PM", title: "Cultural Moment", detail: "A short explanation of the celebration and traditions." },
      { time: "6:30 PM", title: "Music & Performances", detail: "Student performances and devotional music." },
      { time: "7:30 PM", title: "Prasad & Dinner", detail: "Food and informal community time." },
    ],
    testimonials: [
      {
        quote: "The event felt peaceful and meaningful. It was nice to have a campus space where culture was treated with care.",
        name: "Ishaan Desai",
        role: "USC Viterbi Student",
      },
      {
        quote: "I loved how AIS explained the traditions while still making the evening social and welcoming.",
        name: "Saanvi Reddy",
        role: "AIS Member",
      },
      {
        quote: "The decor and music made the whole evening feel intimate. It was a beautiful start to the semester.",
        name: "Meera Iyer",
        role: "USC Class of 2025",
      },
    ],
  },
  {
    id: 4,
    slug: "navratri-garba",
    title: "Navratri & Garba",
    subtitle: "Nine Nights of Dance",
    description: "Traditional Garba dance night celebrating the spirit of Navratri",
    longDescription: "Navratri & Garba is AIS USC's dance-forward celebration with circles of movement, bright outfits, and music that keeps the night alive. Beginners and experienced dancers are both welcome.",
    location: "USC McCarthy Quad",
    address: "McCarthy Quad, University of Southern California, Los Angeles, CA 90089",
    date: "September 2026",
    time: "7:00 PM - 11:00 PM",
    waitlistHref: "/tickets",
    color: "from-emerald-500/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
    iconBg: "bg-emerald-500/20",
    image: "/events/navratri-garba.webp",
    imageAlt: "AIS USC Navratri and Garba night with students dancing outdoors under string lights",
    imageCaption: "AIS USC Navratri and Garba celebrates dance, music, and Indian culture at USC.",
    imagePosition: "center 58%",
    gallery: [
      {
        type: "video",
        src: "/events/navratri-garba/A035_02202329_C046.mp4",
        alt: "AIS USC Navratri Garba dance floor video",
        caption: "Garba circles moving through the night.",
      },
      {
        type: "video",
        src: "/events/navratri-garba/A035_02202252_C011.mp4",
        alt: "AIS USC Navratri Garba students dancing during the event",
        caption: "Another look at the Garba floor in motion.",
      },
      {
        type: "image",
        src: "/events/navratri-garba/IMG_6773.webp",
        alt: "AIS USC Navratri Garba students dancing together",
        caption: "Students dancing together during Navratri Garba.",
      },
      {
        type: "image",
        src: "/events/navratri-garba/IMG_1239.webp",
        alt: "AIS USC Navratri Garba celebration moment with students",
        caption: "A candid moment from the Navratri celebration.",
      },
      {
        type: "video",
        src: "/events/navratri-garba/A035_02202355_C058.mp4",
        alt: "AIS USC Navratri Garba celebration video",
        caption: "A high-energy moment from the Garba floor.",
      },
    ],
    startDate: "2026-09-26T19:00:00-07:00",
    endDate: "2026-09-26T23:00:00-07:00",
    highlights: ["Garba circles", "Dandiya", "Beginner-friendly lessons", "Live DJ", "Traditional outfits"],
    schedule: [
      { time: "7:00 PM", title: "Doors Open", detail: "Check-in, music, and photos." },
      { time: "7:30 PM", title: "Garba Lesson", detail: "A beginner-friendly walkthrough before the dance floor opens." },
      { time: "8:00 PM", title: "Open Garba", detail: "Circle dancing, dandiya, and DJ-led sets." },
      { time: "10:15 PM", title: "Final Round", detail: "High-energy closing set and group photo." },
    ],
    testimonials: [
      {
        quote: "I had never done Garba before and still felt completely included. The lesson made it easy to jump in.",
        name: "Devika Nair",
        role: "USC Student",
      },
      {
        quote: "The music, outfits, and crowd made the night feel electric. Everyone was moving the whole time.",
        name: "Rohan Mehta",
        role: "AIS Volunteer",
      },
      {
        quote: "Garba was the most fun I had that semester. It was cultural, social, and genuinely energetic.",
        name: "Tara Shah",
        role: "USC Class of 2026",
      },
    ],
  },
]

export function getSignatureEvent(slug: string) {
  return signatureEvents.find((event) => event.slug === slug)
}
