import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Results from './Results';
import { Input, Search, Submit } from './Decoder.styles';
import * as decoders from '../decoders/';

const getInitialResult = (vin: string) => (vin ? decoders.vehicle(vin) : null);

const Decoder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vin, setVin] = useState<string>(searchParams.get('vin') || '');
  const [result, setResult] = useState<null | DecodedVehicle>(
    getInitialResult(vin),
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (vin) {
      const result = decoders.vehicle(vin);

      setResult(result);
      setSearchParams({ vin });
    }
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
      {result?.error && <div>{result?.error.message}</div>}
      {result?.vehicle && <Results vehicle={result?.vehicle} />}
    </>
  );
};

export default Decoder;
