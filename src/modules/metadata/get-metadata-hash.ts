export function getMetadataHash() {
  return process.env.RUNTIME_HASH || process.env.NEXT_PUBLIC_HASH || 'dev';
}
