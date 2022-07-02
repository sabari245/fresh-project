/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
interface helloProps {
    name: string;
}

export default function SayHello(props: helloProps) {
  return (
    <div>
    <div className={tw`flex justify-center items-center`}>
        <div className={tw`mb-4 bg-clip-text bg-gradient-to-r break-words font-extrabold from-pink-500 to-blue-500 h1 leading-tighter md:text-6xl text-5xl text-center text-transparent tracking-tighter`}>
            Hello, {props.name} 
        </div>
        <span className={tw`mb-4 font-extrabold h1 leading-tighter md:text-6xl text-5xl text-center`}>👋</span>
    </div>
    <p className={tw`text-gray-900 mb-8 text-center text-xl font-bold text-gray-300`}>Why are you still looking at me? go ahead and make your own fresh project <br/> to decorate your portfolio</p>
    </div>
    );
}