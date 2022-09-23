interface TabsProps {
  tabs: string[];
  selectedNavigation: number;
  onSelectTab: (id: number) => void;
}

export const Tabs = ({ tabs, selectedNavigation, onSelectTab }: TabsProps) => {
  return (
    <ul className="md:block flex items-center text-center space-x-10 lg:space-x-20 mb-12 flex-col md:flex-row">
      {tabs.map((item, index) => (
        <button
          key={item}
          style={{
            margin: 0,
          }}
          className={`${
            index === selectedNavigation
              ? "bg-green-800 text-white hover:bg-green-900 hover:text-gray-200"
              : "hover:bg-gray-200 hover:text-gray-400"
          } m-0 px-6 py-2 text-gray-900 font-normal cursor-pointer text-xl rounded-lg transition ease-in-out duration-300`}
          onClick={() => onSelectTab(index)}
        >
          {item}
        </button>
      ))}
    </ul>
  );
};
