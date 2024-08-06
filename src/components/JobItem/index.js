import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import {IoLocationOutline} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobItem = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData

  return (
    <Link to={`/jobs/${id}`} className="jobitem-con">
      <li className="jobitem-li">
        <div className="jobitem-con-in1">
          <img
            className="jobitem-img"
            src={companyLogoUrl}
            alt="company logo"
          />
          <div className="jobitem-con-in1-in">
            <h1 className="jobitem-title">{title}</h1>
            <div className="jobitem-con-in1-in-in">
              <FaStar className="jobitem-icon1" />
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="jobitem-con-in2">
          <div className="jobitem-con-in2-in">
            <IoLocationOutline className="margin1" />
            <p className="margin1">{location}</p>
            <BsBriefcaseFill className="margin1" />
            <p className="margin1">{employmentType}</p>
          </div>
          <p>{packagePerAnnum}</p>
        </div>
        <div>
          <hr />
          <h1>Description</h1>
          <p>{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}
export default JobItem
