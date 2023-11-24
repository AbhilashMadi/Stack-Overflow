import { FC } from "react";
import { Button } from "@ui/button";
import { Home } from "lucide-react";

const Navbar: FC = () => {
  return (
    <nav>
      <Button>
        <Home size={15} /> Label
      </Button>
    </nav>
  )
}

export default Navbar;