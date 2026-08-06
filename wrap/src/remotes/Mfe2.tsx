import { createRemoteAppComponent } from '@module-federation/bridge-react'

const RemoteBridgeApp = createRemoteAppComponent({
  loader: () => import('mfe2/AppRemote'),
  loading: <div>Loading MFE 2...</div>,
  fallback: ({ error }) => (
    <div role="alert">Не удалось загрузить MFE 2: {String(error)}</div>
  ),
})

export default function Mfe2() {
  return <RemoteBridgeApp />
}
