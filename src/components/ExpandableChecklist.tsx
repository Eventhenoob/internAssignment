// import {
//   Checkbox,
//   Container,
//   IconButton,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import { List } from "@mui/icons-material";
// import { useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

import { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  main: string;
  sub: string[];
}

export default function ExpandableChecklist({ main, sub }: Props) {
  const [subChecked, setSubChecked] = useState([0]);
  const [mainChecked, setMainChecked] = useState(false);
  const [showSubList, setShowSubList] = useState(false);
  const handleMainToggle = () => setMainChecked((prev) => !prev);

  const handleSubToggle = (value: number) => () => {
    const currentIndex = subChecked.indexOf(value);
    const newChecked = [...subChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSubChecked(newChecked);
  };

  const toggleSubList = () => setShowSubList((prev) => !prev);

  useEffect(() => {
    if (mainChecked) {
      const newSubCheck: number[] = [];
      for (let i = 0; i < sub.length; i++) newSubCheck.push(i);
      setSubChecked(newSubCheck);
    } else {
      if (subChecked.length === sub.length) setSubChecked([]);
    }
  }, [mainChecked]);

  useEffect(() => {
    if (subChecked.length === sub.length) setMainChecked(true);
    else if (subChecked.length < sub.length) setMainChecked(false);
  }, [subChecked]);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemButton
          role={undefined}
          onClick={() => {
            handleMainToggle();
          }}
          dense
        >
          <ListItemIcon>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSubList();
              }}
              sx={{ marginRight: "30px" }}
              edge="end"
              aria-label="comments"
            >
              {showSubList ? <RemoveIcon /> : <AddIcon />}
            </IconButton>

            <Checkbox
              edge="start"
              checked={mainChecked}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": "main-label" }}
            />
          </ListItemIcon>
          <ListItemText id={""} primary={main.toUpperCase()} />
        </ListItemButton>
      </ListItem>

      <List
        sx={{
          paddingLeft: "130px",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {showSubList &&
          sub.map((value, index) => {
            const labelId = `checkbox-list-label-${index}`;
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleSubToggle(index)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={subChecked.indexOf(index) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value.toUpperCase()} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </List>
  );
}
