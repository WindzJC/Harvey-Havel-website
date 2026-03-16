export type NavItem = {
  label: string;
  href: string;
};

export type ActionLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Book = {
  title: string;
  category: string;
  shortLine: string;
  image?: string;
  alt?: string;
  retailers: ActionLink[];
};

type PreviewBook = {
  title: string;
  image: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Books", href: "#books" },
  { label: "Featured Novel", href: "#featured" },
  { label: "Press", href: "#press" },
  { label: "Buy", href: "#buy" },
];

const aboutStats: Stat[] = [
  { value: "30+", label: "Years Writing" },
  { value: "19", label: "Books" },
  { value: "Novels, Short Stories, Essays", label: "Catalogue" },
  { value: "Albany, New York", label: "Based In" },
];

const featuredActions: ActionLink[] = [
  {
    label: "Buy on Amazon",
    href: "https://www.amazon.com/Queen-Intelligence-11-Conspiracy-Novel/dp/1960752553/",
  },
  {
    label: "Buy at Barnes & Noble",
    href: "https://www.barnesandnoble.com/w/the-queen-of-intelligence-harvey-havel/1142954146",
  },
  {
    label: "Read Interview",
    href: "https://www.imaginaryplanet.net/weblogs/idiotprogrammer/2020/07/interview-with-harvey-havel-novelist/",
  },
];

const books: Book[] = [
  {
    title: "The Queen of Intelligence",
    category: "Featured Novel",
    shortLine:
      "A literary-political thriller charged with espionage, atmosphere, and the unease of modern history.",
    image: "/assets/harvey/the-queen-of-intelligence-cover.jpg",
    alt: "Book cover for The Queen of Intelligence by Harvey Havel.",
    retailers: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/Queen-Intelligence-11-Conspiracy-Novel/dp/1960752553/",
      },
      {
        label: "Barnes & Noble",
        href: "https://www.barnesandnoble.com/w/the-queen-of-intelligence-harvey-havel/1142954146",
      },
    ],
  },
  {
    title: "Noble McCloud",
    category: "Debut Novel",
    shortLine:
      "A first novel centered on a young struggling musician and the difficult shape of ambition.",
    image: "/assets/harvey/noble-mccloud-cover.jpg",
    alt: "Book cover for Noble McCloud by Harvey Havel.",
    retailers: [],
  },
  {
    title: "More titles coming soon",
    category: "Catalogue",
    shortLine:
      "Additional novels, short fiction, and essay collections will be added to this library shortly.",
    retailers: [],
  },
];

const backlistPreview: PreviewBook[] = [
  {
    title: "The Wild Gypsy of Arbor Hill",
    image: "/assets/harvey/the-wild-gypsy-of-arbor-hill-cover.jpg",
  },
  {
    title: "Stories from the Fall of the Empire",
    image: "/assets/harvey/stories-from-the-fall-of-the-empire-cover.jpg",
  },
  {
    title: "The Odd and The Strange",
    image: "/assets/harvey/the-odd-and-the-strange-cover.jpg",
  },
  {
    title: "Mother: A Memoir",
    image: "/assets/harvey/mother-a-memoir-cover.jpg",
  },
];

const footerLinks: ActionLink[] = [
  {
    label: "Amazon Author Page",
    href: "https://www.amazon.com/stores/author/B00J946VBU",
  },
  {
    label: "Interview",
    href: "https://www.imaginaryplanet.net/weblogs/idiotprogrammer/2020/07/interview-with-harvey-havel-novelist/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/authorharveyhavel/",
  },
];

export const siteData = {
  navItems,
  links: {
    amazonBook:
      "https://www.amazon.com/Queen-Intelligence-11-Conspiracy-Novel/dp/1960752553/",
    barnesAndNobleBook:
      "https://www.barnesandnoble.com/w/the-queen-of-intelligence-harvey-havel/1142954146",
    amazonAuthor: "https://www.amazon.com/stores/author/B00J946VBU",
    interview:
      "https://www.imaginaryplanet.net/weblogs/idiotprogrammer/2020/07/interview-with-harvey-havel-novelist/",
    facebook: "https://www.facebook.com/authorharveyhavel/",
  },
  hero: {
    title: "Harvey Havel",
    subtitle: "Novelist. Short-story writer. Essayist.",
    body:
      "For more than thirty years, Harvey Havel has written fiction and essays that move through politics, identity, power, obsession, and the fault lines of American life.",
    microcopy: "Nineteen books across novels, short fiction, and essays.",
    featuredLabel: "Featured Novel",
    featuredTitle: "The Queen of Intelligence",
    featuredSubtitle: "A 9/11 Conspiracy Novel",
    featuredCover: "/assets/harvey/the-queen-of-intelligence-cover.jpg",
  },
  about: {
    lead:
      "Harvey Havel has been a short-story writer and novelist for over thirty years. His first novel, Noble McCloud, A Novel, about a young struggling musician, was published in 1999. His body of work now spans novels, short stories, and essay collections on current affairs and political life.",
    support:
      "He is a former Lecturer in English at Bergen Community College in Paramus, New Jersey, and also taught writing and literature at SUNY Albany and the College of Saint Rose in Albany, New York. He lives in Albany and continues to write for readers drawn to daring, searching, and uncompromising fiction.",
    portrait: "/assets/harvey/author-headshot-amazon.jpg",
    portraitAlt: "Black and white author portrait of Harvey Havel.",
    stats: aboutStats,
  },
  featured: {
    title: "The Queen of Intelligence",
    subtitle: "A 9/11 Conspiracy Novel",
    description:
      "A provocative work of fiction set in the long shadow of September 11 - blending espionage, power, psychological tension, and political unease into a sweeping literary thriller.",
    cover: "/assets/harvey/the-queen-of-intelligence-cover.jpg",
    tags: ["Historical Fiction", "Political Thriller", "Literary Suspense"],
    actions: featuredActions,
  },
  books,
  backlistPreview,
  themes: {
    title:
      "Fiction that confronts power, longing, politics, and the unstable architecture of modern life.",
    support:
      "Harvey Havel's work moves between the intimate and the geopolitical, pairing personal fracture with larger cultural pressure.",
  },
  press: {
    title: "In Conversation",
    copy:
      "Read Harvey Havel's interview with Robert Nagle at Imaginary Planet.",
  },
  retail: {
    title: "Find Harvey Havel's work",
    support: "Available through major booksellers and online retailers.",
  },
  footer: {
    title: "Harvey Havel",
    role: "Author",
    copy:
      "Literary fiction, short stories, and essays shaped by more than three decades of work.",
    links: footerLinks,
  },
};
