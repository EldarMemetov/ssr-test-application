import { fetchUsers } from "../utils/api";

import Link from "next/link";
import styles from "./usersPage.module.css";
export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1 className={styles.title}>Users</h1>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} className={styles.userLink}>
              {user.name || `${user.firstname || ""} ${user.lastname || ""}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
