import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies } from "nookies";

export function withSSRAuth<P>(fn: GetServerSideProps<any>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context);

    if (!cookies["@jlemann_corretora.token"]) {
      console.log("caiu aqui");
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return await fn(context);
  };
}
