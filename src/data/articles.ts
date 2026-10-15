import { Article, LiveUpdateItem, PollData } from '../types';

export const ARTICLES: Record<string, Article> = {
  'lead-women-administration': {
    id: 'lead-women-administration',
    title: 'High-Ranking Women Are Leaving the Trump Administration',
    deck: 'In the president’s second term, those heading for the exits are female officials.',
    author: 'Maggie Haberman and Katie Rogers',
    authorRole: 'White House Correspondents',
    readTime: '5 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'U.S. Politics',
    kicker: 'White House Transition',
    isFree: true,
    image: '/src/assets/images/nyt_administration_women_1792029153122.jpg',
    imageCaption: 'Tierney L. Cross/The New York Times',
    commentCount: 428,
    pullQuote: 'The departures leave fewer women in high-level operational meetings than at any point since the earliest weeks of 2017.',
    pullQuoteAuthor: 'Senior Administration Official',
    body: [
      'WASHINGTON — A quiet yet sweeping turnover of senior personnel in President Trump’s second term has begun to reshape the upper ranks of the executive branch, with female officials departing key leadership posts across several cabinet agencies and the West Wing.',
      'Over the past six weeks, four cabinet-level deputies and at least nine deputy assistant secretaries have submitted resignations or transferred to outside political action committees, according to three administration aides familiar with internal staffing records.',
      'The wave of departures spans national security, domestic policy councils, and the press shop. While routine turnover is customary as an administration approaches midterm deadlines, the concentration of departures among top-ranking women has sparked discussions within Republican congressional circles about operational continuity.',
      'Several of the officials who departed privately cited internal restructuring led by newly appointed White House management directors, while others pointed to lucrative private sector opportunities and exhaustion following demanding legislative pushes in the spring.',
      '“Every administration experiences natural attrition as policy priorities crystallize,” a White House spokesperson said in a statement on Tuesday evening. “The president continues to assemble a deeply dedicated team committed to executing the mandate delivered by American voters.”',
      'The trend comes against the backdrop of shifting cabinet dynamics, where newly empowered policy advisers have consolidated decision-making around an increasingly centralized West Wing leadership group.'
    ]
  },
  'kimberly-guilfoyle': {
    id: 'kimberly-guilfoyle',
    title: 'The Steep Rise and Sudden Fall of Kimberly Guilfoyle',
    deck: 'From courtroom prosecutor to fixture of conservative media and political campaigns, her tenure came to a sudden halt amidst West Wing restructuring.',
    author: 'Jonathan Swan and Annie Karni',
    authorRole: 'National Political Reporters',
    readTime: '4 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'Politics',
    kicker: 'Personnel & Influence',
    image: '/src/assets/images/nyt_kimberly_guilfoyle_portrait_1792031958434.jpg',
    imageCaption: 'Kimberly Guilfoyle speaking at a campaign event in Palm Beach, Fla. (Doug Mills/The New York Times)',
    commentCount: 519,
    body: [
      'WASHINGTON — For nearly a decade, Kimberly Guilfoyle occupied a unique perch at the intersection of media celebrity, donor mobilization, and presidential politics.',
      'Her transition from a high-profile television legal analyst to a key strategist in national fundraising was marked by high-energy convention speeches and close ties to the Trump family. Yet in recent weeks, her role within the formal campaign apparatus and external surrogate operations was abruptly curtailed.',
      'Internal sources describe a friction point centered on campaign event scheduling and competing priorities among regional finance chairs. As staff alignments shifted toward midterm battleground operations, her direct portfolio was reassigned to a younger cohort of digital outreach operatives.',
      'Colleagues who have worked alongside Ms. Guilfoyle note that she remains a potent draw for grass-roots donor rallies in sunbelt states, though her presence in formal high-level strategy sessions has noticeably ceased.'
    ]
  },
  'press-secretary-law': {
    id: 'press-secretary-law',
    title: 'Trump’s New Press Secretary: Not-Quite Attorney at Law',
    deck: 'Katie Zacharia told The New York Times that the confusion over her legal credentials is the result of one big misunderstanding.',
    author: 'Michael S. Schmidt and Glenn Thrush',
    authorRole: 'Investigative Reporters',
    readTime: '4 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'U.S. News',
    kicker: 'White House Press Corps',
    commentCount: 312,
    body: [
      'WASHINGTON — When Katie Zacharia stepped to the lectern for her inaugural White House press briefing, introduction materials circulated by the transition team described her as an experienced litigator and constitutional attorney.',
      'However, state bar association records indicate that while Ms. Zacharia completed her legal education and passed the multistate professional ethics examination, her formal admission to the bar in Virginia and the District of Columbia remained pending administrative review.',
      'In an interview with The New York Times on Wednesday morning, Ms. Zacharia sought to dispel allegations that she had deliberately overstated her credentials.',
      '“There was no intent to misrepresent my background,” Ms. Zacharia said. “The paperwork regarding reciprocity requirements was caught in a backlog, and draft biography sheets were inadvertently published before final verification. I am proud of my legal training and focused on briefing the press on the administration’s agenda.”'
    ]
  },
  'ukraine-satellite-escalation': {
    id: 'ukraine-satellite-escalation',
    title: 'Ukraine’s Exposure Grows as Satellite Use Is Restricted and Russia Escalates',
    deck: 'A huge aerial attack cut power to 600,000 residents in Kyiv, intensifying fears over infrastructure fragility heading into the coldest months.',
    author: 'Carlotta Gall and Marc Santora',
    authorRole: 'Reporting from Kyiv',
    readTime: '6 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'World',
    kicker: 'Russia-Ukraine War',
    image: '/src/assets/images/nyt_kyiv_power_winter_1792029176527.jpg',
    imageCaption: 'A blackout envelops central Kyiv following missile strikes on transmission stations. (Finbarr O’Reilly for The New York Times)',
    commentCount: 684,
    pullQuote: 'With temperatures plunging toward freezing, grid engineers are forced to ration electricity across rotating blocks of two hours.',
    pullQuoteAuthor: 'Kyiv Energy Grid Authority',
    body: [
      'KYIV, Ukraine — Waves of Iranian-designed strike drones and cruise missiles struck sub-stations in northern and central Ukraine early Wednesday morning, leaving more than 600,000 residents in the capital without central heating and electricity.',
      'The assault coincided with tightened restrictions on commercial low-Earth orbit satellite feeds that Ukrainian defense battalions have long relied on for artillery targeting and defensive radar correlation. Recent contractual limits placed by satellite operators have constrained bandwidth across the frontline.',
      'Municipal workers in Kyiv scrambled through freezing rain to connect diesel generators to municipal water pumps and hospitals. In the Darnytskyi district, clouds of steam rose into the twilight sky where high-voltage transformers had exploded.',
      '“Our air defenses intercepted eighteen incoming munitions, but the density of the swarm overwhelmed local electronic countermeasures,” said a senior Ukrainian air force officer stationed outside Zhulyany airport.',
      'European defense ministers gathered in Brussels on Wednesday afternoon to discuss emergency deliveries of mobile substations and spare circuit breakers, warning that without immediate equipment replacements, Ukraine’s electrical grid faces systemic degradation.'
    ]
  },
  'diesel-deal-putin': {
    id: 'diesel-deal-putin',
    title: 'Why Trump’s Diesel Deal With Putin Won’t Knock Down High Prices',
    deck: 'Energy market analysts point to refining capacity choke points and global freight logistics that blunt any rapid relief at American gas pumps.',
    author: 'Stanley Reed and Clifford Krauss',
    authorRole: 'Energy Business Correspondents',
    readTime: '4 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'Business',
    kicker: 'Global Energy Markets',
    commentCount: 290,
    body: [
      'HOUSTON — While the White House announced a preliminary agreement intended to ease restrictions on non-crude Russian distillates in exchange for diplomatic overtures, energy commodity traders have greeted the announcement with skepticism.',
      'Crude price benchmarks dipped by barely 40 cents per barrel in London on Wednesday, as industry analysts pointed to persistent bottlenecks in Gulf Coast refineries and maritime insurance sanctions that cannot be lifted with a single executive stroke.',
      '“Refining margins for ultra-low sulfur diesel are driven by global plant uptime, not just headline volume promises,” said Rachel Vance, chief commodity strategist at Atlantic Energy Partners in New York.'
    ]
  },
  'us-ukraine-intel': {
    id: 'us-ukraine-intel',
    title: 'The U.S. Continues to Provide Intelligence to Ukraine, Officials Say',
    deck: 'Despite public statements hinting at policy shifts, allied surveillance aircraft and orbital imagery feeds remain active in Eastern Europe.',
    author: 'Julian E. Barnes and Helene Cooper',
    authorRole: 'National Security Reporters',
    readTime: '3 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'World',
    kicker: 'Intelligence & Defense',
    commentCount: 174,
    body: [
      'WASHINGTON — U.S. and NATO surveillance assets continue to provide near-real-time radar and early warning tracking to Ukrainian command posts, according to three senior defense officials who spoke on condition of anonymity.',
      'While political rhetoric during the ongoing election cycle has raised questions regarding American commitment, tactical data-sharing agreements authorized under existing statutory provisions remain uninterrupted.',
      'RC-135 reconnaissance aircraft and unmanned Global Hawk drones maintain continuous orbits over the Black Sea and Romanian airspace, supplying data on long-range missile launches originating from Crimea and southern Russia.'
    ]
  },
  'texas-senate-race': {
    id: 'texas-senate-race',
    title: 'Texas Senate Race Tightens, Polls Show, Even as Talarico Keeps His Edge',
    deck: 'Voters in suburban Dallas and Austin describe an unpredictable political environment as early voting draws near.',
    author: 'J. David Goodman and Nate Cohn',
    authorRole: 'Texas Bureau Chief & Chief Political Analyst',
    readTime: '5 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'U.S. Politics',
    kicker: 'Midterm Briefing',
    image: '/src/assets/images/nyt_texas_senate_rally_1792031986447.jpg',
    imageCaption: 'Supporters gather at a campaign rally outside the state Capitol in Austin, Texas. (Tamir Kalifa for The New York Times)',
    commentCount: 841,
    pullQuote: 'The battle for Texas is no longer fought on the rural plains, but in the cul-de-sacs of Collin, Williamson, and Fort Bend counties.',
    pullQuoteAuthor: 'The New York Times / Siena College Poll',
    body: [
      'AUSTIN, Texas — For decades, Texas Democrats have chased the elusive promise of a statewide victory. With less than a month until the 2026 midterm election, representative James Talarico has built a fragile 1.8-point lead over incumbent Republican Ken Paxton, according to the latest New York Times / Siena College polling average.',
      'The contest represents one of the most expensive and closely watched Senate showdowns in the country, drawing more than $140 million in combined campaign advertising.',
      'Mr. Talarico, a 37-year-old former public school teacher and state lawmaker who often weaves progressive theology into his campaign speeches, has made substantial inroads among college-educated independent voters in suburbs surrounding Dallas, Houston, and Austin.',
      'Mr. Paxton, the state’s three-term attorney general who survived a dramatic impeachment trial in 2023, maintains an unyielding grip on the state’s rural base and has mounted a fierce counter-offensive focused on border security and judicial appointments.',
      '“Early voting begins next Monday, and voter turnout models show historic engagement among younger and newly registered Texans,” said polling director Maria Gonzalez in Austin. “Every percentage point in the collar counties will determine the outcome.”'
    ]
  },
  'opinion-david-wallace-wells': {
    id: 'opinion-david-wallace-wells',
    title: 'The Clean Energy Transition Has Already Won, Whether Politicians Like It or Not',
    deck: 'Economic gravity and plummeting battery curves are dictating the grid faster than ideological headwinds can undo them.',
    author: 'David Wallace-Wells',
    authorRole: 'Opinion Columnist',
    authorInitials: 'DWW',
    readTime: '5 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'Opinion',
    kicker: 'Guest Columnist',
    commentCount: 652,
    body: [
      'Across the sun-baked plains of West Texas, utility-scale solar panels and battery storage banks are being installed at rates that mock the solemn policy speeches delivered inside the Washington Beltway.',
      'Whatever political storms brew in executive suites or congressional hearing rooms, the physical reality of energy capital has crossed an irreversible threshold: it is now cheaper to build and deploy renewable generation than to keep legacy thermal plants running.',
      'Grid operators in ERCOT and MISO are not making decisions based on green virtue; they are acting on cold arithmetic. In 2025 alone, battery storage additions exceeded all fossil fuel capacity additions combined in seven major regional markets.',
      'The political resistance we witness today is not the birth of a counter-revolution. It is the noisy, desperate rearguard defense of a capital regime that knows its thermodynamic monopoly has come to an end.'
    ]
  },
  'opinion-carlos-lozada': {
    id: 'opinion-carlos-lozada',
    title: 'The Words We Choose When Democracy Feels Unsettled',
    deck: 'How shifting civic lexicons reshape constitutional norms before the courts or ballots even register the change.',
    author: 'Carlos Lozada',
    authorRole: 'Opinion Columnist',
    authorInitials: 'CL',
    readTime: '4 MIN READ',
    date: 'Oct. 14, 2026',
    section: 'Opinion',
    kicker: 'Ideas & Letters',
    commentCount: 388,
    body: [
      'In moments of political turbulence, the first casualty is rarely the rule of law itself, but the shared vocabulary that makes legal debate mutually intelligible.',
      'Notice how swiftly words like “emergency,” “prerogative,” and “mandate” expand their borders in public discourse. When legal precedents are spoken of not as binding compacts but as temporary speed bumps, the democratic architecture has already begun to absorb the shock.',
      'Language is not a passive mirror of our political health; it is the terrain upon which consent is negotiated or surrendered. If we cannot agree on what constitutes a constitutional boundary, we cannot defend it when it is crossed.'
    ]
  }
};

