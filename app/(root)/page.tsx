import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
import AddDocumentButton from "@/components/AddDocumentButton";
const HomePage = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          {/* <Notifications /> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      <div className="document-list-empty">
        <Image
          src="/assets/icons/doc.svg"
          alt="Document"
          width={40}
          height={40}
          className="mx-auto"
        />

        <AddDocumentButton
          userId={clerkUser.id}
          email={clerkUser.emailAddresses[0].emailAddress}
        />
      </div>
    </main>
  );
};

export default HomePage;
