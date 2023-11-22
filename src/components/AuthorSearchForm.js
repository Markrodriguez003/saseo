// NOTES
//? https://www.youtube.com/watch?v=7Ophfq0lEAY&ab_channel=NikitaDev
// ! TODO: SEARCH JOHN GRISHAM, AN ERROR POPS UP, UNDEFINED

import {
  Button,
  Box,
  FormLabel,
  Input,
  FormControl,
  VStack,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Divider,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";
// DATA
import book_authors from "../data/book_authors.json";

// COMPONENTS
import HeadingPanel from "../components/ui/HeadingPanel";

//SCRIPT
import authorSearchFetch from "lib/authorSearchFetch";

// LIBRARIES
import { Formik, useFormik, useFormikContext } from "formik";

import * as Yup from "yup";
import Fade from "react-reveal/Fade";
import Shake from "react-reveal/Shake";

const authorValidationSchema = Yup.object({
  author: Yup.string().required("Required"),
});

function AuthorSearchForm() {
  const [fetchedAuthor, setFetchedAuthor] = useState(undefined);
  const formik = useFormik({
    initialValues: { author: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: authorValidationSchema,
    onSubmit: async (values) => {
      try {
        setFetchedAuthor(await authorSearchFetch(values.author));
        console.log("Author data", fetchedAuthor);
      } catch (err) {
        // TODO: MAKE THIS ERROR MESSAGE A USESTATE VARIABLE THAT
        // TODO: CREATES THE COMPONENT ON THE BOTTOM SAYING AN ERROR/AUTHOR NOT FOUND!
        console.log(err.message);
      }
    },
  });

  // ALLOWS THE USE OF CHAKRA TOAST

  return (
    <>
      <VStack
        gap={"2px"}
        justifyContent={"center"}
        alignContent={"center"}
        textAlign={"center"}
        marginBottom={"380px"}
        marginTop={"25px"}
      >
        <HeadingPanel>Author Search</HeadingPanel>
        <FormControl onSubmit={formik.handleSubmit} paddingBottom={"5px"}>
          <FormLabel htmlFor="author" color={"white"} textAlign={"center"}>
            Search Author
          </FormLabel>

          {/* //TODO: https://www.youtube.com/watch?v=Jd7s7egjt30&ab_channel=ReactwithMasoud */}
          <Input
            type="author"
            name="author"
            id="author"
            backgroundColor={"white"}
            color={"darkcyan"}
            w={"355px"}
            onChange={formik.handleChange}
            value={formik.values.author}
            placeholder={
              formik.values.author === ""
                ? "Enter author name here"
                : formik.values.author
            }
          />
          <Box
            borderColor={"grey"}
            borderRadius={"md"}
            borderWidth={"1px"}
            borderTopWidth={"0px"}
            marginLeft={"auto"}
            marginRight={"auto"}
            w={"355px"}
            // h={formik.values.author === "" ? "0px" : "200px"}
            // overflow={formik.values.author === "" ? "none" : "scroll"}
          >
            {book_authors.authors
              .filter((author) => {
                const userSearchTerm = formik.values.author.toLowerCase();
                const authorSearchTerm = author.toLowerCase();
                return (
                  userSearchTerm &&
                  authorSearchTerm.startsWith(userSearchTerm) &&
                  authorSearchTerm !== userSearchTerm
                );
              })
              .map((author) => (
                <Text
                  textAlign={"left"}
                  color={"grey"}
                  paddingLeft={"15px"}
                  _hover={{
                    backgroundColor: "rgba(0,139,139,1)",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    console.log(author);
                    formik.setFieldValue("author", author);
                  }}
                >
                  {author}
                </Text>
              ))}
          </Box>
          <br />
          <Button
            backgroundColor={"secondary"}
            color={"white"}
            type="submit"
            onClick={formik.handleSubmit}
            marginTop={"15px"}
          >
            Search!
          </Button>

          {formik.errors.author ? (
            <small style={{ color: "red", fontStyle: "italic" }}>
              <Shake>{formik.errors.author}</Shake>
            </small>
          ) : (
            <></>
          )}
        </FormControl>

        {/* //* AUTHOR CARD COMPONENT */}
        {fetchedAuthor !== undefined ? (
          <>
            <Card minW="lg" shadow={"2xl"}>
              <CardBody>
                <Stack mt="6" spacing="3" textAlign={"left"}>
                  <Fade>
                    <Center>
                      <Image
                        src={`https://covers.openlibrary.org/a/olid/${fetchedAuthor.author_data.open_library_key}-M.jpg`}
                      />
                    </Center>
                  </Fade>
                  <Heading size="lg" textAlign={"center"}>
                    {fetchedAuthor?.author_data.name}
                  </Heading>
                  <Divider borderWidth={"2px"} borderColor={"primary"} />
                  <Text>
                    <strong>Birthday: </strong>{" "}
                    {fetchedAuthor?.author_data.birthday}
                  </Text>
                  <Text>
                    <strong>Open Library Key: </strong>{" "}
                    {fetchedAuthor?.author_data.open_library_key}
                  </Text>
                  <Text>
                    <strong># of Works: </strong>{" "}
                    {fetchedAuthor?.author_data.work_count}
                  </Text>
                  <Text>
                    <strong>Top Work: </strong>{" "}
                    {fetchedAuthor?.author_data.top_work}
                  </Text>
                  <Text>
                    <strong>
                      Top Subjects: <br />{" "}
                    </strong>{" "}
                    {fetchedAuthor?.author_data.top_subjects.map(
                      (subject, index) => (
                        <>
                          {subject} <br />
                        </>
                      )
                    )}
                  </Text>
                  <Divider borderWidth={"1px"} borderColor={"primary"} />
                  <Text>
                    <strong>
                      20 Books from Author: <br />{" "}
                    </strong>{" "}
                    <Stack>
                      {fetchedAuthor?.book_data.map((book, index) => (
                        <>
                          <Text color={"primary"}>{book.title}</Text>
                        </>
                      ))}
                    </Stack>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </>
        ) : (
          <>
            <h1>NO AUTHOR EXISTS!</h1>
          </>
        )}
      </VStack>
    </>
  );
}

export default AuthorSearchForm;
