import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <p className="text-green-500 font-bold">Hello Lingo !</p>
      <Button size={"lg"} variant={"destructive"}>
        Click Me
      </Button>
    </div>
  );
};

export default Home;
