import { Layout, Menu, Breadcrumb } from 'antd';
import NavigationBar from "./components/layout/NavigationBar";
import Main from './components/Main';
import ListExample from './components/ListExample';


// destructure 
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div>
      <Layout className="layout">
        <NavigationBar/>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            {/* <Main /> */}
            <ListExample />
          </div>
        </Content>
        <Footer />
      </Layout>,
    </div>
  );
}

export default App;
