export default function Auth() {
  return (
    <form id="auth-form">
      <label htmlFor="auth-login-input">Login</label>
      <input id="auth-login-input" type="text" placeholder="Login" required />
      <button>Enter</button>
    </form>
  );
}
