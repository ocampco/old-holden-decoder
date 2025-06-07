/// <reference types="vite/client" />

// TODO: Refactor to use generic type?
type Vehicle = [VehicleProperty, string | null][];
type Engine = [EngineProperty, string | null][];

type DecodedVehicle = {
  vehicle?: Vehicle;
  error?: Error;
};

type DecodedEngine = {
  engine?: Engine;
  error?: Error;
};
