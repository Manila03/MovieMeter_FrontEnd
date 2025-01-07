
const SignIn = ({ setSignIn }) => (
    <div>
        <h2>Sign In</h2>
        <p>Este es el componente de Sign In.</p>
        <button onClick={() => setSignIn(false)}>Ir a Login</button>
    </div>
);
export default SignIn;