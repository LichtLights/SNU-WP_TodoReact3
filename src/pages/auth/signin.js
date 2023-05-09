import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Signin() {
  const router = useRouter();
  const { data: session } = useSession();
  const is_admin = session?.user?.role === "admin";
  
  return (
    <div className="flex justify-center h-screen">
      {session ? (
        <div className="grid m-auto text-center">
          {is_admin ? (
            <>
              <div className="m-4">Signed in as admin</div>
              <button
                className={`w-40
                        justify-self-center
                        p-1 mb-4
                      bg-blue-500 text-white
                        border border-blue-500 rounded
                      hover:bg-white hover:text-blue-500`}
                onClick={() => router.push("/admin")}
              >
                Go to Admin Page
              </button>
            </>
          ) : (
            <>
              <div className="m-4">Signed in as {session.user.name}</div>
              <button
                className={`w-40
                        justify-self-center
                        p-1 mb-4
                      bg-blue-500 text-white
                        border border-blue-500 rounded
                      hover:bg-white hover:text-blue-500`}
                onClick={() => router.push("/")}
              >
                Go to Home
              </button>
            </>
          )}
          <button
            className={`w-40
                      justify-self-center
                      p-1 mb-4
                    text-blue-500
                      border border-blue-500 rounded
                    hover:bg-white hover:text-blue-500`}
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="grid m-auto text-center">
          <div className="m-4">Not signed in</div>
          <button
            className={`w-40
                      justify-self-center
                      p-1 mb-4
                    bg-blue-500 text-white
                      border border-blue-500 rounded
                    hover:bg-white hover:text-blue-500`}
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}
