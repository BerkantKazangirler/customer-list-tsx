import { Clist, Sidebar } from "./components";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <Clist></Clist>
      </div>
    </>
  );
}

export default App;
