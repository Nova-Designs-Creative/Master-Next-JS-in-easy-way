import React from "react";

// generate metadata
export async function generateMetadata({ params }, parent) {
  // read route params
  const id = (await params).id;

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json());

  return {
    title: product.title,
    description: product.description,
  };
}

const page = ({ params }) => {
  return <div>project Id: {params.projectId}</div>;
};

export default page;
