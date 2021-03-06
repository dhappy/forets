import React from 'react'
import './index.scss'

export default () => (
  <ul id='faq'>
    <li>
      <p className='question'>This site won't load! Everything's slow as molasses. Why do you suck?</p>
      <div className='answer'>
        <p>All the files are being served through the <a href='//ipfs.io'><acronym title='Interplanetary Filesystem'>IPFS</acronym> <acronym title='peer-to-peer'>P2P</acronym> network</a> and many of them are coming from my personal computer which is a huge bottleneck.</p>
        <p>While there are <a href='https://temporal.cloud/temporalx/'>caching services</a>, I leverage IPFS's deduplication heavily, so there are many many copies of the same file. This makes the reported sizes orders of magnitude greater than the size on disk. Unfortunately, there's no quick way to tell that, so pinning services reject the ids as too large.</p>
        <p>You can help.</p>
        <ol>
          <li>Install: <a href='//github.com/ipfs-shipyard/ipfs-desktop'>IPFS Desktop</a></li>
          <li>Download: <a href='//dist.ipfs.io/#ipfs-cluster-follow'><code>ipfs-cluster-follow</code></a></li>
          <li>Run: <code>ipfs-cluster-follow hugo-nominees run --init http://127.0.0.1:8080/ipns/hugos.cluster.dhappy.org</code></li>
        </ol>
      </div>
    </li>
    <li>
      <p className='question'>Don't you expect to be sued to oblivion for copyright infringement?</p>
      <div className='answer'>
        <p>The point of the system is to navigate and maintain a large collection of books. I tried to use <a href='//gutenberg.org'>Project Gutenberg</a>, but there's only a single cover image and about three quarters of those are slight variations from a template.</p>
        <p>Certain collections of information deserve to be publicly accessible as parts of our cultural heritage.</p>
        <p>I know as well as anyone that artists have to eat too. If the general public is using the system then there should be functionality to compensate artists or publishers or whoever is supposed to get paid.</p>
      </div>
    </li>
  </ul>
)