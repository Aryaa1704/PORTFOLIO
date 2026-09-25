export interface Project {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  pipelineTitle: string;
  pipelineSteps: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  youtubeUrl?: string;
  stars?: number;
  category: 'ai-agents' | 'systems-iot' | 'fintech-trading' | 'backend-cloud';
  metrics?: { label: string; value: string }[];
  details?: string;
}

export interface Experiment {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
  tech: string;
  icon: string;
}

export interface TechItem {
  name: string;
  role: string;
  category: 'core' | 'ai' | 'backend' | 'database' | 'infra';
  proficiency: string;
  description: string;
}

export interface TelemetryData {
  ping: number;
  fps: number;
  throughput: number;
  activePacketStep: number;
  coordinates: string;
}
