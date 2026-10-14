import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiPython,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGithubactions,
  SiCloudflare,
} from 'react-icons/si';
import resume from '../assets/Matthew Bronstein-Condensed-Resume-10_14_26.pdf';

export { resume };

export const socials = {
  email: 'mbronstein1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/matthew-bronstein-a9230462/',
  github: 'https://github.com/mbronstein1',
};

// A color of null renders the icon in the current text color (for black logos that disappear in dark mode)
export const stack = [
  {
    group: 'Frontend',
    tools: [
      { name: 'TypeScript', icon: SiTypescript, color: 'rgb(49,120,198)' },
      { name: 'JavaScript', icon: SiJavascript, color: 'rgb(232,212,77)' },
      { name: 'React', icon: FaReact, color: 'rgb(96,219,251)' },
      { name: 'Redux Toolkit', icon: SiRedux, color: 'rgb(118,73,189)' },
      { name: 'Next.js', icon: SiNextdotjs, color: null },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'rgb(6,182,212)' },
    ],
  },
  {
    group: 'Backend & Data',
    tools: [
      { name: 'Node.js', icon: FaNodeJs, color: 'rgb(81,153,66)' },
      { name: 'Express', icon: SiExpress, color: null },
      { name: 'GraphQL', icon: SiGraphql, color: 'rgb(239,0,151)' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'rgb(65,105,225)' },
      { name: 'Prisma', icon: SiPrisma, color: null },
      { name: 'Python', icon: SiPython, color: 'rgb(55,118,171)' },
    ],
  },
  {
    group: 'Infrastructure',
    tools: [
      { name: 'Docker', icon: SiDocker, color: 'rgb(36,150,237)' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: 'rgb(32,136,255)' },
      { name: 'Cloudflare', icon: SiCloudflare, color: 'rgb(243,128,32)' },
    ],
  },
];

export const experience = [
  {
    role: 'Head of Product and Technology',
    dates: 'Oct 2026 – Present',
    points: [
      'Lead a team of 8 developers while owning platform architecture and technical direction.',
      'Technical point of contact for prospective clients through technical diligence and IT/security reviews.',
    ],
  },
  {
    role: 'Lead Platform Engineer',
    dates: 'Jan 2025 – Oct 2026',
    points: [
      'Owned end-to-end architecture across all containerized services and the database.',
      'Planned and shipped a new product, coordinating the web and ML teams from handoff through implementation.',
      'Built the CI/CD pipelines, remote access, and server provisioning for on-prem deployments.',
    ],
  },
  {
    role: 'Full Stack Developer',
    dates: 'Jan 2024 – Jan 2025',
    points: [
      'Built real-time safety and yard management features with notifications and Slack alerts.',
      'Migrated the backend from JavaScript to TypeScript and introduced Prisma for versioned migrations.',
    ],
  },
  {
    role: 'Frontend / React Developer',
    dates: 'Jun 2023 – Jan 2024',
    points: ['Built a canvas-based zone-drawing tool and an object-tracking carousel.', 'Improved performance through memoization and refactoring.'],
  },
];

export const caseStudies = [
  {
    id: 'integration',
    title: 'Two-way integration with external systems',
    period: 'Lead Platform Engineer · 2025–2026',
    problem:
      "A new product needed to exchange data with clients' own warehouse management systems (WMS), but it runs on on-prem servers that outside systems have no direct way to reach.",
    work: [
      'Planned the product and coordinated the web and ML teams from handoff through implementation.',
      'Built a two-way data sync: external systems send in work and receive the results back.',
      'Unblocked the integration by routing external requests to on-prem services through Cloudflare Tunnels secured with service tokens.',
    ],
    outcome: 'Client systems integrate securely with on-prem services, with no inbound ports opened.',
    flow: ['External WMS', 'Cloudflare + service token', 'Tunnel', 'On-prem service'],
    tags: ['TypeScript', 'Node.js', 'Cloudflare Tunnels', 'REST'],
  },
  {
    id: 'edge',
    title: 'Edge deployments & remote access',
    period: 'Lead Platform Engineer · 2025–2026',
    problem:
      'The platform runs on on-prem servers spread across many separate networks. Each one has to be secure, consistent, and reachable for support without juggling IP addresses.',
    work: [
      'Provisioned and hardened edge servers: Secure Boot and TPM, LUKS disk encryption with Clevis auto-unlock, and locked-down SSH.',
      'Designed remote access with cloudflared and Cloudflare SSH applications, and own the cloud configuration for every deployment.',
      'Documented the provisioning process so any site can be set up and handed off the same way.',
    ],
    outcome: 'Instant access to every server without needing IP addresses, and a repeatable setup for each new deployment.',
    flow: ['Engineer', 'Cloudflare Access (SSH)', 'cloudflared', 'Edge server'],
    tags: ['Linux', 'Cloudflare Zero Trust', 'LUKS / TPM', 'SSH'],
  },
  {
    id: 'cicd',
    title: 'CI/CD for independently versioned services',
    period: 'Lead Platform Engineer · 2025–2026',
    problem: 'The platform is made of many containerized services, and each one needed to be built, versioned, and released on its own schedule.',
    work: [
      'Built GitHub Actions workflows that build, tag, and publish Docker images to GitHub Container Registry.',
      'Generated changelogs automatically from conventional commits.',
      'Lead code review and release readiness for the team.',
    ],
    outcome: 'Each service ships with its own version and changelog.',
    flow: ['Conventional commits', 'GitHub Actions', 'Docker build + tag', 'GHCR'],
    tags: ['GitHub Actions', 'Docker', 'GHCR'],
  },
  {
    id: 'zones',
    title: 'Canvas zone-drawing tool',
    period: 'Frontend / React Developer · 2023–2024',
    problem: 'Detection models need to know which parts of each camera view matter, so users needed a way to draw those zones themselves.',
    work: [
      'Built a canvas-based tool for drawing detection zones directly on camera frames.',
      "Built an object-tracking carousel that draws vector paths between an object's previous positions.",
      'Improved rendering performance with component memoization and refactoring.',
    ],
    outcome: 'Users can set up and adjust detection zones from the web app.',
    flow: null,
    tags: ['React', 'Canvas API', 'TypeScript'],
  },
];
