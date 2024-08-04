const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(today);
};
export const Person = () => {
  const data = {
    name: "Elon Musk",
    avatar:
      "https://imgs.search.brave.com/lZ09dNYtf_RVu_55oFdOGHl04fZEfv8K-A0_hwbiwPQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjI3/NjM1MjQ0L3Bob3Rv/L2Vsb24tbXVzay1p/cy1waG90b2dyYXBo/ZWQtZm9yLWJsb29t/YmVyZy1idXNpbmVz/c3dlZWstb24tc2Vw/dGVtYmVyLTEwLTIw/MTItaW4taGF3dGhv/cm5lLmpwZz9zPTYx/Mng2MTImdz1naSZr/PTIwJmM9cU9PRXJE/ZjNZcGRBbDlHU0JE/aUpCcnpoM3plRkw4/NzRsVUNqQ2JGeGFv/MD0",
    roles: ["CEO da Tesla", "CEO da SpaceX"],
  };

  const today: Date = new Date();

  return (
    <>
      <h1>
        {data.name} - {getWeekday(today)}
      </h1>
      <img className="w-56" src={data.avatar} alt={data.name} />
      <ul>
        <li>{data.roles[0]}</li>
        <li>{data.roles[1]}</li>
        <li>E tem o título de homen mais rico do mundo</li>
      </ul>
    </>
  );
};
