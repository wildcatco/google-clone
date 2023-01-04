import { GetServerSideProps, NextPage } from "next";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import Header from "../../components/header";

interface Props {
  provider: ClientSafeProvider;
}

const SignIn: NextPage<Props> = ({ provider }) => {
  return (
    <>
      <Header />
      <div className="mt-40">
        <div key={provider.id} className="flex flex-col items-center">
          <Image
            src="https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google-logo"
            width={208}
            height={70.69}
            className="w-52 object-cover"
          />
          <p className="text-sm italic my-10">
            This website is created for learning purposes
          </p>
          <button
            className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const providers = await getProviders();

  if (!providers) {
    return {
      notFound: true,
    };
  }

  return {
    props: { provider: providers["google"] },
  };
};
