import { createRemoteAppComponent } from '@module-federation/bridge-react'

const RemoteBridgeApp = createRemoteAppComponent({
  loader: () => import('mfe1/AppRemote'),
  loading: <div>Loading MFE 1...</div>,
  fallback: ({ error }) => (
    <div role="alert">Не удалось загрузить MFE 1: {String(error)}</div>
  ),
})

export default function Mfe1() {
  return <RemoteBridgeApp />
}
