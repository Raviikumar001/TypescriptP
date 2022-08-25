import React,{FC, createContext} from 'react';

import { HairColor } from './components/Person';

import { Person } from './components/Person';



interface AppContextInterface {
    name: string;
    age : number;
    country: string;
}

const AppContext  = createContext<AppContextInterface | null>(null)



const App:FC = ()=> {

  const contextValue : AppContextInterface = {
    name: "Pedro",
    age: 20,
    country: "Brazil"
  }
  
  return (
    <AppContext.Provider  value={contextValue}>
    <div className="App">
      <Person name="Ravi " age={24} email="rak@gmail.com" hairColor={HairColor.Blonde} />
    </div>
    </AppContext.Provider>
  );
}

export default App;
