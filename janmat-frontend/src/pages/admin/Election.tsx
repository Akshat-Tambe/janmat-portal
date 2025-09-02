// src/pages/admin/Elections.tsx
const Elections = () => {
  return (
    <div>
      <h1>Manage Elections</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Start - End</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Election 2025</td>
            <td>Upcoming</td>
            <td>01 Aug 10:00 - 01 Aug 18:00</td>
            <td>
              <button>Start</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Elections;
