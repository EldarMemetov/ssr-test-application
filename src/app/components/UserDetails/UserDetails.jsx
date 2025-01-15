import { fetchUserDetails } from "../../utils/api.js";
import styles from "./UserDetails.module.css";

export default async function UserDetails({ userId }) {
  const userDetails = await fetchUserDetails(userId);

  if (!userDetails) {
    return <p className={styles.error}>User details are not available.</p>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.name}>
        {userDetails.name || `${userDetails.firstname} ${userDetails.lastname}`}
      </h3>
      <div className={styles.detailContainer}>
        <p className={styles.detail}>
          <strong>Email:</strong> {userDetails.email}
        </p>
        <p className={styles.detail}>
          <strong>Phone:</strong> {userDetails.phone}
        </p>
        <p className={styles.detail}>
          <strong>Website:</strong>{" "}
          <a
            className={styles.link}
            href={`http://${userDetails.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userDetails.website}
          </a>
        </p>
      </div>

      <h4 className={styles.sectionTitle}>Address</h4>
      {userDetails.address && (
        <div className={styles.address}>
          <p className={styles.detail}>
            {userDetails.address.street}, {userDetails.address.suite}
          </p>
          <p className={styles.detail}>
            {userDetails.address.city}, {userDetails.address.zipcode}
          </p>
          <p className={styles.detail}>
            <strong>Geo:</strong> ({userDetails.address.geo.lat},{" "}
            {userDetails.address.geo.lng})
          </p>
        </div>
      )}

      <h4 className={styles.sectionTitle}>Company</h4>
      {userDetails.company && (
        <div className={styles.company}>
          <p className={styles.detail}>
            <strong>Name:</strong> {userDetails.company.name}
          </p>
          <p className={styles.detail}>
            <strong>Catch Phrase:</strong> {userDetails.company.catchPhrase}
          </p>
          <p className={styles.detail}>
            <strong>Business:</strong> {userDetails.company.bs}
          </p>
        </div>
      )}

      <h4 className={styles.sectionTitle}>Login Information</h4>
      {userDetails.login ? (
        <div className={styles.login}>
          <p className={styles.detail}>
            <strong>Username:</strong> {userDetails.login.username}
          </p>
          <p className={styles.detail}>
            <strong>Registered:</strong>{" "}
            {new Date(userDetails.login.registered).toLocaleDateString()}
          </p>
          <p className={styles.detail}>
            <strong>UUID:</strong> {userDetails.login.uuid}
          </p>
        </div>
      ) : (
        <p className={styles.error}>Login information is not available.</p>
      )}

      <h4 className={styles.sectionTitle}>Additional Details</h4>
      {userDetails.birthDate ? (
        <p className={styles.detail}>
          <strong>Birth Date:</strong>{" "}
          {new Date(userDetails.birthDate).toLocaleDateString()}
        </p>
      ) : (
        <p className={styles.error}>Birth Date is not available.</p>
      )}
    </div>
  );
}
