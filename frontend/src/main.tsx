import { StrictMode } from 'react'; import { createRoot } from 'react-dom/client'; import App from './App'; import { PriorityProvider } from './store/usePriority'; import './styles/global.css';
createRoot(document.getElementById('root')!).render(<StrictMode><PriorityProvider><App/></PriorityProvider></StrictMode>);
