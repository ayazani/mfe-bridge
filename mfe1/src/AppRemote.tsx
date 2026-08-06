import { createBridgeComponent } from '@module-federation/bridge-react/v19'
import App from './App'
import './index.css'

export default createBridgeComponent({
  rootComponent: App,
})
