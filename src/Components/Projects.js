import React, { useEffect } from "react";
import styled from "styled-components";
import './Projects.css'


const Projects = () => {
  useEffect(() => {
    filterProjects("all");
  });

  const filterProjects = (name) => {
    var x, i;
    x = document.getElementsByClassName("project");

    if (name === "all") name = "";
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if (x[i].className.indexOf(name) > -1) {
        addClass(x[i], "show");
      }
    }
  };

  const addClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += " " + arr2[i];
      }
    }
  };

  const removeClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  };

  return (
    <ContainerMain className="title-pro">
      <DivContainer>
        <Container>
          <Title>
            Projects
            <ButtonHash onClick={() => filterProjects("all")}>
              Show All
            </ButtonHash>
            <ButtonHash onClick={() => filterProjects("html")}>
              #HTML
            </ButtonHash>
            <ButtonHash onClick={() => filterProjects("css")}>#CSS</ButtonHash>{" "}
            <ButtonHash onClick={() => filterProjects("react")}>
              #React
            </ButtonHash>
            <ButtonHash onClick={() => filterProjects("styled")}>
              #styled-components
            </ButtonHash>
            <ButtonHash onClick={() => filterProjects("context")}>
              #context
            </ButtonHash>
          </Title>
        </Container>

        <Container className="project html react styled css">
          <div>
            <Image src="images/checkout.jpg" />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React #styled-components</Hash>
            <TitleExample>Example / Checkout Page</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://www.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://www.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html css context">
          <div>
            <Image src="images/404notfound.jpg" />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #context</Hash>
            <TitleExample>Example / 404 Not Found</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://www.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://www.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html react styled css">
          <div>
            <Image src="images/recipepage.jpg" />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React #styled-components</Hash>
            <TitleExample>Example / Recipe Page</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://www.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://www.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>
      </DivContainer>
    </ContainerMain>
  );
};

export default Projects;

export const ContainerMain = styled.div`
  width:100%;
  .project {
    display: none;
  }
  .show {
    display: flex;
  }
`;

export const DivContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Title = styled.p`
  color: #4f4f4f;
  font-size: 24px;
  margin-bottom: 0px;
  margin-bottom: 30px;
  font-weight: bold;
  margin: 0px;
`;

export const Hash = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-bottom: 15px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 5px 5px rgb(182, 182, 182);
`;

export const Image = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
`;

export const TitleExample = styled.p`
  font-size: 24px;
  line-height: 29px;
  color: #333333;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  margin-top: 0px;
  margin-bottom: 30px;
`;

export const ContainerText = styled.div`
  margin-left: 5rem;
`;

export const ButtonDemo = styled.button`
  width: 7rem;
  height: 2rem;
  border-radius: 5px;
  margin-right: 20px;
  background-color: #087985;
  color: #ffffff;
  font-size: 18px;
  border: 1px solid #087985;
  cursor: pointer;
`;

export const ButtonCode = styled.button`
  width: 7rem;
  height: 2rem;
  border-radius: 5px;
  background-color: #ffffff;
  color: #087985;
  font-size: 18px;
  border: 1px solid #087985;
  cursor: pointer;
`;

export const ButtonHash = styled.button`
  height: 2rem;
  border-radius: 5px;
  background-color: #ffffff;
  color: #087985;
  font-size: 18px;
  border: 1px solid #087985;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
`;
