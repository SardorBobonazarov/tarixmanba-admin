import { MenuOpen } from "@mui/icons-material"
import { CustomStack } from "./custom.style"

interface props {
    disableActive: (e: boolean) => void,
    active: boolean
}

const Navbar: React.FC<props> = ({disableActive, active}) => {
  return (
    <CustomStack>
      <MenuOpen 
          onClick={() => disableActive(!active)} 
          sx={{
              cursor: "pointer",
              width: "20px",
              height: "20px",
              "&:hover": {
                color: "primary.main"
              },
              transform: active ? "rotate(0)" : "rotate(180deg)"
          }} 
      />
    </CustomStack>
  )
}

export default Navbar