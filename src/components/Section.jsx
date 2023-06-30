import * as React from "react";
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "../actions";

const useStyles = makeStyles({
  group: {
    margin: '20px'
  }
});

export default function Section(){
  const classes = useStyles();
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const [isDisable, setIsDisable] = useState(false);

  return(
    <div className="section">
      <ButtonGroup className={classes.group} variant="outlined" aria-label="outlined primary button group" orientation='vertical'>
        {/* Click Button */}
        {isDisable ?
          <Button disabled={true}>CLICK:{counter}</Button>
          :
          <Button onClick={()=>dispatch(increment())}>CLICK:{counter}</Button>
        }

        {/* Clear Button */}
        <Button onClick={()=>dispatch(reset())}>CLEAR</Button>

        {/* Disable Button */}
        {isDisable ?
          <Button onClick={()=>{setIsDisable(false)}}>ABLE</Button>
          :
          <Button onClick={()=>{setIsDisable(true)}}>DISABLE</Button>
        }
      </ButtonGroup>
    </div>
  )
}