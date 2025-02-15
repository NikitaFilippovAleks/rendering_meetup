import { Button, Stack } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

export const HomePage = () => {
  return (
    <Stack gap={4}>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      <Button>
        <Link href='/counter'>Go to counter</Link>
      </Button>

      <Button>
        <Link href='/fetch-data'>Go to fetch data</Link>
      </Button>
    </Stack>
  )
}

export default HomePage;
