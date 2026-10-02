export interface QSOItem {
  id: string
  callsign: string
  band: string
  mode: string
  rstSent: string
  rstRcvd: string
  timeUtc: string
  dxcc: string
  syncState: 'synced' | 'uploading' | 'queued' | 'local' | 'conflict'
}

export const INITIAL_QSOS: QSOItem[] = [
  {
    id: 'qso-1',
    callsign: 'DL2ABC',
    band: '20m',
    mode: 'SSB',
    rstSent: '59',
    rstRcvd: '59',
    timeUtc: '11:24',
    dxcc: 'Federal Republic of Germany',
    syncState: 'synced',
  },
  {
    id: 'qso-2',
    callsign: 'K1TTT',
    band: '20m',
    mode: 'CW',
    rstSent: '599',
    rstRcvd: '579',
    timeUtc: '11:28',
    dxcc: 'United States',
    syncState: 'synced',
  },
  {
    id: 'qso-3',
    callsign: 'EA3ABC',
    band: '40m',
    mode: 'SSB',
    rstSent: '58',
    rstRcvd: '59',
    timeUtc: '11:32',
    dxcc: 'Spain',
    syncState: 'uploading',
  },
  {
    id: 'qso-4',
    callsign: 'G4ZBA',
    band: '15m',
    mode: 'CW',
    rstSent: '599',
    rstRcvd: '599',
    timeUtc: '11:37',
    dxcc: 'England',
    syncState: 'queued',
  },
  {
    id: 'qso-5',
    callsign: 'OE7XYZ',
    band: '20m',
    mode: 'SSB',
    rstSent: '59',
    rstRcvd: '59',
    timeUtc: '11:39',
    dxcc: 'Austria (SOTA OE/TI-042)',
    syncState: 'local',
  },
]

export function detectDxcc(call: string): string {
  const upper = call.toUpperCase().trim()
  if (!upper) return ''

  if (
    upper.startsWith('DL') ||
    upper.startsWith('DJ') ||
    upper.startsWith('DK') ||
    upper.startsWith('DO') ||
    upper.startsWith('DA') ||
    upper.startsWith('DF') ||
    upper.startsWith('DH') ||
    upper.startsWith('DB')
  ) {
    return 'Fed. Rep. of Germany'
  }
  if (
    upper.startsWith('K') ||
    upper.startsWith('W') ||
    upper.startsWith('N') ||
    upper.startsWith('AA') ||
    upper.startsWith('AB') ||
    upper.startsWith('AC') ||
    upper.startsWith('AD')
  ) {
    return 'United States'
  }
  if (upper.startsWith('EA') || upper.startsWith('EB') || upper.startsWith('EC')) {
    return 'Spain'
  }
  if (upper.startsWith('G') || upper.startsWith('M') || upper.startsWith('2E')) {
    return 'England'
  }
  if (upper.startsWith('OE')) {
    return 'Austria'
  }
  if (upper.startsWith('HB9') || upper.startsWith('HB0')) {
    return 'Switzerland'
  }
  if (upper.startsWith('F')) {
    return 'France'
  }
  if (upper.startsWith('I') || upper.startsWith('IK') || upper.startsWith('IZ')) {
    return 'Italy'
  }
  if (
    upper.startsWith('JA') ||
    upper.startsWith('JH') ||
    upper.startsWith('JR') ||
    upper.startsWith('JE')
  ) {
    return 'Japan'
  }
  if (upper.startsWith('SP') || upper.startsWith('SQ') || upper.startsWith('SN')) {
    return 'Poland'
  }
  if (upper.startsWith('SM') || upper.startsWith('SA') || upper.startsWith('SK')) {
    return 'Sweden'
  }
  if (upper.startsWith('VK')) {
    return 'Australia'
  }
  if (upper.startsWith('ZL')) {
    return 'New Zealand'
  }
  if (upper.startsWith('VE') || upper.startsWith('VA')) {
    return 'Canada'
  }
  if (upper.startsWith('ON')) {
    return 'Belgium'
  }
  if (
    upper.startsWith('PA') ||
    upper.startsWith('PB') ||
    upper.startsWith('PD') ||
    upper.startsWith('PE') ||
    upper.startsWith('PI')
  ) {
    return 'Netherlands'
  }
  if (upper.startsWith('SV')) {
    return 'Greece'
  }
  if (upper.startsWith('LA')) {
    return 'Norway'
  }
  if (upper.startsWith('OH')) {
    return 'Finland'
  }

  return 'DX entity identified'
}
