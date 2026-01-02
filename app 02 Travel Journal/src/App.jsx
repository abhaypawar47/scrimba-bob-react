import Entry from "./component/Entry";
import Header from "./component/Header";
import data from "./component/data";

function App() {
  const entryElements = data.map((entry) => (
    <Entry key={entry.id} {...entry} />
  ));

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}

export default App;
