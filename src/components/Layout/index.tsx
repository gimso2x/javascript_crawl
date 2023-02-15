import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

const TAB = [
  {
    name: "APT",
  },
  {
    name: "VL",
  },
  {
    name: "News",
  },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div className="w-full px-2 py-2 sm:px-0">
      <div className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 justify-evenly">
        {TAB.map((e, i) => {
          const href = `/${e.name.toLowerCase()}`;
          return (
            <Link
              key={i}
              href={href}
              className={clsx(
                "w-full rounded-lg p-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 text-center",
                href === router.pathname
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )}
            >
              {e.name}
            </Link>
          );
        })}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default Layout;
