// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../package.json')

const getPackageInfo = (key?: string | string[]): string | object => {
  if (key === undefined) return packageJson
  if (typeof key === 'string') {
    return packageJson[key as keyof typeof packageJson]
  }
  return key.map((k) => packageJson[k as keyof typeof packageJson])
}

export { getPackageInfo }
