import { FC } from "react";
import { FetchResult } from "../fetch-data/FetchResult"
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface IProps {
  data: FetchResult | null;
}

export const ItemsList: FC<IProps> = ({ data }) => {
  return (
    <Stack height={200} width={300} p={2} gap={2} sx={{ border: '2px solid white', overflow: 'auto', borderRadius: 2 }}>
      {data ? (
        data.results.map(char => (
          <Stack key={char.id} gap={2} sx={{ flexDirection: 'row' }}>
            <Image src={char.image} width={50} height={50} alt='' style={{ borderRadius: 10 }} />

            <Stack>
              <Typography>Name: {char.name}</Typography>
              <Typography>Species: {char.species}</Typography>
            </Stack>
          </Stack>
        ))
      ) : (
        <Box width='full' height='100%' display='flex' alignItems='center' justifyContent='center'>
          <CircularProgress sx={{ color: 'white' }} />
        </Box>
      )}
    </Stack>
  )
}
