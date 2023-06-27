import { Box, TextField } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
// import Textarea from '@material-ui/joy/Textarea';

function ContactUs() {
  return (
    <div>
      <header className="fixed top-0">
        <Navbar />
      </header>
      <main className="mt-16">
        <h1> Contact Us</h1>
      </main>

      <Box className="bg-cyan-950">
        <div className="bg-white">
          <div classname>
            {/* <Textarea
              name="Solid"
              placeholder="Type in here…"
              variant="solid"
            /> */}
          </div>
        </div>
      </Box>
    </div>
  );
}

export default ContactUs;
