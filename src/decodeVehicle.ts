const regex = /^(\d)([A-Z]{2})(\d{2})([A-Z])([A-Z])([A-Z]\d)(\d{5})([A-Z])$/i;

const decodeVehicle = (vin: string): Error | (string | null)[] => {
  const match = vin.match(regex);

  if (!match) return new Error();

  // TODO: Move hardcoded mapping
  return [
    {
      8: 'Holden',
    }[match[1]] || null,
    {
      // NOTE: Only second letter is required
      WM: 'Belmont',
      WN: 'Kingswood',
      WP: 'Premier and LS Monaro',
      WS: 'Statesman Deville',
      WT: 'Statesman Caprice',
      WQ: 'Monaro',
    }[match[2]] || null,
    {
      '69': 'Sedan',
      '60': 'Cab Chassis',
      '37': 'Coupe',
      '70': 'Panel Van',
      '35': 'Wagon',
      '80': 'Utility',
    }[match[3]] || null,
    {
      E: '173 Low Compression',
      D: '173 High Compression',
      M: '202 Low Compression',
      L: '202 High Compression',
      S: '253 Low Compression',
      R: '253 High Compression',
      T: '308 High Compression',
    }[match[4]] || null,
    {
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
    }[match[5]] || null,
    {
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
    }[match[6]] || null,
    match[7],
    {
      Q: 'HQ 7/71',
      J: 'HJ 10/74',
      X: 'HX 7/76',
      Z: 'HZ 10/77',
      B: 'WB 4/80',
    }[match[8]] || null,
  ];
};

export default decodeVehicle;
