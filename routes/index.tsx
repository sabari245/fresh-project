/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import SayHello from "../islands/sayHello.tsx";

export default function Home() {
  return (
    <div class={tw`flex justify-center items-center h-screen w-screen`}>
      <SayHello name="World" />
    </div>
  );
}
