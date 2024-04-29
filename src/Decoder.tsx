import { useState } from 'react';
import decodeVehicle from './decodeVehicle';

const Decoder = () => {
  const [vin, setVin] = useState<string>('');
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const result = decodeVehicle(vin);

    if (result instanceof Error) {
      setVehicle(null);
      setError(result);
    } else {
      setError(null);
      setVehicle(result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={vin}
        placeholder="Enter VIN e.g. 8WN80THJ142069Z"
        onChange={(e) => setVin(e.target.value)}
      />
      <button type="submit">Decode</button>
      {error && <div>{error.message}</div>}
      {vehicle && (
        <div>
          {vehicle.map(([property, value]) => (
            <div key={`${property}-${value}`}>
              {property}: {value ?? 'Unknown'}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default Decoder;
