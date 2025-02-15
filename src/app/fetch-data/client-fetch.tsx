'use client'

import { Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { FetchResult } from "./FetchResult";
import { ItemsList } from "../components/ItemsList";

export const ClientFetch = () => {
  const [chars, setChars] = useState<FetchResult | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setChars(data)
    }
    fetchPosts()
  }, [])

  return (
    <Stack gap={2}>
      <Typography>Client fetch</Typography>

      <ItemsList data={chars} />
    </Stack>
  )
}
