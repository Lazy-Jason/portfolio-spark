export interface Project {
  id: string;
  title: string;
  role: string;
  highlights: string[];
  image: string;
  tags: string[];
  link: string;
  featured?: boolean;
  type: string;
  description?: string;
  technicalDetails?: string[];
}

export const featuredProjects: Project[] = [
  {
    id: "slime-slinger",
    title: "SLIME SLINGER",
    role: "Gameplay Programmer",
    highlights: [
      "Led core gameplay systems development",
      "Built modular ability & combat system",
      "Implemented AI behaviour trees",
      "Optimized for 60fps on target hardware",
    ],
    image: "https://img.itch.zone/aW1nLzIxMjA3NzI1LnBuZw==/original/w25n7Q.png",
    tags: ["Unreal Engine", "C++", "Blueprints"],
    link: "#",
    featured: true,
    type: "Action Adventure RPG",
    description: "A fast-paced action adventure RPG featuring slime-based combat mechanics and a unique progression system.",
    technicalDetails: [
      "Designed and implemented a modular ability system using Unreal's Gameplay Ability System",
      "Created AI behaviour trees for enemy NPCs with dynamic difficulty scaling",
      "Optimized particle systems and physics calculations for consistent 60fps performance",
      "Built a save/load system with automatic checkpointing",
    ],
  },
  {
    id: "frog-wood",
    title: "Frog Wood",
    role: "Gameplay Programmer",
    highlights: [
      "Designed dimensional traversal mechanics",
      "Created player movement & physics",
      "Built environmental interaction system",
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    type: "3D Platformer",
    description: "A whimsical 3D platformer where players navigate between dimensions to solve puzzles and overcome obstacles.",
    technicalDetails: [
      "Implemented smooth character controller with variable jump height and coyote time",
      "Created dimensional shift mechanic with visual transitions between worlds",
      "Built physics-based interaction system for environmental puzzles",
    ],
  },
  {
    id: "miquellas-end",
    title: "MIQUELLA'S END",
    role: "Solo Developer",
    highlights: [
      "Recreated Malenia boss fight mechanics",
      "Implemented health regen on hit system",
      "Built complex attack pattern AI",
    ],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    tags: ["Unreal Engine", "C++", "AI"],
    link: "#",
    type: "Boss AI System",
    description: "A technical recreation of the challenging Malenia boss fight from Elden Ring, focusing on precise combat mechanics and AI patterns.",
    technicalDetails: [
      "Developed state machine for complex multi-phase boss behaviour",
      "Implemented health regeneration system triggered on successful hits",
      "Created combo chain system with animation blending and hit detection",
    ],
  },
  {
    id: "nerve-quest",
    title: "NERVE QUEST",
    role: "Tools Programmer",
    highlights: [
      "Built visual graph editor for designers",
      "Created runtime quest subsystem",
      "Enabled non-linear quest flows",
    ],
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800",
    tags: ["Unreal Engine", "Editor Tools", "C++"],
    link: "#",
    type: "Quest System Plugin",
    description: "A powerful quest system plugin for Unreal Engine that enables designers to create complex, branching narratives without writing code.",
    technicalDetails: [
      "Built custom graph editor using Unreal's Editor Utilities framework",
      "Created runtime quest subsystem with event-driven architecture",
      "Implemented save/load serialization for quest progress",
    ],
  },
  {
    id: "object-pool",
    title: "Generic Dynamic Object Pool",
    role: "Tools Programmer",
    highlights: [
      "Reduced spawn overhead significantly",
      "Type-agnostic pool implementation",
      "Easy integration for any project",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    tags: ["Unreal Engine", "Performance", "C++"],
    link: "#",
    type: "Performance Tool",
    description: "A high-performance, generic object pooling system for Unreal Engine that significantly reduces spawn and destroy overhead.",
    technicalDetails: [
      "Template-based implementation supporting any UObject-derived class",
      "Automatic pool resizing based on runtime demand",
      "Thread-safe operations for async spawning scenarios",
    ],
  },
  {
    id: "nerve-talent-tree",
    title: "Nerve Talent Tree",
    role: "Systems Programmer",
    highlights: [
      "Node-based talent editor for designers",
      "Multi-stage progression with dependencies",
      "Save/load talent configurations",
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    tags: ["Unreal Engine", "UI/UX", "C++"],
    link: "#",
    type: "Progression System",
    description: "A flexible talent tree system with a visual editor, allowing designers to create complex skill progressions with dependencies.",
    technicalDetails: [
      "Custom Slate-based editor for visual talent tree creation",
      "Runtime talent system with prerequisite validation",
      "Data-driven approach using DataAssets for easy configuration",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return featuredProjects.find((p) => p.id === id);
};
