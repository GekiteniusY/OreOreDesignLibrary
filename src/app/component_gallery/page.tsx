import Link from "next/link";
import React from "react";

const ComponentGallery = () => {
  return (
    <>
      <div>ComponentGallery</div>
      <div>TEMPLATETSとPAGESはこちら</div>
      <Link href={"/templates_sample"}>TEMPLATES</Link>
      <Link href={"/pages_sample"}>PAGES</Link>
    </>
  );
};

export default ComponentGallery;
