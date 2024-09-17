import Footer from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import MidjourneyDescription from "./Components/MidjourneyDescription/MidjourneyDescription";
import OurCapabilities from "./Components/OurCapabilities/OurCapabilities";
import Chat from "./Modules/Chat/Chat";

export function App() {

  return (
    <div className='App'>
      <Header />
      <div className="app-conteiner">
        <Chat />
        <OurCapabilities />
        <MidjourneyDescription />
      </div>
      <Footer />
    </div>
  )
}