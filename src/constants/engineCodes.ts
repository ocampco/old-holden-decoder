export enum EngineProperty {
  Prefix = 'Prefix',
  Size = 'Size',
  Note = 'Note',
}

// TODO: Reuse
type Engine = {
  size: string;
  note: string;
};

export const engines: Record<string, Engine> = {
  '186A': { size: '186', note: 'HR Holden' },
  '186K': {
    size: '186',
    note: 'HR X2 up to engine no. 186K162700, HR 186S from engine no. 186K162701',
  },
  '186L': { size: '186', note: 'HT Holden, HG Holden Low Compression' },
  // TODO: Handle wildcards
  '186NxxxxS': {
    size: '186',
    note: 'Nasco (or equivalent) Replacement Motor for HK-HG (for engines supplied post HQ release)',
  },
  '186P': { size: '186', note: 'HK Holden, HT Holden, HG Holden' },
  '186S': { size: '186', note: 'HK Holden, HT Holden, HG Holden' },
  '186X': {
    size: '186',
    note: 'Early LC XU-1 ## (assumed to be only in pilot cars)',
  },
  '3100X': { size: '186', note: 'Later LC XU-1' },
  CK: { size: '186', note: 'Late LC XU-1' },
  NK: {
    size: '186',
    note: 'Nasco (or equivalent) Replacement Motor late LC XU-1',
  },
  '11QL': {
    size: '202',
    note: 'HQ Statesman (export only in HJ-HZ). Also UC Torana SL.',
  },
  FL: { size: '202', note: 'CF Bedford High Compression' },
  GL: { size: '202', note: 'late HG High Compression' },
  GM: { size: '202', note: 'late HG Low Compression' },
  HL: {
    size: '202',
    note: 'LH, LX ADR27 and LX, UC ADR27A manual High Compression',
  },
  HM: {
    size: '202',
    note: 'LH, LX ADR27 and LX, UC ADR27A manual Low Compression',
  },
  JL: { size: '202', note: 'LJ Torana GTR' },
  JP: { size: '202', note: 'LJ Torana GTR XU-1' },
  N5K: { size: '202', note: 'GMP&A VK EFI Replacement Motor' },
  N5L: { size: '202', note: 'GMP&A 202 Replacement Motor VC-VH Commodore, WB' },
  N5M: {
    size: '202',
    note: 'GMP&A 202 Low Compression Replacement Motor VC-VH, WB',
  },
  NL: {
    size: '202',
    note: 'Nasco (or equivalent) Replacement Red Motor High Compression',
  },
  NM: {
    size: '202',
    note: 'Nasco (or equivalent) Replacement Red Motor Low Compression',
  },
  NP: { size: '202', note: 'Nasco Replacement Motor for LJ Torana GTR XU-1' },
  QL: {
    size: '202',
    note: 'HQ Holden to late HZ Holden and LX Torana High Compression',
  },
  QM: { size: '202', note: 'HQ to HX Low Compression' },
  WL: { size: '202', note: 'WB (blue)' },
  XQL: { size: '202', note: 'LX, UC Torana ADR27A auto High Compression' },
  XQM: { size: '202', note: 'LX, UC Torana ADR27A auto Low Compression' },
  ZL: { size: '202', note: 'late HZ' },
  '11QR': {
    size: '253',
    note: 'HQ Statesman (export only in HJ-HZ) High Compression',
  },
  '11QS': { size: '253', note: 'HQ Statesman custom Low Compression' },
  '11ZR': { size: '253', note: 'export only in HZ Statesman ##' },
  '253H': { size: '253', note: 'HT Holden and HG Holden High Compression' },
  '253L': { size: '253', note: 'HT Holden and HG Holden Low Compression' },
  '253NxxxxS': {
    size: '253',
    note: 'HT Holden and HG Holden Nasco Replacement engine High Compression ## (for engines supplied post HQHolden release)',
  },
  BS: {
    size: '253',
    note: '1979 E and S Series Bedford (Chevrolet pattern gearbox)',
  },
  QR: { size: '253', note: 'HQ Holden / late HZ Holden High Compression' },
  QS: { size: '253', note: 'HQ Holden / HJ Holden Low Compression' },
  ZR: { size: '253', note: 'late HZ' },
  N5R: { size: '253', note: 'GMP&A 253 Replacement Motor VC-VH, WB' },
  NR: {
    size: '253',
    note: 'Nasco (or equivalent) Replacement Red Short Motor HQ-HZ, VB. Possible GM-H Warranty Engine from late 1970s.',
  },
  NS: {
    size: '253',
    note: 'Nasco (or equivalent) Replacement Red Short Motor HQ-HX ##',
  },
  HR: { size: '253', note: 'LH Torana / LX Torana High Compression' },
  HS: { size: '253', note: 'LH Torana / LX Torana Low Compression' },
  VR: {
    size: '253',
    note: 'VB Commodore to VH Commodore (Red and Blue Engines)',
  },
  WR: { size: '253', note: 'WB Commercial' },
  '307': { size: '307', note: 'HK Holden and HT Holden 5-litre' },
  '11QT': { size: '308', note: 'HQ and late HZ Statesman' },
  '11WT': { size: '308', note: 'WB Statesman' },
  '11ZT': { size: '308', note: 'Late HZ Statesman' },
  '12WT': { size: '308', note: 'Late WB Statesman' },
  '308H': { size: '308', note: 'HT Holden and HG Holden' },
  '308NxxxxS': {
    size: '308',
    note: 'HT and HG Nasco Replacement engine (for engines supplied post HQ release)',
  },
  BV: {
    size: '308',
    note: '1979 E, M and S Series Bedford L43 option (Low Compression, 2 barrel Rochester)',
  },
  HZ: { size: '308', note: 'LH SLR5000 L34' },
  HT: {
    size: '308',
    note: 'LH / LX SLR5000 and LX SS L31 including A9X (except LH SLR5000 L34)',
  },
  N5A: { size: '308', note: 'GMP&A 304 Replacement Short Motor LV2' },
  N5B: { size: '308', note: 'GMP&A 304 Replacement Short Motor V5H' },
  N5C: { size: '308', note: 'GMP&A 304 Replacement Short Motor VK A9L' },
  N5G: { size: '308', note: 'GMP&A 304 Replacement Short Motor V7X' },
  N5J: { size: '308', note: 'GMP&A 304 Replacement Short Motor VL' },
  N5T: { size: '308', note: 'GMP&A 308 Replacement Short Motor VC-VK, WB' },
  N5W: { size: '308', note: 'GMP&A 308 Replacement Short Motor VL A9L' },
  N5Z: { size: '308', note: 'GMP&A 308 Replacement Short Motor V5H' },
  NT: {
    size: '308',
    note: 'Nasco (or equivalent) Replacement Short Motor HQ-HZ, VB, LH/LX SLR5000 (except L34) and LX SS L31. Possible GM-H Warranty Engine from late 1970s.',
  },
  NZ: {
    size: '308',
    note: 'Nasco (or equivalent) Replacement Short Motor for L34',
  },
  QT: { size: '308', note: 'HQ-late HZ' },
  SU: {
    size: '308',
    note: 'VN-VSIII Replacement Motor (pre 179/195kW engine)',
  },
  SM: { size: '308', note: 'VSIII/VT Replacement Motor (179kW/195kW)##' },
  SVM: { size: '308', note: 'VSIII 179kW/195kW Statesman ##' },
  SVU: { size: '308', note: 'VQ-VSIII Statesman except 179kW/195kW VSIII.' },
  VT: { size: '308', note: 'VB to VK 308 (Red, blue and black)' },
  VA: { size: '308', note: 'VK 304' },
  VB: { size: '308', note: 'VK 304 early 1985 manual only V5H' },
  VC: { size: '308', note: 'VK Group A (engine painted Red) A9L' },
  VE: {
    size: '308',
    note: "VN HSV 200kW (SV5000 and other 'Red Cover' engines)",
  },
  VG: { size: '308', note: 'VK 304 late 1985 manual only V7X' },
  VJ: { size: '308', note: 'VL 304' },
  VK: {
    size: '308 or 202',
    note: 'VN Group A 4-bolt (plus other 4-bolt models eg VP GTS) or VK Commodore EFI',
  },
  VL: { size: '308 or 202', note: 'VR-VS 5.7L 215kW or VB to VK Commodore (Red, Blue and Black)' },
  VM: {
    size: '308 or 202',
    note: 'VT 179kW plus VSIII ute and Statesman 179kW. Also VSIII ute and Statesman with HBD 195kW engine or VB Commodore to VK Commodore (Red, Blue and Black) Low Compression',
  },
  VN: { size: '308', note: 'VT 304 HSV 195kW' },
  VP: {
    size: '308',
    note: 'VL Walkinshaw and VT 5.7L 220kW HSV (different blocks, common number)',
  },
  VU: {
    size: '308',
    note: 'VN to VS 304 (except VSIII ute and Statesman with 179kW engine)',
  },
  VZ: { size: '308', note: 'VK 308 V5H' },
  VW: { size: '308', note: 'VL A9L' },
  WT: { size: '308', note: 'WB commercial' },
  ZT: { size: '308', note: 'Late HZ' },
  '327xxxxxTxxxxH5': { size: '327', note: 'HK first style 327' },
  '327xxxxxKxxxxH': {
    size: '327',
    note: 'HK second style 327 (Any other 327 prefixed engine not represented as per above is from a GMH built Pontiac, Chevrolet etc.)',
  },
  '11QU': { size: '350', note: 'HQ Statesman' },
  '350': {
    size: '350',
    note: 'Very early HT (manual only? Pagewood only?) ##',
  },
  '350M': { size: '350', note: 'HT and HG manual.' },
  '350A': { size: '350', note: 'HT and HG auto.' },
  QU: {
    size: '350',
    note: 'HQ 350 other than Statesman. Usually found in 81837 coupe and XW8 Kingswood (GTS 350 4-door). Also found in LS coupe, Premier, Kingswood (non XW8) and ute. Possibly others.',
  },
  FxxxxGHFxxx: {
    size: '350',
    note: '1976-1978 Australian complianced Chevrolet C20, K20 and C30 trucks.',
  },
  '6MA': { size: 'Gen III', note: 'Auto L76 (fitted to some VYII)' },
  '6MB': { size: 'Gen III', note: 'Manual (fitted to some VYII)' },
  '7NB': {
    size: 'Gen III',
    note: 'Auto L98 6.0L VZ wagon and ute post VE sedan release.',
  },
  '7NC': { size: 'Gen III', note: 'Auto VE' },
  '7ND': { size: 'Gen III', note: 'Manual VE' },
  CAK: {
    size: 'Gen III',
    note: 'Manual L98 6.0L VZ wagon and ute post VE sedan release.',
  },
  VF: {
    size: 'Gen III',
    note: 'LS1 (5.7L) and LS2 (6.0L) VTII to VZ Commodore, ute and 1-tonner. Monaro V2 to VZ. Includes HSV vehicles. Except for VZ ute and wagon built post VE release.',
  },
  ZLF: { size: 'Gen III', note: 'VE LS2' },
};
