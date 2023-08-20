import {FC} from "react";
import {getServerSession} from "next-auth/next";
import {redirect} from "next/navigation";
import {authConfig} from "@/configs/auth";
import {Library} from "@/components/Library/Library";
import {AddBookForm} from "@/components/Library/BooksForm/Form";

const LibraryPage: FC = async () => {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/signin");
  }

  return (
    <section>
      <h1 className="visually-hidden">Library</h1>
      <AddBookForm />
      <Library />
    </section>
  );
};

export default LibraryPage;
