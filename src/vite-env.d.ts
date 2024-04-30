/// <reference types="vite/client" />

type Vehicle = [VehiclePropertyEnum, string | null][];

type DecodedVehicle = {
  vehicle?: Vehicle;
  error?: Error;
};
