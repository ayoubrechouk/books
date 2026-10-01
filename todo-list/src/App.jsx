import Lmakla from './lmakla.jsx';

function App() {
  const Fcb = [
    {id: 1, name: "pedri" , categorie: 8},
    {id: 2, name: "yamal", categorie: 10},
    {id: 3, name: "rapha", categorie: 9},
    {id: 4, name: "rodri", categorie: 16}
  ];

  const Arsenal = [
    {id: 5, name: "saka", categorie: 12 },
    {id: 6, name: "rice", categorie: 8 },
    {id: 7, name: "eze", categorie: 10 },
    {id: 8, name: "raya", categorie: 1 },
    {id: 9, name: "mereno", categorie: 6 }
  ];

  return (
    <div>
      <Lmakla items={Fcb} categorie="Fcb" />
      <Lmakla items={Arsenal} categorie="Arsenal" />
    </div>
  )
}

export default App;