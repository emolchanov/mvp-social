export function getBaseUrl() {
  return process.env.PRIMARY_DOMAIN ? `https://${process.env.PRIMARY_DOMAIN}` : '';
}
