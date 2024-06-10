import {FaStar} from 'react-icons/fa'
import {IoLocationOutline} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const SimilarProducts = props => {
  const {item} = props
  const {
    companyLogUrl,
    jobDescription,
    rating,
    title,
    location,
    employmentType,
  } = item

  return (
    <li>
      <div>
        <img src={companyLogUrl} alt="similar job company logo" />
        <div>
          <h1>{title}</h1>
          <div>
            <FaStar />
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <p>Description</p>
      <p>{jobDescription}</p>
      <div>
        <div>
          <IoLocationOutline />
          <p>{location}</p>
        </div>
        <div>
          <BsBriefcaseFill />
          <p>{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarProducts
