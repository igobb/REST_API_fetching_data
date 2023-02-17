import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./CountriesGroupedByContinent.css";
import { groupBy } from "../../../functions/groupByFunction/groupBy";

const AccordionCard = ({ continentName, groupByContinents }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{continentName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          component={"div"}
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          {groupByContinents[continentName].map((country, index) => {
            return (
              <p className="countries" key={country.name.official}>
                {index + 1} - {country.name.official}
              </p>
            );
          })}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const CountriesGroupedByContinent = ({ data }) => {
  const groupByContinents = groupBy(data, "continents");

  return (
    <div>
      <AccordionCard
        continentName={"Europe"}
        groupByContinents={groupByContinents}
      />
      <AccordionCard
        continentName={"Asia"}
        groupByContinents={groupByContinents}
      />
      <AccordionCard
        continentName={"Africa"}
        groupByContinents={groupByContinents}
      />
      <AccordionCard
        continentName={"North America"}
        groupByContinents={groupByContinents}
      />
      <AccordionCard
        continentName={"South America"}
        groupByContinents={groupByContinents}
      />
      <AccordionCard
        continentName={"Oceania"}
        groupByContinents={groupByContinents}
      />
      <AccordionCard
        continentName={"Antarctica"}
        groupByContinents={groupByContinents}
      />
    </div>
  );
};

export default CountriesGroupedByContinent;
