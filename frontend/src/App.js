import "./App.css";
import Layout from './components/Layout/Layout'
import { inject } from '@vercel/analytics';
inject();
function App() {
   return <Layout />;
}

export default App;
