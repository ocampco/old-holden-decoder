import * as engineCodes from '../constants/engineCodes';

const findPrefix = (engineNumber: string) => {
  for (const key in engineCodes.engines) {
    if (engineNumber.startsWith(key)) {
      return {
        prefix: key,
        ...engineCodes.engines[key]
      };
    }
  }

  return null;
}

// TODO: Create shared decoder
const decodeEngine = (engineNumber: string): DecodedEngine => {
  const sanitisedEngineNumber = engineNumber.trim().toUpperCase();
  const match = findPrefix(sanitisedEngineNumber);

  if (!match)
    return {
      error: new Error('Engine number is not valid or cannot be decoded'),
    };

  return {
    engine: [
      [engineCodes.EngineProperty.Prefix, match.prefix || null],
      [
        engineCodes.EngineProperty.Size,
        match.size || null,
      ],
      [
        engineCodes.EngineProperty.Note,
        match.note || null,
      ],
    ],
  };
};

export default decodeEngine;
