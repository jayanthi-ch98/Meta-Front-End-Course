import Image from "next/image";
function Header(){
  let title="This is my first React App"
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}
export default function Home() {
  return (
    /* The <main> element is used here to:
     1. Semantically indicate the main content of the page
     2. Improve accessibility for screen readers
     3. Follow best practices for HTML5 document structure
     4. Potentially aid in SEO by clearly defining the primary content */
     <main>
      <Header />
      </main>
    
  )
}
  