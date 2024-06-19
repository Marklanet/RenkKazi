import React from "react";
import h1 from "../images/featured/h1.png";
import h2 from "../images/featured/h2.png";
import h3 from "../images/featured/h3.png";
import h4 from "../images/featured/h4.png";
import h6 from "../images/featured/h6.png";
import cover1 from "../images/list/p-1.png";
import cover2 from "../images/list/p-2.png";
import cover3 from "../images/list/p-3.png";
import cover4 from "../images/list/p-4.png";
import cover5 from "../images/list/p-5.png";
import cover6 from "../images/list/p-6.png";
import city1 from "../images/location/city-1.png";
import city2 from "../images/location/city-2.png";
import city3 from "../images/location/city-3.png";
import city4 from "../images/location/city-4.png";
import city5 from "../images/location/city-5.png";
import city6 from "../images/location/city-6.png";
import team1 from "../images/customer/team-1.jpg";
import team2 from "../images/customer/team-2.jpg";
import team3 from "../images/customer/team-3.jpg";
import team4 from "../images/customer/team-4.jpg";
import team5 from "../images/customer/team-5.jpg";

import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaLightbulb,
  FaHeart,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";
export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "About Us",
    path: "/about",
  },
  {
    text: "Our Services",
    path: "/services",
  },

  {
    text: "How it works",
    path: "/working",
  },
  {
    text: "contact Us",
    path: "/contact",
  },
];

export const city = [
  {
    county: "Baringo",
    value: "1",
  },
  {
    county: "Bomet",
    value: "2",
  },
  {
    county: "Bungoma",
    value: "3",
  },
  {
    county: "Busia",
    value: "4",
  },
  {
    county: "Elgeyo Marakwet",
    value: "5",
  },
  {
    county: "Embu",
    value: "6",
  },
  {
    county: "Garisa",
    value: "7",
  },
  {
    county: "Homabay",
    value: "8",
  },
  {
    county: "Isiolo",
    value: "9",
  },
  {
    county: "Kajiado",
    value: "10",
  },
  {
    county: "Kakamega",
    value: "11",
  },
  {
    county: "Kericho",
    value: "12",
  },
  {
    county: "Kiambu",
    value: "13",
  },
  {
    county: "Kilifi",
    value: "14",
  },
  {
    county: "Kirinyaga",
    value: "15",
  },
  {
    county: "Kisii",
    value: "16",
  },
  {
    county: "Kisumu",
    value: "17",
  },
  {
    county: "Kitui",
    value: "18",
  },
  {
    county: "Kwale",
    value: "19",
  },
  {
    county: "Laikipya",
    value: "20",
  },
  {
    county: "Lamu",
    value: "21",
  },
  {
    county: "Machakos",
    value: "22",
  },
  {
    county: "Makueni",
    value: "23",
  },
  {
    county: "Mandera",
    value: "24",
  },
  {
    county: "Meru",
    value: "25",
  },
  {
    county: "Migori",
    value: "26",
  },
  {
    county: "Marsabit",
    value: "27",
  },
  {
    county: "Mombasa",
    value: "28",
  },
  {
    county: "Muranga",
    value: "29",
  },
  {
    county: "Nairobi",
    value: "30",
  },
  {
    county: "Nakuru",
    value: "31",
  },
  {
    county: "Nandi",
    value: "32",
  },
  {
    county: "Narok",
    value: "33",
  },
  {
    county: "Nyamira",
    value: "34",
  },
  {
    county: "Nyandarua",
    value: "35",
  },
  {
    county: "Nyeri",
    value: "36",
  },
  {
    county: "Samburu",
    value: "37",
  },
  {
    county: "Siaya",
    value: "38",
  },
  {
    county: "Taita Taveta",
    value: "39",
  },
  {
    county: "Tana River",
    value: "40",
  },
  {
    county: "Tarakanithi",
    value: "41",
  },
  {
    county: "Trans Nzoia",
    value: "42",
  },

  {
    county: "Turkana",
    value: "43",
  },
  {
    county: "Uasin Gishu",
    value: "44",
  },
  {
    county: "Vihiga",
    value: "45",
  },
  {
    county: "Wajiar",
    value: "46",
  },
  {
    county: "West Pokot",
    value: "47",
  },
];

