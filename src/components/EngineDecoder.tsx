import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Results from './Results';
import { Heading, Input, Search, Submit } from './VehicleDecoder.styles';
import * as decoders from '../decoders';

const getInitialResult = (engineNumber: string) =>
  engineNumber ? decoders.engine(engineNumber) : null;

const EngineDecoder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const submittedEngineNumber = searchParams.get('engineNumber') || '';
  const [inputEngineNumber, setInputEngineNumber] = useState<string>(
    submittedEngineNumber,
  );
  const [result, setResult] = useState<null | DecodedEngine>(
    getInitialResult(submittedEngineNumber),
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputEngineNumber) {
      const result = decoders.engine(inputEngineNumber);

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
      {result && (
        <Heading>
          Holden engine number decoder results for "{submittedEngineNumber}"
        </Heading>
      )}
      {result?.error && <div>{result?.error.message}</div>}
      {result?.engine && <Results data={result?.engine} />}
    </>
  );
};

export default EngineDecoder;
