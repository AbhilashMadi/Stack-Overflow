import { FC } from "react";
import { SignIn } from "@clerk/nextjs";

const page: FC = () => {
  return <SignIn appearance={{ elements: { rootBox: "root-sign-in" } }} />
}

export default page;