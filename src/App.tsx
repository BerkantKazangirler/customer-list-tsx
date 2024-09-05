import { Clist, SideBar } from "./components";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <SideBar></SideBar>
        <Clist></Clist>
      </div>
    </>
  );
}

export default App;
