/// <reference types="vite/client" />

type Vehicle = [VehicleProperty, string | null][];

type DecodedVehicle = {
  vehicle?: Vehicle;
  error?: Error;
};
