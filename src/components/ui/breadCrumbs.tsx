import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BreadCrumbsProps {
  label: string;
  Link: string;
}

const BreadCrumbs: React.FunctionComponent<{ data: BreadCrumbsProps[] }> = ({
  data,
}) => {
  return (
    <div className="h-7 flex gap-2 items-center">
      <Link to="" className="w-5 h-5 flex justify-center items-center">
        <img
          src={"/svg/global/home-line.svg"}
          alt="home"
          className="flex just ify-center items-center"
        />
      </Link>
      <img
        src={"/public/svg/global/chevron-right.svg"}
        alt="right-arrow"
        className="flex justify-center items-center"
      />
      {data.map((link, index) => {
        return (
          <div className="flex h-7 gap-2 items-center" key={index}>
            <Link
              to={link.Link}
              className="h-5 flex justify-center items-center w-fit"
            >
              <Button
                className={`shadow-none border-none rounded-md py-1 px-2 ${
                  index + 1 === data.length ? "bg-gray-50" : ""
                } text-gray-700 flex items-center justify-center font-semibold leading-5 text-Text-sm`}
              >
                {link.label}
              </Button>
            </Link>
            {index + 1 !== data.length && (
              <img
                src={"/public/svg/global/chevron-right.svg"}
                alt="right-arrow"
                className="flex justify-center items-center"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
