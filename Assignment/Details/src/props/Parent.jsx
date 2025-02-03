import React from "react";
import Child from "./Child";


class Parent extends React.Component {
    state={
        Name: "Indu",
        Fathername: "B.Janardhan",
        DateOfBirth: "10-08.2004",
        MobileNumber: "7207054050",
        Email: "indhuy88@gmail.com",
        Qualification: "B.Tech",
        Year: "3rd year",
        College: "MALLAREDDY UNIVERSITY",


    }
    render()
    {
        return(
            <Child  Name={this.state.Name} 
                   Fathername={this.state.Fathername}
                   DateOfBirth={this.state.DateOfBirth}
                   MobileNumber={this.state.MobileNumber}
                   Email={this.state.Email}
                   Qualification={this.state.Qualification}
                   Year={this.state.Year}
                   College={this.state.College}
            />
        )
    }
}
export default Parent