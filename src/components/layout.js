import React from "react"
import { FaHeart } from "react-icons/fa"

import Header from './header.js'

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(26),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Header title={title}></Header>
      </header>
      <main>{children}</main>
      <footer>
        <div>
        Made with <FaHeart color="red"></FaHeart>
        <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
