import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a wunderful world.</p>
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/counter">Link to counter</Link>
    </div>
    <div>
      <Link to="/tutorial-part-2/">Link to tutorial part 2</Link>
    </div>
  </div>
)
