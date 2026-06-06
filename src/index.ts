/**
 * compound-engineering-wrap
 * TypeScript wrapper for the Compound Engineering plugin
 * 
 * This module provides type definitions and helper utilities
 * for integrating with the Compound Engineering AI skill system.
 * 
 * Official plugin: https://github.com/EveryInc/compound-engineering-plugin
 */

// ─── Skill Definitions ───────────────────────────────────────────────────────

export interface Skill {
  name: string;
  command: string;
  description: string;
  category: SkillCategory;
}

export type SkillCategory = 
  | 'strategy' 
  | 'ideation' 
  | 'planning' 
  | 'execution' 
  | 'review' 
  | 'debug' 
  | 'compounding';

export const COMPOUND_SKILLS: Skill[] = [
  // Strategy
  {
    name: 'Strategy',
    command: '/ce-strategy',
    description: 'Create or maintain STRATEGY.md — the product target problem, approach, persona, key metrics, and tracks',
    category: 'strategy',
  },
  {
    name: 'Ideate',
    command: '/ce-ideate',
    description: 'Optional big-picture ideation: generate and critically evaluate grounded ideas, then route the strongest one into brainstorming',
    category: 'ideation',
  },
  // Planning
  {
    name: 'Brainstorm',
    command: '/ce-brainstorm',
    description: 'Interactive Q&A to think through a feature or problem and write a right-sized requirements doc before planning',
    category: 'planning',
  },
  {
    name: 'Plan',
    command: '/ce-plan',
    description: 'Turn feature ideas into detailed implementation plans',
    category: 'planning',
  },
  // Execution
  {
    name: 'Work',
    command: '/ce-work',
    description: 'Execute plans with worktrees and task tracking',
    category: 'execution',
  },
  {
    name: 'Debug',
    command: '/ce-debug',
    description: 'Systematically reproduce failures, trace root cause, and implement fixes',
    category: 'debug',
  },
  // Review
  {
    name: 'Code Review',
    command: '/ce-code-review',
    description: 'Multi-agent code review before merging',
    category: 'review',
  },
  {
    name: 'Doc Review',
    command: '/ce-doc-review',
    description: 'Document review for catching issues and calibrating judgment',
    category: 'review',
  },
  // Compounding
  {
    name: 'Compound',
    command: '/ce-compound',
    description: 'Document learnings to make future work easier',
    category: 'compounding',
  },
  {
    name: 'Product Pulse',
    command: '/ce-product-pulse',
    description: 'Generate a single-page, time-windowed pulse report on usage, performance, errors, and followups',
    category: 'compounding',
  },
];

// ─── Agent Definitions ────────────────────────────────────────────────────────

export interface Agent {
  name: string;
  type: string;
  description: string;
  delegableFrom: string[];
}

export const COMPOUND_AGENTS: Agent[] = [
  {
    name: 'Review Agent',
    type: 'code-review',
    description: 'Multi-agent code review before merging',
    delegableFrom: ['$ce-code-review', '/ce-code-review'],
  },
  {
    name: 'Research Agent',
    type: 'research',
    description: 'Deep research on technical topics',
    delegableFrom: ['$ce-research', '/ce-research'],
  },
  {
    name: 'Workflow Agent',
    type: 'workflow',
    description: 'Manages worktrees and task tracking during execution',
    delegableFrom: ['$ce-work', '/ce-work'],
  },
];

// ─── Workflow Builder ─────────────────────────────────────────────────────────

export interface WorkflowStep {
  skill: string;
  input?: string;
  notes?: string;
}

export interface Workflow {
  name: string;
  description: string;
  steps: WorkflowStep[];
}

export const PRESET_WORKFLOWS: Workflow[] = [
  {
    name: 'Feature Development',
    description: 'Full cycle from idea to merged code',
    steps: [
      { skill: '/ce-brainstorm', notes: 'Define requirements' },
      { skill: '/ce-plan', notes: 'Create implementation plan' },
      { skill: '/ce-work', notes: 'Execute plan' },
      { skill: '/ce-code-review', notes: 'Review before merge' },
      { skill: '/ce-compound', notes: 'Document learnings' },
    ],
  },
  {
    name: 'Bug Investigation',
    description: 'Focused bug analysis and fix',
    steps: [
      { skill: '/ce-debug', notes: 'Reproduce and trace root cause' },
      { skill: '/ce-code-review', notes: 'Review the fix' },
      { skill: '/ce-compound', notes: 'Document the lesson learned' },
    ],
  },
  {
    name: 'Product Pulse Report',
    description: 'Generate usage and performance report',
    steps: [
      { skill: '/ce-product-pulse', input: '24h', notes: '24-hour window' },
    ],
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────────

/**
 * Get a skill by its command name
 */
export function getSkill(command: string): Skill | undefined {
  return COMPOUND_SKILLS.find(s => s.command === command);
}

/**
 * Get all skills in a category
 */
export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return COMPOUND_SKILLS.filter(s => s.category === category);
}

/**
 * Format skills as a readable list
 */
export function formatSkillList(skills: Skill[]): string {
  return skills
    .map(s => `  ${s.command} — ${s.description}`)
    .join('\n');
}

/**
 * Format a workflow as a CLI-style string
 */
export function formatWorkflow(w: Workflow): string {
  const steps = w.steps.map((s, i) => {
    const input = s.input ? ` "${s.input}"` : '';
    const notes = s.notes ? ` # ${s.notes}` : '';
    return `  ${i + 1}. ${s.skill}${input}${notes}`;
  }).join('\n');
  return `${w.name}\n${w.description}\n${steps}`;
}

// ─── Main Export ───────────────────────────────────────────────────────────────

export default {
  skills: COMPOUND_SKILLS,
  agents: COMPOUND_AGENTS,
  workflows: PRESET_WORKFLOWS,
  getSkill,
  getSkillsByCategory,
  formatSkillList,
  formatWorkflow,
};