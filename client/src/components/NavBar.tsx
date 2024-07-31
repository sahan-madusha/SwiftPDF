import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

export const NavBar = () => {
  return (
    <>
      <nav className="sticky h-14 inset-x-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Link href="/" className="flex z-40 font-semibold">
              <span>SwiftPDF</span>
            </Link>

            {/* TODO : Mobile nav bar */}

            <div className="hidden items-center space-x-4 sm:flex">
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span>pricing</span>
                </Link>
              </>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};
