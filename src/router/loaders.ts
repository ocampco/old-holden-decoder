import decodeVehicle from '../decodeVehicle';

export const decodeFromParams = ({
  request,
}: {
  request: Request;
}): null | DecodedVehicle => {
  const url = new URL(request.url);
  const vin = url.searchParams.get('vin');

  if (!vin) return {};

  return decodeVehicle(vin);
};