export const house = [
  {
    type: "Bed Seater",
    value: "1",
  },
  {
    type: "Single Room",
    value: "2",
  },
  {
    type: "Studio House",
    value: "3",
  },
  {
    type: "Servernt Quater",
    value: "4",
  },
  {
    type: "Hostel",
    value: "5",
  },
  {
    type: "One Bedroom",
    value: "6",
  },
  {
    type: "Two Bedroom",
    value: "7",
  },
  {
    type: "Three Bedroom",
    value: "8",
  },
  {
    type: "Four Bedroom",
    value: "9",
  },
  {
    type: "Servernt Quater",
    value: "10",
  },
  {
    type: "Self Contained",
    value: "11",
  },
  {
    type: "Double Room",
    value: "12",
  },
  {
    type: "Warehouse",
    value: "12",
  },
  {
    type: "Retail Space",
    value: "12",
  },
  {
    type: "Office Building",
    value: "12",
  },

  {
    type: "Industrial",
    value: "12",
  },
  {
    type: "Multiuse",
    value: "12",
  },
];
export const featured = [
  {
    cover: h1,
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: h2,
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: h3,
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: h4,
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: h6,
    name: "Villa & Condo",
    total: "80 Property",
  },
];
export const list = [
  {
    id: 1,
    cover: cover1,
    name: "Red Carpet Estate",
    location: "Lurambi,Kakamega",
    category: "For Rent",
    price: "Ksh 3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: cover2,
    name: "Fairmount Properties",
    location: "Amalemba, Kakamega",
    category: "For Sale",
    price: "Ksh 6,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: cover3,
    name: "Real Estate Corner",
    location: "Rosterman, Kakamega",
    category: "For Rent",
    price: "Ksh 5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: cover4,
    name: "Herringbone Realty",
    location: "Kondele, Kisumu",
    category: "For Sale",
    price: "Ksh 15,540",
    type: "Homes ",
  },
  {
    id: 5,
    cover: cover5,
    name: "Brick Lane Properties",
    location: "Langas, Eldoret",
    category: "For Rent",
    price: "Ksh 4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: cover6,
    name: "Miti Mingi Houses",
    location: "White House, Nakuru",
    category: "For Sale",
    price: "Ksh 9,842",
    type: "Apartment",
  },
  {
    id: 7,
    cover: cover1,
    name: "Red Carpet Estate",
    location: "Lurambi,Kakamega",
    category: "For Rent",
    price: "Ksh 3,700",
    type: "Apartment",
  },
  {
    id: 8,
    cover: cover2,
    name: "Fairmount Properties",
    location: "Amalemba, Kakamega",
    category: "For Sale",
    price: "Ksh 6,750",
    type: "Condos",
  },
  {
    id: 9,
    cover: cover3,
    name: "Real Estate Corner",
    location: "Rosterman, Kakamega",
    category: "For Rent",
    price: "Ksh 5,860",
    type: "Offices",
  },
  {
    id: 10,
    cover: cover4,
    name: "Herringbone Realty",
    location: "Kondele, Kisumu",
    category: "For Sale",
    price: "Ksh 15,540",
    type: "Homes ",
  },
];
export const awards = [
  {
    icon: (
      <i>
        <FaTrophy />
      </i>
    ),
    num: "32 M	",
    name: "Kenya Real Estates Award",
  },
  {
    icon: (
      <i>
        <FaBriefcase />
      </i>
    ),
    num: "43 M",
    name: "National Innovation Award",
  },
  {
    icon: (
      <i>
        <FaLightbulb />
      </i>
    ),
    num: "51 M",
    name: "Sub-urbarn Land Agency Award",
  },

  {
    icon: (
      <i>
        <FaHeart />
      </i>
    ),
    num: "42 M",
    name: "Kenya Digital Media Award",
  },
];
export const location = [
  {
    id: 1,
    name: "Mombasa",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city1,
  },
  {
    id: 2,
    name: "Nairobi",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city2,
  },
  {
    id: 3,
    name: "Nakuru",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city3,
  },
  {
    id: 4,
    name: "Kisumu",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city4,
  },
  {
    id: 5,
    name: "Eldoret",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city5,
  },
  {
    id: 6,
    name: "Kiambu",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city6,
  },
];
export const team = [
  {
    list: "50",
    cover: team1,

    address: "Langas Eldoret",
    name: "Red Carpet Estates",
    icon: [
      <i>
        <FaFacebookF />
      </i>,
      <i>
        <FaLinkedin />
      </i>,
      <i>
        <FaTwitter />
      </i>,
      <i>
        <FaInstagram />
      </i>,
    ],
  },
  {
    list: "70",
    cover: team2,
    address: "FreeArea, Nakuru",
    name: "Sarona Properties",
    icon: [
      <i>
        <FaFacebookF />
      </i>,
      <i>
        <FaLinkedin />
      </i>,
      <i>
        <FaTwitter />
      </i>,
      <i>
        <FaInstagram />
      </i>,
    ],
  },
  {
    list: "80",
    cover: team3,
    address: "Joyland, Kakamega",
    name: "Real Estate Corner",
    icon: [
      <i>
        <FaFacebookF />
      </i>,
      <i>
        <FaLinkedin />
      </i>,
      <i>
        <FaTwitter />
      </i>,
      <i>
        <FaInstagram />
      </i>,
    ],
  },
  {
    list: "51",
    cover: team4,
    address: "Amalemba Kakamega",
    name: "Michael P. Wanjala",
    icon: [
      <i>
        <FaFacebookF />
      </i>,
      <i>
        <FaLinkedin />
      </i>,
      <i>
        <FaTwitter />
      </i>,
      <i>
        <FaInstagram />
      </i>,
    ],
  },
  {
    list: "42",
    cover: team5,
    address: "Wstlands, Kisumu",
    name: "Brick Lane Properties",
    icon: [
      <i>
        <FaFacebookF />
      </i>,
      <i>
        <FaLinkedin />
      </i>,
      <i>
        <FaTwitter />
      </i>,
      <i>
        <FaInstagram />
      </i>,
    ],
  },
  {
    list: "38",
    cover: team5,
    address: "Mountain View, Nairobi",
    name: "Fairmount Properties",
    icon: [
      <i>
        <FaFacebookF />
      </i>,
      <i>
        <FaLinkedin />
      </i>,
      <i>
        <FaTwitter />
      </i>,
      <i>
        <FaInstagram />
      </i>,
    ],
  },
];

export const footer = [
  {
    title: "Quick Links",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "Useful Links",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
];
