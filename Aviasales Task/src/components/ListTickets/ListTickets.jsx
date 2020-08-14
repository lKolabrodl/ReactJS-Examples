import React from "react";
import Ticket from "../Ticket/Ticket";

const ListTickets = ({ tickets }) => {
  return (
    <div className="list__tickets">
      <ul>
        {tickets.map((ticket, i) => (
          <Ticket ticket={ticket} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default ListTickets;
