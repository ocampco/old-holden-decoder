import { PropertyCell, Table } from './Results.styles';

const Results = ({ data }: { data: Vehicle | Engine }) => (
  <Table>
    <tbody>
      {data.map(([property, value]) => (
        <tr key={`${property}-${value}`}>
          <PropertyCell scope="row">{property}</PropertyCell>
          <td>{value ?? 'Unknown'}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default Results;
