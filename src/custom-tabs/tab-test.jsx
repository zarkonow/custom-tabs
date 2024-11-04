import Tabs from "./tabs";
import "./tabs.css"

function RandomComponent() {
  return <h1>Random Content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for TAB 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for TAB 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content for TAB 3</div>,
    },
    {
      label: "Tab 4",
      content: <RandomComponent />,
    },
  ];


function handleChange(currentTabIndex){
console.log(currentTabIndex);

}



  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
