import {
  Receipt,
  Globe,
  Zap,
  Unlink2,
  User,
  CheckCheckIcon,
  Cpu,
  Megaphone,
  LayoutDashboard,
  Monitor,
  Telescope,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "Practice",
    label: "C#, Java, JavaScript",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <Unlink2 className="h-8 w-8 text-blue-600" />,
    to: "/elements/text-box",
    title: "Elements",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    to: "/forms/basic-details",
    title: "Forms",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-blue-600" />,
    to: "/alert-window/browser-window",
    title: "Alerts & Window",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-blue-600" />,
    to: "/widget/basic-details",
    title: "Widget",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    to: "/interactions/basic-details",
    title: "Interactions",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    to: "/websites",
    title: "Websites",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <Monitor className="h-8 w-8 text-blue-600" />,
    title: "1. Select and Set Up a Framework",
    description:
      "Begin your journey in minutes with our straightforward and user-friendly setup guides.",
  },
  {
    icon: <Telescope className="h-8 w-8 text-blue-600" />,
    title: "2. Explore a Topic of Your Choice",
    description:
      "Practice any topic at your convenience. We provide detailed test cases and comprehensive solutions.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "3. Start Practicing",
    description:
      "Begin testing with confidence. If you encounter challenges, our solutions are readily available on GitHub.",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Senior Automation Lead",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "This website is a game-changer! The hands-on practice with Selenium and API testing helped me bridge the gap between theory and real-world applications.",
  },
  {
    name: "Michael Chen",
    role: "Senior Automation Analyst",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The interface is super easy to use, and the challenges are practical and engaging. Highly recommended for anyone looking to excel in automation testing.",
  },
  {
    name: "Anna Clerk",
    role: "Senior Automation Tester",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "I love how everything is so organized and user-friendly. The website covers everything from Selenium to API testing, with real-world exercises that mimic industry challenges.",
  },
];
