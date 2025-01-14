//src\App.tsx

import Layout from "./Layout";
import HeaderComponents from "./components/HeaderComponents";
import SidebarComponents from "./components/SidebarComponents";
import MainComponents from "./components/MainComponents";
import FooterComponents from "./components/FooterComponents";


const App: React.FC = () => {
  return (
    <Layout
      header={<HeaderComponents />}
      aside={<SidebarComponents />}
      main={<MainComponents />}
      footer={<FooterComponents />}
    />
  );
};

export default App;