export const LIVE_WAR_UPDATES: LiveUpdateItem[] = [
  {
    id: 'lw-1',
    timestamp: '28m ago',
    tag: 'Escalating Assaults',
    headline: 'Emergency crews restore partial power to central hospitals in Kyiv',
    content: 'Following early morning drone strikes that knocked out three primary substations, municipal engineers managed to re-route high-voltage links to four major trauma centers in the Pechersk district.',
    reporter: 'Marc Santora in Kyiv'
  },
  {
    id: 'lw-2',
    timestamp: '1h ago',
    tag: 'Wins for Putin',
    headline: 'Russian forces claim marginal advance near Toretsk defensive line',
    content: 'Satellite imagery confirmed heavy artillery barrages along the eastern salient, forcing Ukrainian forward scouts into prepared second-tier trenches.',
    reporter: 'Eric Schmitt in Washington'
  },
  {
    id: 'lw-3',
    timestamp: '2h ago',
    tag: 'Russian Oil Deal',
    headline: 'Baltic states voice alarm over proposed exemptions on maritime oil shipping',
    content: 'Diplomats from Estonia, Latvia, and Lithuania called an urgent consultative session in Riga to protest draft measures that would permit certain non-crude shipments through third-party flags.',
    reporter: 'Steven Erlanger in Brussels'
  },
  {
    id: 'lw-4',
    timestamp: '3h ago',
    tag: 'Escalating Assaults',
    headline: 'Ukrainian long-range drones strike fuel depot in Bryansk Oblast',
    content: 'Plumes of black smoke were visible across the border after automated loitering munitions struck a storage cluster feeding Russian armored units.',
    reporter: 'Carlotta Gall in Kyiv'
  }
];

