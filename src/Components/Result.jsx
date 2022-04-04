import React from 'react'
import Main from './Main'
import { Route,Switch } from 'react-router-dom'
import { useLocation,useParams } from "react-router-dom"
const Result = () => {
    const { state } = useParams();
 const location = useLocation();
    
    console.log(location)
    const Roll = Number(location.pathname.slice(-11));
    const rollNoIs =Number(location.pathname.slice(-3));
    var Data = [
        
        {
        "Sno": "0",
        "Roll No": "4000",
        "Sname": "null",
        "Fname": "null",
        "S1":  "null"    ,
        "S2":  "null"    ,
        "S3":  "null"    ,
        "S4":   "null"   ,
        "S5":    "null"  ,
        "grade":"null",
        "Fsub":  "null"
       },{
          "Sno": "1",
          "Roll No": "4001",
          "Sname": "ABHIJIT MAITY",
          "Fname": "DHARNI DHAR MAITY",
          "S1":  "16"    ,
          "S2":  "5"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "8"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
            "Sno": "2",
            "Roll No": "Null",
            "Sname": "Null",
            "Fname": "Null",
            "grade":"F",
      
            "Fsub":  "R-BSC-301 "    
           },
         {
          "Sno": "3",
          "Roll No": "4003",
          "Sname": "AKASH YADAV",
          "Fname": "ASHOK KUMAR",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19" ,
          "grade":"B-",
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "4",
          "Roll No": "4004",
          "Sname": "ALOK MISHRA",
          "Fname": "PARMANAND MISHRA",
          "S1":    "14"  ,
          "S2":    "6"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "7" ,
           "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "5",
          "Roll No": "4005",
          "Sname": "AMAN",
          "Fname": "PRAMOD",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "22" ,
          "grade":"B-",
          "Fsub":  "R-BSC-301 " 
         },
         {
          "Sno": "6",
          "Roll No": "4006",
          "Sname": "AMANDEEP SINGH",
          "Fname": "AMARJEET SINGH",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19" ,
          "grade":"F",
         "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "7",
          "Roll No": "4007",
          "Sname": "AMIT SAHU",
          "Fname": "GANGA DAYAL",
          "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "6"   ,
          "grade":"F",
         "Fsub":  "R-BSC-301 R-ESC-302"    
         },
         {
          "Sno": "8",
          "Roll No": "4008",
          "Sname": "AMITOSH SINGH",
          "Fname": "PARVESH SINGH",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19",
          "grade":"A-",
      
          "Fsub":  "R-BSC-301 " 
         },
         {
          "Sno": "9",
          "Roll No": "4009",
          "Sname": "ANISH KUMAR PANDEY",
          "Fname": "MANOJ PANDEY",
          "S1":    "14"  ,
          "S2":    "4"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "3"   ,
          "grade":"F",
         "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "10",
          "Roll No": "4010",
          "Sname": "ANITA",
          "Fname": "KRIPAL SINGH RAWAT",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "6"  ,
          "grade":"F",
         "Fsub":  "R-BSC-301 R-ESC-302"  
         },
         {
          "Sno": "11",
          "Roll No": "4011",
          "Sname": "ANKIT",
          "Fname": "UDAYVEER YADAV",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "2" ,
          "grade":"F",
         "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "12",
          "Roll No": "4012",
          "Sname": "ANKIT",
          "Fname": "LATE PAWAN",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "14"  ,
          "grade":"B",
         "Fsub":  "R-BSC-301 " 
         },
         {
          "Sno": "13",
          "Roll No": "4013",
          "Sname": "ANKIT KUMAR",
          "Fname": "KRISHAN MOHAN CHOUDHARY",
          "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "9"  ,
          "grade":"F",
         "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "14",
          "Roll No": "4014",
          "Sname": "ARCHIT DHYANI",
          "Fname": "HARI PRASAD DHYANI",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "15",
          "Roll No": "4015",
          "Sname": "ARSHDEEP SINGH",
          "Fname": "KRISHAN SINGH",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "20" ,
          
          "grade":"B+",
          "Fsub":  "R-BSC-301 " 
         },
         {
          "Sno": "16",
          "Roll No": "4016",
          "Sname": "ARUN",
          "Fname": "MANOJ SHARMA",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "4",
          "grade":"F",
         "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "17",
          "Roll No": "4017",
          "Sname": "ASHISH",
          "Fname": "MOHAN",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "22",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "18",
          "Roll No": "4018",
          "Sname": "ASHISH KUMAR",
          "Fname": "SADANAND",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4" ,
           "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "19",
          "Roll No": "4019",
          "Sname": "AVANTIKA CHOPRA",
          "Fname": "DEVENDER CHOPRA",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "5",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"   
         },
         {
          "Sno": "20",
          "Roll No": "4020",
          "Sname": "AVIJIT DUTTA",
          "Fname": "SHANTI DUTTA",
          "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "3",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"    
         },
         {
          "Sno": "21",
          "Roll No": "4021",
          "Sname": "CHETAN",
          "Fname": "OM PRAKASH",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "  
         },
         {
          "Sno": "22",
          "Roll No": "4022",
          "Sname": "DAKSH",
          "Fname": "MATOL SINGH",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "8"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "23",
          "Roll No": "4023",
          "Sname": "DEEPAK VASHISTH",
          "Fname": "PARKASH VASHISTH",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "22",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "24",
          "Roll No": "4024",
          "Sname": "DEEPANSHU",
          "Fname": "HARKESH VERMA",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "25",
          "Roll No": "4025",
          "Sname": "DEEPANSHU KUSHWAHA",
          "Fname": "BRIJESH KUSHWAHA",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "26",
          "Roll No": "4026",
          "Sname": "DEV MATHUR",
          "Fname": "ARJUN SINGH",
          "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23" ,
          "grade":"A+",
          "Fsub":  "R-BSC-301 " 
         },
         {
          "Sno": "27",
          "Roll No": "4027",
          "Sname": "DHANANJAY",
          "Fname": "JITENDER KUMAR",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"    
         },
         {
          "Sno": "28",
          "Roll No": "4028",
          "Sname": "DIKSHIT SINGH",
          "Fname": "JAINDER SINGH",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "20" ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 " 
         },
         {
          "Sno": "29",
          "Roll No": "4029",
          "Sname": "DINESH",
          "Fname": "BHARAT PAL",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "22",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "30",
          "Roll No": "4030",
          "Sname": "DIVYA",
          "Fname": "PARKASH CHAND",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "15",
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "31",
          "Roll No": "4031",
          "Sname": "FIROZ KHAN",
          "Fname": "RAJESH",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "32",
          "Roll No": "4032",
          "Sname": "GOURAV KUMAR",
          "Fname": "BHARAT SINGH",
          "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "3",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"  
         },
         {
          "Sno": "33",
          "Roll No": "4033",
          "Sname": "HARSH",
          "Fname": "BRAHAM PRAKASH",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "    
         },
         
         {
          "Sno": "34",
          "Roll No": "4034",
          "Sname": "HARSH RAWAT",
          "Fname": "SAMAY SINGH RAWAT",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "20" ,
           "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "35",
          "Roll No": "4035",
          "Sname": "HARSH SHRIVASTAVA",
          "Fname": "RANJAN SHRIVASTAVA",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "2",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "36",
          "Roll No": "4036",
          "Sname": "HASAN AKHTAR",
          "Fname": "RAFIQUE SYEDAIN RIZVI",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "37",
          "Roll No": "4037",
          "Sname": "HEMANT",
          "Fname": "TEKCHAND",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
          
         {
            "Sno": "38",
            "Roll No": "Null",
            "Sname": "Null",
            "Fname": "Null",
            "grade":"F",
            "Fsub":  "R-BSC-301 R-ESC-302"
           },
         {
          "Sno": "39",
          "Roll No": "4039",
          "Sname": "KAMLESH",
          "Fname": "JAIVIR",
         "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23" ,
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 " 
         },
         {
          "Sno": "40",
          "Roll No": "4040",
          "Sname": "KARAN KUMAR",
          "Fname": "SHYAM SUNDER KUMAR",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19" ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "41",
          "Roll No": "4041",
          "Sname": "KARTIK",
          "Fname": "SURESH KUMAR",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "2" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "42",
          "Roll No": "4042",
          "Sname": "KOMAL",
          "Fname": "MUKESH KUMAR",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "5",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "43",
          "Roll No": "4043",
          "Sname": "KRISHAN KANT",
          "Fname": "JAWAHAR LAL",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "44",
          "Roll No": "4044",
          "Sname": "KRISHAN KUMAR SHARMA",
          "Fname": "LT. HARPARSAD SHARMA",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "45",
          "Roll No": "4045",
          "Sname": "KULJEET SINGH",
          "Fname": "RANVEER SINGH",
         "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "3"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "46",
          "Roll No": "4046",
          "Sname": "KUNAL",
          "Fname": "RAJENDRA",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "47",
          "Roll No": "4047",
          "Sname": "KUNWAR JYOTIRADITYA SINGH",
          "Fname": "YUGPAL SINGH",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "20"  ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "48",
          "Roll No": "4048",
          "Sname": "KUSHAGRA GOBHIL",
          "Fname": "MANU GOBHIL",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "22",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "49",
          "Roll No": "4049",
          "Sname": "MADHU GUPTA",
          "Fname": "MUKESH KUMAR GUPTA",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "5",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "50",
          "Roll No": "4050",
          "Sname": "MANAS KANDPAL",
          "Fname": "SURESH CHANDRA KANDPAL",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"  
         },
         {
          "Sno": "51",
          "Roll No": "4051",
          "Sname": "MANISH PATEL",
          "Fname": "ANIL SINGH",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "20"  ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "52",
          "Roll No": "4052",
          "Sname": "MANISH YADUVANSHI",
          "Fname": "OMPAL SINGH",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "3" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "53",
          "Roll No": "4053",
          "Sname": "MANSI",
          "Fname": "KAILASH CHAND",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19" ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "54",
          "Roll No": "4054",
          "Sname": "MD NASIR ARAFAT",
          "Fname": "MD AZMAT ALI",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "55",
          "Roll No": "4055",
          "Sname": "MEGH BORA",
          "Fname": "NANDAN SINGH BORA",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "22",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "56",
          "Roll No": "4056",
          "Sname": "MEGHA",
          "Fname": "VINOD",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "57",
          "Roll No": "4057",
          "Sname": "MINI BHATI",
          "Fname": "VIRENDRA BHATI",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "58",
          "Roll No": "4058",
          "Sname": "MOHIT SHUKLA",
          "Fname": "KAILASH KUMAR SHUKLA",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23" ,
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 " 
         },
         {
          "Sno": "59",
          "Roll No": "4059",
          "Sname": "MOHIT SINGH RAWAT",
          "Fname": "SHIVENDER SINGH",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "60",
          "Roll No": "4060",
          "Sname": "MUSKAN CHAUHAN",
          "Fname": "RAJPAL CHAUHAN",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "3",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"  
         },
         {
          "Sno": "61",
          "Roll No": "4061",
          "Sname": "NAMRATA GULATI",
          "Fname": "KAPIL GULATI",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "8",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "62",
          "Roll No": "4062",
          "Sname": "NARESH",
          "Fname": "DALCHAND",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
         {
          "Sno": "63",
          "Roll No": "4063",
          "Sname": "NAVDEEP SINGH",
          "Fname": "BIKAR SINGH",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "3" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
         {
          "Sno": "64",
          "Roll No": "4064",
          "Sname": "NEERAJ SINGH",
          "Fname": "SHIV KUMAR SINGH",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "  
         },
         {
          "Sno": "65",
          "Roll No": "4065",
          "Sname": "NIKHIL",
          "Fname": "UDAY SHANKAR",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19" ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
         },
         {
          "Sno": "66",
          "Roll No": "4066",
          "Sname": "NISHANT VERMA",
          "Fname": "SANJAY VERMA",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "5" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
         },
       {
        "Sno": "67",
        "Roll No": "4067",
        "Sname": "NITIN SINGH",
        "Fname": "LALIT MOHAN SINGH",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "2",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "68",
        "Roll No": "4068",
        "Sname": "NITISH KUMAR",
        "Fname": "SHANKAR YADAV",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19",
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "69",
        "Roll No": "4069",
        "Sname": "PANKAJ",
        "Fname": "OM SWARUP",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"  
       },
       {
        "Sno": "70",
        "Roll No": "4070",
        "Sname": "PAWAN SAGAR",
        "Fname": "SUBHASH CHAND",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "AB"   ,
          "S5":    "21",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "  
       },
       {
        "Sno": "71",
        "Roll No": "4071",
        "Sname": "POOJA SINGH",
        "Fname": "SANJAY SINGH",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "72",
        "Roll No": "4072",
        "Sname": "PRACHI SHARMA",
        "Fname": "BINESH",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "5"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "73",
        "Roll No": "4073",
        "Sname": "PRAVEEN PARMAR",
        "Fname": "OM PRAKASH SINGH",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "8",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "74",
        "Roll No": "4074",
        "Sname": "PRIYA BARNWAL",
        "Fname": "SHIV KUMAR BARNWAL",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19",
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "75",
        "Roll No": "4075",
        "Sname": "PRIYAG",
        "Fname": "BIJENDRA KUMAR",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23" ,
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 " 
       },
       {
        "Sno": "76",
        "Roll No": "4076",
        "Sname": "RACHIT MUNDAPI",
        "Fname": "KRISHAN KUMAR",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
       },
       {
        "Sno": "77",
        "Roll No": "4077",
        "Sname": "RAHUL",
        "Fname": "NAND KISHORE",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "2" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
       },
       {
        "Sno": "78",
        "Roll No": "4078",
        "Sname": "RAHUL",
        "Fname": "LATE ASHOK KUMAR",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "2",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "79",
        "Roll No": "4079",
        "Sname": "RASHMI KUMARI",
        "Fname": "RAJESH KUMAR",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19",
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "80",
        "Roll No": "4080",
        "Sname": "RAVI",
        "Fname": "SANJAY KUMAR",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "3" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
       },
        {
          "Sno": "81",
          "Roll No": "4081",
          "Sname": "none",
          "Fname": "none",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
         },
       {
        "Sno": "82",
        "Roll No": "4082",
        "Sname": "RHYTHM PANDEY",
        "Fname": "SURENDER KUMAR PANDEY",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "83",
        "Roll No": "4083",
        "Sname": "RISHABH BILWAL",
        "Fname": "SUNIL SINGH",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "20"  ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "84",
        "Roll No": "4084",
        "Sname": "ROHIL KHAN",
        "Fname": "HAKAMDEEN",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "22",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "85",
        "Roll No": "4085",
        "Sname": "ROSHAN",
        "Fname": "SATIRAM",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "86",
        "Roll No": "4086",
        "Sname": "ROSHAN KUMAR",
        "Fname": "DINESH PRASAD",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"  
       },
       {
        "Sno": "87",
        "Roll No": "4087",
        "Sname": "SACHI MITTAL",
        "Fname": "DINESH MITTAL",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23" ,
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 " 
       },
       {
        "Sno": "88",
        "Roll No": "4088",
        "Sname": "SAKSHAM KASHYAP",
        "Fname": "RAMKISHAN KASHYAP",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "22" ,
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "89",
        "Roll No": "4089",
        "Sname": "SAKSHI",
        "Fname": "RAJNISH KUMAR",
          "S1":    "19"  ,
          "S2":    "20"  ,
          "S3":   "21"   ,
          "S4":   "20"   ,
          "S5":   "22"  ,
          "grade":"A+",
        
          "Fsub":  " "
       },
       {
        "Sno": "90",
        "Roll No": "4090",
        "Sname": "SANTOSH",
        "Fname": "GAGAN SINGH",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "2",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "91",
        "Roll No": "4091",
        "Sname": "SARFUDEEN",
        "Fname": "MO HASIM",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "92",
        "Roll No": "4092",
        "Sname": "SAURABH KUMAR SINGH",
        "Fname": "PREM PRAKASH SINGH",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "14"  ,
          "grade":"B-",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "93",
        "Roll No": "4093",
        "Sname": "SHIVAM VERMA",
        "Fname": "SACHIN VERMA",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "3",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"  
       },
       {
        "Sno": "94",
        "Roll No": "4094",
        "Sname": "SHIVANG",
        "Fname": "PARMOD KUMAR",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302" 
       },
       {
        "Sno": "95",
        "Roll No": "4095 ",
        "Sname": "SHIVANI ",
        "Fname": "RAKESH KUMAR ",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "2"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "96",
        "Roll No": "Null",
        "Sname": "Null",
        "Fname": "Null",
        "grade":"F",
        "Fsub":  "R-BSC-301 R-ESC-302"
        
       },
       {
        "Sno": "97",
        "Roll No": "4097 ",
        "Sname": "SHUBHAM DEVGAN",
        "Fname": " AKHILESH DEVGAN",
         "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "2",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "98",
        "Roll No": "4098 ",
        "Sname": "SHUBHAM NEGI",
        "Fname": "PURAN SINGH NEGI",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "99",
        "Roll No": "4099",
        "Sname": "SIMRAN YADAV",
        "Fname": "GOVIND SINGH YADAV ",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "14" ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 " 
       },
       {
        "Sno": "100",
        "Roll No": "4100",
        "Sname": "SONALI",
        "Fname": "LATE DADAN SINGh ",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "3"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       
       
      
       {
        "Sno": "101",
        "Roll No": "4101",
        "Sname": "SOURAV",
        "Fname": "KAMAL KISHORE",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "5" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "102",
        "Roll No": "4102",
        "Sname": "SUNNY RAWAT",
        "Fname": "DAYANAND",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "2"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "103",
        "Roll No": "4103",
        "Sname": "SURAJ KUMAR",
        "Fname": "ANIL KUMAR",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "104",
        "Roll No": "4104",
        "Sname": "SURJEET",
        "Fname": "HAR PRASAD",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "2",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "105",
        "Roll No": "4105",
        "Sname": " null",
        "Fname": " null",
          "S1":  "null"    ,
          "S2":  "null"    ,
          "S3":  "null"    ,
          "S4":  "null"    ,
          "S5":   " null",
          "grade":" null",
          "Fsub":  "null"
       },
       {
        "Sno": "106",
        "Roll No": "4106",
        "Sname": "TANNU",
        "Fname": "DHARMENDER SINGH",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "14"  ,
          "grade":"B-",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "107",
        "Roll No": "4107",
        "Sname": "TANUJ",
        "Fname": "AMARSINGH",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "5",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"  
       },
       {
        "Sno": "108",
        "Roll No": "4108",
        "Sname": "TARUN PARASHAR",
        "Fname": "RAJU PARASHAR",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "2" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "109",
        "Roll No": "4109",
        "Sname": "TUSHAR",
        "Fname": "MAHESH CHAND",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "7"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "110",
        "Roll No": "4110",
        "Sname": "VAISHALI SHARMA",
        "Fname": "DEEPAK SHARMA",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "8",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "111",
        "Roll No": "4111",
        "Sname": "VEER VIJAY SINGH",
        "Fname": "SUBHASH CHANDRA",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "9",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "112",
        "Roll No": "4112",
        "Sname": "VIKAS SHARMA",
        "Fname": "PREM SHANKER",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "4"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "113",
        "Roll No": "4113",
        "Sname": "VISHAL YADAV",
        "Fname": "ANOOP KUMAR",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23",
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "  
       },
       {
        "Sno": "114",
        "Roll No": "4114",
        "Sname": "VISHNU VASHISHTH",
        "Fname": "ASHOK",
          "S1":  "19"    ,
          "S2":   "9"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "22" ,
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "115",
        "Roll No": "4115",
        "Sname": "VIVEK CHAUHAN",
        "Fname": "RAMESH CHAND",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "6"  ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "116",
        "Roll No": "4116",
        "Sname": "VIVEK MISHRA",
        "Fname": "SUNIL KUMAR MISHRA",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "5",
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "117",
        "Roll No": "4117",
        "Sname": "YASH PACHAURI",
        "Fname": "DARVESH KUMAR",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19",
          "grade":"B-",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "118",
        "Roll No": "4118",
        "Sname": "YASH SHARMA",
        "Fname": "DIVESH SHARMA",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "20"  ,
          "grade":"B+",
        
          "Fsub":  "R-BSC-301 "
       },
       {
        "Sno": "119",
        "Roll No": "4119",
        "Sname": "YASH SINGH KARAKOTI",
        "Fname": "JAGDISH SINGH",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23" ,
          "grade":"A+",
        
          "Fsub":  "R-BSC-301 " 
       },
       {
        "Sno": "120",
        "Roll No": "4120",
        "Sname": "YOGESH",
        "Fname": "JILE SINGH",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "9" ,
          "grade":"F",
          "Fsub":  "R-BSC-301 R-ESC-302"
       },
       {
        "Sno": "52",
        "Roll No": "CSE-21(L)\/001_",
        "Sname": "CHAITANYA KAIBARTA",
        "Fname": "BABLOO KAIBARTA",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "20"  
       },
       {
        "Sno": "53",
        "Roll No": "CSE-21(L)\/002.",
        "Sname": "GANESH KUMAR",
        "Fname": "GULAB RAM",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "22"
       },
       {
        "Sno": "54",
        "Roll No": "CSE-21(L)\/003",
        "Sname": "KALPNA PANDEY",
        "Fname": "ARUN KUMAR PANDEY",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19"
       },
       {
        "Sno": "55",
        "Roll No": "CSE-21(L)\/004.",
        "Sname": "MANISH",
        "Fname": "SUDHIR KUMAR",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "14"  
       },
       {
        "Sno": "56",
        "Roll No": "CSE-21(L)\/005",
        "Sname": "MAYUR",
        "Fname": "DHARMENDER KAINTH",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23"  
       },
       {
        "Sno": "97",
        "Roll No": "CSE-21(L)\/006",
        "Sname": "PUSHPENDER SINGH",
        "Fname": "DEVENDER SINGH",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19" 
       },
       {
        "Sno": "98",
        "Roll No": "CSE-21(L)\/007_",
        "Sname": "[RAHUL",
        "Fname": "KARMA",
          "S1":    "14"  ,
          "S2":    "9"  ,
          "S3":   "21"   ,
          "S4":   "15"   ,
          "S5":   "20"  
       },
       {
        "Sno": "59",
        "Roll No": "CSE-21(L)\/008",
        "Sname": "{RAHUL",
        "Fname": "HANS RAJ",
          "S1":  "21"    ,
          "S2":  "5"    ,
          "S3":   "13"   ,
          "S4":   "16"   ,
          "S5":    "22"
       },
       {
        "Sno": "60",
        "Roll No": "CSE-21(L)\/009",
        "Sname": "SHRYAA",
        "Fname": "PRAMOD KUMAR",
          "S1":  "15"    ,
          "S2":  "3"    ,
          "S3":  "11"    ,
          "S4":  "16"    ,
          "S5":   "19"
       },
       {
        "Sno": "61",
        "Roll No": "CSE-21(L)\/010",
        "Sname": "SHUBHAM",
        "Fname": "SATISH KUMAR",
          "S1":  "24"    ,
          "S2":   "7"   ,
          "S3":   "21"   ,
          "S4":   "18"   ,
          "S5":    "14"  
       },
       {
        "Sno": "62",
        "Roll No": "CSE-21(L)\/011",
        "Sname": "SONI KUMARI",
        "Fname": "AMLESH KUMARI",
      "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23"  
       },
       {
        "Sno": "63",
        "Roll No": "CSE-21(L)\/012",
        "Sname": "VIDHI",
        "Fname": "MAHESH SINGH",
          "S1":  "19"    ,
          "S2":   "6"   ,
          "S3":   "24"   ,
          "S4":    "16"  ,
          "S5":     "19" 
       },
       {
        "Sno": "64",
        "Roll No": "CSE-21(L)\/013",
        "Sname": "YASH KUMAR",
        "Fname": "SUSHIL KUMAR",
         "S1":  "16"    ,
          "S2":  "8"    ,
          "S3":  "17"    ,
          "S4":   "21"   ,
          "S5":    "23"  
       }
      ]

    var {Sno,Sname,Fname,S1,S2,S3,S4,S5,grade,Fsub} = Data[rollNoIs];
    console.log(Sno);
    
    return (
        <>
  <div className="form2">
            <form method="post" action="./PrintReportCardNew.aspx" id="form1">
                <div className="aspNetHidden">
                    <input
                        type="hidden"
                        name="__VIEWSTATE"
                        id="__VIEWSTATE"
                        defaultValue="/wEPDwUKMTA2MTc3MTU5NA9kFgICAw9kFhwCBQ8PFgIeBFRleHQFCTIwMTIyMzQwMGRkAgcPDxYCHwAFDzIwLVNESUVULTAwNDAxOWRkAgkPDxYCHwAFCzIwMDIwMDA0MDE5ZGQCCw8PFgIfAAUWQkFDSEVMT1IgT0YgVEVDSE5PTE9HWWRkAg0PDxYCHwAFHkNvbXB1dGVyIFNjaWVuY2UgJiBFbmdpbmVlcmluZ2RkAg8PDxYCHwAFK0ZpcnN0IFNlbWVzdGVyIEV4YW1pbmF0aW9uIC0gRGVjZW1iZXIsIDIwMjBkZAIRDw8WAh8ABQ9BVkFOVElLQSBDSE9QUkFkZAITDw8WAh8ABQxKWU9USSBDSE9QUkFkZAIVDw8WAh8ABQ9ERVZFTkRFUiBDSE9QUkFkZAIXDxYCHgtfIUl0ZW1Db3VudAIIFhACAQ9kFgJmDxULATEHQlNDLTEwMglDaGVtaXN0cnkBNAI3NQIyNQJOQQIzNwIyMQACQiBkAgIPZBYCZg8VCwEyCEJTQy0xMDNFLE1hdGhlbWF0aWNzLUkgKENhbGN1bHVzIGFuZCBMaW5lYXIgIEFsZ2VicmEpATQCNzUCMjUCTkEBOQIxNgACRiBkAgMPZBYCZg8VCwEzB0JTQy0xMDUNQ2hlbWlzdHJ5IExhYgMxLjUCTkECMTUCMzUCTkECMTICMjgCQStkAgQPZBYCZg8VCwE0CUVTQy0xMDEtQRtCYXNpYyBFbGVjdHJpY2FsIFRlY2hub2xvZ3kBNAI3NQIyNQJOQQI0NgIxNgACQitkAgUPZBYCZg8VCwE1B0VTQy0xMDQLV29ya3Nob3AtIEkBMgJOQQIzMAI3MAJOQQIyMwI0MQJCK2QCBg9kFgJmDxULATYJRVNDLTEwNy1BH0Jhc2ljIEVsZWN0cmljYWwgVGVjaG5vbG9neSBMYWIBMQJOQQIxNQIzNQJOQQIxMAIyMAJCK2QCBw9kFgJmDxULATcISFNNQy0xMDEHRW5nbGlzaAEyAjc1AjI1Ak5BAjU0AjEwAAJCK2QCCA9kFgJmDxULATgISFNNQy0xMDILRW5nbGlzaCBMYWIBMQJOQQIxNQIzNQJOQQIxMgIzMgJBK2QCGQ8PFgIfAAUGMC8xOS41ZGQCGw8PFgIfAAUKUi1CU0MtMTAzRWRkAh0PDxYCHwBlZGQCHw8PFgIfAAUKMjgtMDUtMjAyMWRkZP15ykcoKJKtv4xR0rAuTmcXMdoTz9XhyeLiB87YUjTl"
                    />
                </div>
                <div className="aspNetHidden">
                    <input
                        type="hidden"
                        name="__VIEWSTATEGENERATOR"
                        id="__VIEWSTATEGENERATOR"
                        defaultValue="803B70FA"
                    />
                </div>
                <table
                    width="90%"
                    border={0}
                    style={{ border: "0px solid black" }}
                    align="center"
                    cellPadding={0}
                    cellSpacing={0}
                >
                    <tbody>
                        <tr>
                            <td align="center">
                                <b>Report Card</b>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <p style={{ fontSize: "1.0em", margin: 0, padding: 0 }}>
                                    <span id="lblUniversityName" style={{ fontSize: "12pt" }}>
                                        J.C. Bose University of Science and Technology YMCA
                                    </span>
                                    <br />
                                    <span id="Label1" style={{ fontSize: "12pt" }}>
                                        Faridabad
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                        <tr>
                                            <td width="100%">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td align="left">
                                                                <table>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="left">
                                                                                <label>
                                                                                    <strong>DMC Number:</strong>
                                                                                </label>
                                                                            </td>
                                                                            <td>
                                                                                <span
                                                                                    id="lblDMCNO"
                                                                                    style={{ fontWeight: "bold" }}
                                                                                >
                                                                                    {5832476}
                                                                                </span>
                                                                            </td>
                                                                            <td>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                                            <td align="center">
                                                                                <label>
                                                                                    <strong>Regn Number:</strong>
                                                                                </label>
                                                                            </td>
                                                                            <td>
                                                                                <span
                                                                                    id="lblRegNo"
                                                                                    style={{ fontWeight: "bold" }}
                                                                                >
                                                                                20-SDIET-{Roll}
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td align="right">
                                                                <table>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <label>
                                                                                    <strong>Roll Number:</strong>
                                                                                </label>
                                                                            </td>
                                                                            <td>
                                                                                <span
                                                                                    id="lblRollNo"
                                                                                    style={{ fontWeight: "bold" }}
                                                                                >
                                                                                    {Roll}
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">RESULT-CUM-DETAILED MARKS CARD</td>
                        </tr>
                        <tr>
                            <td align="center">
                                <span id="lblProgramType" style={{ fontWeight: "bold" }}>
                                    BACHELOR OF TECHNOLOGY
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <span id="lblProgramname" style={{ fontWeight: "bold" }}>
                                    Computer Science &amp; Engineering
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <span id="lblSemesterDetails" style={{ fontWeight: "bold" }}>
                                    Third Semester Examination - February, 2022
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <table border={0} style={{ width: "100%" }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ margin: 0, padding: 0 }}>
                                                <strong>Name:</strong>
                                            </td>
                                            <td align="left">
                                                <span id="lblname"></span>
                                            </td>
                                            <td>
                                                <strong>  {Sname}    </strong>
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span id="lblMotherName">      </span>
                                            </td>
                                            <td>
                                                <strong>Father's Name:</strong>
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span id="lblFatherName">{Fname}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <table
                                    width="100%"
                                    border={1}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    style={{ margin: 0, padding: 0, fontSize: 13 }}
                                >
                                    <tbody>
                                        <tr>
                                            <td align="center">
                                                <strong>Sr.No.</strong>
                                            </td>
                                            <td align="center">
                                                <strong>Course Code with Course Title</strong>
                                            </td>
                                            <td align="center">
                                                <strong>Credits</strong>
                                            </td>
                                            <td align="center">
                                                <strong>Max Marks</strong>
                                            </td>
                                            <td align="center" colSpan={2}>
                                                <strong>Marks/Grade</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">1</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">ESC-301</td>
                                                            <td width="72%">Analog Electronic Circuits</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">3</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>25</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>75</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>NA</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>{S1}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>61</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">B-</td>
                                        </tr>
                                        <tr>
                                            <td align="center">2</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">BSC-301</td>
                                                            <td width="72%">
                                                                Mathematics-III (Calculus and Ordinary Differential
                                                                Equations)
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">3</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>25</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>75</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>NA</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>{S2}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>55</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">F</td>
                                        </tr>
                                        <tr>
                                            <td align="center">3</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">PCC-CS-301</td>
                                                            <td width="72%">Data Structures &amp; Algorithms</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">3</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>25</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>75</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>NA</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>{S3}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>65</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">B+</td>
                                        </tr>
                                        <tr>
                                            <td align="center">4</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">ESC-302</td>
                                                            <td width="72%">Digital Electronics</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">3</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>25</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>75</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>NA</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>{S5}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>57</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">{grade}</td>
                                        </tr>
                                        <tr>
                                            <td align="center">5</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">HSMC-01</td>
                                                            <td width="72%">Effective Technical Communication</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">3</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>25</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>75</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>NA</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>{S4}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>64</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">A</td>
                                        </tr>
                                        <tr>
                                            <td align="center">6</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">PROJ-CS-301</td>
                                                            <td width="72%">Project-I</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">2</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>25</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>75</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>19</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>70</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">A+</td>
                                        </tr>
                                        <tr>
                                            <td align="center">7</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">PCC-CS-302</td>
                                                            <td width="72%">IT Workshop(MATLAB)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">2</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>35</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>31</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">B+</td>
                                        </tr>
                                        <tr>
                                            <td align="center">8</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">ESC-303</td>
                                                            <td width="72%">Analog Electronic Circuits LAB</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">2</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>35</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>32</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">A+</td>
                                        </tr>
                                        <tr>
                                            <td align="center">9</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">ESC-304</td>
                                                            <td width="72%">Digital Electronics LAB</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">2</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>35</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>14</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>34</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">O</td>
                                        </tr>
                                        <tr>
                                            <td align="center">10</td>
                                            <td align="center">
                                                <table width="100%" border={0}>
                                                    <tbody>
                                                        <tr>
                                                            <td width="28%">PCC-CS-303</td>
                                                            <td width="72%">
                                                                Data Structures &amp; Algorithms LAB
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">2</td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={2}
                                                >
                                                    <tbody>
                                                        <tr style={{ border: "0px solid black" }}>
                                                            <td>Theory</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sessional</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Practical</td>
                                                            <td>35</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">
                                                <table
                                                    width="100%"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>29</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="center">C+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="left">
                                <table width="100%" border={0}>
                                    <tbody>
                                        <tr>
                                            <td>Current Point / Credit</td>
                                            <td>
                                                <span id="lblCredit">0/25</span>
                                            </td>
                                            <td>&nbsp;SGPA:</td>
                                            <td align="left">
                                                <span id="lblResult">{Fsub}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;CGPA:</td>
                                            <td align="left">
                                                <span id="lblCgpaResult" />
                                            </td>
                                            <td>Date of Publication on the website :</td>
                                            <td align="left">
                                                <span id="lblDate">28-03-2022</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style={{ fontSize: 12, color: "Red" }}>
                                Disclaimer: This electronically generated information does not have
                                any legal validity.
                                <br />
                                Please set margin none on browser printing box for printing.
                                <br />
                                Note:1. If found any discrepancy in the above particulars, student
                                is directed to report the same in the office for correction within
                                two weeks from date of publication on website. Thereafter, no
                                communication will be entertained and the whole responsibility will
                                be of the student.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            
            </div>



         
        </>
    )
}

export default Result