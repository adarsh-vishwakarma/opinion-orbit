import Navbar from "@/components/Navbar";
import LandingPage from "./landing-page";
import Footer from "./landing-page/footer";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(NEXT_AUTH)
  return (
    <>
      <Navbar session={session}/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LandingPage />
        <Footer />
      </main>{" "}
    </>
  );
}
