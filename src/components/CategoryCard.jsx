import './CategoryCard.css'
import { Link } from 'react-router-dom'

function CategoryCard({ title, image, alt, to }) {
  return (
    <Link to={to} className="category-card">
      <div className="category-card-inner">
        <div className="category-card-image">
          <img src={image} alt={alt || title} />
        </div>
      </div>
      <p className="category-card-title">{title}</p>
    </Link>
  )
}

export default CategoryCard
