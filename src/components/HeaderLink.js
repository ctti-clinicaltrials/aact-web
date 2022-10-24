import React from 'react'

export default function HeaderLink(props) {
  return (
    <a href={props.url} className={props.classes}>
          <svg height="74" width="175">
            <polygon
              className="svg-polygone"
              points="0,0 150,0 175,37 150,74 0,74 25,37"
              style={{fill: `${props.color}`}}
            />
            <text className="svg-text" x="50%" y="50%">
              {props.title}
            </text>
          </svg>
        </a>
  )
}
