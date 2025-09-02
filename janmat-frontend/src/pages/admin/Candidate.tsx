// src/pages/admin/Candidates.tsx
const Candidates = () => {
  return (
    <div>
      <h1>Manage Candidates</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Party:</label>
        <input type="text" />
        <br />
        <label>Election ID:</label>
        <input type="text" />
        <br />
        <button type="submit">Add Candidate</button>
      </form>

      <h2>Candidate List</h2>
      <ul>
        <li>John Doe - Party A <button>Edit</button> <button>Delete</button></li>
      </ul>
    </div>
  );
};
export default Candidates;
