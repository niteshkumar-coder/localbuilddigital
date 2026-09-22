export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  text: string;
  rating: number;
  achievement: string;
  tag: string;
  metrics: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    title: "Owner & Managing Director",
    company: "Delta Air Plumbing & HVAC",
    location: "Bengaluru, Karnataka",
    text: "Before hiring LocalBuild, we spent ₹2.5 Lakhs every single month on lead aggregators with very poor quality inquiries. Now our technicians are booked out a week in advance across our primary service territory, and our Google Maps rank holds steady in the top spot.",
    rating: 5,
    achievement: "+245% Direct Call Inquiries",
    tag: "Home Services",
    metrics: "CPL dropped from ₹6,500 to ₹1,800"
  },
  {
    id: "test-2",
    name: "Dr. Clara Alvarez",
    title: "Clinical Director",
    company: "Apex Dental Care & Implant Center",
    location: "Patna, Bihar",
    text: "Our dental clinic was bleeding margins trying to compete with national dental chains on broad keywords. The LocalBuild team restructured our local Google Search presence and built landing pages that convert like clockwork. Our cosmetic consult bookings have more than doubled.",
    rating: 5,
    achievement: "542 Verified Patient Consults",
    tag: "Healthcare",
    metrics: "-52% Patient Acquisition Cost"
  },
  {
    id: "test-3",
    name: "James Stonegate",
    title: "Managing Partner",
    company: "Stonegate Luxury Homes",
    location: "Delhi NCR",
    text: "We sell premium luxury villas and residences. I was initially skeptical of digital marketing agencies because of bad past experiences with unqualified leads. LocalBuild's private buyer screening quiz funnel generated 37 verified buyers and closed over ₹65 Crores in inventory.",
    rating: 5,
    achievement: "₹65 Cr Verified Property Sales",
    tag: "Real Estate",
    metrics: "37 Pre-Screened High-Net-Worth Buyers"
  },
  {
    id: "test-4",
    name: "Rajesh Singhania",
    title: "Senior Partner",
    company: "Singhania & Co. Chartered Accountants",
    location: "Kolkata, West Bengal",
    text: "LocalBuild helped us launch focused Google Ads campaigns for corporate compliance and GST advisory. We gained 46 new high-value corporate retainers in 4 months. The weekly transparency reports gave our management absolute peace of mind.",
    rating: 5,
    achievement: "46 New Corporate Retainers",
    tag: "Professional Services",
    metrics: "+₹28L Annual Recurring Billing"
  },
  {
    id: "test-5",
    name: "Priya Nair",
    title: "Founder & CEO",
    company: "LuxeSkin Aesthetics Clinic",
    location: "Mumbai, Maharashtra",
    text: "Their team set up our Meta ads and WhatsApp automated reply bot. Prospective clients get answered within 30 seconds, even at 10 PM. Our clinic consultation show-up rate jumped from 45% to 78% in just two months.",
    rating: 5,
    achievement: "78% Consultation Show-Up Rate",
    tag: "Aesthetics & Wellness",
    metrics: "Instant WhatsApp Lead Response"
  }
];
