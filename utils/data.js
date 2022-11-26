import {
  BiServer,
  BiNews,
  BiDetail,
  BiRocket,
  BiPaperPlane,
  BiHelpCircle,
  BiLogIn,
  BiUser,
  BiError,
} from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { BsHeadset } from 'react-icons/bs';
import { FaLaptopCode, FaRegClock, FaRegTrashAlt } from 'react-icons/fa';
import { SiFacebook, SiLinkedin, SiMinutemailer, SiTwitter } from 'react-icons/si';

const IconBoxData = [
  {
    id: 1,
    classOption: 'bg-primary',
    icon: 'fal fa-layer-group fa-2x text-white',
    title: 'Good Performance',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state .',
  },
  {
    id: 2,
    classOption: 'bg-danger',
    icon: 'fal fa-shield-check fa-2x text-white',
    title: 'Highly Secure',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
  {
    id: 3,
    classOption: 'bg-dark',
    icon: 'fal fa-code fa-2x text-white',
    title: 'Fast Development',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
];

const faqData = [
  {
		id: 1,
    icon: "freeService",
		question: "Can I try your service for free?",
		answer: "Yes, you can try it for free. Just sign up to start with our 7-days free trial."
	},
	{
		id: 2,
    icon: "entry",
		question: "What do I need in order to register?",
		answer: "You just need a valid email address to get started. No credit card or personal information is required."
	},
	{
		id: 3,
    icon: "competition",
		question: "How do you stack up against others?",
		answer: "Don't just take our word for it. Since we have a free plan, why not give it a try? The proof is in the pudding!"
	},
	{
		id: 4,
    icon: "securePayment",
		question: "How secured is the payment method?",
		answer: "We have chosen Stripe as our payment service provider for this product. Stripe is certified to the highest level of security standards and will protect your credit card data from unauthorized use."
	},
	{
		id: 5,
    icon: "cancelSubscription",
		question: "I would like to cancel my subscription. Do you offer refunds?",
		answer: "If you are not happy with our service, just let us know by sending an email within 72 hours of subscription and we will refund your money."
	},
	{
		id: 6,
    icon: "feature",
		question: "Will you create features catered to our specific business?",
		answer: "Yes, we will. We will implement any features that would be helpful to our customers."
	},
	// {
	// 	id: 7,
	// 	question: "Do you support languages other than English?",
	// 	answer: "We are not currently supporting any other languages. However, we plan to do so soon."
	// },
];

const TestimonialData = [
  {
    id: 1,
    authorImg: '/testimonial/1.jpg',
    authorName: 'Vallery Lancey',
    authorTitle: 'Founder of Active Marketing Agency',
    quoteTitle: 'The Best Template You Got to Have it!',
    authorQuote:
      'I have been using CopywriterPro for a month now and I have to say it is an amazing tool. I have been using it to write some articles for my website and I have to say that the results are very good. The software is very easy to use and it has a lot of features that make the process of writing an article very simple. I would highly recommend it to anyone who is looking for a good copywriting tool.',
  },
  {
    id: 2,
    authorImg: '/testimonial/2.jpg',
    authorName: 'Joan Dho',
    authorTitle: 'Founder and CTO',
    quoteTitle: 'Best Template for SAAS Company!',
    authorQuote:
      'Dynamically create innovative core competencies with effective best practices promote innovative infrastructures.',
  },
  {
    id: 3,
    authorImg: '/testimonial/3.jpg',
    authorName: 'Ranu Mondal',
    authorTitle: 'Lead Developer',
    quoteTitle: 'It is undeniably good!',
    authorQuote:
      'Rapidiously supply client-centric e-markets and maintainable processes progressively engineer',
  },
  {
    id: 4,
    authorImg: '/testimonial/4.jpg',
    authorName: 'Mr.Rupan Oberoi',
    authorTitle: 'Founder and CEO at Amaara Herbs',
    quoteTitle: 'The Best Template You Got to Have it!',
    authorQuote:
      'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical',
  },
];

const socialMedia = [
  {
    title: 'Facebook',
    info: 'Facebook Group',
    href: 'https://www.facebook.com/groups/copywriterpro',
  },
  {
    title: 'Twitter',
    info: 'Twitter Page',
    href: 'https://twitter.com/CopywriterProAI',
  },
  {
    title: 'Linkedin',
    info: 'Linkedin Page',
    href: 'https://linkedin.com/company/copywriterproai',
  },
];

const networks = {
  "facebookGroup": "https://www.facebook.com/groups/copywriterpro",
  "facebookPage": "https://www.facebook.com/CopywriterProAI",
  "twitter": "https://twitter.com/CopywriterProAI",
  "linkedin": "https://linkedin.com/company/copywriterproai",
  "youtube": "https://www.youtube.com/channel/UCbyvGTnxFPeEuHzNUKJ5LNg",
  "discord": "https://discord.gg/bscmFKbBCs",
  "slack": "https://app.slack.com/client/TLPDGTGJZ/C02H54PH1LG"
}

const navCommunityLinks = [
  {
    title: 'Contact Us',
    icon: <SiMinutemailer />,
    href: '/contact-us',
  },
  {
    title: 'Facebook Group',
    icon: <SiFacebook />,
    href: networks.facebookGroup,
    type: 'social-network',
  },
  {
    title: 'Twitter',
    icon: <SiTwitter />,
    href: networks.twitter,
    type: 'social-network',
  },
  {
    title: 'LinkedIn',
    icon: <SiLinkedin />,
    href: networks.linkedin,
    type: 'social-network',
  },
];

const footerMenus = {
  Explore: [
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Blogs',
      href: '/blogs',
    },
    {
      title: 'Tutorial',
      href: '/tutorial',
    },
    // {
    //   title: 'AI Blog Writing',
    //   href: 'https://copywriterpro.ai/app',
    // },
  ],
  Support: [
    {
      title: 'Contact Us',
      href: '/contact-us',
    },
    {
      title: 'Request a Feature',
      href: '/feature-request',
    },
    {
      title: 'Report a bug',
      href: '/bug-report',
    },
    {
      title: 'Facebook Group',
      href: networks.facebookGroup,
    },
  ],
  Company: [
    // {
    //   title: 'Career',
    //   href: '/career',
    // },
    {
      title: 'Privacy Policy',
      href: '/privacy-policy',
    },
    {
      title: 'Terms of Use',
      href: '/terms-of-use',
    },
  ]
};

const testimonialAuthor = [
  {    
    name: 'Vallery Lancey',
    title: 'Founder of Active Marketing Agency',
    image: '/testimonial/Vallery Lancey.webp',
    target: '#testimonial-tab-1',
  },
  {
    name: 'Jose L. Rodriguez',
    title: 'Freelance Marketer',
    image: '/testimonial/Jose L. Rodriguez.webp',
    target: '#testimonial-tab-2',
  },
  {
    name: 'Rashed Mazumder',
    title: 'CTO of Gold Lavender Co. Ltd.',
    image: '/testimonial/Rashed Mazumder.webp',
    target: '#testimonial-tab-3',
  },
];

const testimonial = [
  {    
    name: 'Vallery Lancey',
    title: 'Founder of Active Marketing Agency',
    header: 'Easy to use and has a lot of features.',
    description:
      ' I have been using CopywriterPro for a month now and I have to say it is an amazing tool. I have been using it to write some articles for my website and I have to say that the results are very good. The software is very easy to use and it has a lot of features that make the process of writing an article very simple. I would highly recommend it to anyone who is looking for a good copywriting tool.',
    image: '/testimonial/Vallery Lancey.webp',
    target: 'testimonial-tab-1',
    active: 'active show',
  },
  {    
    name: 'Jose L. Rodriguez',
    title: 'Freelance Marketer',
    header: "I'm happy with the customer service.",
    description:
      " I don't write reviews very often. But I have to say that I'm very happy with the customer service from you guys. I had an issue that was quickly resolved. And the platform has everything I need, as I do lots of ad writing, it's flexible, and I can go create original content fast. (No one asks me to write this and nor offer anything, I'm just a regular user that's happy with the service) That said. Thank you!",
    image: '/testimonial/Jose L. Rodriguez.webp',
    target: 'testimonial-tab-2',
  },
  {
    name: 'Rashed Mazumder',
    title: 'CTO of Gold Lavender Co. Ltd.',
    header: 'CopywriterPro saved me countless hours!',
    description:
      " It's the best AI copywriting tool I didn't know I needed until I used it. Saved countless hours and headbanging with the help of copywriterpro.ai. It has been serving as my personal writing specialist. From writing catchy Ad headlines to attention-grabbing SEO-friendly articles this tool helped me write them with minimal effort and with the best outcome. So happy with this service.",
    image: '/testimonial/Rashed Mazumder.webp',
    target: 'testimonial-tab-3',
  },
];

const pricingData = [
  {
    title: 'Starter',
    price: '$5',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'left--40 bottom--40',
    listItem: [
      {
        li: '10,000 words',
        available: true,
      },
      {
        li: '400 characters input limit',
        available: true,
      },
      {
        li: '45 copywriting tools',
        available: true,
      },
      {
        li: 'AI blog writer',
        available: false,
      },
      {
        li: 'Plagiarism Checker',
        available: false,
      },
      {
        li: '1 user login',
        available: true,
      },
      {
        li: 'Automated Updated Features',
        available: true,
      },
      {
        li: 'Community Support',
        available: true,
      },
      {
        li: '24/7 Life time Support',
        available: false,
      },
    ],
  },

  {
    title: 'Advanced',
    price: '$12',
    time: '/month',
    bgColor: 'bg-gradient',
    textColor: 'text-warning',
    btnColor: 'btn-primary',

    listItem: [
      {
        li: '50,000 words',
        available: true,
      },
      {
        li: '800 characters input limit',
        available: true,
      },
      {
        li: '50+ copywriting tools',
        available: true,
      },
      {
        li: 'AI blog writer',
        available: true,
      },
      {
        li: 'Plagiarism Checker',
        available: false,
      },
      {
        li: '1 user login',
        available: true,
      },
      {
        li: 'Automated Updated Features',
        available: true,
      },
      {
        li: 'Community Support',
        available: true,
      },
      {
        li: '24/7 Life time Support',
        available: true,
      },
    ],
  },

  {
    title: 'Premium',
    price: '$15',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'right--40 top--40',
    listItem: [
      {
        li: '200,000 words',
        available: true,
      },
      {
        li: '1600 characters input limit',
        available: true,
      },
      {
        li: '50+ copywriting tools',
        available: true,
      },
      {
        li: 'AI blog writer',
        available: true,
      },
      {
        li: 'Plagiarism Checker: 10,000 words',
        available: true,
      },
      {
        li: '5 user login',
        available: true,
      },
      {
        li: 'Automated Updated Features',
        available: true,
      },
      {
        li: 'Community Support',
        available: true,
      },
      {
        li: '24/7 Life time Support',
        available: true,
      },
    ],
  },
];

//Offcanvas Menu
const offcanvasMenuData = [
  {
    title: 'Sass Company 1',
    info: "It's for SaaS Software Company",
    href: '/',
  },
  {
    title: 'Sass Company 2',
    info: ' Modern Sass agency',
    href: 'sass-company-two',
  },
  {
    title: 'Desktop App',
    info: 'Web Software Company',
    href: 'desktop-app',
  },

  {
    title: 'App Landing',
    info: ' App and Software Landing',
    href: 'app-landing',
  },
  {
    title: 'Software Application',
    info: 'IT solutions and SaaS Application',
    href: 'software-application',
  },
  {
    title: 'Startup Agency',
    info: 'Different type of Agency',
    href: 'startup-agency',
  },
  {
    title: 'Data Analysis',
    info: ' Software & Data Analysis',
    href: 'data-analysis',
  },
  {
    title: 'App Landing Two',
    info: 'Software & Data Analysis',
    href: 'app-landing-two',
  },
  {
    title: 'IT Solution',
    info: 'IT Solution and Sass Application',
    href: 'it-solution',
  },
  {
    title: 'Cyber Security',
    info: 'Cyber Security Landing Page',
    href: 'cyber-security',
  },
  {
    title: 'Crypto Currency',
    info: 'Crypto Currency Landing Page',
    href: 'crypto-currency',
  },
  {
    title: 'Game Solution',
    info: 'Crypto Server Landing Page',
    href: 'game-solution',
  },
  {
    title: 'Payment Gatway',
    info: 'Payment Landing Page',
    href: 'payment-gateway',
  },
];

const navCompanyLinks = [
  {
    title: 'Contact Us',
    icon: <BiLogIn />,
    href: 'contact-us',
  },
  {
    title: 'Service Single',
    icon: <BiServer />,
    href: 'single-service',
  },
  {
    title: 'Our Latest News',
    icon: <BiNews />,
    href: 'blogs',
  },
  {
    title: 'News Details',
    icon: <BiDetail />,
    href: 'blog-single',
  },
  {
    title: 'Career',
    icon: <HiOutlineAcademicCap />,
    href: 'career',
  },
  {
    title: 'Career Single',
    icon: <HiOutlineAcademicCap />,
    href: 'career-single',
  },
  {
    title: 'Integrations',
    icon: <BiRocket />,
    href: 'integrations',
  },
  {
    title: 'Integrations Single',
    icon: <BiPaperPlane />,
    href: 'integration-single',
  },
];

const navCompanyPage = [
  {
    title: 'Help Center',
    icon: <BiHelpCircle />,
    href: 'help-center',
  },
  {
    title: 'Help Details',
    icon: <BsHeadset />,
    href: 'help-center-single',
  },
  {
    title: 'Request for Demo',
    icon: <FaLaptopCode />,
    href: 'request-demo',
  },
  {
    title: 'User Login',
    icon: <BiLogIn />,
    href: 'login',
  },
  {
    title: 'User SignUp',
    icon: <BiUser />,
    href: 'register',
  },
  {
    title: 'Recovery Account',
    icon: <FaRegTrashAlt />,
    href: 'password-reset',
  },
  {
    title: '404 Page',
    icon: <BiError />,
    href: '404',
  },
  {
    title: 'Coming Soon',
    icon: <FaRegClock />,
    href: 'coming-soon',
  },
];

const navHomeOne = [
  {
    title: 'Sass Company 1',
    info: "It's for SaaS Software Company",
    href: '/',
  },
  {
    title: 'Sass Company 2',
    info: ' Modern Sass agency',
    href: 'sass-company-two',
  },
  {
    title: 'Desktop App',
    info: 'Web Software Company',
    href: 'desktop-app',
  },

  {
    title: 'App Landing',
    info: ' App and Software Landing',
    href: 'app-landing',
  },
  {
    title: 'Software Application',
    info: 'IT solutions and SaaS Application',
    href: 'software-application',
  },
  {
    title: 'Startup Agency',
    info: 'Different type of Agency',
    href: 'startup-agency',
  },
  {
    title: 'Data Analysis',
    info: ' Software & Data Analysis',
    href: 'data-analysis',
  },
  {
    title: 'App Landing Two',
    info: 'Software & Data Analysis',
    href: 'app-landing-two',
  },
];

const navHomeTwo = [
  {
    title: 'IT Solution',
    info: 'IT Solution and Sass Application',
    href: 'it-solution',
  },
  {
    title: 'Cyber Security',
    info: 'Cyber Security Landing Page',
    href: 'cyber-security',
  },
  {
    title: 'Crypto Currency',
    info: 'Crypto Currency Landing Page',
    href: 'crypto-currency',
  },
  {
    title: 'Game Solution',
    info: 'Crypto Server Landing Page',
    href: 'game-solution',
  },
  {
    title: 'Payment Gatway',
    info: 'Payment Landing Page',
    href: 'payment-gateway',
  },
  {
    title: 'Digital Marketing',
    info: 'Digital Landing Page',
    href: 'digital-marketing',
  },
  {
    title: 'Conference',
    info: 'Conference Landing Page',
    href: 'conference',
  },
];

export {
  IconBoxData,
  faqData,
  TestimonialData,
  socialMedia,
  networks,
  navCommunityLinks,
  footerMenus,
  testimonialAuthor,
  testimonial,
  pricingData,
  offcanvasMenuData,
  navCompanyLinks,
  navCompanyPage,
  navHomeOne,
  navHomeTwo,
};
