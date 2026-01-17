import Card from "./components/Card";
import Heading from "./components/Heading";
import data from "./components/data";
function App() {
  return (
    <>
      <Heading></Heading>
      {data.map((item) => (
        <Card
          key={item.id}
          country={item.country}
          mapLocation={item.mapLocation}
          placeName={item.title}
          startDate={item.startDate}
          endDate={item.endDate}
          info={item.info}
          img={item.img}
        ></Card>
      ))}
    </>
  );
}

export default App;
