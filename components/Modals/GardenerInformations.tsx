import { Box, Modal } from "@mui/material";
import Check from "../../public/Check";
import Cross from "../../public/Cross";
import Button from "../Button";
interface GardenerInformationsProps {
  gardenerInformations?: {
    id: number;
    firstname: string;
    lastname: string;
    caution: boolean;
    mail: string;
    tel: number;
    cotisation: boolean;
    assurance: boolean;
  };
  handleCloseModal: () => void;
  isValid: (caution: boolean) => boolean;
}

const GardenerInformations: React.FC<GardenerInformationsProps> = ({
  gardenerInformations,
  handleCloseModal,
  isValid,
}) => {
  const style = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFFFFF",
    borderRadius: "0.625rem",
    boxShadow: 24,
    padding: 4,
    width: {
      xs: "350px",
      sm: "700px",
      md: "750px",
    },
    height: {
      xs: "700px",
      sm: "600px",
      md: "500px",
    },
  };

  if (!gardenerInformations) {
    return null;
  }

  return (
    <Modal
      open={true}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="w-full flex justify-around flex-col items-center">
          <div className="flex flex-row items-center justify-around w-fit">
            <h3 className="text-center font-bold mr-2">
              {gardenerInformations?.firstname} {gardenerInformations?.lastname}
            </h3>
            <div
              className={`w-3 h-3 rounded-full ${
                isValid(gardenerInformations.caution)
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            ></div>
          </div>
          <form className=" text-primary-50 w-full">
            <div className="flex flex-col md:flex-row justify-center">
              <div className=" flex flex-col mr-0 md:mr-8 ">
                <label className="font-medium" htmlFor="firstname">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstname"
                  aria-label="firstname"
                  className="mb-5 p-2 bg-gray-200 border border-gray-300 text-primary-50 text-sm rounded-lg"
                  value={gardenerInformations.firstname}
                  disabled
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="firstname" className="font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastname"
                  aria-label="lastname"
                  className="mb-5 p-2 bg-gray-200 border border-gray-300 text-primary-50 text-sm rounded-lg"
                  value={gardenerInformations.lastname}
                  disabled
                  readOnly
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center ">
              <div className="flex flex-col mr-0 md:mr-8">
                <label htmlFor="firstname" className="font-medium ">
                  Mail
                </label>
                <input
                  type="text"
                  id="mail"
                  aria-label="mail"
                  className="mb-5 p-2 bg-gray-200 border border-gray-300 text-primary-50 text-sm rounded-lg"
                  value={gardenerInformations.mail}
                  disabled
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="firstname" className="font-medium">
                  Téléphone
                </label>
                <input
                  type="text"
                  id="phone"
                  aria-label="phone"
                  className="mb-5 p-2 border bg-gray-200 border-gray-300 text-primary-50 text-sm rounded-lg "
                  value={gardenerInformations.tel}
                  disabled
                  readOnly
                />
              </div>
            </div>
          </form>

          <div
            className="flex flex-row
        w-full justify-between px-0 sm:px-12"
          >
            <ul className="flex flex-col justify-between w-1/2 sm:w-2/6">
              <li className="flex flex-row items-center justify-between">
                <span>Cotisation </span>
                {isValid(gardenerInformations.cotisation) ? (
                  <Check />
                ) : (
                  <Cross />
                )}
              </li>
              <li className="flex flex-row items-center justify-between">
                <span>Assurance</span>
                {isValid(gardenerInformations.assurance) ? (
                  <Check />
                ) : (
                  <Cross />
                )}
              </li>
              <li className="flex flex-row items-center justify-between">
                <span>Caution</span>
                {isValid(gardenerInformations.caution) ? <Check /> : <Cross />}
              </li>
            </ul>
            <div className="flex flex-col justify-between border-2 drop-shadow-sm rounded-lg  p-2 w-1/2 sm:w-1/3">
              <h4 className="text-center font-medium">Evènements</h4>
              <ul>
                <li>Corvées : 2</li> <li>Locations : 2</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-row justify-around">
            <Button buttonTitle="Modifier" />
            <Button
              buttonTitle="Supprimer"
              buttonClassName="bg-secondary-100 hover:bg-secondary-150"
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default GardenerInformations;
