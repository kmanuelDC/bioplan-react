import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionActions, Button, Divider } from "@mui/material";
import Editor from "../editorContent/Editor";
import ImageUploader from "../imageUploader/ImageUploader ";

const AccordionContainer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Noticias</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Ingresa una noticia
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Editor placeholder={"Write something..."} />
          <ImageUploader />
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" onClick={() => alert("cancel")}>
            Cancel
          </Button>
          <Button size="small" color="primary" onClick={() => alert("save")}>
            Save
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Proyectos
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Ingresa un proyecto
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
        <Divider />

        <AccordionActions>
          <Button size="small" onClick={() => alert("cancel")}>
            Cancel
          </Button>
          <Button size="small" color="primary" onClick={() => alert("save")}>
            Save
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Colaborador
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Ingresa un colaborador
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
        <Divider />

        <AccordionActions>
          <Button size="small" onClick={() => alert("cancel")}>
            Cancel
          </Button>
          <Button size="small" color="primary" onClick={() => alert("save")}>
            Save
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Convocatoria
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Ingresa una convocatoria
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
        <Divider />

        <AccordionActions>
          <Button size="small" onClick={() => alert("cancel")}>
            Cancel
          </Button>
          <Button size="small" color="primary" onClick={() => alert("save")}>
            Save
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
};

export default AccordionContainer;
