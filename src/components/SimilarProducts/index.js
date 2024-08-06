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
    <li className="simpro-con">
      <div className="simpro-con1">
        <img
          className="simpro-img"
          src={companyLogUrl}
          alt="similar job company logo"
        />
        <div className="simpro-con1-in">
          <h1 className="simpro-h1">{title}</h1>
          <div className="simpro-con1-in-in">
            <FaStar className="simpro-icon" />
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <p>Description</p>
      <p>{jobDescription}</p>
      <div className="simpro-con2">
        <IoLocationOutline className="margin1" />
        <p className="margin1">{location}</p>
        <BsBriefcaseFill className="margin1" />
        <p className="margin1">{employmentType}</p>
      </div>
    </li>
  )
}

export default SimilarProducts
