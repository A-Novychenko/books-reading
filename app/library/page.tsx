import { FC } from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authConfig } from "@/configs/auth";
import { Library } from "@/components/Library/Library";

const LibraryPage: FC = async () => {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/signin");
  }

  return (
    <section>
      <h1 className="visually-hidden">Library</h1>
      <Library />
    </section>
  );
};

export default LibraryPage;
