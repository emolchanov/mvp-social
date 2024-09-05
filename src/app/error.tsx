'use client';

import * as React from 'react';

export default function Error({ error, reset }: Next.ErrorPageBoundaryProps) {
  return <>{error}</>;
}
