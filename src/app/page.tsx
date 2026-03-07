import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Games from "@/components/Games";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Projects />
      <Games />
      <Blog />
    </div>
  );
}
