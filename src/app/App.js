
import FullForm from "../Components/FullForm";
import { FormProvider } from "react-hook-form";

function App() {


  return (
    <FormProvider className="App">
      <FullForm/> 
    </FormProvider>
    
  );
}

export default App;