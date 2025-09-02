// src/pages/admin/Results.tsx
const Results = () => {
  return (
    <div>
      <h1>Election Results</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Party</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Party A</td>
            <td>123</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Results;
