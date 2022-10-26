import { useCurrentUser } from "../hooks/userCurrentUser";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  const { isLoading, isAuthorized, username } = useCurrentUser();

  if (isLoading) {
    return null;
  }
  const authorizedBody = (
    <>
      <h4>You have successfully logged in.</h4>
      <br />
      <h2>Your current balance is $50,523.93 </h2>
      <br />
      <br />
      <h4>
        Current User: <b>{username}</b>
      </h4>
    </>
  );

  const unauthorizedBody = (
    <>
      You have not logged in and cannot view the dashboard.
      <br />
      <br />
      <a href="/" className={styles.link}>
        Login to continue.
      </a>
    </>
  );

  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>
        {isAuthorized ? "Welcome !" : "Unauthorized"}
      </div>
      <div className={styles.message}>
        {isAuthorized ? authorizedBody : unauthorizedBody}
      </div>
    </div>
  );
}

export default Dashboard;
