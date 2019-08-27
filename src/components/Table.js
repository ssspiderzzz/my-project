import React from "react";
import "./Table.scss";

export default function Table(props) {
  return (
    <div>
      <table className="box-table">
        <thead>
          <tr>
            <th scope="col">Customer</th>
            <th scope="col">Price</th>
            <th scope="col">Tax</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stephen C. Cox</td>
            <td>$300</td>
            <td>$50</td>
            <td>Bob</td>
          </tr>
          <tr>
            <td>Josephin Tan</td>
            <td>$150</td>
            <td>-</td>
            <td>Annie</td>
          </tr>
          <tr>
            <td>Joyce Ming</td>
            <td>$200</td>
            <td>$35</td>
            <td>Andy</td>
          </tr>
          <tr>
            <td>James A. Pentel</td>
            <td>$175</td>
            <td>$25</td>
            <td>Annie</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
