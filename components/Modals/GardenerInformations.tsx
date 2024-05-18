import { Box, Modal } from "@mui/material";
import Check from "../../public/Check";
import Cross from "../../public/Cross";
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
    height: 368,
    backgroundColor: "#FFFFFF",
    borderRadius: "0.625rem",
    boxShadow: 24,
    padding: 4,
    width: {
      xs: "300px",
      sm: "420px",
      md: "630px",
      lg: "800px",
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
          <div className="w-2/6 flex flex-row items-center justify-around">
            <h3 className="text-center ">
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
          <form className="w-2/3 mx-auto">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <label className="font-medium" htmlFor="firstname">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstname"
                  aria-label="firstname"
                  className="mb-5 p-2 bg-gray-200 border border-gray-300 text-primary-50 text-sm rounded-lg w-4/5"
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
                  className="mb-5 p-2 bg-gray-200 border border-gray-300 text-primary-50 text-sm rounded-lg w-4/5"
                  value={gardenerInformations.lastname}
                  disabled
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <label htmlFor="firstname" className="font-medium">
                  Mail
                </label>
                <input
                  type="text"
                  id="mail"
                  aria-label="mail"
                  className="mb-5 p-2 bg-gray-200 border border-gray-300 text-primary-50 text-sm rounded-lg w-4/5"
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
                  className="mb-5 p-2 bg-gray-200 border border-gray-300 text-primary-50 text-sm rounded-lg w-4/5"
                  value={gardenerInformations.tel}
                  disabled
                  readOnly
                />
              </div>
            </div>
          </form>
          <ul className="w-3/12 flex flex-col justify-between">
            <li className="flex flex-row items-center justify-between">
              <span>Cotisation </span>
              {isValid(gardenerInformations.cotisation) ? <Check /> : <Cross />}
            </li>
            <li className="flex flex-row items-center justify-between">
              <span>Assurance</span>
              {isValid(gardenerInformations.assurance) ? <Check /> : <Cross />}
            </li>
            <li className="flex flex-row items-center justify-between">
              <span>Caution</span>
              {isValid(gardenerInformations.caution) ? <Check /> : <Cross />}
            </li>
          </ul>
        </div>
      </Box>
    </Modal>
  );
};

export default GardenerInformations;
