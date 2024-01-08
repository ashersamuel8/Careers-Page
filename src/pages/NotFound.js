import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, neque?
      </p>
      <p>
        Go to
        <Link path="/"> Homepage</Link>.
      </p>
    </div>
  )
}

export default NotFound
