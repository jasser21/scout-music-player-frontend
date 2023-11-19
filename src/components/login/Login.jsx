import Authorization from "./Authorization";
function Login() {
  return (
    <div className="login-container">
      <Authorization />
      {/* <form action=".">
        <label htmlFor="username">username</label>
        <input onChange={handleChange} type="text" name="username" />
        <label htmlFor="email">email</label>
        <input onChange={handleChange} type="text" name="email"></input>
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" name="password" />
        <button type="button" onClick={handleSubmit}></button>
      </form> */}
    </div>
  );
}

export default Login;
