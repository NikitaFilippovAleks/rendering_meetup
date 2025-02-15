import { Stack, Typography } from "@mui/material"
import { ItemsList } from "../components/ItemsList"
import { FetchResult } from "./FetchResult"

export const SsgFetch = async () => {
  const data = await fetch('https://rickandmortyapi.com/api/character', { cache: 'force-cache' })
  const chars: FetchResult = await data.json()

  return (
    <Stack gap={2}>
      <Typography>Ssg fetch</Typography>

      <ItemsList data={chars} />
    </Stack>
  )
}
