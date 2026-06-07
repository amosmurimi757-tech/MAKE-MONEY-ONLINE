// ===== Blog Data =====
const blogPosts = [
    {
        id: 1,
        title: 'How to Start a Profitable Online Business in Kenya',
        slug: 'start-profitable-online-business-kenya',
        author: 'John Mwangi',
        date: '2024-05-15',
        category: 'Business',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%232563eb" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EOnline Business in Kenya%3C/text%3E%3C/svg%3E',
        excerpt: 'Learn the essential steps to launch a successful online business in Kenya with minimal investment and maximum returns.',
        content: `
            <h2>Introduction</h2>
            <p>Starting an online business in Kenya has never been easier. With the rise of internet penetration and e-commerce platforms, there are numerous opportunities to make money online. This comprehensive guide will walk you through the essential steps.</p>

            <h2>1. Identify Your Niche</h2>
            <p>The first step is to identify what you're passionate about and what market needs exist. Research trending products and services in Kenya. Some popular niches include:</p>
            <ul>
                <li>Digital products and courses</li>
                <li>E-commerce and dropshipping</li>
                <li>Freelance services</li>
                <li>Content creation and blogging</li>
                <li>Affiliate marketing</li>
            </ul>

            <h2>2. Market Research</h2>
            <p>Before launching your business, conduct thorough market research. Understand your target audience, competitors, and market demand. Use tools like Google Trends and social media to gauge interest.</p>

            <h2>3. Build Your Online Presence</h2>
            <p>Create a professional website or social media presence. This is your storefront in the digital world. Ensure it's mobile-friendly since most Kenyans access the internet via mobile devices.</p>

            <h2>4. Payment Solutions</h2>
            <p>Set up reliable payment methods. Popular options in Kenya include:</p>
            <ul>
                <li>M-Pesa for mobile payments</li>
                <li>Bank transfers</li>
                <li>PayPal</li>
                <li>Stripe</li>
            </ul>

            <h2>5. Marketing Strategy</h2>
            <p>Develop a solid marketing strategy. Use social media, content marketing, and email campaigns to reach your audience. Consistency is key to building your brand.</p>

            <h2>Conclusion</h2>
            <p>Starting an online business in Kenya requires dedication, patience, and strategic planning. Begin with a clear vision, execute consistently, and adapt based on market feedback. Success won't come overnight, but with persistence, you can build a thriving online business.</p>
        `,
        tags: ['business', 'entrepreneurship', 'kenya'],
        relatedPosts: [2, 3]
    },
    {
        id: 2,
        title: 'Passive Income Streams: Complete Guide for Kenyans',
        slug: 'passive-income-streams-kenya',
        author: 'Sarah Kipchoge',
        date: '2024-05-10',
        category: 'Money Making',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23f97316" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EPassive Income%3C/text%3E%3C/svg%3E',
        excerpt: 'Discover practical ways to earn passive income while you sleep. Perfect for busy professionals and entrepreneurs.',
        content: `
            <h2>What is Passive Income?</h2>
            <p>Passive income is money you earn without actively working for it every day. Once set up, it requires minimal effort to maintain while generating continuous revenue.</p>

            <h2>1. Dividend Investing</h2>
            <p>Invest in stocks or mutual funds that pay dividends. In Kenya, the Nairobi Securities Exchange offers various dividend-paying stocks.</p>

            <h2>2. Rental Income</h2>
            <p>If you own property, consider renting it out. This provides steady monthly income with relatively low effort once a tenant is secured.</p>

            <h2>3. Digital Products</h2>
            <p>Create and sell digital products like e-books, online courses, or templates. Sell them on platforms like Gumroad, Teachable, or your own website.</p>

            <h2>4. Affiliate Marketing</h2>
            <p>Promote other people's products and earn commissions on sales. Build a blog or YouTube channel around your niche.</p>

            <h2>5. Peer-to-Peer Lending</h2>
            <p>Lend money through P2P lending platforms and earn interest on your loans. Platforms like Tala and Branch offer opportunities for Kenyans.</p>

            <h2>6. Create a Mobile App</h2>
            <p>Develop an app that solves a problem in your market. Generate revenue through ads, in-app purchases, or subscriptions.</p>

            <h2>Getting Started</h2>
            <p>Start with one passive income stream that aligns with your skills and interests. As you gain experience, diversify your income sources to reduce risk.</p>

            <h2>Conclusion</h2>
            <p>Building passive income takes time and initial effort, but the long-term benefits are worth it. Start today and build your financial freedom.</p>
        `,
        tags: ['passive income', 'investments', 'finance'],
        relatedPosts: [1, 4]
    },
    {
        id: 3,
        title: 'Freelancing in Kenya: A Complete Beginner\'s Guide',
        slug: 'freelancing-kenya-guide',
        author: 'Michael Ochieng',
        date: '2024-05-05',
        category: 'Technology',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%2310b981" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EFreelancing%3C/text%3E%3C/svg%3E',
        excerpt: 'Master freelancing and earn money from anywhere. Complete roadmap for Kenyan freelancers to get started.',
        content: `
            <h2>Why Freelancing?</h2>
            <p>Freelancing offers flexibility, independence, and the ability to earn income on your own terms. With the right skills and mindset, you can build a lucrative freelancing career.</p>

            <h2>1. Choose Your Skill</h2>
            <p>Popular freelancing skills include:</p>
            <ul>
                <li>Web development</li>
                <li>Graphic design</li>
                <li>Content writing</li>
                <li>Virtual assistance</li>
                <li>Digital marketing</li>
                <li>Translation services</li>
            </ul>

            <h2>2. Build Your Portfolio</h2>
            <p>Create a portfolio showcasing your best work. Even if you're starting out, build sample projects to demonstrate your abilities.</p>

            <h2>3. Set Up on Freelancing Platforms</h2>
            <p>Join platforms like:</p>
            <ul>
                <li>Upwork</li>
                <li>Fiverr</li>
                <li>Guru</li>
                <li>Toptal</li>
                <li>PeoplePerHour</li>
            </ul>

            <h2>4. Pricing Strategy</h2>
            <p>Research market rates for your skills. Don't undercut your value, but be competitive. As you gain experience, you can increase your rates.</p>

            <h2>5. Deliver Quality Work</h2>
            <p>Consistency and quality are key to building a successful freelancing career. Happy clients lead to repeat business and referrals.</p>

            <h2>6. Manage Your Finances</h2>
            <p>Keep track of your income and expenses. Consider opening a business account and paying taxes as required by Kenyan law.</p>

            <h2>Conclusion</h2>
            <p>Freelancing can provide a stable and flexible income stream. Start with your strongest skill, build your reputation, and scale up over time.</p>
        `,
        tags: ['freelancing', 'skills', 'income'],
        relatedPosts: [1, 5]
    },
    {
        id: 4,
        title: 'Top E-Commerce Opportunities in Kenya 2024',
        slug: 'ecommerce-opportunities-kenya-2024',
        author: 'Grace Muturi',
        date: '2024-04-28',
        category: 'Business',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%238b5cf6" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EE-Commerce%3C/text%3E%3C/svg%3E',
        excerpt: 'Explore the most profitable e-commerce opportunities in Kenya. Learn how to start and scale your online store.',
        content: `
            <h2>The E-Commerce Boom in Kenya</h2>
            <p>Kenya's e-commerce sector is growing rapidly with more consumers shopping online than ever before. This presents excellent opportunities for entrepreneurs.</p>

            <h2>1. Dropshipping</h2>
            <p>Start an online store without holding inventory. Partner with suppliers who handle shipping and fulfillment.</p>

            <h2>2. Print-on-Demand Products</h2>
            <p>Create custom t-shirts, mugs, and other products. Your supplier prints and ships to customers.</p>

            <h2>3. Digital Products</h2>
            <p>Sell e-books, presets, templates, or software with zero shipping costs and unlimited scalability.</p>

            <h2>4. Niche Products</h2>
            <p>Focus on specific markets like beauty products, fashion, or electronics with high demand in Kenya.</p>

            <h2>5. Subscription Boxes</h2>
            <p>Create a subscription service delivering curated products monthly. Popular in Kenya for beauty, snacks, and lifestyle items.</p>

            <h2>Platform Options</h2>
            <ul>
                <li>Shopify</li>
                <li>WooCommerce</li>
                <li>Jumia</li>
                <li>OLX</li>
            </ul>

            <h2>Marketing Your Store</h2>
            <p>Use social media, influencer partnerships, and content marketing to drive traffic to your store.</p>

            <h2>Conclusion</h2>
            <p>E-commerce in Kenya is a goldmine for those willing to put in the effort. Choose your niche wisely and execute your strategy consistently.</p>
        `,
        tags: ['ecommerce', 'business', 'startups'],
        relatedPosts: [1, 2]
    },
    {
        id: 5,
        title: 'Digital Marketing Skills That Pay Well in Kenya',
        slug: 'digital-marketing-skills-kenya',
        author: 'Peter Mwangi',
        date: '2024-04-20',
        category: 'Technology',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23ec4899" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EDigital Marketing%3C/text%3E%3C/svg%3E',
        excerpt: 'Learn the most in-demand digital marketing skills that businesses in Kenya are willing to pay good money for.',
        content: `
            <h2>Why Digital Marketing?</h2>
            <p>As more businesses go online, the demand for digital marketing experts continues to grow. These skills are highly valued and well-compensated.</p>

            <h2>1. SEO (Search Engine Optimization)</h2>
            <p>Help businesses rank higher in Google search results. This is one of the most sought-after skills with high earning potential.</p>

            <h2>2. Social Media Marketing</h2>
            <p>Manage social media accounts for businesses and create engaging content that drives engagement and sales.</p>

            <h2>3. Content Marketing</h2>
            <p>Create valuable content that attracts and retains customers. Build blogs, email campaigns, and video content.</p>

            <h2>4. Google Ads and Facebook Ads</h2>
            <p>Help businesses run profitable paid advertising campaigns. This skill pays very well.</p>

            <h2>5. Email Marketing</h2>
            <p>Build and manage email campaigns that drive conversions and customer loyalty.</p>

            <h2>6. Video Marketing</h2>
            <p>Create and optimize videos for marketing purposes. YouTube is growing rapidly in Kenya.</p>

            <h2>Getting Started</h2>
            <p>Take courses on platforms like Google Digital Garage, Coursera, and Udemy. Build your portfolio with real clients.</p>

            <h2>Conclusion</h2>
            <p>Digital marketing skills are in high demand in Kenya. Master one or more of these skills and position yourself as an expert.</p>
        `,
        tags: ['marketing', 'digital', 'skills'],
        relatedPosts: [3, 6]
    },
    {
        id: 6,
        title: 'Content Creation: Turn Your Passion Into Profit',
        slug: 'content-creation-profit',
        author: 'Emma Kariuki',
        date: '2024-04-15',
        category: 'Money Making',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%2306b6d4" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EContent Creation%3C/text%3E%3C/svg%3E',
        excerpt: 'Monetize your content and build a sustainable income from YouTube, TikTok, and blogging. Complete roadmap included.',
        content: `
            <h2>The Content Creator Economy</h2>
            <p>More than ever, creators are building sustainable incomes through content. Whether it's videos, blogs, or podcasts, there's an audience for quality content.</p>

            <h2>1. Choose Your Platform</h2>
            <ul>
                <li><strong>YouTube:</strong> Video content with ad revenue and sponsorships</li>
                <li><strong>TikTok:</strong> Short videos with creator fund and brand deals</li>
                <li><strong>Blogging:</strong> Written content with ads and affiliate marketing</li>
                <li><strong>Podcasting:</strong> Audio content with sponsorships</li>
                <li><strong>Instagram:</strong> Visual content with sponsorships and affiliate links</li>
            </ul>

            <h2>2. Find Your Niche</h2>
            <p>Focus on topics you're passionate about. The best content comes from genuine interest and expertise.</p>

            <h2>3. Consistency is Key</h2>
            <p>Post regularly on a schedule. This builds audience trust and helps with algorithm ranking.</p>

            <h2>4. Monetization Methods</h2>
            <ul>
                <li>Ad revenue (YouTube, TikTok, Blogger)</li>
                <li>Sponsorships and brand deals</li>
                <li>Affiliate marketing</li>
                <li>Digital products and courses</li>
                <li>Patreon and membership programs</li>
            </ul>

            <h2>5. Grow Your Audience</h2>
            <p>Engage with your audience, collaborate with other creators, and use SEO to boost discoverability.</p>

            <h2>6. Quality Over Quantity</h2>
            <p>Focus on creating high-quality content rather than posting frequently. Quality builds loyal audiences.</p>

            <h2>Conclusion</h2>
            <p>Content creation is a legitimate way to earn income in Kenya. Start with your passion, be consistent, and monetize once you have an audience.</p>
        `,
    },
    {
        id: 7,
        title: 'Building a Successful YouTube Channel in Kenya',
        slug: 'building-youtube-channel-kenya',
        author: 'David Njoroge',
        date: '2024-04-10',
        category: 'Money Making',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23dc2626" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EYouTube Success%3C/text%3E%3C/svg%3E',
        excerpt: 'Learn how to create engaging content, grow your audience, and monetize your YouTube channel in the Kenyan market.',
        content: `
            <h2>Why YouTube in Kenya?</h2>
            <p>YouTube has become a major platform for content creators in Kenya. With millions of users accessing the platform daily, there's huge potential for creators to build audiences and earn income.</p>

            <h2>1. Choose Your Niche</h2>
            <p>Success on YouTube starts with finding your niche. Popular niches in Kenya include:</p>
            <ul>
                <li>Entertainment and comedy</li>
                <li>Educational content</li>
                <li>Music and dance</li>
                <li>Cooking and recipes</li>
                <li>Technology and gadgets</li>
                <li>Lifestyle and fashion</li>
            </ul>

            <h2>2. Create Quality Content</h2>
            <p>Invest in good equipment and learn basic video editing. Focus on creating content that provides value to your audience.</p>

            <h2>3. Consistent Upload Schedule</h2>
            <p>Upload regularly to keep your audience engaged. Whether it's weekly or bi-weekly, consistency is crucial for growth.</p>

            <h2>4. Optimize for YouTube Algorithm</h2>
            <p>Use compelling thumbnails, titles, and descriptions. Include relevant keywords and engage with your audience in comments.</p>

            <h2>5. Grow Your Channel</h2>
            <p>Promote your videos on social media platforms. Collaborate with other creators and participate in trends.</p>

            <h2>6. Monetization Strategies</h2>
            <ul>
                <li>YouTube Partner Program (ads)</li>
                <li>Sponsorships and brand deals</li>
                <li>Affiliate marketing</li>
                <li>Merchandise sales</li>
                <li>Super Chats and channel memberships</li>
            </ul>

            <h2>Challenges in Kenya</h2>
            <p>Internet connectivity can be inconsistent, so plan your uploads accordingly. Also, consider the local language preferences - Swahili content performs well.</p>

            <h2>Success Stories</h2>
            <p>Many Kenyan creators have built successful channels. Study their content and learn from their strategies.</p>

            <h2>Conclusion</h2>
            <p>Building a YouTube channel requires patience and persistence. Start creating content you're passionate about, and the audience will follow.</p>
        `,
        tags: ['youtube', 'content creation', 'monetization'],
        relatedPosts: [6, 8]
    },
    {
        id: 8,
        title: 'Social Media Marketing: Strategies That Work in Kenya',
        slug: 'social-media-marketing-kenya',
        author: 'Linda Wanjiku',
        date: '2024-04-05',
        category: 'Technology',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%237c3aed" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3ESocial Media%3C/text%3E%3C/svg%3E',
        excerpt: 'Master social media marketing in Kenya. Learn platform-specific strategies and how to engage the local audience effectively.',
        content: `
            <h2>Social Media Landscape in Kenya</h2>
            <p>Social media usage in Kenya is booming. With over 80% of internet users active on social platforms, businesses have a huge opportunity to reach customers.</p>

            <h2>1. Platform Selection</h2>
            <p>Choose platforms based on your target audience:</p>
            <ul>
                <li><strong>Facebook:</strong> Largest user base, good for community building</li>
                <li><strong>Instagram:</strong> Visual content, popular with younger demographics</li>
                <li><strong>Twitter (X):</strong> Real-time conversations and news</li>
                <li><strong>TikTok:</strong> Short videos, massive growth potential</li>
                <li><strong>LinkedIn:</strong> Professional networking and B2B</li>
            </ul>

            <h2>2. Content Strategy</h2>
            <p>Create content that resonates with Kenyan audiences. Use local languages, reference local culture, and address local challenges.</p>

            <h2>3. Community Engagement</h2>
            <p>Respond to comments and messages promptly. Build relationships with your followers and create a sense of community.</p>

            <h2>4. Advertising on Social Media</h2>
            <p>Use targeted advertising to reach specific demographics. Facebook Ads and Instagram Ads offer sophisticated targeting options.</p>

            <h2>5. Influencer Marketing</h2>
            <p>Partner with local influencers who have engaged audiences. This can be more effective than traditional advertising.</p>

            <h2>6. Analytics and Measurement</h2>
            <p>Track your performance using platform analytics. Measure engagement, reach, and conversions to optimize your strategy.</p>

            <h2>Local Considerations</h2>
            <p>Kenya has unique mobile usage patterns. Most users access social media via mobile devices, so optimize for mobile viewing.</p>

            <h2>Challenges and Solutions</h2>
            <p>Internet costs can be high, so create content that loads quickly. Also, be mindful of data costs for your audience.</p>

            <h2>Success Metrics</h2>
            <p>Track engagement rates, follower growth, website traffic from social media, and conversion rates from social campaigns.</p>

            <h2>Conclusion</h2>
            <p>Social media marketing in Kenya requires understanding local preferences and mobile-first strategies. Stay authentic and consistent for best results.</p>
        `,
        tags: ['social media', 'marketing', 'kenya'],
        relatedPosts: [5, 9]
    },
    {
        id: 9,
        title: 'Investing in Real Estate: Opportunities in Kenya',
        slug: 'investing-real-estate-kenya',
        author: 'James Kiprop',
        date: '2024-03-30',
        category: 'Business',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%2316a34a" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EReal Estate%3C/text%3E%3C/svg%3E',
        excerpt: 'Discover profitable real estate investment opportunities in Kenya. Learn about different strategies and how to get started.',
        content: `
            <h2>Real Estate Market in Kenya</h2>
            <p>Kenya's real estate market has shown consistent growth, making it an attractive investment option for both local and international investors.</p>

            <h2>1. Understanding the Market</h2>
            <p>Research different regions in Kenya. Nairobi, Mombasa, and Kisumu are popular investment areas with varying growth potentials.</p>

            <h2>2. Investment Strategies</h2>
            <ul>
                <li><strong>Rental Properties:</strong> Buy and rent out residential or commercial properties</li>
                <li><strong>Land Banking:</strong> Purchase undeveloped land and hold for future development</li>
                <li><strong>REITs:</strong> Invest in Real Estate Investment Trusts for diversification</li>
                <li><strong>Joint Ventures:</strong> Partner with developers on larger projects</li>
            </ul>

            <h2>3. Financing Options</h2>
            <p>Explore different financing options:</p>
            <ul>
                <li>Bank loans</li>
                <li>Sacco loans</li>
                <li>Private lenders</li>
                <li>Real estate crowdfunding</li>
            </ul>

            <h2>4. Due Diligence</h2>
            <p>Always conduct thorough due diligence. Check property titles, survey documents, and legal status before investing.</p>

            <h2>5. Property Management</h2>
            <p>If you're investing in rental properties, consider hiring a property management company to handle day-to-day operations.</p>

            <h2>6. Tax Implications</h2>
            <p>Understand Kenyan tax laws regarding property ownership, rental income, and capital gains.</p>

            <h2>7. Market Trends</h2>
            <p>Stay informed about market trends. The rise of affordable housing and commercial developments present new opportunities.</p>

            <h2>8. Risk Management</h2>
            <p>Diversify your investments and have contingency plans. Real estate markets can be volatile.</p>

            <h2>Getting Started</h2>
            <p>Start small with your first investment. Learn from experienced investors and consider consulting with real estate professionals.</p>

            <h2>Conclusion</h2>
            <p>Real estate investment can provide long-term wealth building. With proper research and planning, it can be a profitable venture in Kenya.</p>
        `,
        tags: ['real estate', 'investment', 'property'],
        relatedPosts: [1, 2]
    },
    {
        id: 10,
        title: 'Mobile App Development: Create Apps That Sell in Kenya',
        slug: 'mobile-app-development-kenya',
        author: 'Susan Ndungu',
        date: '2024-03-25',
        category: 'Technology',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23ea580c" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-family="sans-serif" fill="white" text-anchor="middle" dy=".3em"%3EMobile Apps%3C/text%3E%3C/svg%3E',
        excerpt: 'Learn how to develop mobile apps that solve real problems in Kenya. From ideation to monetization, complete guide included.',
        content: `
            <h2>Mobile App Market in Kenya</h2>
            <p>With over 90% of internet users accessing the web via mobile devices, Kenya presents a huge opportunity for mobile app developers.</p>

            <h2>1. Identify Market Needs</h2>
            <p>Look for problems that can be solved with mobile apps. Common needs in Kenya include:</p>
            <ul>
                <li>Mobile payment solutions</li>
                <li>E-commerce platforms</li>
                <li>Educational apps</li>
                <li>Health and fitness apps</li>
                <li>Transportation and logistics</li>
                <li>Agriculture and farming apps</li>
            </ul>

            <h2>2. Choose Your Platform</h2>
            <p>Decide whether to develop for Android, iOS, or both. Android has a larger market share in Kenya.</p>

            <h2>3. Development Options</h2>
            <ul>
                <li><strong>Native Development:</strong> Best performance, platform-specific</li>
                <li><strong>Cross-Platform:</strong> React Native, Flutter - cost-effective</li>
                <li><strong>No-Code/Low-Code:</strong> Quick prototyping and MVPs</li>
            </ul>

            <h2>4. Design for Mobile First</h2>
            <p>Keep interfaces simple and intuitive. Consider users with varying literacy levels and data constraints.</p>

            <h2>5. Testing and Quality Assurance</h2>
            <p>Test your app thoroughly on different devices and network conditions. Get feedback from potential users.</p>

            <h2>6. App Store Optimization</h2>
            <p>Optimize your app store listings with relevant keywords, compelling descriptions, and attractive screenshots.</p>

            <h2>7. Monetization Strategies</h2>
            <ul>
                <li>Free with ads</li>
                <li>Freemium model</li>
                <li>One-time purchase</li>
                <li>Subscription model</li>
                <li>In-app purchases</li>
            </ul>

            <h2>8. Marketing Your App</h2>
            <p>Use social media, app review sites, and partnerships to promote your app. Consider influencer marketing.</p>

            <h2>Legal and Regulatory Considerations</h2>
            <p>Ensure compliance with Kenyan data protection laws and app store guidelines.</p>

            <h2>Success Stories</h2>
            <p>Several Kenyan developers have created successful apps. Study their journeys and learn from their experiences.</p>

            <h2>Conclusion</h2>
            <p>Mobile app development in Kenya has huge potential. Focus on solving real problems and providing value to users.</p>
        `,
        tags: ['mobile apps', 'development', 'technology'],
        relatedPosts: [3, 5]
    }
];

