import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar,
  Button,
} from "@material-tailwind/react";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const InstructorsCard = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          className="w-72 h-78 py-4 bg-blue-gray-800 rounded-none items-center"
        >
          <CardHeader
            floated={false}
            className="h-12 w-12 rounded-full mx-auto"
          >
            <Avatar src={item.image} alt="avatar" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="white" className="mb-2">
              {item.name}
            </Typography>
            <Typography color="white" className="font-medium">
              Trainer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Facebook">
              <Typography as="a" href="#facebook" variant="lead" color="blue">
                <FaFacebook></FaFacebook>
              </Typography>
            </Tooltip>
            <Tooltip content="Twitter">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
              >
                <FaTwitter></FaTwitter>
              </Typography>
            </Tooltip>
            <Tooltip content="Instagram">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
              >
                <FaInstagram></FaInstagram>
              </Typography>
            </Tooltip>
          </CardFooter>

          <div className="">
            <Button className="bg-[#B3E5FC] text-[#333333]">See Classes</Button>
          </div>
        </Card>
      ))}
    </>
  );
};

export default InstructorsCard;