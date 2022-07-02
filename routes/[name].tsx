/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import SayHello from "../islands/sayHello.tsx";

export default function Greet(props: PageProps) {
  <div class={tw`flex justify-center items-center h-screen w-screen`}>
  <SayHello name={props.params.name} />
</div>
}
