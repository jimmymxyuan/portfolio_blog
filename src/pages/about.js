import {Timeline} from "../components/timeline"
import Container from 'react-bootstrap/Container';
import Head from "next/head";

export default function About() {
    return (
      <main>
        <Container className="content" >
            <div className="top-content">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Get to know Jimmy
                </h1>
                <p>
                  Hello, I am Jimmy Yuan living in Sydney, Australia.
                  I am currently empoyed as a Software Test Engineer at Dematic. 
                  My life has been quite a journey so far, here&apos;s a little timeline to summarise it. 
                </p>
                
                <Timeline />
            </div>
        </Container>
      </main>
    );
  }
  