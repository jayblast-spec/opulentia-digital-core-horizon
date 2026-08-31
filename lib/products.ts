export type Product = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  summary: string;
  description: string;
  capabilities: string[];
};

export const products: Product[] = [
  {
    slug: "horizon-intelligence",
    name: "Horizon Intelligence",
    tagline: "Enterprise AI orchestration for complex operations",
    icon: "◈",
    summary:
      "An orchestration layer for coordinating AI agents and workflows across an enterprise's existing systems.",
    description:
      "Horizon Intelligence is built for organizations that need AI capability woven into real operational workflows, not bolted on as a chat widget. It coordinates task routing, tool access, and human review across your existing stack, with every action logged for accountability.",
    capabilities: [
      "Workflow orchestration across existing enterprise tools",
      "Configurable human-in-the-loop review gates",
      "Full audit trail on every automated action",
      "Modular deployment — start with one workflow, expand from there",
    ],
  },
  {
    slug: "core-analytics",
    name: "Core Analytics",
    tagline: "Precise, explainable data intelligence",
    icon: "▣",
    summary:
      "Analytics tooling built for teams that need to trust the number, not just see it.",
    description:
      "Core Analytics prioritizes explainability alongside speed: every metric traces back to its source data and transformation logic, so analytical output can withstand real scrutiny from clients, auditors, and boards.",
    capabilities: [
      "Source-traceable metrics and dashboards",
      "Custom reporting pipelines for enterprise data",
      "Anomaly flagging with plain-language explanations",
      "Exportable, audit-ready reporting formats",
    ],
  },
  {
    slug: "opulentia-cloud",
    name: "Opulentia Cloud",
    tagline: "Infrastructure built for business continuity",
    icon: "☁",
    summary:
      "Scalable cloud infrastructure engineered around uptime, security, and predictable cost.",
    description:
      "Opulentia Cloud provides the hosting and infrastructure layer beneath the rest of the platform: designed for high-availability workloads, transparent scaling behavior, and infrastructure-as-code from day one.",
    capabilities: [
      "High-availability architecture with documented failover",
      "Infrastructure-as-code deployment model",
      "Transparent, usage-based cost visibility",
      "Security-hardened defaults on every environment",
    ],
  },
  {
    slug: "digital-trust-suite",
    name: "Digital Trust Suite",
    tagline: "Security and integrity safeguards, by default",
    icon: "⛨",
    summary:
      "Security tooling focused on access control, data integrity, and compliance readiness.",
    description:
      "Digital Trust Suite covers the safeguards that enterprise buyers ask about first: authentication, authorization, encryption in transit and at rest, and compliance-oriented logging — implemented as defaults, not add-ons.",
    capabilities: [
      "Role-based access control across every product",
      "Encryption in transit and at rest by default",
      "Compliance-oriented audit logging",
      "Regular third-party security review cadence",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
