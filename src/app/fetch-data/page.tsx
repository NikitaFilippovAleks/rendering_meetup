import { Button, Stack } from "@mui/material"
import Link from "next/link";
import { ClientFetch } from "./client-fetch";
import ServerFetch from "./server-fetch";
import { SsgFetch } from "./ssg-fetch";

const FetchDataPage = () => {
  return (
    <Stack gap={2}>
      <Stack flexDirection='row' gap={2}>
        <ClientFetch />

        <ServerFetch />

        <SsgFetch />
      </Stack>

      <Button variant='contained' sx={{ alignSelf: 'center'}}>
        <Link href='/'>Go home</Link>
      </Button>
    </Stack>
  )
}

export default FetchDataPage;
