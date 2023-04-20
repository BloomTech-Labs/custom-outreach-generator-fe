import React from 'react'

const Generator = ({
  name,
  setName,
  email,
  setEmail,
  jobTitle,
  setJobTitle,
  company,
  setCompany,
  jobDescription,
  setJobDescription,
  resumeHighlights,
  setResumeHighlights,
  handleSubmit
}) => {

  return (
    <div className='generator'>
      <div className='title-container'>
      <h1>Custom Outreach Generator</h1>
      <p>By leveraging the capabilities of OpenAI's GPT-3.5 Turbo, the app generates a unique and engaging outreach letter based on the information you provide.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">You Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Target Job Title</label>
          <input
            id="jobTitle"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Target Company</label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobDescription">Target Job Description</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="resumeHighlights">Your Resume Highlights</label>
          <textarea
            id="resumeHighlights"
            value={resumeHighlights}
            onChange={(e) => setResumeHighlights(e.target.value)}
          />
        </div>

        <button type="submit" className='submit-button button'>Submit</button>
      </form>
    </div>
  )
};

export default Generator