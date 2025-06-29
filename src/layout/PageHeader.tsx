import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/youtube.png";
import Button from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../context/SidebarContext";

const PageHeader = () => {
  const [showFullWidth, setShowFullWidth] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <PageHeaderFirstSection hidden={showFullWidth}/>
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidth ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidth && (
          <Button
            type="button"
            size={"icon"}
            className="flex-shrink-0"
            variant={"ghost"}
            onClick={() => setShowFullWidth(false)}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-gray-200 shadow-inner shadow-gray-100 py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border border-gray-200 border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size={"icon"} className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidth ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidth(true)}
          variant={"ghost"}
          size={"icon"}
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Mic />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Upload />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Bell />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;

type PageHeaderFirstSectionProps = {
    hidden?: boolean
}

export function PageHeaderFirstSection({hidden = false}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`flex gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant={"ghost"} size={"icon"}>
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="h-6" />
      </a>
    </div>
  );
}