// ===== Theme Toggle =====
function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeButton();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton();
}

function updateThemeButton() {
    const themeToggle = document.querySelector('.theme-toggle');
    const theme = document.documentElement.getAttribute('data-theme');
    if (themeToggle) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// ===== Mobile Menu Toggle =====
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }
}

// ===== Active Navigation Link =====
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== Blog Search Functionality =====
function initBlogSearch() {
    const searchInput = document.querySelector('#blog-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterBlogPosts(query);
    });
}

function filterBlogPosts(query) {
    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
    );
    renderBlogPosts(filteredPosts);
}

// ===== Render Blog Posts =====
function renderBlogPosts(posts = blogPosts) {
    const blogContainer = document.querySelector('.blog-list');
    if (!blogContainer) return;

   

    blogContainer.innerHTML = posts.map(post => `
        <article class="card">
            <img src="${post.image}" alt="${post.title}" class="card-image">
            <div class="card-body">
                <div class="card-meta">
                    <span>📅 ${formatDate(post.date)}</span>
                    <span>✍️ ${post.author}</span>
                </div>
                <a href="post-${post.id}.html"><h3 class="card-title">${post.title}</h3></a>
                <p class="card-description">${post.excerpt}</p>
                <div class="card-footer">
                    <span class="category-tag">${post.category}</span>
                    <a href="post-${post.id}.html" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </article>
    `).join('');
}

