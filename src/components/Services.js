import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "COCKTAILS. Ever since America invented the cocktail, at the beginning of the nineteenth century, it has evolved: from sweet to dry; hot to icy; stirred to shaken—a morning eye-opener to a conclusion to the day's activities."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Use SuperShuttle for convenience, price transparency, and affordability for rides to and from the airport. "
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Most guys will agree, beer is quite possibly the greatest invention of all time. Smells great, tastes great, and after putting down one too many – you feel great. In all honesty, we drink beer first and foremost because we love the way it tastes, but that feeling is what keeps us coming back. "
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Services;
