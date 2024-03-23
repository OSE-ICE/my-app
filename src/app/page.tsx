"use client";
import Image from "./picture_mona_lisa.jpg";
import { useState, Fragment, useCallback } from "react";

const DATA = [
  {
    id: 0,
    title: "The standard Lorem Ipsum passage",
    subTitle: "used since the 1500s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 1,
    title: "translation by H. Rackham Piper 2",
    subTitle: "1914 - present",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    id: 2,
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum"',
    subTitle: "written by Cicero in 45 BC",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    id: 3,
    title: "Mona Lisa",
    subTitle: "Frelance picture model from Italy",
  },
];

type JobProps = {
  title: string;
  subTitle: string;
  description: string;
};

const Job = (props: JobProps) => {
  return (
    <div>
      <h1 style={{ margin: "0", fontSize: "2rem" }}>{props.title}</h1>
      <h2 style={{ color: "lightslategray", margin: "0", fontSize: "1.rem" }}>
        {props.subTitle}
      </h2>
      <p
        style={{
          margin: "0",
          fontSize: "1.2rem",
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "30px",
        }}
      >
        {props.description}
      </p>
    </div>
  );
};

type HeaderProps = {
  title: string;
  subtitle: string;
};

const dataItem = DATA.find((item) => item.id === 3);
const jobItem = DATA.find((item) => item.id === 0);
const jobItem1 = DATA.find((item) => item.id === 1);
const jobItem2 = DATA.find((item) => item.id === 2);

const Header = (props: HeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px lightslategrey solid",
        padding: "10px",
        backgroundColor: "#292c33",
        color: "white",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ fontSize: "2em", fontWeight: "bold" }}>{props.title}</div>
        <div>{props.subtitle}</div>
      </div>
      <img
        src={Image.src}
        alt="Picture of Mona Lisa"
        style={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

type ContentProps = {
  data: typeof DATA;
};

const Content = (props: ContentProps) => {
  const { data } = props;
  const jobItem = data.find((item) => item.id === 0);

  return (
    <div
      style={{
        backgroundColor: "#292c33",
        color: "white",
        padding: "10px",
        margin: "0",
      }}
    >
      <Job
        title={jobItem?.title || ""}
        subTitle={jobItem?.subTitle || ""}
        description={jobItem?.description || ""}
      />
      <Job
        title={jobItem1?.title || ""}
        subTitle={jobItem1?.subTitle || ""}
        description={jobItem1?.description || ""}
      />
      <Job
        title={jobItem2?.title || ""}
        subTitle={jobItem2?.subTitle || ""}
        description={jobItem2?.description || ""}
      />
    </div>
  );
};

export default function Home() {
  return (
    <div style={{ fontFamily: "Serif", fontSize: "24px" }}>
      <Header
        title={dataItem?.title || ""}
        subtitle={dataItem?.subTitle || ""}
      />
      <Content data={DATA} />
    </div>
  );
}
