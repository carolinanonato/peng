import person1 from "../img/person1.png";
import person2 from "../img/person2.png";
import person3 from "../img/person3.png";

function About() {
  return (
    <>
      <div className="about">
        <img className="person" src={person1} alt="" />
        <img className="person" src={person2} alt="" />
        <img className="person" src={person3} alt="" />
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          accusantium in cum velit reprehenderit cupiditate, sit quos ipsam
          doloribus. Sunt itaque nobis quas ut id. Quod excepturi a quam aut
          tempore voluptatibus perspiciatis nemo vitae deserunt autem, labore
          sed harum facilis? Quam blanditiis repellat eligendi dolorum harum
          nemo commodi incidunt.
        </p>
        <button className="button">Read More</button>
      </div>
    </>
  );
}

export default About;
