"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();



    //console.log(user);
    return (
        <div className="text-white">
                    <h1 className="text-3xl font-bold m-2 text-white">Shopping List App</h1>
                    <p className="pl-2">{user ? 
                      <p>Welcome {user.displayName} ({user.email}).</p> : "Please sign in"}
                    </p>

                    {user && user.displayName}
                    <p className="pl-2">
                    {user ? (
                        <>
                        <button onClick={firebaseSignOut}>Sign Out</button>
                        <p>
                        <Link href="/week-9/shopping-list" className="text-white hover:underline">
                            Go to Shopping List
                        </Link>
                        </p></>
                    ) : (
                        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
                    )}
                    </p>
           
        </div>
    );
}