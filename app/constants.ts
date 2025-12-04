
export const ASSETS = {
  // The Floating Purple Gem
  heroBackground: "/video/card-1.mp4",  //video-card-13
  
  // The Black Cube / Structure
  aboutVisual: "/video/video-card-7.mp4",

  // The Mail/Envelope Icon
  contactBackground: "/video/video-7.mp4",

  // Service specific videos
  services: {
    influencer: "/video/video-card-4.mp4", // The 3D Microphones
    community: "/video/video-card-1.mp4",       // The Colorful Rings/Pills
    seo: "/video/video-card-8.mp4",            // The Glass Layers/Arches
    ads: "/video/video-card-10.mp4",             // The Poker Cards/Chips
    guerrilla: "/video/video-card-12.mp4",         // The Golden/Purple Uzi
    gaming: "/video/video-10.mp4",
    content: "/videos/swiss-knife.mp4",      // The Game Controller  // The Swiss Army Knife    // The Shield
  },
};

export const SERVICES_LIST = [
  {
    id: 'influencer',
    title: 'Influencer & KOL Marketing',
    description: 'Access to gaming influencers, streamers, bettors, esports creators, and Web3 KOLs. Campaign planning, scripting, and content review.',
    video: ASSETS.services.influencer
  },
  {
    id: 'community',
    title: 'Community Management',
    description: 'Discord and Telegram handling. Growth campaigns, contests, user support. Web3 community activation.',
    video: ASSETS.services.community
  },
  {
    id: 'seo',
    title: 'SEO for Gaming',
    description: 'On-page & technical SEO. Backlinks and keyword ranking. Gaming and iGaming-focused content optimization.',
    video: ASSETS.services.seo
  },
  {
    id: 'ads',
    title: 'Commercial Ads',
    description: 'Meta Ads, Google Ads, YouTube Ads. Programmatic Advertising. Retargeting and acquisition funnels.',
    video: ASSETS.services.ads
  },
  {
    id: 'guerrilla',
    title: 'Guerrilla Marketing',
    description: 'Viral campaigns, meme strategy, offline activations.',
    video: ASSETS.services.guerrilla
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    description: 'Twitter/X, Instagram, YouTube, LinkedIn. Daily content posting and engagement.',
    video: ASSETS.services.gaming
  },
];

export const BUDGET_OPTIONS = [
  "< $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "> $250,000"
];

export const INTEREST_OPTIONS = [
  "Influencer & KOL Marketing",
  "Community Management",
  "SEO for Gaming",
  "Commercial Ads",
  "Media Outreach & Publications",
  "Marketing Project Management",
  "Social Media Marketing & Management",
  "Guerrilla Marketing"
];
