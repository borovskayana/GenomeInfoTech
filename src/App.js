import Directions from "./components/Directions";
import Layout from "./components/Layout";
import ConfigProviderAntd from "./utils/ConfigProviderAntd";

function App() {
  return (
    <ConfigProviderAntd>
      <Layout>
        <Directions />
      </Layout>
    </ConfigProviderAntd>
  );
}

export default App;
