import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Results from './Results';
import { Heading, Input, Search, Submit } from './VehicleDecoder.styles';
import * as decoders from '../decoders';

const getInitialResult = (vin: string) => (vin ? decoders.vehicle(vin) : null);

const Decoder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const submittedVin = searchParams.get('vin') || '';
  const [inputVin, setInputVin] = useState<string>(submittedVin);
  const [result, setResult] = useState<null | DecodedVehicle>(
    getInitialResult(submittedVin),
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputVin) {
      const result = decoders.vehicle(inputVin);

      setResult(result);
      setSearchParams({ vin: inputVin });
    }
  };

  return (
    <>
      <Search onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputVin}
          placeholder="Enter VIN e.g. 8WN80THJ142069Z"
          onChange={(e) => setInputVin(e.target.value)}
        />
        <Submit type="submit">Decode</Submit>
      </Search>
      {result && (
        <Heading>Holden VIN decoder results for "{submittedVin}"</Heading>
      )}
      {result?.error && <div>{result?.error.message}</div>}
      {result?.vehicle && <Results vehicle={result?.vehicle} />}
    </>
  );
};

export default Decoder;
