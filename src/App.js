import Directions from "./components/Directions";
import Layout from "./components/Layout";
import ConfigProviderAntd from "./utils/ConfigProviderAntd";

function App() {
  return (
    <ConfigProviderAntd>
    <Layout>
      <div>
        <Directions />
      </div>
      </Layout>
      </ConfigProviderAntd>
  );
}

export default App;
