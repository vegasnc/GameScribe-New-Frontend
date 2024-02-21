"use client"

import { useDarkMode } from "~/hooks/useDarkMode"
import { Button } from "../Buttons/Button"

export const ModeToggle = () => {
  const toggleMode = useDarkMode();
  return (
    <>
      <Button variant="outlined" size="md" onClick={toggleMode}>
        Toggle
      </Button>
    </>
  )
}
