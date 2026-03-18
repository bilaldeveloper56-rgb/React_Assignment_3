import React from "react";
import Card from "./Card";
const CardList = () => {
  return (
    <div className="flex flex-col bg-gray-200 gap-6 p-5">
        <div className="flex justify-center gap-5">
      <Card
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        title="Web Development"
        description="Build websites using HTML, CSS, and JavaScript."
      />
      <Card
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        title="Web Development"
        description="Build websites using HTML, CSS, and JavaScript."/>
        <Card
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a"
        title="UI/UX Design"
        description="Design modern and user-friendly interfaces."
      />

        </div>
        <div className="flex justify-center gap-5">


      <Card
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        title="Data Science"
        description="Analyze data and build machine learning models."
      />

      <Card
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        title="Digital Marketing"
        description="Promote brands using online platforms."
      />

      <Card
        image="https://images.unsplash.com/photo-1510519138101-570d1dca3d66"
        title="Cyber Security"
        description="Protect systems from cyber attacks."
      />
        </div>

    </div>
  );
};

export default CardList;
