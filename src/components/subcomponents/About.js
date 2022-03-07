import about from "./about.txt";
import { useEffect, useState } from "react";
  
export default function About() {
    var [aboutText, fetchAbout] = useState(null);
  
    useEffect(() => {
      fetch(about)
        .then((res) => {
          return res.text();
        })
        .then(fetchAbout)
        .catch((err) => console.error(err));
    }, []);
  
    return (
      <>
        {aboutText}
        For more information about how this data is collected, please click{" "}
        <a href="https://covid19tracker.ca/sources.html">here.</a>
      </>
    );
  }