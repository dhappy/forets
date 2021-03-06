import { useEffect, useState } from 'react'
import Ipfs from 'ipfs'

let ipfs = null
let starting = false

/*
 * A quick demo using React hooks to create an ipfs instance.
 *
 * Hooks are brand new at the time of writing, and this pattern
 * is intended to show it is possible. I don't know if it is wise.
 *
 * Next steps would be to store the ipfs instance on the context
 * so use-ipfs calls can grab it from there rather than expecting
 * it to be passed in.
 */
export default function useIPFSFactory({ commands }) {
  const [isIpfsReady, setIpfsReady] = useState(Boolean(ipfs))
  const [ipfsInitError, setIpfsInitError] = useState(null)

  useEffect(() => {
    startIpfs()
    return function cleanup () {
      if(ipfs && ipfs.stop) {
        console.log('Stopping IPFS')
        ipfs.stop().catch(console.error)
        setIpfsReady(false)
      }
    }
  }, [])

  async function startIpfs () {
    if(ipfs) {
      console.log('IPFS already started')
    //} else if(window.ipfs && window.ipfs.enable) {
    //  console.log('Found window.ipfs')
    //  ipfs = await window.ipfs.enable({ commands })
    } else if(!starting) {
      starting = true
      try {
        console.debug('Starting')
        console.time('IPFS Started')
        ipfs = await Ipfs.create()
        console.timeEnd('IPFS Started')
      } catch (error) {
        console.error('IPFS init error:', error)
        ipfs = null
        setIpfsInitError(error)
      }
    }

    setIpfsReady(Boolean(ipfs))
  }

  return { ipfs, isIpfsReady, ipfsInitError }
}
