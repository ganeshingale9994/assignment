import React from "react";
import image1 from "../Images/blacksofa.jpg";
import image2 from "../Images/minitables.jpg";
import image3 from "../Images/pinksofa.jpg";
import image4 from "../Images/wallunit.jpg";

function Component3() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          marginTop: "200px",
        }}
      >
        <img src={image1} style={{ height: "600px", width: "1500px" }} />
        <div
          style={{
            paddingTop: "150px",
            margin: "50px",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <h2>Lorem, ipsum dolor sit amet </h2>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta
            obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat
            ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
            eaque?
          </h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          margin: "5px",
        }}
      >
        <div
          style={{
            paddingTop: "150px",
            margin: "50px",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <h2>Lorem, ipsum dolor sit amet </h2>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta
            obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat
            ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
            eaque?
          </h4>
        </div>

        <img src={image2} style={{ height: "600px", width: "1500px" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <img src={image3} style={{ height: "600px", width: "1500px" }} />
        <div
          style={{
            paddingTop: "150px",
            margin: "50px",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <h2>Lorem, ipsum dolor sit amet </h2>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta
            obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat
            ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
            eaque?
          </h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          margin: "5px",
        }}
      >
        <div
          style={{
            paddingTop: "150px",
            margin: "50px",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <h2>Lorem, ipsum dolor sit amet </h2>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta
            obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat
            ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
            eaque?
          </h4>
        </div>

        <img src={image4} style={{ height: "600px", width: "1500px" }} />
      </div>
    </div>
  );
}

export default Component3;
