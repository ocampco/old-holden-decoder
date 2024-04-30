import styled from 'styled-components';
import { useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import Results from './Results';
import decodeVehicle from '../decodeVehicle';

const Search = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 0.5rem;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex: 3;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

const Submit = styled.button`
  flex: 1;
  padding: 0.5rem 1rem;
`;

const Decoder = () => {
  // TODO: migrate away from loader hook
  const data = useLoaderData() as DecodedVehicle;
  const [searchParams, setSearchParams] = useSearchParams();
  const [vin, setVin] = useState<string>(searchParams.get('vin') || '');
  const [vehicle, setVehicle] = useState<null | Vehicle>(data.vehicle || null);
  const [error, setError] = useState<null | Error>(data.error || null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const param = vin ? { vin } : undefined;
    const result = decodeVehicle(vin);

    setSearchParams(param);
    setVehicle(result.vehicle || null);
    setError(result.error || null);
  };

  return (
    <>
      <Search onSubmit={handleSubmit}>
        <Input
          type="text"
          value={vin}
          placeholder="Enter VIN e.g. 8WN80THJ142069Z"
          onChange={(e) => setVin(e.target.value)}
        />
        <Submit type="submit">Decode</Submit>
      </Search>
      {error && <div>{error.message}</div>}
      {vehicle && <Results vehicle={vehicle} />}
    </>
  );
};

export default Decoder;
