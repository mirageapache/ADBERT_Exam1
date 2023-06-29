import * as React from "react";
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from 'react';

const useStyles = makeStyles({
  group: {
    margin: '20px'
  }
});

export default function Section(){
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [isDisable, setIsDisable] = useState(false);

  return(
    <div className="section">
      <ButtonGroup className={classes.group} variant="outlined" aria-label="outlined primary button group" orientation='vertical'>
        {/* Click Button */}
        {isDisable ?
          <Button disabled='true'>CLICK:{count}</Button>
          :
          <Button onClick={()=>{ setCount(count+1) }}>CLICK:{count}</Button>
        }

        {/* Clear Button */}
        <Button onClick={()=>{ setCount(0) }}>CLEAR</Button>

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