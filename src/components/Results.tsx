import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
`;

const PropertyCell = styled.th`
  text-align: left;
`;

const ValueCell = styled.td`
  text-align: left;
`;

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
