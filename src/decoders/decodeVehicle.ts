import * as vehicleCodes from '../constants/vehicleCodes';

const regex = /^(\d)([A-Z]{2})(\d{2})([A-Z])([A-Z])([A-Z]\d)(\d{5})([A-Z])$/i;

const decodeVehicle = (vin: string): DecodedVehicle => {
  const match = vin.toUpperCase().match(regex);

  if (!match)
    return { error: new Error('VIN is not valid or cannot be decoded') };

  return {
    vehicle: [
      [
        vehicleCodes.VehicleProperty.Division,
        vehicleCodes.division[match[1]] || null,
      ],
      [
        vehicleCodes.VehicleProperty.Luxury,
        vehicleCodes.luxury[match[2]] || null,
      ],
      [vehicleCodes.VehicleProperty.Body, vehicleCodes.body[match[3]] || null],
      [
        vehicleCodes.VehicleProperty.Engine,
        vehicleCodes.engine[match[4]] || null,
      ],
      [vehicleCodes.VehicleProperty.Year, vehicleCodes.year[match[5]] || null],
      [
        vehicleCodes.VehicleProperty.Assembly,
        vehicleCodes.assembly[match[6]] || null,
      ],
      [vehicleCodes.VehicleProperty.Serial, match[7]],
      [
        vehicleCodes.VehicleProperty.Series,
        vehicleCodes.series[match[8]] || null,
      ],
    ],
  };
};

export default decodeVehicle;
