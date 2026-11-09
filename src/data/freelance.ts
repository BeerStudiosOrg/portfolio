export interface ServiceModule {
  id: string;
  code: string;
  track: 'gameplay' | 'systems';
  title: string;
  tagline: string;
  hook: string;
  deliverables: string[];
  proofLinks: {
    label: string;
    sublabel: string;
    href: string;
  }[];
  turnaround: string;
  pricingNote: string;
  inquirySubject: string;
}

export interface CapabilityItem {
  title: string;
  track: 'gameplay' | 'systems';
  summary: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

export const FREELANCE_META = {
  pageTitle: 'Freelance & Contract Engineering | Beerkanwar · Beer Studios',
  description:
    'Scoped Unity (C#) gameplay architecture, custom physics, server-authoritative NGO multiplayer, ML-Agents, and performance optimization contracts.',
  availability: '10–20 hrs/week',
  milestones: 'Fixed-Scope Milestones',
  retainers: 'Weekly Scope on Request',
  delivery: 'Clean Git PRs & Tested Code',
};

export const SERVICE_MODULES: ServiceModule[] = [
  {
    id: 'service-gameplay-input',
    code: 'MODULE #01',
    track: 'gameplay',
    title: 'Modular Gameplay & Input Systems',
    tagline: 'Architecture · Interaction · Controls',
    hook: 'Decoupled C# event architectures, polymorphic interaction systems, and runtime-rebindable Keyboard/Gamepad/Touch controls.',
    deliverables: [
      'Polymorphic interaction station hierarchies (eliminating central type-switches)',
      'Unity New Input System wrapper with runtime JSON rebinding (Keyboard + Gamepad)',
      'Decoupled static C# event busses with leak-free teardown (ResetStaticDataManager)',
      'Mobile touch-swipe detection with dominant-axis flattening & input buffering',
    ],
    proofLinks: [
      {
        label: 'Kitchen Chaos',
        sublabel: 'BaseCounter.cs, GameInput.cs',
        href: '/projects/kitchen-chaos/',
      },
      {
        label: 'Snake',
        sublabel: 'InputReader.cs',
        href: '/projects/snake/',
      },
    ],
    turnaround: '1–2 days typical scope',
    pricingNote: 'Custom quote per scope',
    inquirySubject: 'Freelance Inquiry: Modular Gameplay & Input Systems',
  },
  {
    id: 'service-physics-math',
    code: 'MODULE #02',
    track: 'gameplay',
    title: 'Custom Physics, Vector Math & 2D/3D Mechanics',
    tagline: 'Kinematics · Destructibles · Geometry',
    hook: 'Custom raycast/capsule-cast controllers, destructible Tilemap systems, and jitter-free turret/vision math.',
    deliverables: [
      'CapsuleCast axis-sliding movement controllers (resolving diagonal wall snagging)',
      'Destructible Tilemap grid algorithms with radial blast falloff & coordinate transforms',
      'Jitter-free 2D/3D field-of-view, line-of-sight raycasts & turret tracking math',
      'Dynamic orthographic aspect-ratio camera framing for arbitrary mobile displays',
    ],
    proofLinks: [
      {
        label: 'Bomb Massacre',
        sublabel: 'DestroyTilesInRadius',
        href: '/projects/bomb-massacre/',
      },
      {
        label: 'Maths & Physics Playground',
        sublabel: 'TurretLogic.cs, EnemyVision.cs',
        href: '/projects/maths-physics-playground/',
      },
    ],
    turnaround: '2–3 days typical scope',
    pricingNote: 'Custom quote per scope',
    inquirySubject: 'Freelance Inquiry: Custom Physics, Vector Math & Mechanics',
  },
  {
    id: 'service-multiplayer-ai',
    code: 'MODULE #03',
    track: 'systems',
    title: 'Server-Authoritative Multiplayer (NGO) & Game AI',
    tagline: 'Netcode · Replication · Machine Learning',
    hook: 'Cheat-resistant RPC move validation, NetworkVariable state sync, and Unity ML-Agents (PPO) training pipelines.',
    deliverables: [
      'Server-authoritative RPC validation & NetworkVariable state synchronization',
      'Unity Netcode for GameObjects (NGO) match loops, turn orchestration & disconnect safety',
      'Unity ML-Agents (PPO) reinforcement learning gym setup, observation sensors & reward shaping',
      'Autonomous bot heuristics & anti-desynchronization reconciliation',
    ],
    proofLinks: [
      {
        label: 'Tic-Tac-Toe Multiplayer',
        sublabel: 'GameManager.cs (NGO RPCs)',
        href: '/projects/tic-tac-toe-multiplayer/',
      },
      {
        label: 'FlappyBirdRL',
        sublabel: 'BirdAgent.cs (PPO Gym)',
        href: '/projects/flappy-bird-rl/',
      },
    ],
    turnaround: '3–5 days typical scope',
    pricingNote: 'Custom quote per scope',
    inquirySubject: 'Freelance Inquiry: Server-Authoritative Multiplayer & Game AI',
  },
  {
    id: 'service-performance-fixes',
    code: 'MODULE #04',
    track: 'systems',
    title: 'Performance Profiling, Memory Leak Fixes & HTML5 Ports',
    tagline: 'Optimization · Low-GC · WebGL/Phaser',
    hook: 'O(1) data structure optimization, object pooling, MaterialPropertyBlock batching, cross-scene static delegate cleanup, and Phaser web games.',
    deliverables: [
      'Static event memory-leak elimination & cross-scene delegate cleanup audits',
      'Zero-allocation custom object pools & dual-structure O(1) tick collision lookups',
      'Draw call batching via MaterialPropertyBlock & GPU instancing optimizations',
      'HTML5/WebGL game porting, Phaser 3 game builds & touch responsiveness tuning',
    ],
    proofLinks: [
      {
        label: 'Geometry Survival',
        sublabel: 'EnemyHealth.cs (Object Pooling)',
        href: '/projects/geometry-survival/',
      },
      {
        label: 'Snake',
        sublabel: 'SnakeController.cs (O(1) Structures)',
        href: '/projects/snake/',
      },
      {
        label: 'Aicade Experience',
        sublabel: '21 Shipped Commercial Web Games',
        href: '/#quests',
      },
    ],
    turnaround: '2–4 days typical scope',
    pricingNote: 'Custom quote per scope',
    inquirySubject: 'Freelance Inquiry: Performance Profiling & HTML5 Ports',
  },
];

export const FREELANCE_CAPABILITIES: CapabilityItem[] = [
  {
    title: 'Gameplay & Systems',
    track: 'gameplay',
    summary:
      'State machines, ScriptableObject data pipelines, Unity New Input System (runtime JSON rebinding), and custom physics/math controllers.',
  },
  {
    title: 'Multiplayer & AI',
    track: 'systems',
    summary:
      'Server-authoritative Unity Netcode for GameObjects (NGO) turn/match orchestration, Unity ML-Agents (PPO) training, and environment setup.',
  },
  {
    title: 'Optimization & Fixes',
    track: 'systems',
    summary:
      'Object pooling, draw-call batching (MaterialPropertyBlock), static event memory-leak audits, and Android/WebGL build troubleshooting.',
  },
  {
    title: 'Engagement Models',
    track: 'gameplay',
    summary:
      'Fixed-scope milestones or weekly retainers tailored to project complexity, team workflow, and target ship dates. Quotes provided after scope review.',
  },
];

export const ENGAGEMENT_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Share Scope & Engine Context',
    detail:
      'Send your target Unity/Phaser version, current repo state, problem statement, and desired timeline to receive a tailored milestone breakdown.',
  },
  {
    step: '02',
    title: 'Clean Milestone PRs',
    detail:
      'Work is delivered directly via documented commits or pull requests on isolated branches, tested against edge cases and zero-leak scene reloads.',
  },
  {
    step: '03',
    title: 'Review & Clean Handoff',
    detail:
      'Each delivery includes inline architecture notes, inspector setup steps, and post-handoff verification so your team can extend it cleanly.',
  },
];

