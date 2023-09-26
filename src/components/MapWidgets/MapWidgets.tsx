import { Stack, Checkbox, FormControl, Switch } from "@chakra-ui/react";

import carIcon from "../../assets/car.png";
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/moon.png";
import walkIcon from "../../assets/walk.png";

interface Props {
  handleShowCar: (show: boolean) => void;
  handleShowWalk: (show: boolean) => void;
  handleDarkToggle: (checked: boolean) => void;
}

export default function MapWidgets(props: Props) {
  return (
    <Stack direction={"column"} position={"absolute"} zIndex={2} mt={2} ml={2}>
      <Stack spacing={5} direction="row">
        <Checkbox
          colorScheme="red"
          onChange={(e) => props.handleShowCar(e.target.checked)}
          defaultChecked
        >
          <img src={carIcon} className="h-10"></img>
        </Checkbox>
        <Checkbox
          colorScheme="green"
          onChange={(e) => props.handleShowWalk(e.target.checked)}
          defaultChecked
        >
          <img src={walkIcon} className="h-7"></img>
        </Checkbox>
      </Stack>
      <Stack spacing={0} direction="row">
        <img src={sunIcon} className="h-10"></img>
        <FormControl className="m-auto">
          <Switch
            colorScheme="blackAlpha"
            size="lg"
            className="mt-1"
            onChange={(e) => props.handleDarkToggle(e.target.checked)}
          />
        </FormControl>
        <img src={moonIcon} className="h-10 m-auto"></img>
      </Stack>
    </Stack>
  );
}
