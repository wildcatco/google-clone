import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const User = () => {
  const { data: session } = useSession();

  const defaultUserImage = "/images/default-user.webp";

  if (session) {
    return (
      <>
        <Image
          onClick={() => signOut()}
          src={session.user?.image || defaultUserImage}
          alt="user-image"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full p-1 hover:bg-gray-200 cursor-pointer"
        />
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => signIn()}
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
      >
        Sign in
      </button>
    </>
  );
};

export default User;
