import * as vehicleCodes from './constants/vehicleCodes';

// TODO: move out?
export enum VehiclePropertyEnum {
  Division = 'GM Division',
  Luxury = 'Luxury Code',
  Body = 'Body Code',
  Engine = 'Engine Code',
  Year = 'Model Year',
  Assembly = 'Assembly Plant',
  Serial = 'Serial Number',
  Series = 'Series Code',
}

const regex = /^(\d)([A-Z]{2})(\d{2})([A-Z])([A-Z])([A-Z]\d)(\d{5})([A-Z])$/i;

const decodeVehicle = (vin: string): Error | Vehicle => {
  const match = vin.toUpperCase().match(regex);

  if (!match) return new Error('VIN is not valid or cannot be decoded');

  return [
    [VehiclePropertyEnum.Division, vehicleCodes.division[match[1]] || null],
    [VehiclePropertyEnum.Luxury, vehicleCodes.luxury[match[2]] || null],
    [VehiclePropertyEnum.Body, vehicleCodes.body[match[3]] || null],
    [VehiclePropertyEnum.Engine, vehicleCodes.engine[match[4]] || null],
    [VehiclePropertyEnum.Year, vehicleCodes.year[match[5]] || null],
    [VehiclePropertyEnum.Assembly, vehicleCodes.assembly[match[6]] || null],
    [VehiclePropertyEnum.Serial, match[7]],
    [VehiclePropertyEnum.Series, vehicleCodes.series[match[8]] || null],
  ];
};

export default decodeVehicle;
