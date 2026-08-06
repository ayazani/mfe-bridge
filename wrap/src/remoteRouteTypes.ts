export type RemoteAppId = 'mfe1' | 'mfe2'

export type RemoteRouteDefinition = {
  readonly id: string
  readonly label: string
  readonly path: string
}

export type RemoteRouteManifest = {
  readonly id: RemoteAppId
  readonly label: string
  readonly basePath: `/${string}`
  readonly accent: 'blue' | 'green'
  readonly routes: readonly RemoteRouteDefinition[]
}
