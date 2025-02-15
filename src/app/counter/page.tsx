'use client'

import { Button, IconButton, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"
import RemoveIcon from '@mui/icons-material/Remove';
import Link from "next/link";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Stack alignItems='center'>
      <Stack>
        <Typography>Count is: {count}</Typography>
      </Stack>

      <Stack sx={{ flexDirection: 'row' }}>
        <IconButton onClick={() => setCount((prev) => prev + 1)} sx={{ color: 'white' }}>
          <AddIcon />
        </IconButton>

        <IconButton onClick={() => setCount((prev) => prev - 1)} sx={{ color: 'white' }}>
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Button variant='contained'>
        <Link href='/'>
          Go back
        </Link>
      </Button>
    </Stack>
  )
}

export default CounterPage;
