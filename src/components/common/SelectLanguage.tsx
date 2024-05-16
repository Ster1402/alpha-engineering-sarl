import Link from "next/link";
import { Button } from "../ui/button";
import lang from "@/lang";
import { ROUTES } from "@/config";

const SelectLanguage = async () => {
  return (
    <>
      <Link href={ROUTES.FAQ}>{lang.buttons["faq"]}</Link>
      <div className="text-sm font-light flex gap-2 justify-center items-center">
        <Button variant="link" className="px-1">
          {lang.buttons["en"]}
        </Button>
        {"/"}
        <Button variant="link" className="px-1 font-semibold">
          {lang.buttons["fr"]}
        </Button>
      </div>
      <Link href={ROUTES.CONTACT_US}>
        <Button className="w-full">{lang.buttons["contact"]}</Button>
      </Link>
    </>
  );
};

export default SelectLanguage;