export const TEXAS_POLL_DATA: PollData = {
  race: '2026 Texas U.S. Senate Election',
  lastUpdated: 'Wednesday, Oct. 14, 2026 (Updated 2:00 PM ET)',
  marginOfError: '± 2.4 percentage points',
  candidates: [
    {
      name: 'James Talarico (D)',
      party: 'D',
      percentage: 48.6,
      change: '+1.2% this month',
      color: '#326891'
    },
    {
      name: 'Ken Paxton (R)',
      party: 'R',
      percentage: 46.8,
      change: '-0.8% this month',
      color: '#b91c1c'
    }
  ],
  history: [
    { date: 'Aug 1', dem: 45.2, rep: 48.4 },
    { date: 'Aug 15', dem: 46.0, rep: 48.1 },
    { date: 'Sep 1', dem: 46.8, rep: 47.9 },
    { date: 'Sep 15', dem: 47.5, rep: 47.6 },
    { date: 'Oct 1', dem: 48.1, rep: 47.2 },
    { date: 'Oct 14', dem: 48.6, rep: 46.8 }
  ],
  keyCounties: [
    { county: 'Collin County (Suburban Dallas)', talarico: 49.2, paxton: 48.5, status: 'Dem Lead (+0.7%)' },
    { county: 'Williamson County (Suburban Austin)', talarico: 53.1, paxton: 44.8, status: 'Dem Lead (+8.3%)' },
    { county: 'Fort Bend County (Suburban Houston)', talarico: 54.4, paxton: 43.9, status: 'Dem Lead (+10.5%)' },
    { county: 'Montgomery County (North Houston)', talarico: 34.2, paxton: 63.8, status: 'GOP Stronghold' },
    { county: 'Lubbock County (West Texas)', talarico: 31.0, paxton: 67.2, status: 'GOP Stronghold' }
  ]
};
