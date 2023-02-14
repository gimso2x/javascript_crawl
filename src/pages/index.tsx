import { Tab } from "@headlessui/react";
import APT from "components/APT";
import NEWS from "components/NEWS";
import VL from "components/VL";

const TAB = [
  {
    name: "APT",
    component: <APT />,
  },
  {
    name: "VL",
    component: <VL />,
  },
  {
    name: "News",
    component: <NEWS />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="w-full px-2 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {TAB.map((e, i) => (
            <div key={i}>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {e.name}
              </Tab>
            </div>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {TAB.map((e, i) => (
            <Tab.Panel key={i}>{e.component}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
