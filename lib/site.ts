export const siteConfig = {
  name: "AIS USC",
  fullName: "Association of Indian Students at USC",
  url: "https://aisusc.com",
  title: "AIS USC | Association of Indian Students at USC",
  description:
    "Association of Indian Students at USC celebrates Indian culture, builds community, and hosts signature events including Diwali, Holi, Garba, and Ganesha Chaturthi.",
  keywords: [
    "AIS USC",
    "Association of Indian Students USC",
    "USC Indian students",
    "Indian students USC",
    "USC Diwali",
    "USC Holi",
    "USC Garba",
    "USC Indian cultural organization",
    "University of Southern California Indian students",
    "AIS events",
    "AIS USC tickets",
    "USC event tickets",
    "USC Indian student events",
    "AIS USC event registration",
  ],
  locale: "en_US",
  themeColor: "#0f0f1a",
  social: {
    instagram: "https://instagram.com/aisusc",
    linkedin: "https://linkedin.com/company/aisusc",
    email: "tech@aisusc.org",
  },
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}
