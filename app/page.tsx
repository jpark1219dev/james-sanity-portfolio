import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Navigation from "../components/navigation";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="text-center p-10">
        <Image
          src={
            "https://www.jamesjinpark.com/img-backgrounds/proflie_picture.png"
          }
          alt={"My Picture"}
          width={600}
          height={600}
          className="relative rounded-full h-64 w-64 mx-auto object-cover"
        />
        <p className="text-3xl mt-5">Welcome.</p>
        <p className="text-lg mt-5">
          Hi my name is James Park. I'm a full stack web developer with 5 years
          of experience in Javascript and PHP based in Los Angeles, California.
        </p>
      </div>
      <div className="flex md:p-16 ">
        <SocialIcon
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
          url="https://www.github.com/jpark1219dev"
          fgColor="white"
          bgColor="transparent"
          style={{ height: 100, width: 100 }}
        />
        <div>
          <SocialIcon
            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            url="https://www.linkedin.com/in/james-park-16233467/"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 100, width: 100 }}
          />
        </div>
        <div>
          <SocialIcon
            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            url="https://www.linkedin.com/in/james-park-16233467/"
            network="email"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 100, width: 100 }}
          />
        </div>
      </div>
    </main>
  );
}
