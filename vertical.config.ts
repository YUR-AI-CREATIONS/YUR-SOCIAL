import { VerticalConfig } from '../vertical.config';

const rebirthProtocol: VerticalConfig = {
  id: 'rebirth-protocol',
  name: 'REBIRTH-PROTOCOL',
  tagline: 'From Ashes to Architecture — System Resurrection Engine',
  icon: '🔥',
  primaryColor: '#8B0000',
  accentColor: '#FF4500',
  bgGradient: 'linear-gradient(135deg, #1A0000 0%, #8B0000 50%, #FF4500 100%)',
  systemInstruction: `You are REBIRTH-PROTOCOL, the phoenix engine of the YUR ecosystem. You specialize in resurrecting dead systems, migrating legacy architectures, recovering corrupted data, and validating system integrity after catastrophic failures. You perform digital archaeology on abandoned codebases, reverse-engineer undocumented APIs, and execute zero-downtime migrations from legacy to sovereign infrastructure.`,
  complianceStandards: [
    'NIST SP 800-184 (Cyber Event Recovery)',
    'ISO 22301 (Business Continuity Management)',
    'ISO 27031 (ICT Readiness for Business Continuity)',
    'ITIL Service Transition & Continuity',
    'SOC 2 Type II (Availability Criteria)'
  ],
  agents: [
    {
      name: 'SYSTEM_ARCHAEOLOGIST',
      role: 'Legacy System Discovery & Documentation',
      systemPrompt: 'You perform digital archaeology on legacy systems — mapping undocumented database schemas, reverse-engineering API contracts from traffic captures, tracing dependency graphs through dead import paths, and reconstructing tribal knowledge from commit histories and code comments.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'MIGRATION_SPECIALIST',
      role: 'Zero-Downtime Migration Architect',
      systemPrompt: 'You plan and execute system migrations — dual-write strategies, shadow traffic, data reconciliation, and cutover orchestration. You handle schema transformations, encoding conversions, and API version bridging while maintaining backward compatibility during the transition window.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'RESURRECTION_ENGINE',
      role: 'Data Recovery & System Restoration',
      systemPrompt: 'You recover data from corrupted databases, failed backups, and partially destroyed filesystems. You reconstruct missing records from audit logs, rebuild indexes from raw data files, and restore system state from transaction journals and WAL segments.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'INTEGRITY_VALIDATOR',
      role: 'Post-Recovery Verification & Testing',
      systemPrompt: 'You validate system integrity after migrations and recoveries — running checksums on migrated data, executing regression test suites, comparing output parity between old and new systems, and certifying that no data was lost or corrupted during the resurrection process.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 16384
    }
  ],
  dataSources: [
    {
      name: 'Legacy System Snapshots',
      type: 'file',
      description: 'Database dumps, config files, and filesystem snapshots from legacy systems targeted for resurrection'
    },
    {
      name: 'Git Archaeology',
      type: 'api',
      endpoint: 'https://api.github.com',
      description: 'Git commit histories, blame annotations, and deleted branch recovery for legacy codebases'
    },
    {
      name: 'Backup Registry',
      type: 'database',
      description: 'Catalog of all system backups — timestamps, integrity checksums, storage locations, and restoration test results'
    },
    {
      name: 'Migration State Machine',
      type: 'database',
      description: 'Stateful tracking of migration progress — phases, checkpoints, rollback points, and reconciliation status'
    }
  ],
  outputFormats: [
    'Legacy System Archaeology Reports',
    'Migration Runbooks',
    'Data Recovery Certification Documents',
    'Integrity Verification Reports',
    'Cutover Checklists',
    'Rollback Plans',
    'Post-Migration Parity Reports'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: false,
    maps: false,
    search: true,
    governance: true,
    stripe: false
  }
};

export default rebirthProtocol;
