import { useState, useEffect, useMemo } from "react";
import Socials from "../components/socials";
import {
  Image,
  Button,
  Link,
  Heading,
  Tooltip,
  Box,
  Flex,
  Wrap,
  Text,
  chakra,
} from "@chakra-ui/react";
import JoinTeamLanding from "../components/join-team-landing";
import JobPostingCard from "../components/job-card";

export default function JoinTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const cardsInfo = useMemo(
    () => [
      {
        role: "Insta Content Creator",
        application: "https://forms.gle/wAPeXbta2oE1WNMz6",
        department: "Marketing",
        responsibility: [
          "Conceptualize and craft compelling content that resonates with the target audience",
          "Deftly utilizing various graphic design platforms such as Canva, Photoshop, etc. to accomplish a set number of tasks per week",
        ],
      },
      {
        role: "Coding Course Instructor",
        application: "https://forms.gle/q4m3r724RMQvP7F66",
        department: "Education",
        responsibility: [
          "Utilize acquired knowledge to craft polished and instructive programming lessons in the English language",
          "Create and maintain a comprehensive and up-to-date curriculum",
        ],
      },
      {
        role: "HR Associate",
        application: "https://forms.gle/GUD5T4cAPpRy2JYY6",
        department: "Human Resources",
        responsibility: [
          "Curate meticulous records of personnel information",
          "Actively seek out and onboard new volunteer associates",
          "Ensure the timely and accurate updating of all staff-related documentation",
        ],
      },
      {
        role: "Tiktok Content Creator",
        application: "https://forms.gle/L4SN4CjxtUjijN9h6",
        department: "Marketing",
        responsibility: [
          "Craft visually stunning and engaging video content to delight and entertain the programming community",
          "Utilize state-of-the-art video editing tools to meticulously edit and refine content",
          "Conduct extensive research to identify and develop novel and compelling ideas.",
        ],
      },
      {
        role: "Youtube Content Creator",
        application: "https://forms.gle/tqeJKWVQBCp52xi47",
        department: "Marketing",
        responsibility: [
          "Conceive and produce visually captivating and entertaining Youtube shorts for the programming community",
          "Utilize state-of-the-art video editing tools to meticulously edit and refine content",
        ],
      },
      {
        role: "Outreach Associate",
        application: "https://forms.gle/WhdUNtTjnNShN3wXA",
        department: "Human Resources",
        responsibility: [
          "Developing and implementing outreach strategies to reach new and diverse audiences",
          "Representing the organization at community events and meetings",
          "Contact famous software engineers/entrepreneurs to participate in TO Talks",
        ],
      },
      {
        role: "Proof-reader",
        application: "https://forms.gle/EBVmKkgeJVxAXNPBA",
        department: "Human Resources",
        responsibility: [
          "Curate and elevate the verbiage and language used in digital mediums, such as the organizations website and social media platforms",
          " Conduct thorough revisions to eliminate grammatical errors and promote fluency in the written content",
        ],
      },
      {
        role: "Discord Bot Developer",
        application: "https://forms.gle/WzU1TMsQ7WP18UcE6",
        department: "Technology",
        responsibility: [
          "Design and develop innovative and user-friendly bot commands for the Discord server",
          "Monitor server activities and proactively address any issues that arise with the bot",
          "Optimize bot performance to ensure seamless user experience and maximum uptime",
        ],
      },
      {
        role: "Community Team",
        application: "https://forms.gle/MRcjD5Ytp5kWcyDy8",
        department: "Community",
        responsibility: [
          "Develop and implement strategies to increase engagement on the Discord server and other platforms",
          "  Monitor and moderate community discussions to ensure a positive and inclusive environment",
          "Respond to user inquiries and concerns in a timely and professional manner",
          "Collaborate with other teams to organize events and activities that promote community engagement",
        ],
      },
      {
        role: "Hackathon Organizer",
        application: "https://forms.gle/dTR7zvEaQioPxC7W7",
        department: "Hackathon",
        responsibility: [
          " Planning and organizing the hackathon event",
          "Developing the hackathon schedule, including workshops, keynote speeches, and judging sessions ",
          "Recruiting and managing a team of volunteers and staff to assist with the event ",
          "Developing and implementing marketing and promotion strategies to attract participants and sponsors Identifying and securing sponsors and partnerships to support the event financially",
        ],
      },
      {
        role: "Web Designer",
        application: "https://forms.gle/9FayfQddFF6B4Ro39",
        department: "Technology",
        responsibility: [
          "Design visually appealing websites: Create attractive and user-friendly websites by using your creativity, design, Figma/AdobeXD skills.",
          "Collaborate with team: Work with others effectively.",
        ],
      },
      {
        role: "Web Developer",
        application: "https://forms.gle/NXQomJvT7dmCq8nU9",
        department: "Technology",
        responsibility: [
          "Contribute to the development and maintenance of the website",
          "Execute designs and assignments utilizing a comprehensive array of cutting-edge technologies such as NodeJS, CSS, Next.js/React.js and more",
        ],
      },
    ],
    []
  );
  useEffect(() => {
    setFilteredCards(cardsInfo);
  }, [cardsInfo]);

  useEffect(() => {
    setFilteredCards(
      cardsInfo.filter((cardInfo) =>
        cardInfo.department.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, cardsInfo]);
  return (
    <>
      <Flex>
        <Box
          width={"100%"}
          height={["90vh", "100vh"]}
          backgroundImage={"/desk-modified.png"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backdropFilter={"blur(10px)"}
          mt={["0rem", "-5rem"]}
          className="shadowBg"
        >
          <Box
            mt={["10rem", "12rem"]}
            mx={["2rem", "auto"]}
            className="missionbg"
            borderRadius={"20px"}
            maxWidth="800px"
            padding="1rem 2rem"
            opacity={".95"}
          >
            <Flex alignItems={"center"}>
              <Flex direction={"column"}>
                <Heading fontSize={["4xl", "6xl"]} color={"blue.100"}>
                  Join the Team
                </Heading>
                <Text
                  pr=".5rem"
                  mt=".3rem"
                  mb="1rem"
                  fontSize={["sm", "lg"]}
                  color={"blue.200"}
                >
                  Join our team and become a catalyst for positive change,
                  impacting the lives of programmers globally.
                </Text>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  href="#jobs"
                >
                  <Button
                    mr={"18px"}
                    px={"25px"}
                    borderRadius={"20px"}
                    colorScheme={"blue"}
                    fontWeight="light"
                    fontSize={["x-small", "md"]}
                  >
                    {" "}
                    Search for volunteer opportunities
                  </Button>
                </Link>
              </Flex>
              <Flex>
                <Image src="puzzle.png" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Text id="jobs"></Text>
      <Flex justify={"center"}>
        <chakra.form justify="center" my="2rem">
          <Tooltip
            placement="right"
            label="Try searching for Marketing, or Technology"
          >
            <chakra.select
              className="select"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by department..."
              borderRadius={"10px"}
              padding="10px 24px"
              backgroundColor={"blue.500"}
              color="white"
            >
              <option value="">Select a Department</option>
              <option value="Marketing">Marketing</option>
              <option value="Technology">Technology</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Education">Education</option>
            </chakra.select>
          </Tooltip>
        </chakra.form>
      </Flex>
      <Wrap
        mx={["2rem !important", "auto !important"]}
        mb="5rem !important"
        maxW={"1200px"}
        margin={"auto"}
        direction="row"
        justify="center"
        spacing={"30px"}
        zIndex="100"
        marginTop={["10px", "5px"]}
      >
        {filteredCards.map((cardInfo) => (
          <JobPostingCard
            key={cardInfo}
            role={cardInfo.role}
            application={cardInfo.application}
            department={cardInfo.department}
            responsibility={cardInfo.responsibility}
          />
        ))}
      </Wrap>

      <Socials />
    </>
  );
}
