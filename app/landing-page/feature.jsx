const Feature = ({ title, description }) => (
    <div className="p-5 border rounded-lg shadow-md">
      <h4 className="mb-2 font-semibold">{title}</h4>
      <p>{description}</p>
    </div>
  )
  
  export default Feature;