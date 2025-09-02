// src/pages/admin/CreateElection.tsx
const CreateElection = () => {
  return (
    <div>
      <h1>Create Election</h1>
      <form>
        <label>Title:</label>
        <input type="text" />
        <br />
        <label>Description:</label>
        <textarea />
        <br />
        <label>Start Time:</label>
        <input type="datetime-local" />
        <br />
        <label>End Time:</label>
        <input type="datetime-local" />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
export default CreateElection;
