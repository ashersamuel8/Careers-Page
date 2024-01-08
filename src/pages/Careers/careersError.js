import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"

const CareersError = () => {
  const error = useRouteError()

  return (
    <div className="careers-error">
      <p>{error.message}</p>
      <Link to="/"> Go to Homepage</Link>
    </div>
  )
}

export default CareersError
