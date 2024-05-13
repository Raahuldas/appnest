import axios from "axios";
import React, { useEffect, useState } from "react";

function ContactResult() {
  const [contactResultData, setContactResultData] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/v1/contacts/get-all");
      console.log(response.data.data);
      setContactResultData(response.data.data);
    })();
  }, []);

  return (
    <div className="py-5 mt-5 px-2">
      <h1 className="fw-bold text-center my-3 pb-3">
        Contact Us List
      </h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">Contact no.</th>
            <th scope="col">Budget Range</th>
            <th scope="col">Project descripion</th>
          </tr>
        </thead>
        <tbody>
          {contactResultData?.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item?.fullname}</td>
                <td>{item?.email}</td>
                <td>{item?.contact}</td>
                <td>{item?.budget}</td>
                <td>{item?.project}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ContactResult;