// ===== Format Date =====
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ===== Render Featured Posts on Home =====
function renderFeaturedPosts() {
    const featuredContainer = document.querySelector('.featured-posts-content');
    if (!featuredContainer) return;

    const featured = blogPosts.slice(0, 3);

    featuredContainer.innerHTML = featured.map((post, index) => `
        <div class="post-card ${index % 2 === 1 ? 'reverse' : ''}">
            <div>
                <span class="category-tag">${post.category}</span>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div style="margin-top: 1rem;">
                    <a href="post-${post.id}.html" class="btn btn-primary">Read Article</a>
                </div>
            </div>
            <img src="${post.image}" alt="${post.title}" style="width: 100%; border-radius: 0.75rem;">
        </div>
    `).join('');
}

// ===== Render Categories =====
function renderCategories() {
    const categoryContainer = document.querySelector('.categories-content');
    if (!categoryContainer) return;

    const categories = [...new Set(blogPosts.map(p => p.category))];

    categoryContainer.innerHTML = `
        <div class="grid grid-4">
            ${categories.map(cat => `
                <div class="card">
                    <div class="card-body" style="padding: 2rem; text-align: center;">
                        <h3>${cat}</h3>
                        <p>${blogPosts.filter(p => p.category === cat).length} Articles</p>
                        <a href="blog.html?category=${cat}" class="btn btn-outline">Explore</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ===== Render Single Post =====
function renderSinglePost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);

   

    // Update page title
    document.title = `${post.title} - Make Money Online Kenya`;

    // Render header
    const headerContainer = document.querySelector('.post-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <div class="container">
                <div class="breadcrumbs">
                    <a href="index.html">Home</a>
                    <span>/</span>
                    <a href="blog.html">Blog</a>
                    <span>/</span>
                    <span>${post.title}</span>
                </div>
                <h1>${post.title}</h1>
                <div class="post-meta">
                    <div class="post-meta-item">👤 ${post.author}</div>
                    <div class="post-meta-item">📅 ${formatDate(post.date)}</div>
                    <div class="post-meta-item">📁 ${post.category}</div>
                </div>
            </div>
        `;
    }

    // Render content
    const contentContainer = document.querySelector('.post-content');
    if (contentContainer) {
        const relatedPostsHTML = post.relatedPosts.map(relatedId => {
            const relatedPost = blogPosts.find(p => p.id === relatedId);
            return `
                <article class="card">
                    <img src="${relatedPost.image}" alt="${relatedPost.title}" class="card-image">
                    <div class="card-body">
                        <h3 class="card-title">${relatedPost.title}</h3>
                        <p class="card-description">${relatedPost.excerpt}</p>
                        <a href="post-${relatedPost.id}.html" class="btn btn-primary">Read More</a>
                    </div>
                </article>
            `;
        }).join('');

        contentContainer.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="post-image">
            ${post.content}
            
            <!-- AD SPACE: In-Article Advertisement -->
            <div class="ad-space">
                <!-- Google AdSense Ad Code Here -->
                <!-- Paste your Google AdSense code here. Example: <ins class="adsbygoogle"...></ins> -->
                <small>Advertisement</small>
            </div>

            <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>

            <div class="related-posts">
                <h3>📚 Related Articles</h3>
                <div class="grid grid-3">
                    ${relatedPostsHTML}
                </div>
            </div>
        `;
    }
}

// ===== Newsletter Form =====
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        // Show success message
        const button = form.querySelector('button');
        const originalText = button.textContent;
        button.textContent = '✓ Subscribed!';
        button.disabled = true;

        // Reset after 3 seconds
        setTimeout(() => {
            form.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 3000);
    });
}

// ===== Contact Form =====
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validate
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields');
            return;
        }

        // Show success message (in a real app, this would send to a server)
        alert(`Thank you ${data.name}! Your message has been received. We'll get back to you soon.`);
        form.reset();
    });
}

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    updateActiveNavLink();
    initBlogSearch();
    renderFeaturedPosts();
    renderCategories();
    renderSinglePost();
    renderBlogPosts(); // Add this to render blog posts on blog page
    initNewsletterForm();
    initContactForm();

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ===== Attach Event Listeners =====
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// ===== Filter by Category =====
function filterByCategory(category) {
    const filtered = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(p => p.category === category);
    renderBlogPosts(filtered);
}

// ===== Scroll to Top Button =====
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
