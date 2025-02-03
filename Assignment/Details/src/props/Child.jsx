import React from "react";
class Child extends React.Component{
    render()
    {
        return(
            <>
              <h2>Name: {this.props.Name} </h2>
              <h2>Father Name: {this.props.Fathername}</h2>
              <h2>Date Of Birth: {this.props.DateOfBirth}</h2>
              <h2>Mobile NO: {this.props.MobileNumber}</h2>
              <h2>Email:{this.props.Email}</h2>
              <h2>Qualification: {this.props.Qualification}</h2>
              <h2>Year: {this.props.Year}</h2>
              <h2>College: {this.props.College}</h2>
            </>
        )
    }
}
export default Child;