import { useLoaderData, useParams } from "react-router-dom"

export const CareerDetails = () => {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Career Salary: {career.salary}</p>
      <p>Career Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        saepe, pariatur perferendis repellendus alias rerum dicta, eaque, odio
        veniam esse eos excepturi voluptas tempore accusamus voluptatem laborum
        necessitatibus. A, accusantium!
      </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch("http://localhost:4000/careers/" + id)

  if (!res.ok) {
    throw Error("Could not find that career")
  }

  return res.json()
}
