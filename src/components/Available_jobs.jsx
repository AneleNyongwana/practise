import React from 'react'

const joblist = [
    {
        id: 1,
        title: "Software Developer",
        company: "ABC Company",
        department: "Stock Broking",
        location: "New York, NY",
        description: "We are looking for a skilled software developer to join our team and help us build innovative software solutions. The ideal candidate will have experience with programming languages such as Java, Python, or C++, and will be able to work independently and as part of a team.",
        requirements: ["Bachelor's degree in Computer Science or related field", "3+ years of experience in software development", "Strong problem-solving skills", "Excellent communication and teamwork skills"],
        salary: "$100,000 - $120,000 per year",
        posted: "2 days ago"
    },
    {
        id: 2,
        title: "Content Creator",
        company: "ABC Company",
        department: "Marketing",
        location: "New York, NY",
        description: "We are looking for a skilled software developer to join our team and help us build innovative software solutions. The ideal candidate will have experience with programming languages such as Java, Python, or C++, and will be able to work independently and as part of a team.",
        requirements: ["Bachelor's degree in Computer Science or related field", "3+ years of experience in software development", "Strong problem-solving skills", "Excellent communication and teamwork skills"],
        salary: "$100,000 - $120,000 per year",
        posted: "2 days ago"
    },
   
]


const Available_jobs = () => {
  return (
    <div>
      <div className="jobs section">
        <div className="content">
            <h1>Available Jobs</h1>

            <div className="container-box">
                {joblist.map((item)=>(
                    <div className="box" key={item.id}>
                        <div className="title">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="department">
                            <h3>{item.department}</h3>
                        </div>
                        <div className="info">
                        <h4>{item.company}</h4>
                        <span>{item.location}</span>
                        <p>{item.description}</p>
                        </div>
                        <div className="more">
                            <p>Contact: info@dhcap.co.za</p>
                            <button className="btn">Apply Now</button>
                        </div>
                    </div>
                ))}
                
            </div>
            <button className="btn">View All</button>
        </div>
      </div>
    </div>
  )
}

export default Available_jobs
