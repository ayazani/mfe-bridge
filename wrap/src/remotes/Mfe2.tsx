import { createRemoteAppComponent } from '@module-federation/bridge-react'
import { MfeLoadingFallback } from './MfeLoadingFallback'

const RemoteBridgeApp = createRemoteAppComponent({
  loader: () => import('mfe2/AppRemote'),
  loading: <MfeLoadingFallback accent="green" appName="MFE 2" />,
  fallback: ({ error }) => (
    <div role="alert">Не удалось загрузить MFE 2: {String(error)}</div>
  ),
})

export default function Mfe2() {
  return <RemoteBridgeApp />
}
