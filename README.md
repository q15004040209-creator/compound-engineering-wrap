# compound-engineering-wrap

> Compound Engineering 插件封装 — Claude Code / Cursor / Codex 多平台 AI 工程助手

[![GitHub stars](https://img.shields.io/github/stars/q15004040209-creator/compound-engineering-wrap)](https://github.com/q15004040209-creator/compound-engineering-wrap/stargazers)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[English](#english) | [中文](#中文)

---

## English

### What is this?

`compound-engineering-wrap` is a TypeScript/npm wrapper for the official **[Compound Engineering](https://github.com/EveryInc/compound-engineering-plugin)** plugin — a suite of AI skills and agents designed to make each unit of engineering work easier than the last.

It ships **37 skills** and **51 agents**, compatible with Claude Code, Cursor, Codex, GitHub Copilot, and more.

### Core Philosophy

**Each unit of engineering work should make subsequent units easier — not harder.**

Traditional development accumulates technical debt. Every feature adds complexity. Compound engineering inverts this: **80% is in planning and review, 20% is in execution**.

### Key Skills

| Skill | Purpose |
|-------|---------|
| `/ce-strategy` | Create/maintain `STRATEGY.md` — product target, approach, metrics |
| `/ce-ideate` | Big-picture ideation: generate and rank ideas |
| `/ce-brainstorm` | Interactive Q&A to write a right-sized requirements doc |
| `/ce-plan` | Turn feature ideas into detailed implementation plans |
| `/ce-work` | Execute plans with worktrees and task tracking |
| `/ce-debug` | Systematically reproduce failures and trace root cause |
| `/ce-code-review` | Multi-agent code review before merging |
| `/ce-compound` | Document learnings for future reuse |
| `/ce-product-pulse` | Time-windowed pulse report on usage & performance |

### Quick Example

```text
/ce-brainstorm "make background job retries safer"
/ce-plan docs/brainstorms/background-job-retry-safety-requirements.md
/ce-work
/ce-code-review
/ce-compound
```

### Installation

```bash
# Claude Code
/plugin marketplace add EveryInc/compound-engineering-plugin
/plugin install compound-engineering

# Cursor
/add-plugin compound-engineering

# Codex
codex plugin marketplace add EveryInc/compound-engineering-plugin
bunx @every-env/compound-plugin install compound-engineering --to codex

# GitHub Copilot CLI
copilot plugin marketplace add EveryInc/compound-engineering-plugin
copilot plugin install compound-engineering@compound-engineering-plugin
```

### Features

- **37 skills** — full development workflow from strategy to pulse reports
- **51 agents** — specialized agents for review, research, workflow
- **Multi-platform** — Claude Code, Cursor, Codex, Copilot, Droid, Qwen, OpenCode, Pi, Gemini, Kiro
- **Incremental compounding** — each cycle sharpens the next
- **MIT License** — open source, community friendly

### Learn More

- [Full component reference](https://github.com/EveryInc/compound-engineering-plugin/tree/main/plugins/compound-engineering)
- [How Every codes with agents](https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents)
- [The story behind compounding](https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it)

---

## 中文

### 这是什么？

`compound-engineering-wrap` 是官方 **[Compound Engineering](https://github.com/EveryInc/compound-engineering-plugin)** 插件的 TypeScript/npm 封装——一套 AI 技能与智能体套件，旨在让每一个工程单元的工作都比上一个更轻松。

它提供 **37 个技能** 和 **51 个智能体**，兼容 Claude Code、Cursor、Codex、GitHub Copilot 等多平台。

### 核心理念

**每一个工程单元都应该让后续单元更容易——而非更难。**

传统开发会积累技术债务，每个功能都增加复杂性。复合工程颠覆这一点：**80% 在规划与评审，20% 在执行**。

### 核心技能

| 技能 | 用途 |
|------|------|
| `/ce-strategy` | 创建/维护 `STRATEGY.md` — 产品目标、路径、指标 |
| `/ce-ideate` | 宏观构思：生成并排序创意 |
| `/ce-brainstorm` | 互动问答，编写适当规模的需求文档 |
| `/ce-plan` | 将功能构思转化为详细实施计划 |
| `/ce-work` | 通过工作树和任务跟踪执行计划 |
| `/ce-debug` | 系统性复现失败，追溯根本原因 |
| `/ce-code-review` | 合并前的多智能体代码评审 |
| `/ce-compound` | 记录学习成果，供未来复用 |
| `/ce-product-pulse` | 时间窗口使用情况与性能脉冲报告 |

### 快速示例

```text
/ce-brainstorm "让后台任务重试更安全"
/ce-plan docs/brainstorms/background-job-retry-safety-requirements.md
/ce-work
/ce-code-review
/ce-compound
```

### 安装方式

```bash
# Claude Code
/plugin marketplace add EveryInc/compound-engineering-plugin
/plugin install compound-engineering

# Cursor
/add-plugin compound-engineering

# Codex
codex plugin marketplace add EveryInc/compound-engineering-plugin
bunx @every-env/compound-plugin install compound-engineering --to codex

# GitHub Copilot CLI
copilot plugin marketplace add EveryInc/compound-engineering-plugin
copilot plugin install compound-engineering@compound-engineering-plugin

# Qwen Code
qwen extensions install EveryInc/compound-engineering-plugin:compound-engineering
```

### 特点

- **37 个技能** — 从战略到脉冲报告的完整开发流程
- **51 个智能体** — 评审、研究、工作流专用智能体
- **多平台** — Claude Code、Cursor、Codex、Copilot、Droid、Qwen、OpenCode、Pi、 Gemini、Kiro
- **增量复合** — 每个周期都让下一个更精准
- **MIT 协议** — 开源，社区友好

### 了解更多

- [完整组件参考](https://github.com/EveryInc/compound-engineering-plugin/tree/main/plugins/compound-engineering)（英文）
- [Every 如何用智能体编程](https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents)（英文）
- [复合工程的背后故事](https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it)（英文）

---

## 开发 / Development

```bash
bun install
bun test
```

## License

MIT © [EveryInc](https://github.com/EveryInc) — 本封装基于官方插件创建，版权归原作者所有。

本封装项目 MIT License。