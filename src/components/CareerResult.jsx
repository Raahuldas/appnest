import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CareerResult() {
    const [careerResultData, setCareerResultData] = useState();
    useEffect(() => {
        (async () => {
          const response = await axios.get("/api/v1/careers/get-all");
          console.log(response.data.data);
          setCareerResultData(response.data.data);
        })();
      }, []);

  return (
    <div className="py-5 mt-5 px-2">
      <h1 className="fw-bold text-center my-3 pb-3">
        Career Form List
      </h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone no.</th>
            <th scope="col">Applied for</th>
            <th scope="col">Resume</th>
          </tr>
        </thead>
        <tbody>
          {careerResultData?.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.appliedFor}</td>
                <td><a href={item?.resume} target='blank'>{item?.resume}</a></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>  )
}

export default CareerResult