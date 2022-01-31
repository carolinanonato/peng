import person1 from "../img/person1.png";
import person2 from "../img/person2.png";
import person3 from "../img/person3.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="photos">
          <img className="person" src={person1} alt="" />
          <img className="person" src={person2} alt="" />
          <img className="person" src={person3} alt="" />
        </div>
        <p className="text">
          We got to be honest: we started Peng because we love penguins. WHO
          doesn't? You can't just look at their cute faces, adorable wings,
          small feet... ookay, they are adorable. Also: mugs? Everyone needs it.
          Part of every sale goes to Friend of the Sea, a organization that
          saved millions of penguins from death in tuna fishing nets and started
          the sustainable seafood movement.
        </p>
        <button className="button">Read More</button>
      </div>
    </>
  );
}

export default About;
