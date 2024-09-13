import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Results from './Results';
import { Heading, Input, Search, Submit } from './VehicleDecoder.styles';
import * as decoders from '../decoders';

const getInitialResult = (vin: string) => (vin ? decoders.vehicle(vin) : null);

const EngineDecoder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const submittedEngineNumber = searchParams.get('engineNumber') || '';
  const [inputEngineNumber, setInputEngineNumber] = useState<string>(submittedEngineNumber);
  const [result, setResult] = useState<null | DecodedVehicle>(
    getInitialResult(submittedEngineNumber),
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputEngineNumber) {
      const result = decoders.vehicle(inputEngineNumber);

      setResult(result);
      setSearchParams({ engineNumber: inputEngineNumber });
    }
  };

  return (
    <>
      <Search onSubmit={handleSubmit}>
        <Input
          type="text"
          autoCapitalize="characters"
          value={inputEngineNumber}
          placeholder="Enter engine number e.g. QR12345"
          onChange={(e) => setInputEngineNumber(e.target.value)}
        />
        <Submit type="submit">Decode</Submit>
      </Search>
      {result && <Heading>Holden engine number decoder results for "{submittedEngineNumber}"</Heading>}
      {result?.error && <div>{result?.error.message}</div>}
      {result?.vehicle && <Results vehicle={result?.vehicle} />}
    </>
  );
};

export default EngineDecoder;
