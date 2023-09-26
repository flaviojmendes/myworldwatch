import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";
import Youtube from "../../components/Youtube/Youtube";
import { Place } from "../../entity/Place";
import { data } from "../../places";
import carIcon from "../../assets/car.png";
import walkIcon from "../../assets/walk.png";
import { mapStyles, mapStylesDark } from "../../mapStyles";
import MapWidgets from "../../components/MapWidgets/MapWidgets";

export default function MapPage() {
  const [selectedPlace, setSelectedPlace] = useState<Place>();
  const [showCar, setShowCar] = useState(true);
  const [showWalk, setShowWalk] = useState(true);
  const [darkToggled, setDarkToggled] = useState(false);

  const center = {
    lat: 0,
    lng: 0,
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handlePlaceClick(place: Place) {
    setSelectedPlace(place);
    onOpen();
  }

  function handleShowCar(showCar: boolean) {
    setShowCar(showCar);
  }
  function handleShowWalk(showWalk: boolean) {
    setShowWalk(showWalk);
  }

  function handleDarkToggle(darkToggled: boolean) {
    setDarkToggled(darkToggled);
  }

  function shouldShow(type: string, time?: string): boolean | undefined {
    let sameTime = false;
    if (darkToggled && time && time === "night") {
      sameTime = true;
    } else if (!darkToggled && (!time || time === "day")) {
      sameTime = true;
    }

    if (type === "car" && showCar && sameTime) {
      return true;
    }

    if (type === "walk" && showWalk && sameTime) {
      return true;
    }

    return false;
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="w-full bg-brown m-0 flex f-title text-white">
          <h1 className="font-bold text-[24px] m-0 ml-2">
            <a href="/">My World Watch</a>
          </h1>
          <div className="grow"></div>
          <a href="/about" className="m-auto mr-2">
            About
          </a>
        </div>
        <div className="w-full h-full">
          <MapWidgets
            handleDarkToggle={handleDarkToggle}
            handleShowCar={handleShowCar}
            handleShowWalk={handleShowWalk}
          />

          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerClassName="w-full h-full"
              center={center}
              zoom={2}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: darkToggled ? mapStylesDark : mapStyles,
              }}
            >
              {data.map((child) => (
                <Marker
                  key={Math.random() + 2}
                  clickable={true}
                  visible={shouldShow(child.type, child.time)}
                  onClick={() => handlePlaceClick(child)}
                  icon={child.type === "car" ? carIcon : walkIcon}
                  position={{
                    lat: child.lat,
                    lng: child.lon,
                  }}
                ></Marker>
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"black"} textColor={"white"}>
          <ModalHeader p={2} className="text-white">
            {selectedPlace?.label}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={2} h={"max-content"} className="p-0 m-0 h-full">
            <Youtube id={selectedPlace?.video}></Youtube>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
