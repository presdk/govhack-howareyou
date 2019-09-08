import React from "react";
import { Icon } from "antd";
import PersonCard from "../components/PersonCard";
import MainLogo from "../components/MainLogo";

const DashboardPage = () => {
  const friendList = [
    {
      imgUrl:
        "https://scontent.fhlz2-1.fna.fbcdn.net/v/t31.0-1/23632416_1505244122858250_3052530621844097986_o.jpg?_nc_cat=103&_nc_oc=AQmBfpSyg6PG2lfXj309G3GcRuxsbjgOeyofrwrZoMbbgOKK9Ww01qlO_EGIN5rcxcg&_nc_ht=scontent.fhlz2-1.fna&oh=e73f17fd8b0d66a51be39e914283fd3f&oe=5DFD4D51",
      name: "Jun",
      status: "bad"
    },
    {
      imgUrl:
        "https://scontent.fhlz2-1.fna.fbcdn.net/v/t31.0-8/p960x960/22135770_10156599028714908_4753146757358864431_o.jpg?_nc_cat=102&_nc_oc=AQmiIzgOhOSJIky8-5FiXIF9mudXVyu_KoqQIqt9FON30Ocw9C98qJ7PKAsLJ__LNOw&_nc_ht=scontent.fhlz2-1.fna&oh=d2ca7f458c2b9c9e320827baa64b4df2&oe=5DFF05CE",
      name: "Sam",
      status: "okay"
    },
    {
      imgUrl:
        "https://scontent.fhlz2-1.fna.fbcdn.net/v/t1.0-9/45160697_10214625143154973_3523977197003997184_n.jpg?_nc_cat=103&_nc_oc=AQkG-4L9-DqLapl9ImywOl4v0I5yFeBOdrSHS7coWZbB6CSZjJAFGN0vi_AvirydXLE&_nc_ht=scontent.fhlz2-1.fna&oh=58a9de22c8583d3ac9f9e79dbb7b83eb&oe=5DFC9112",
      name: "Dawin",
      status: "okay"
    },
    {
      imgUrl:
        "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/11329839_826705150744577_1515719576045860896_n.jpg?_nc_cat=103&_nc_oc=AQl2DPB6kBxgKQAS6hIITqri2ghEdygqYcjBsTVxfTX-7dMvqdpM_qXsa8a17u20Jms&_nc_ht=scontent.fakl2-1.fna&oh=47324bafceb0cbc48d1b68f010898130&oe=5E0BD697",
      name: "John",
      status: "bad"
    },

    {
      imgUrl:
        "https://scontent.fhlz2-1.fna.fbcdn.net/v/t1.0-9/13920663_1776660115940405_8412558196506887989_n.jpg?_nc_cat=105&_nc_oc=AQl8XQLtk_bHwIQCWmarrTAURNeGZZ3knU7MKAaZt4TLODQn1DCLEGyNzUeuabgEpGU&_nc_ht=scontent.fhlz2-1.fna&oh=eaf2abb15b502470e71d67ef601070ca&oe=5DFC468B",
      name: "Nicole",
      status: "okay"
    },
    {
      imgUrl:
        "https://scontent.fhlz2-1.fna.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_oc=AQlPb0VX2bGuxb5upIXbQJVTo7awk4egMP1J_I6gFlLuO6IFGJZiJ5SF2U8lJWvNr-g&_nc_ht=scontent.fhlz2-1.fna&oh=39d6bdbb2a8100ac31c1e4dea0dac368&oe=5DFE1D49",
      name: "MJ",
      status: "okay"
    }
  ];

  return (
    <div className="columns is-multiline">
      <div className="column is-12 has-text-centered">
        <MainLogo />
      </div>
      <div className="column is-12" style={{ marginBottom: "1em" }}>
        <Icon className="is-size-3" type="user" />{" "}
        <span className="is-size-3">Friends</span>
      </div>
      <div className="column is-12">
        <div className="columns is-multiline">
          {friendList.map((friend, index) => (
            <div className="column is-2">
              <PersonCard person={friend} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="column is-12">
        <a class="is-float-right button is-link is-outlined">
          Invite close friends
        </a>
      </div>
    </div>
  );
};

export default DashboardPage;
