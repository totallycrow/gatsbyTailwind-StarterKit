import React from "react";
import "../styles/global.css";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl pl-2 mt-4">HOMEPAGE</h1>
      <div className="p-2 my-4">
        <p>HELLO WORLD</p>
      </div>
    </Layout>
  );
}
