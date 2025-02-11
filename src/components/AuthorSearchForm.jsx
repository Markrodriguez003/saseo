// NOTES
//? https://www.youtube.com/watch?v=7Ophfq0lEAY&ab_channel=NikitaDev
// ! TODO: SEARCH JOHN GRISHAM, AN ERROR POPS UP, UNDEFINED

// REACT
import { useState } from "react";

// COMPONENTS
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
import HeadingPanel from "./ui/HeadingPanel";

// DATA
import book_authors from "../data/book_authors.json";

// LIBRARIES
import { useFormik } from "formik";
import authorSearchFetch from "../lib/authorSearchFetch";
import * as Yup from "yup";

// IMAGES
import missingimage from "../images/missing-cover.png";


const authorValidationSchema = Yup.object({
  author: Yup.string().required("Required"),
});

function AuthorSearchForm() {

  const [loadingBtnState, setLoadingBtnState] = useState(false);
  const [loadingAuthorState, setLoadingAuthorState] = useState(null);
  const [fetchedAuthor, setFetchedAuthor] = useState({});
  const formik = useFormik({
    initialValues: { author: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: authorValidationSchema,
    onSubmit: async (values) => {
      try {
        setLoadingBtnState(true)
        setFetchedAuthor(await authorSearchFetch(values.author));
        setLoadingBtnState(false)
        setLoadingAuthorState(true)
        console.log("Author data", fetchedAuthor);

      } catch (err) {
        setLoadingAuthorState(false)
        setLoadingBtnState(false)

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
          >

          </Box>
          <br />
          <Button
            backgroundColor={"secondary"}
            color={"white"}
            type="submit"
            onClick={formik.handleSubmit}
            marginTop={"15px"}
            isLoading={loadingBtnState ? true : false}
            loadingText="Finding Author..."
          >
            Search!
          </Button>

          {formik.errors.author ? (
            <small style={{ color: "red", fontStyle: "italic" }}>
              {formik.errors.author}
            </small>
          ) : (
            <></>
          )}
        </FormControl>

        {/* //* AUTHOR CARD COMPONENT */}
        {loadingAuthorState ? (
          <>
            <Card minW="lg" shadow={"2xl"}>
              <CardBody>
                <Stack mt="6" spacing="3" textAlign={"left"}>
                  {/* <Fade> */}
                  <Center>
                    <Image
                      src={fetchedAuthor.author_data.open_library_key ? `https://covers.openlibrary.org/a/olid/${fetchedAuthor.author_data.open_library_key}-M.jpg` : missingimage}
                    />
                  </Center>
                  {/* </Fade> */}
                  <Heading size="lg" textAlign={"center"}>
                    {fetchedAuthor?.author_data.name}
                  </Heading>
                  <Divider borderWidth={"2px"} borderColor={"primary"} />
                  <Text>
                    <strong>Birth: </strong>{" "}
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
                      Some Books from Author: <br />{" "}
                    </strong>{" "}
                    <Stack>
                      <Divider borderWidth={"1px"} borderColor={"primary"} />
                      {fetchedAuthor?.book_data.map((book) => (
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
        ) : loadingAuthorState === false ? (
          <>
            <h1>NO AUTHOR EXISTS!</h1>
          </>
        ) : <></>}
      </VStack>
    </>
  );
}

export default AuthorSearchForm;
