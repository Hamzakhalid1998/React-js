import Card from "./Components/Card";

function App() {
  return (
    <div className="flex justify-between">
      <Card
        name="Hamza Sial"
        cardText="Frontend Developer"
        btnText="Get Appointment"
      />
      <Card name="Ahmad Khan" cardText="Gym Trainer" btnText="See Pakages" />
    </div>
  );
}

export default App;
