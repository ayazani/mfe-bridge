declare module 'mfe1/AppRemote' {
  const provider: () => unknown
  export default provider
}

declare module 'mfe2/AppRemote' {
  const provider: () => unknown
  export default provider
}

declare module 'mfe1/routes' {
  export const routeManifest: import('./remoteRouteTypes').RemoteRouteManifest
}

declare module 'mfe2/routes' {
  export const routeManifest: import('./remoteRouteTypes').RemoteRouteManifest
}
