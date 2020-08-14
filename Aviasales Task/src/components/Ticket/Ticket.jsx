import React from "react";
import "./Ticket.scss";

import convertTime from "../../utils/transitTimeConverter";
import wayConvertTime from "../../utils/wayTimeConverter";

const Ticket = ({ ticket }) => {
  // console.log(ticket);
  const picAvs = "http://pics.avs.io/99/36/";
  return (
    <li className="tiket__item">
      <div className="tiket__item__price">
        <span>{ticket.price.toLocaleString()} Р</span>
        <img src={`${picAvs}${ticket.carrier}.png`} alt={ticket.carrier} />
      </div>
      {ticket.segments.map((item, i) => (
        <div key={i} className="tiket__flight__info">
          <div className="tiket__flight__info__place">
            <span>
              {item.origin}-{item.destination}
            </span>
            <time>
              {wayConvertTime(item.date, item.duration)}
              {}
            </time>
          </div>
          <div className="tiket__flight__info__way">
            <span>В пути</span>
            <time>{convertTime(item.duration)}</time>
          </div>
          <div className="tiket__flight__info__transfer">
            <span>
              {item.stops.length > 0
                ? `${item.stops.length} пересадк${
                    item.stops.length === 1 ? "a" : "и"
                  }`
                : "Без пересадок"}
            </span>
            <p>{item.stops.join(",")}</p>
          </div>
        </div>
      ))}
    </li>
  );
};

export default Ticket;
