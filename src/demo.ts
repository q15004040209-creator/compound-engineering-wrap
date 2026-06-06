/**
 * Compound Engineering Wrapper — Demo Script
 * 
 * Run with: bun run src/demo.ts
 * Or: npx ts-node src/demo.ts
 */

import {
  COMPOUND_SKILLS,
  COMPOUND_AGENTS,
  PRESET_WORKFLOWS,
  getSkill,
  getSkillsByCategory,
  formatSkillList,
  formatWorkflow,
} from './index';

console.log('═══════════════════════════════════════════════════════');
console.log('  Compound Engineering Wrapper — Demo');
console.log('  Official: https://github.com/EveryInc/compound-engineering-plugin');
console.log('═══════════════════════════════════════════════════════\n');

// ─── Skills ───────────────────────────────────────────────────────────────────

console.log('▸ All Available Skills (37 skills, 51 agents)');
console.log('─'.repeat(60));
COMPOUND_SKILLS.forEach(skill => {
  console.log(`  ${skill.command.padEnd(20)} ${skill.description}`);
});
console.log();

// ─── By Category ──────────────────────────────────────────────────────────────

console.log('▸ Skills by Category');
console.log('─'.repeat(60));
const categories = ['strategy', 'ideation', 'planning', 'execution', 'debug', 'review', 'compounding'] as const;
categories.forEach(cat => {
  const skills = getSkillsByCategory(cat);
  if (skills.length > 0) {
    console.log(`\n  [${cat.toUpperCase()}]`);
    skills.forEach(s => console.log(`    ${s.command}`));
  }
});
console.log();

// ─── Agents ───────────────────────────────────────────────────────────────────

console.log('▸ Delegable Agents');
console.log('─'.repeat(60));
COMPOUND_AGENTS.forEach(agent => {
  console.log(`  ${agent.name} (${agent.type})`);
  console.log(`    Delegable from: ${agent.delegableFrom.join(', ')}`);
  console.log(`    ${agent.description}\n`);
});

// ─── Workflows ─────────────────────────────────────────────────────────────────

console.log('▸ Preset Workflows');
console.log('─'.repeat(60));
PRESET_WORKFLOWS.forEach(w => {
  console.log(formatWorkflow(w));
  console.log();
});

// ─── Helper Demo ───────────────────────────────────────────────────────────────

console.log('▸ Helper Functions Demo');
console.log('─'.repeat(60));
const skill = getSkill('/ce-brainstorm');
if (skill) {
  console.log(`getSkill('/ce-brainstorm') =>`);
  console.log(`  name: ${skill.name}`);
  console.log(`  command: ${skill.command}`);
  console.log(`  category: ${skill.category}`);
}
console.log();

// ─── Quick Start ───────────────────────────────────────────────────────────────

console.log('═══════════════════════════════════════════════════════');
console.log('  Quick Start — paste these in Claude Code / Cursor:');
console.log('═══════════════════════════════════════════════════════\n');

console.log('  // Feature development cycle');
console.log('  /ce-brainstorm "make background job retries safer"');
console.log('  /ce-plan docs/brainstorms/background-job-retry-safety-requirements.md');
console.log('  /ce-work');
console.log('  /ce-code-review');
console.log('  /ce-compound');
console.log();
console.log('  // Bug investigation');
console.log('  /ce-debug "the checkout webhook sometimes creates duplicate invoices"');
console.log('  /ce-code-review');
console.log('  /ce-compound');
console.log();
console.log('  // Strategy update');
console.log('  /ce-strategy');
console.log('  /ce-product-pulse');
console.log();

console.log('═══════════════════════════════════════════════════════');
console.log('  Demo complete! See README for full documentation.');
console.log('═══════════════════════════════════════════════════════');