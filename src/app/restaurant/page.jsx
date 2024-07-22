"use client";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Restaurant() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        loged in as the use name :{session.user.email}
        <button onClick={() => signOut()}>signout</button>
      </>
    );
  } else {
    return (
      <>
        not signeind in <br />
        <button onClick={() => signIn()}>signin</button>
      </>
    );
  }
}
