export enum VehicleProperty {
  Division = 'GM Division',
  Luxury = 'Luxury Code',
  Body = 'Body Code',
  Engine = 'Engine Code',
  Year = 'Model Year',
  Assembly = 'Assembly Plant',
  Serial = 'Serial Number',
  Series = 'Series Code',
}

export const division: Record<string, string> = {
  '8': 'Holden',
};

export const luxury: Record<string, string> = {
  WM: 'Belmont',
  WN: 'Kingswood',
  WP: 'Premier and LS Monaro',
  WS: 'Statesman Deville',
  WT: 'Statesman Caprice',
  WQ: 'Monaro',
};

export const body: Record<string, string> = {
  '69': 'Sedan',
  '60': 'Cab Chassis',
  '37': 'Coupe',
  '70': 'Panel Van',
  '35': 'Wagon',
  '80': 'Utility',
};

export const engine: Record<string, string> = {
  E: '173 Low Compression',
  D: '173 High Compression',
  M: '202 Low Compression',
  L: '202 High Compression',
  S: '253 Low Compression',
  R: '253 High Compression',
  T: '308 High Compression',
};

export const year: Record<string, string> = {
  B: '1972 or 1982',
  C: '1973 or 1983',
  D: '1974',
  E: '1975',
  F: '1976',
  G: '1977',
  H: '1978',
  J: '1979',
  K: '1980',
  A: '1981',
};

export const assembly: Record<string, string> = {
  H1: 'Brisbane',
  H2: 'Brisbane',
  H3: 'Brisbane',
  H4: 'Brisbane',
  J1: 'Melbourne',
  J2: 'Melbourne',
  J3: 'Melbourne',
  J4: 'Melbourne',
  J5: 'Melbourne',
  J6: 'Melbourne',
  J7: 'Melbourne',
  J8: 'Melbourne',
  J9: 'Melbourne',
  L1: 'Adelaide',
  L2: 'Adelaide',
  L3: 'Adelaide',
  L4: 'Adelaide',
  L5: 'Adelaide',
};

export const series: Record<string, string> = {
  Q: 'HQ 7/71',
  J: 'HJ 10/74',
  X: 'HX 7/76',
  Z: 'HZ 10/77',
  B: 'WB 4/80',
};
