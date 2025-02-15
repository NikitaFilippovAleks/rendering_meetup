import { Stack, Typography } from "@mui/material"
import { FetchResult } from "./FetchResult";
import { ItemsList } from "../components/ItemsList";

export default async function ServerFetch() {
  const data = await fetch('https://rickandmortyapi.com/api/character')
  const chars: FetchResult = await data.json()

  return (
    <Stack gap={2}>
      <Typography>Server fetch</Typography>

      <ItemsList data={chars} />
    </Stack>
  )
}
