import {
  Divider,
  Stack,
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";

// CREATES THE END CARD IN WHICH USER SEES WHAT BOOKS THEY ARE INTERESTED IN AND EMAIL SUGGESTIONS TO AN EMAIL
function EmailShareCard(props) {
  const toast = useToast();

  // ToDO USECONTEXT HERE
  function GatheredBooks(props) {
    let bookList = props.books.map((book) => {
      <Badge colorScheme="green">{book.name}</Badge>;
    });

    return bookList;
  }
  return (
    <>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Books I am interested in reading!</Heading>
          <Divider orientation="horizontal" />
        </CardHeader>
        <CardBody>
          <Stack direction="column">
            <GatheredBooks books={props.books} />
          </Stack>
        </CardBody>
        <CardFooter>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <Button colorScheme="blue">Share!</Button>
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </CardFooter>
      </Card>
      {toast({
        title: "Email Sent",
        description: "Book list card sent to email! ",
        status: "success",
        duration: 9000,
        isClosable: true,
      })}
    </>
  );
}

export default EmailShareCard;
