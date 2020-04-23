import React from "react"
import { css } from "theme-ui"
import Navigation from "./navigation"
// import { GiSpartanHelmet } from "react-icons/gi"
import { Link } from "gatsby"


export default ({ title }) => {

  const renderTitle = (
    <h3
      style={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: `Raleway, Montserrat, sans-serif`,
        marginTop: 0,
        marginBottom: 0,
        marginRight: 60,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )

  return (
    <header>
      <div
        css={css({
          display: `flex`,
          maxWidth: `container`,
          mx: `auto`,
          pt: 4,
        })}
      >
        { renderTitle }
        <Navigation />
      </div>
    </header>
  )
}