import { relative } from 'path'
import React from 'react'
import Record from './Record'
export default function Records() {
  return (
   <div
    // style={{position:'relative'}}
    >
      <div style={{ position:'relative', top:'750px',marginBottom: '10px' }}>
        <Record></Record>
      </div>
      <div style={{ position:'relative', top:'1190px',marginBottom: '10px' }}>
        <Record></Record>
      </div>
      <div style={{ position:'relative', top:'1630px',marginBottom: '10px' }}>
        <Record></Record>
      </div>
      <div style={{ position:'relative', top:'2070px',marginBottom: '10px' }}>
        <Record></Record>
      </div>
      <div
      >
        <Record></Record>
      </div>
    </div>
  )
}
