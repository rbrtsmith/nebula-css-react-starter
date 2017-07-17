import React from 'react'

const App = ({ title }) => (
  <div className="o-site-wrap o-site-wrap--padding">
    <h1>{title}</h1>
    <div className="o-grid o-grid--matrix">
      <div className="o-grid__item u-1/2@sm">
        grid item 1
      </div>
      <div className="o-grid__item u-1/2@sm">
        grid item 2
      </div>
    </div>
  </div>
)

export default App
