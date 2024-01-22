import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
      <Link href=".about/team">Find out more about our team of developers</Link>
    </div>
  );
}
