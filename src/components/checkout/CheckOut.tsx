import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PermanentDrawerRight from "../header/Cart";

export default function RowRadioButtonsGroup() {
  return (
    <div className="checkout-container">
      <PermanentDrawerRight></PermanentDrawerRight>
      <FormControl>
        <FormLabel
          className="radiogroup-label"
          id="demo-row-radio-buttons-group-label"
        >
          Eat In or Out?
        </FormLabel>
        <div className="radio-group">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="eat in"
              control={<Radio />}
              label="Eat In"
            />
            <FormControlLabel
              value="eat out"
              control={<Radio />}
              label="Eat Out"
            />
          </RadioGroup>
        </div>

        <FormLabel
          className="radiogroup-label"
          id="demo-row-radio-buttons-group-label"
        >
          Payment method?
        </FormLabel>
        <div className="radio-group">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="card" control={<Radio />} label="Card" />
            <FormControlLabel value="swish" control={<Radio />} label="Swish" />
          </RadioGroup>
        </div>
      </FormControl>
    </div>
  );
}
