import React, { useState } from 'react'
import { BrowserRouter, Link, } from 'react-router-dom';
import Result from './Result'
import { Route, Switch, Routes } from 'react-router-dom'



const Main = (props) => {
    const [rollNo, setRollNo] = useState("");
    //   var [Sname,setSname]=useState("");  
    //   var [Fname,setFname]=useState("");  

    var Data = [
        {
            "Sno": "0",
            "Roll No": "Null",
            "Sname": "Null",
            "Fname": "Null"
        },
        {
            "Sno": "1",
            "Roll No": "4001",
            "Sname": "ABHIJIT MAITY",
            "Fname": "DHARNI DHAR MAITY"
        },
        {
            "Sno": "2",
            "Roll No": "Null",
            "Sname": "Null",
            "Fname": "Null"
        },
        {
            "Sno": "3",
            "Roll No": "4003",
            "Sname": "AKASH YADAV",
            "Fname": "ASHOK KUMAR"
        },
        {
            "Sno": "4",
            "Roll No": "4004",
            "Sname": "ALOK MISHRA",
            "Fname": "PARMANAND MISHRA"
        },
        {
            "Sno": "5",
            "Roll No": "4005",
            "Sname": "AMAN",
            "Fname": "PRAMOD"
        },
        {
            "Sno": "6",
            "Roll No": "4006",
            "Sname": "AMANDEEP SINGH",
            "Fname": "AMARJEET SINGH"
        },
        {
            "Sno": "7",
            "Roll No": "4007",
            "Sname": "AMIT SAHU",
            "Fname": "GANGA DAYAL"
        },
        {
            "Sno": "8",
            "Roll No": "4008",
            "Sname": "AMITOSH SINGH",
            "Fname": "PARVESH SINGH"
        },
        {
            "Sno": "9",
            "Roll No": "4009",
            "Sname": "ANISH KUMAR PANDEY",
            "Fname": "MANOJ PANDEY"
        },
        {
            "Sno": "10",
            "Roll No": "4010",
            "Sname": "ANITA",
            "Fname": "KRIPAL SINGH RAWAT"
        },
        {
            "Sno": "11",
            "Roll No": "4011",
            "Sname": "ANKIT",
            "Fname": "UDAYVEER YADAV"
        },
        {
            "Sno": "12",
            "Roll No": "4012",
            "Sname": "ANKIT",
            "Fname": "LATE PAWAN"
        },
        {
            "Sno": "13",
            "Roll No": "4013",
            "Sname": "ANKIT KUMAR",
            "Fname": "KRISHAN MOHAN CHOUDHARY"
        },
        {
            "Sno": "14",
            "Roll No": "4014",
            "Sname": "ARCHIT DHYANI",
            "Fname": "HARI PRASAD DHYANI"
        },
        {
            "Sno": "15",
            "Roll No": "4015",
            "Sname": "ARSHDEEP SINGH",
            "Fname": "KRISHAN SINGH"
        },
        {
            "Sno": "16",
            "Roll No": "4016",
            "Sname": "ARUN",
            "Fname": "MANOJ SHARMA"
        },
        {
            "Sno": "17",
            "Roll No": "4017",
            "Sname": "ASHISH",
            "Fname": "MOHAN"
        },
        {
            "Sno": "18",
            "Roll No": "4018",
            "Sname": "ASHISH KUMAR",
            "Fname": "SADANAND"
        },
        {
            "Sno": "19",
            "Roll No": "4019",
            "Sname": "AVANTIKA CHOPRA",
            "Fname": "DEVENDER CHOPRA"
        },
        {
            "Sno": "20",
            "Roll No": "4020",
            "Sname": "AVIJIT DUTTA",
            "Fname": "SHANTI DUTTA"
        },
        {
            "Sno": "21",
            "Roll No": "4021",
            "Sname": "CHETAN",
            "Fname": "OM PRAKASH"
        },
        {
            "Sno": "22",
            "Roll No": "4022",
            "Sname": "DAKSH",
            "Fname": "MATOL SINGH"
        },
        {
            "Sno": "23",
            "Roll No": "4023",
            "Sname": "DEEPAK VASHISTH",
            "Fname": "PARKASH VASHISTH"
        },
        {
            "Sno": "24",
            "Roll No": "4024",
            "Sname": "DEEPANSHU",
            "Fname": "HARKESH VERMA"
        },
        {
            "Sno": "25",
            "Roll No": "4025",
            "Sname": "DEEPANSHU KUSHWAHA",
            "Fname": "BRIJESH KUSHWAHA"
        },
        {
            "Sno": "26",
            "Roll No": "4026",
            "Sname": "DEV MATHUR",
            "Fname": "ARJUN SINGH"
        },
        {
            "Sno": "27",
            "Roll No": "4027",
            "Sname": "DHANANJAY",
            "Fname": "JITENDER KUMAR"
        },
        {
            "Sno": "28",
            "Roll No": "4028",
            "Sname": "DIKSHIT SINGH",
            "Fname": "JAINDER SINGH"
        },
        {
            "Sno": "29",
            "Roll No": "4029",
            "Sname": "DINESH",
            "Fname": "BHARAT PAL"
        },
        {
            "Sno": "30",
            "Roll No": "4030",
            "Sname": "DIVYA",
            "Fname": "PARKASH CHAND"
        },
        {
            "Sno": "31",
            "Roll No": "4031",
            "Sname": "FIROZ KHAN",
            "Fname": "RAJESH"
        },
        {
            "Sno": "32",
            "Roll No": "4032",
            "Sname": "GOURAV KUMAR",
            "Fname": "BHARAT SINGH"
        },
        {
            "Sno": "33",
            "Roll No": "4033",
            "Sname": "HARSH",
            "Fname": "BRAHAM PRAKASH"
        },

        {
            "Sno": "34",
            "Roll No": "4034",
            "Sname": "HARSH RAWAT",
            "Fname": "SAMAY SINGH RAWAT"
        },
        {
            "Sno": "35",
            "Roll No": "4035",
            "Sname": "HARSH SHRIVASTAVA",
            "Fname": "RANJAN SHRIVASTAVA"
        },
        {
            "Sno": "36",
            "Roll No": "4036",
            "Sname": "HASAN AKHTAR",
            "Fname": "RAFIQUE SYEDAIN RIZVI"
        },
        {
            "Sno": "37",
            "Roll No": "4037",
            "Sname": "HEMANT",
            "Fname": "TEKCHAND"
        },

        {
            "Sno": "38",
            "Roll No": "Null",
            "Sname": "Null",
            "Fname": "Null"
        },
        {
            "Sno": "39",
            "Roll No": "4039",
            "Sname": "KAMLESH",
            "Fname": "JAIVIR"
        },
        {
            "Sno": "40",
            "Roll No": "4040",
            "Sname": "KARAN KUMAR",
            "Fname": "SHYAM SUNDER KUMAR"
        },
        {
            "Sno": "41",
            "Roll No": "4041",
            "Sname": "KARTIK",
            "Fname": "SURESH KUMAR"
        },
        {
            "Sno": "42",
            "Roll No": "4042",
            "Sname": "KOMAL",
            "Fname": "MUKESH KUMAR"
        },
        {
            "Sno": "43",
            "Roll No": "4043",
            "Sname": "KRISHAN KANT",
            "Fname": "JAWAHAR LAL"
        },
        {
            "Sno": "44",
            "Roll No": "4044",
            "Sname": "KRISHAN KUMAR SHARMA",
            "Fname": "LT. HARPARSAD SHARMA"
        },
        {
            "Sno": "45",
            "Roll No": "4045",
            "Sname": "KULJEET SINGH",
            "Fname": "RANVEER SINGH"
        },
        {
            "Sno": "46",
            "Roll No": "4046",
            "Sname": "KUNAL",
            "Fname": "RAJENDRA"
        },
        {
            "Sno": "47",
            "Roll No": "4047",
            "Sname": "KUNWAR JYOTIRADITYA SINGH",
            "Fname": "YUGPAL SINGH"
        },
        {
            "Sno": "48",
            "Roll No": "4048",
            "Sname": "KUSHAGRA GOBHIL",
            "Fname": "MANU GOBHIL"
        },
        {
            "Sno": "49",
            "Roll No": "4049",
            "Sname": "MADHU GUPTA",
            "Fname": "MUKESH KUMAR GUPTA"
        },
        {
            "Sno": "50",
            "Roll No": "4050",
            "Sname": "MANAS KANDPAL",
            "Fname": "SURESH CHANDRA KANDPAL"
        },
        {
            "Sno": "51",
            "Roll No": "4051",
            "Sname": "MANISH PATEL",
            "Fname": "ANIL SINGH"
        },
        {
            "Sno": "52",
            "Roll No": "4052",
            "Sname": "MANISH YADUVANSHI",
            "Fname": "OMPAL SINGH"
        },
        {
            "Sno": "53",
            "Roll No": "4053",
            "Sname": "MANSI",
            "Fname": "KAILASH CHAND"
        },
        {
            "Sno": "54",
            "Roll No": "4054",
            "Sname": "MD NASIR ARAFAT",
            "Fname": "MD AZMAT ALI"
        },
        {
            "Sno": "55",
            "Roll No": "4055",
            "Sname": "MEGH BORA",
            "Fname": "NANDAN SINGH BORA"
        },
        {
            "Sno": "56",
            "Roll No": "4056",
            "Sname": "MEGHA",
            "Fname": "VINOD"
        },
        {
            "Sno": "57",
            "Roll No": "4057",
            "Sname": "MINI BHATI",
            "Fname": "VIRENDRA BHATI"
        },
        {
            "Sno": "58",
            "Roll No": "4058",
            "Sname": "MOHIT SHUKLA",
            "Fname": "KAILASH KUMAR SHUKLA"
        },
        {
            "Sno": "59",
            "Roll No": "4059",
            "Sname": "MOHIT SINGH RAWAT",
            "Fname": "SHIVENDER SINGH"
        },
        {
            "Sno": "60",
            "Roll No": "4060",
            "Sname": "MUSKAN CHAUHAN",
            "Fname": "RAJPAL CHAUHAN"
        },
        {
            "Sno": "61",
            "Roll No": "4061",
            "Sname": "NAMRATA GULATI",
            "Fname": "KAPIL GULATI"
        },
        {
            "Sno": "62",
            "Roll No": "4062",
            "Sname": "NARESH",
            "Fname": "DALCHAND"
        },
        {
            "Sno": "63",
            "Roll No": "4063",
            "Sname": "NAVDEEP SINGH",
            "Fname": "BIKAR SINGH"
        },
        {
            "Sno": "64",
            "Roll No": "4064",
            "Sname": "NEERAJ SINGH",
            "Fname": "SHIV KUMAR SINGH"
        },
        {
            "Sno": "65",
            "Roll No": "4065",
            "Sname": "NIKHIL",
            "Fname": "UDAY SHANKAR"
        },
        {
            "Sno": "66",
            "Roll No": "4066",
            "Sname": "NISHANT VERMA",
            "Fname": "SANJAY VERMA"
        },
        {
            "Sno": "67",
            "Roll No": "4067",
            "Sname": "NITIN SINGH",
            "Fname": "LALIT MOHAN SINGH"
        },
        {
            "Sno": "68",
            "Roll No": "4068",
            "Sname": "NITISH KUMAR",
            "Fname": "SHANKAR YADAV"
        },
        {
            "Sno": "69",
            "Roll No": "4069",
            "Sname": "PANKAJ",
            "Fname": "OM SWARUP"
        },
        {
            "Sno": "70",
            "Roll No": "4070",
            "Sname": "PAWAN SAGAR",
            "Fname": "SUBHASH CHAND"
        },
        {
            "Sno": "71",
            "Roll No": "4071",
            "Sname": "POOJA SINGH",
            "Fname": "SANJAY SINGH"
        },
        {
            "Sno": "72",
            "Roll No": "4072",
            "Sname": "PRACHI SHARMA",
            "Fname": "BINESH"
        },
        {
            "Sno": "73",
            "Roll No": "4073",
            "Sname": "PRAVEEN PARMAR",
            "Fname": "OM PRAKASH SINGH"
        },
        {
            "Sno": "74",
            "Roll No": "4074",
            "Sname": "PRIYA BARNWAL",
            "Fname": "SHIV KUMAR BARNWAL"
        },
        {
            "Sno": "75",
            "Roll No": "4075",
            "Sname": "PRIYAG",
            "Fname": "BIJENDRA KUMAR"
        },
        {
            "Sno": "76",
            "Roll No": "4076",
            "Sname": "RACHIT MUNDAPI",
            "Fname": "KRISHAN KUMAR"
        },
        {
            "Sno": "77",
            "Roll No": "4077",
            "Sname": "RAHUL",
            "Fname": "NAND KISHORE"
        },
        {
            "Sno": "78",
            "Roll No": "4078",
            "Sname": "RAHUL",
            "Fname": "LATE ASHOK KUMAR"
        },
        {
            "Sno": "79",
            "Roll No": "4079",
            "Sname": "RASHMI KUMARI",
            "Fname": "RAJESH KUMAR"
        },
        {
            "Sno": "80",
            "Roll No": "4080",
            "Sname": "RAVI",
            "Fname": "SANJAY KUMAR"
        },
        {
            "Sno": "81",
            "Roll No": "4081",
            "Sname": "none",
            "Fname": "none"
        },
        {
            "Sno": "82",
            "Roll No": "4082",
            "Sname": "RHYTHM PANDEY",
            "Fname": "SURENDER KUMAR PANDEY"
        },
        {
            "Sno": "83",
            "Roll No": "4083",
            "Sname": "RISHABH BILWAL",
            "Fname": "SUNIL SINGH"
        },
        {
            "Sno": "84",
            "Roll No": "4084",
            "Sname": "ROHIL KHAN",
            "Fname": "HAKAMDEEN"
        },
        {
            "Sno": "85",
            "Roll No": "4085",
            "Sname": "ROSHAN",
            "Fname": "SATIRAM"
        },
        {
            "Sno": "86",
            "Roll No": "4086",
            "Sname": "ROSHAN KUMAR",
            "Fname": "DINESH PRASAD"
        },
        {
            "Sno": "87",
            "Roll No": "4087",
            "Sname": "SACHI MITTAL",
            "Fname": "DINESH MITTAL"
        },
        {
            "Sno": "88",
            "Roll No": "4088",
            "Sname": "SAKSHAM KASHYAP",
            "Fname": "RAMKISHAN KASHYAP"
        },
        {
            "Sno": "89",
            "Roll No": "4089",
            "Sname": "SAKSHI",
            "Fname": "RAJNISH KUMAR"
        },
        {
            "Sno": "90",
            "Roll No": "4090",
            "Sname": "SANTOSH",
            "Fname": "GAGAN SINGH"
        },
        {
            "Sno": "91",
            "Roll No": "4091",
            "Sname": "SARFUDEEN",
            "Fname": "MO HASIM"
        },
        {
            "Sno": "92",
            "Roll No": "4092",
            "Sname": "SAURABH KUMAR SINGH",
            "Fname": "PREM PRAKASH SINGH"
        },
        {
            "Sno": "93",
            "Roll No": "4093",
            "Sname": "SHIVAM VERMA",
            "Fname": "SACHIN VERMA"
        },
        {
            "Sno": "94",
            "Roll No": "4094",
            "Sname": "SHIVANG",
            "Fname": "PARMOD KUMAR"
        },
        {
            "Sno": "95",
            "Roll No": "4095 ",
            "Sname": "SHIVANI ",
            "Fname": "RAKESH KUMAR "
        },
        {
            "Sno": "96",
            "Roll No": "Null",
            "Sname": "Null",
            "Fname": "Null"
        },
        {
            "Sno": "97",
            "Roll No": "4097 ",
            "Sname": "SHUBHAM DEVGAN",
            "Fname": " AKHILESH DEVGAN"
        },
        {
            "Sno": "98",
            "Roll No": "4098 ",
            "Sname": "SHUBHAM NEGI",
            "Fname": "PURAN SINGH NEGI"
        },
        {
            "Sno": "99",
            "Roll No": "4099",
            "Sname": "SIMRAN YADAV",
            "Fname": "GOVIND SINGH YADAV "
        },
        {
            "Sno": "100",
            "Roll No": "4100",
            "Sname": "SONALI",
            "Fname": "LATE DADAN SINGh "
        },



        {
            "Sno": "101",
            "Roll No": "4101",
            "Sname": "SOURAV",
            "Fname": "KAMAL KISHORE"
        },
        {
            "Sno": "102",
            "Roll No": "4102",
            "Sname": "SUNNY RAWAT",
            "Fname": "DAYANAND"
        },
        {
            "Sno": "103",
            "Roll No": "4103",
            "Sname": "SURAJ KUMAR",
            "Fname": "ANIL KUMAR"
        },
        {
            "Sno": "104",
            "Roll No": "4104",
            "Sname": "SURJEET",
            "Fname": "HAR PRASAD"
        },
        {
            "Sno": "105",
            "Roll No": "Null",
            "Sname": "Null",
            "Fname": "Null"
        },
        {
            "Sno": "106",
            "Roll No": "4106",
            "Sname": "TANNU",
            "Fname": "DHARMENDER SINGH"
        },
        {
            "Sno": "107",
            "Roll No": "4107",
            "Sname": "TANUJ",
            "Fname": "AMARSINGH"
        },
        {
            "Sno": "108",
            "Roll No": "4108",
            "Sname": "TARUN PARASHAR",
            "Fname": "RAJU PARASHAR"
        },
        {
            "Sno": "109",
            "Roll No": "4109",
            "Sname": "TUSHAR",
            "Fname": "MAHESH CHAND"
        },
        {
            "Sno": "110",
            "Roll No": "4110",
            "Sname": "VAISHALI SHARMA",
            "Fname": "DEEPAK SHARMA"
        },
        {
            "Sno": "111",
            "Roll No": "4111",
            "Sname": "VEER VIJAY SINGH",
            "Fname": "SUBHASH CHANDRA"
        },
        {
            "Sno": "112",
            "Roll No": "4112",
            "Sname": "VIKAS SHARMA",
            "Fname": "PREM SHANKER"
        },
        {
            "Sno": "113",
            "Roll No": "4113",
            "Sname": "VISHAL YADAV",
            "Fname": "ANOOP KUMAR"
        },
        {
            "Sno": "114",
            "Roll No": "4114",
            "Sname": "VISHNU VASHISHTH",
            "Fname": "ASHOK"
        },
        {
            "Sno": "115",
            "Roll No": "4115",
            "Sname": "VIVEK CHAUHAN",
            "Fname": "RAMESH CHAND"
        },
        {
            "Sno": "116",
            "Roll No": "4116",
            "Sname": "VIVEK MISHRA",
            "Fname": "SUNIL KUMAR MISHRA"
        },
        {
            "Sno": "117",
            "Roll No": "4117",
            "Sname": "YASH PACHAURI",
            "Fname": "DARVESH KUMAR"
        },
        {
            "Sno": "118",
            "Roll No": "4118",
            "Sname": "YASH SHARMA",
            "Fname": "DIVESH SHARMA"
        },
        {
            "Sno": "119",
            "Roll No": "4119",
            "Sname": "YASH SINGH KARAKOTI",
            "Fname": "JAGDISH SINGH"
        },
        {
            "Sno": "120",
            "Roll No": "4120",
            "Sname": "YOGESH",
            "Fname": "JILE SINGH"
        },
        {
            "Sno": "52",
            "Roll No": "CSE-21(L)\/001_",
            "Sname": "CHAITANYA KAIBARTA",
            "Fname": "BABLOO KAIBARTA"
        },
        {
            "Sno": "53",
            "Roll No": "CSE-21(L)\/002.",
            "Sname": "GANESH KUMAR",
            "Fname": "GULAB RAM"
        },
        {
            "Sno": "54",
            "Roll No": "CSE-21(L)\/003",
            "Sname": "KALPNA PANDEY",
            "Fname": "ARUN KUMAR PANDEY"
        },
        {
            "Sno": "55",
            "Roll No": "CSE-21(L)\/004.",
            "Sname": "MANISH",
            "Fname": "SUDHIR KUMAR"
        },
        {
            "Sno": "56",
            "Roll No": "CSE-21(L)\/005",
            "Sname": "MAYUR",
            "Fname": "DHARMENDER KAINTH"
        },
        {
            "Sno": "97",
            "Roll No": "CSE-21(L)\/006",
            "Sname": "PUSHPENDER SINGH",
            "Fname": "DEVENDER SINGH"
        },
        {
            "Sno": "98",
            "Roll No": "CSE-21(L)\/007_",
            "Sname": "[RAHUL",
            "Fname": "KARMA"
        },
        {
            "Sno": "59",
            "Roll No": "CSE-21(L)\/008",
            "Sname": "{RAHUL",
            "Fname": "HANS RAJ"
        },
        {
            "Sno": "60",
            "Roll No": "CSE-21(L)\/009",
            "Sname": "SHRYAA",
            "Fname": "PRAMOD KUMAR"
        },
        {
            "Sno": "61",
            "Roll No": "CSE-21(L)\/010",
            "Sname": "SHUBHAM",
            "Fname": "SATISH KUMAR"
        },
        {
            "Sno": "62",
            "Roll No": "CSE-21(L)\/011",
            "Sname": "SONI KUMARI",
            "Fname": "AMLESH KUMARI"
        },
        {
            "Sno": "63",
            "Roll No": "CSE-21(L)\/012",
            "Sname": "VIDHI",
            "Fname": "MAHESH SINGH"
        },
        {
            "Sno": "64",
            "Roll No": "CSE-21(L)\/013",
            "Sname": "YASH KUMAR",
            "Fname": "SUSHIL KUMAR"
        }
    ]




    return (
        <>
            <div className='form1'>
                <form 
                className='form5'
                    // method="post"
                    // action="/result"
                    id="form1"
                    // style={{ position: "relative", marginLeft: 300, marginRight: 210 }}
                >
                    <div className="aspNetHidden">
                        <input
                            type="hidden"
                            name="__VIEWSTATE"
                            id="__VIEWSTATE"
                            defaultValue="/wEPDwUJOTk0Nzk4ODg3D2QWAgIDD2QWAgIPDzwrABECARAWABYAFgAMFCsAAGQYAQUIZ3ZSZXN1bHQPZ2RRzBPzGVzjMXphAhHp2IyM2TqqQZq2LRMfwhacaVrT+w=="
                        />
                    </div>
                    <div className="aspNetHidden">
                        <input
                            type="hidden"
                            name="__VIEWSTATEGENERATOR"
                            id="__VIEWSTATEGENERATOR"
                            defaultValue="1B3FDA92"
                        />
                        <input
                            type="hidden"
                            name="__EVENTVALIDATION"
                            id="__EVENTVALIDATION"
                            defaultValue="/wEdAAwdM6kJpyXy6tIPNfqg2MikWB/t8XsfPbhKtaDxBSD9L0L3vCrUf6dClr8hUZ8VK+dmq49Iq17HcAK72c3/qYJC4efD0czLtBzCgdNCxdJrXXfTl3lojC6GZpStxRhSleQdRgGj+eSfpqun74X6HYVOGaY4EKuZNdOC597OcYFB3/c3NB5nrW6pX5viR2xal9qGJXqDLNRl6Mpw+bZRc3LrwbR9LtIVRZpwDO1YK6L4Gy+/yJEA4EQNtbaAJJ0rSlVX6ArBcEWnZnNshVmvvBYiZAPU+H0iR2jFfU2Rhq/4cQ=="
                        />
                    </div>
                    <div className="box box-primary">
                        <div className="box-body">
                            <div className="row">
                                <div className="col-lg-12" />
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <span id="lblRollNo1">Roll No</span>
                                </div>
                                <div className="col-lg-3">
                                    <input
                                        name="txtRollNo"
                                        type="text"
                                        maxLength={11}
                                        id="txtRollNo"
                                        className="form-control"
                                        value={rollNo}
                                        onChange={(e) => { setRollNo(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <span id="lblSemesterId">Semester</span>
                                </div>
                                <div className="col-lg-3">
                                    <select name="ddlSem" id="ddlSem" className="form-control">
                                        <option value={0}>&lt;--Select--&gt;</option>
                                        <option value={1}>First Semester</option>
                                        <option value={2}>Second Semester</option>
                                        <option value={3}>Third Semester</option>
                                        <option value={4}>Fourth Semester</option>
                                        <option value={5}>Fifth Semester</option>
                                        <option value={6}>Sixth Semester</option>
                                        <option value={7}>Seventh Semester</option>
                                        <option value={8}>Eigth Semester</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    <span id="lblMessage" style={{ color: "Red" }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">

                                    <Link to={{pathname:`/result/${rollNo}`,state:`${rollNo}`}} >
                                        <input
                                            type="submit"
                                            name="btnResult"

                                            id="btnResult"
                                            className="btn"
                                            style={{ width: 100, height: 37, fontSize: 15 }}
                                            onClick={(e) => {
                                                // e.preventDefault();
                                                var rollNoIndex = Number(rollNo.slice(-3));
                                                // setSname (Data[rollNoIndex].Sname);
                                                // setFname (Data[rollNoIndex].Fname);
                                                //    console.log("Hello");
                                                // console.log(rollNoIndex, rollNo);
                                            }}
                                        />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title" />
                        </div>
                        <div className="box-body">
                            <div />
                            <span id="lblSGPA" style={{ fontWeight: "bold" }} />
                        </div>
                    </div>
                    <div className="box box-primary">
                        <div className="box-body">
                            <div className="row">
                                <div className="col-lg-6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <b className="yep">
                                        **The Results displayed here are subject to updation/correction.
                                        The final result will be on DMC.
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>



            {/* <Result rollNo={rollNo} Sname = {Sname} Fname= {Fname}/> */}



        </>
    )
}

export default Main