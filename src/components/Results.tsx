import { PropertyCell, Table, ValueCell } from "./Results.styles";

const Results = ({ vehicle }: { vehicle: Vehicle }) => (
  <Table>
    <tbody>
      {vehicle.map(([property, value]) => (
        <tr key={`${property}-${value}`}>
          <PropertyCell scope="row">{property}</PropertyCell>
          <ValueCell>{value ?? 'Unknown'}</ValueCell>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default Results;
