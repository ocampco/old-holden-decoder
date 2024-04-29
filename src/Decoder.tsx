import styled from 'styled-components';
import { useState } from 'react';
import decodeVehicle from './decodeVehicle';

const Input = styled.input`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  width: 16rem;
  font-size: 1rem;
`;

const Submit = styled.button`
  padding: 0.5rem 1rem;
`;

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
      <Input
        type="text"
        value={vin}
        placeholder="Enter VIN e.g. 8WN80THJ142069Z"
        onChange={(e) => setVin(e.target.value)}
      />
      <Submit type="submit">Decode</Submit>
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
