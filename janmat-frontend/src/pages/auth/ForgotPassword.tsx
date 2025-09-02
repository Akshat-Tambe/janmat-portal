// src/pages/auth/ForgotPassword.tsx
const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <form>
        <label>Email:</label>
        <input type="email" />
        <br />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};
export default ForgotPassword;
