import UserDetails from "../../components/UserDetails/UserDetails";
import * as React from "react";
export default function UserPage({ params }) {
  const { id } = React.use(params);
  return <UserDetails userId={id} />;
}
