import { createRemoteAppComponent } from '@module-federation/bridge-react'
import { MfeLoadingFallback } from './MfeLoadingFallback'

const RemoteBridgeApp = createRemoteAppComponent({
  loader: () => import('mfe1/AppRemote'),
  loading: <MfeLoadingFallback accent="blue" appName="MFE 1" />,
  fallback: ({ error }) => (
    <div role="alert">Не удалось загрузить MFE 1: {String(error)}</div>
  ),
})

export default function Mfe1() {
  return <RemoteBridgeApp />
}
