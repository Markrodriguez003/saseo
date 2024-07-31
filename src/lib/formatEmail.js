import { Body } from "@react-email/body";
import { Section } from "@react-email/section";
import { Button } from "@react-email/button";
import { Text } from "@react-email/text";
import { Preview } from "@react-email/preview";
import { Row } from "@react-email/row";
import { Img } from "@react-email/img";
import { Column } from "@react-email/column";
import { Hr } from "@react-email/hr";
import { render } from "@react-email/render";

import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

function CreateEmail(collection) {
  console.log(JSON.stringify(collection));
  return (
    <>
      <Preview>Saseo Book Recommendation List</Preview>
      <Body style={main}>
        {collection.collection.map((b) => (
          <>
            <Section style={container}>
              <Column key={`${b.author} + ${b.title}` }>
                <Hr style={hr} />
                <Text style={heading}>{b.title}</Text>
                <Text style={paragraph}>
                  <Text style={bold}>Author(s):</Text> {b.author}
                </Text>
                <Text style={paragraph}>
                  <Text style={bold}>ISBN:</Text> {b.isbn}
                </Text>
              </Column>
            </Section>
          </>
        ))}
      </Body>
    </>
  );
}

function formatEmail(list) {
  const html = render(<CreateEmail collection={list} />, {
    pretty: true,
  });
  return html;
}

export default formatEmail;

const main = {
  backgroundColor: "#dbddde",
  padding: "20px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const img = {
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
};

const container = {
  margin: "30px auto",
  width: "610px",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
  padding: "12px",
  border: "grey 4px solid",
};

const heading = {
  fontSize: "26px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#299cbf",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "2px",
  color: "#3c4043",
  marginTop: "8px",
};
const bold = {
  fontSize: "18px",
  lineHeight: "2px",
  color: "black",
  fontWeight: "bold",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "4px 0",
};
