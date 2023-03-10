import { useState } from "react"
import JobCard from "../components/JobCard"
import jobs from '../db/jobs.json'


const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const DisplayJobs = ()=> !searchValue ? jobs : jobs.filter(job => job.jobTitle.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className=" m-auto max-w-7xl p-5">
        {/* SEARCH */}
        <div className="w-full   h-12 flex items-center rounded-l-lg overflow-hidden ">
          <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} type="text" className="h-full flex-1 text-gray-700 rounded-l-lg px-5 bg-blue-50 outline-none border border-blue-100" />
          <button className="w-28 bg-blue-600 text-white rounded-r-lg p-3">
            Search
          </button>

        </div>


        <div className="w-full p-3 flex justify-between items-center text-black">
          <h2 className="font-bold text-2xl">Showing {125} Jobs</h2>

          <div className="flex items-center">
            <h4 className="text-gray-500">Sort by:</h4>
            <select name="" id="">
              <option value="">Newest Post</option>
            </select>
          </div>
        </div>


        <div className="w-full min-h-screen">
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
              DisplayJobs()?.map((job,i) => <JobCard key={i} {...job}/>)
            }
          </div>

        </div>


      </div>
    </div>
  )
}

export default Search