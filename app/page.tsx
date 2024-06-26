import Link from "next/link";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center">
      <section className="flex justify-center flex-col items-center text-2xl my-3">
        <div>
          Welcome to my portfolio!
        </div>
        <div>
          I am a software engineer with full stack experience building scalable, accessible, and dynamic websites.
        </div>
        <div className="[&>a]:text-turquoise-blue-800">
          Feel free to check out my <Link href='/projects'>projects</Link> or my <Link href='/resume'>resume</Link>.
        </div>
        <div className="[&>a]:text-turquoise-blue-800">
          If you want to get in contact with me, feel free to send an email to <a href="mailto:alex.moxley@gmail.com">alex.moxley@gmail.com</a>
        </div>
      </section>
      <Grid />
    </main>
  );
}
